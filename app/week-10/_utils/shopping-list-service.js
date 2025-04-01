import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(query(itemsRef));
    
    snapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
}

export async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    
    return docRef.id;
}

// ✅ Ensure deleteItem is exported
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
