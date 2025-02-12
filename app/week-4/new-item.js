"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ensure this import is working correctly

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-md">
            <span className="px-2 text-lg font-semibold">{quantity}</span>
            
            {/* Decrement button */}
            <button 
                onClick={decrement} 
                disabled={quantity === 1} 
                className="p-1 bg-gray-200 rounded disabled:opacity-50 border border-gray-300"
            >
                <Minus size={16} /> {/* Ensures the Minus icon is properly displayed */}
            </button>
            
            {/* Increment button */}
            <button 
                onClick={increment} 
                disabled={quantity === 20} 
                className="p-1 bg-blue-500 text-white rounded disabled:opacity-50 border border-blue-700"
            >
                <Plus size={16} /> {/* Ensures the Plus icon is properly displayed */}
            </button>
        </div>
    );
}
