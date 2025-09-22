"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  name?: string;
  role: string;
};

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // TODO: replace with real API
    setUsers([
      { id: "1", email: "john@example.com", name: "John", role: "USER" },
      { id: "2", email: "admin@example.com", name: "Admin", role: "ADMIN" },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border px-4 py-2">{u.id}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.role}</td>
              <td className="border px-4 py-2 space-x-2">
                <button className="px-2 py-1 bg-green-600 text-white rounded">
                  Edit
                </button>
                <button className="px-2 py-1 bg-red-600 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
