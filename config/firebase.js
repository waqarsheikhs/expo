import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjLURYR7URUBvSQfl-iXXavF3EjoQOQgM",
    authDomain: "smit-final-project.firebaseapp.com",
    projectId: "smit-final-project",
    storageBucket: "smit-final-project.appspot.com",
    messagingSenderId: "896752651720",
    appId: "1:896752651720:web:51f9c248862ff3db54c4fd"
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};