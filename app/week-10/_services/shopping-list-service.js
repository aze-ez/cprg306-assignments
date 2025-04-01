import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const snapshot = await getDocs(itemsRef);
        
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

export async function addItem(userId, item) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
}
export async function deleteItem(userId, itemId) {
    try {
        console.log("🗑️ Deleting item:", itemId);
        const itemRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(itemRef);
        console.log("✅ Item deleted!");
    } catch (error) {
        console.error("❌ Error deleting item:", error);
    }
}
