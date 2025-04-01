"use client"; 
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const { user } = useUserAuth();
  const [sortBy, setSortBy] = useState("name");

  async function loadItems() {
    if (!user) return;
    const itemsData = await getItems(user.uid);
    setItems(itemsData);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem() {
    if (!user || itemName.trim() === "") return;
    const newItem = { name: itemName, quantity, category };
    const itemId = await addItem(user.uid, newItem);
    setItems([...items, { id: itemId, ...newItem }]);
    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  }

  async function handleDeleteItem(itemId) {
    if (!user) return;
    await deleteItem(user.uid, itemId);
    setItems(items.filter(item => item.id !== itemId));
  }

  // Sorting items by name or category
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
  });

  return (
    <main className="min-h-screen bg-black text-gray-100"> {/* Changed the background to black */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Shopping List</h1>

        {/* Sort dropdown */}
        <div className="mb-4 flex justify-end">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="p-2 rounded-md border border-blue-400 bg-white"
          >
            <option value="name">Sort by Name</option>
            <option value="category">Sort by Category</option>
          </select>
        </div>

        {/* Form to add items */}
        <div className="flex gap-4 mb-4 items-center bg-white p-4 rounded-md shadow-md">
          <input
            className="flex-grow p-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          
          <div className="flex items-center gap-2">
            <button 
              className="p-2 border rounded-md" 
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              className="p-2 border rounded-md" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <select 
            className="p-2 border border-gray-400 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Bakery">Bakery</option>
            <option value="Frozen">Frozen</option>
          </select>

          <button 
            className="bg-blue-500 text-white p-4 rounded-md"
            onClick={handleAddItem}
          >
            +
          </button>
        </div>

        {/* Display the item list */}
        <ItemList items={sortedItems} onDeleteItem={handleDeleteItem} />
      </div>
    </main>
  );
}
