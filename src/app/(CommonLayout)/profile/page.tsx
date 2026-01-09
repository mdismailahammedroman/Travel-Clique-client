"use client"; // This marks the component as a Client Component.

import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState("/default-avatar.png");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-primary"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Traveler</h1>
            <p className="text-gray-500">email</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded uppercase">
              USER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
