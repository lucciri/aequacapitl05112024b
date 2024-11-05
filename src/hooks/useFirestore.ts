import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, where, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './useAuth';
import toast from 'react-hot-toast';

// Add this new function to handle user data
export async function updateUserData(userId: string, data: any) {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, data, { merge: true });
    toast.success('Profile updated successfully');
  } catch (error: any) {
    toast.error('Error updating profile');
    throw error;
  }
}

export async function getUserData(userId: string) {
  try {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export function useCollection<T>(collectionName: string, isShared: boolean = false) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const baseQuery = collection(db, collectionName);
    const q = isShared 
      ? query(baseQuery)
      : query(baseQuery, where('userId', '==', user.uid));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const results: T[] = [];
        snapshot.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() } as T);
        });
        setDocuments(results);
        setLoading(false);
        toast.success('Data synchronized with ÆquaCapital');
      },
      (error) => {
        console.error("Error fetching collection:", error);
        setError(error.message);
        setLoading(false);
        toast.error('Error synchronizing data');
      }
    );

    return () => unsubscribe();
  }, [collectionName, user, isShared]);

  const addDocument = async (data: Omit<T, 'id'>) => {
    if (!user) throw new Error('Must be logged in to add documents');

    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        userId: user.uid,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      toast.success('New record added successfully');
      return docRef.id;
    } catch (err) {
      console.error("Error adding document:", err);
      toast.error('Error adding new record');
      throw err;
    }
  };

  const updateDocument = async (id: string, data: Partial<T>) => {
    if (!user) throw new Error('Must be logged in to update documents');

    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      });
      toast.success('Record updated successfully');
    } catch (err) {
      console.error("Error updating document:", err);
      toast.error('Error updating record');
      throw err;
    }
  };

  const deleteDocument = async (id: string) => {
    if (!user) throw new Error('Must be logged in to delete documents');

    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      toast.success('Record deleted successfully');
    } catch (err) {
      console.error("Error deleting document:", err);
      toast.error('Error deleting record');
      throw err;
    }
  };

  return { 
    documents, 
    loading, 
    error,
    addDocument,
    updateDocument,
    deleteDocument
  };
}