"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                
                <form onSubmit={handleSubmit}>
                    <label className="block text-gray-700 font-semibold mb-1">Item Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border rounded p-2 mb-3"
                        placeholder="Enter item name"
                    />

                    <label className="block text-gray-700 font-semibold mb-1">Quantity:</label>
                    <div className="flex items-center mb-3">
                        <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="w-12 text-center border rounded-l p-2 bg-gray-100"
                        />
                        <button
                            type="button"
                            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                            className="bg-gray-300 text-black px-3 py-1"
                        >
                            -
                        </button>
                        <button
                            type="button"
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-r"
                        >
                            +
                        </button>
                    </div>

                    <label className="block text-gray-700 font-semibold mb-1">Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border rounded p-2 mb-4"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}
