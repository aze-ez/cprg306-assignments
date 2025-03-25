"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle login and redirect
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      window.location.href = "/week-9/shopping-list";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Handle logout and redirect
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      window.location.href = "/week-9";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-6">Shopping List App</h1>

        {/* Show login button if no user is logged in */}
        {!user ? (
          <button
            onClick={handleLogin}
            className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200"
          >
            Sign in with GitHub
          </button>
        ) : (
          <>
            {/* Display user info if logged in */}
            <h2 className="text-xl mb-2">
              Welcome, {user.displayName || "User"}
            </h2>
            <p className="text-sm mb-4">{user.email}</p>

            {/* Link to shopping list page */}
            <Link
              href="/week-9/shopping-list"
              className="text-blue-400 underline mb-4 block"
            >
              Go to Shopping List
            </Link>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
