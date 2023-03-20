import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  addDoc,
  writeBatch
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvidwq4tNBEf0xfThikBClNapmIs-n96o",
  authDomain: "miramar-blog-portfolio.firebaseapp.com",
  projectId: "miramar-blog-portfolio",
  storageBucket: "miramar-blog-portfolio.appspot.com",
  messagingSenderId: "929168712676",
  appId: "1:929168712676:web:cf943610db8255c60e9df1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.name.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("batch data added");
};

export const addDocument = async (collectionKey, objectToAdd) => {
  const docRef = await addDoc(collection(db, collectionKey), objectToAdd);
  console.log("Document written with ID: ", docRef.id);
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "posts");
  const q = query(collectionRef);
  const querySnapshop = await getDocs(q);
  
  const categoryMap = querySnapshop.docs.reduce((acc, docSnapshot) => {
    const { name, title, items } = docSnapshot.data();
    acc[name.toLowerCase()] = {title, items};
    return acc;
  }, {});
  return categoryMap;
};

