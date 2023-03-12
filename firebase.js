
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-JrKPm-pdZYLw0C9jRAFFxpwsydXX3kg",
  authDomain: "fir-javascript-crud-45d9d.firebaseapp.com",
  projectId: "fir-javascript-crud-45d9d",
  storageBucket: "fir-javascript-crud-45d9d.appspot.com",
  messagingSenderId: "412353162517",
  appId: "1:412353162517:web:b6ab88342f57c27a440d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => 
  addDoc(collection(db, 'tasks'), {title, description});

export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks  = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deleteTask = id => deleteDoc(doc(db, 'tasks', id))

export const getTask = id => getDoc(doc(db, 'tasks', id))

export const upadteTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);