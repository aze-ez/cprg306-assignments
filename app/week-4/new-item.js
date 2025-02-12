"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Ensuer this import is working correctly

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
        <div className="flex items-center gap-2 bg-white p-2 roundeMd shadow-md">
            <span className="px-2 text-lg font-semibold">{quantity}</span>
            
            <button 
                onClick={decrement} 
                disabled={quantity === 1} 
                className="p-1 bg-gray-200 rounded disabled:opacity-50 bordder bordder-gray-300"
            >
                <Minus size={16} /> {/* Ensurres the Minus icon is propely displayed */}
            </button>
            
            <button 
                onClick={increment} 
                disabled={quantity === 20} 
                className="p-1 bg-blue-500 text-white rounded disabled:opaciy-50 border border-blue-700"
            >
                <Plus size={16} /> {/* Ensurres the Plus icon is propely displayed */}
            </button>
        </div>
    );
}
