"use client";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingList() {
  const { user } = useUserAuth();

  // Redirect to login with a message if the user is not authenticated
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-red-600 font-semibold">
            You must be logged in to access the shopping list.
          </p>
          <a
            href="/week-9"
            className="mt-4 text-blue-500 hover:underline block text-center"
          >
            Return to Login
          </a>
        </div>
      </div>
    );
  }

  // Sample shopping list items
  const items = ["Milk", "Eggs", "Bread", "Cheese"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
        <a
          href="/week-9"
          className="block mt-4 text-blue-500 hover:underline"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
