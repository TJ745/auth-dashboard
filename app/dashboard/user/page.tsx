"use client";

import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <p>Welcome, {session?.user?.name || "User"}!</p>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Edit Profile</h2>
        <form className="mt-4 space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Name"
            defaultValue={session?.user?.name || ""}
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
