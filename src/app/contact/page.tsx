// app/contact/page.tsx

import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover object-top mb-6 border-4 border-gray-300 shadow-md"
        />
        <div className="w-full space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Permanent Address</h2>
            <p className="text-gray-600">
              Village: Gaharpur,<br />
              Post: Puari Kala - 221202,<br />
              Varanasi, Uttar Pradesh, India
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Mobile</h2>
            <p className="text-gray-600">+91 63892 69043</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <a
              href="mailto:chandni12.tiwari@gmail.com"
              className="text-blue-700 hover:underline"
            >
              chandni12.tiwari@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
