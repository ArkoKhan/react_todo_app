import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

export async function addTaskToFirestore(task) {
  await addDoc(tasksCollection, { ...task, createdAt: Date.now() });
}

export async function getTasksFromFirestore() {
  const snapshot = await getDocs(tasksCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteTaskFromFirestore(id) {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
}

export async function toggleCompleteInFirestore(id, completed) {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, { completed });
}
