// app/education/page.tsx

import React from "react";

export default function EducationPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Education
      </h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-teal-700">
            Msster Degree in Interior Design
          </h2>
          <p className="text-gray-700">Indian Institute Of Fashion Design, Chandigarh</p>
          <p className="text-gray-500 text-sm">2023 – 2025</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-teal-700">
            Senior Secondary (12th)
          </h2>
          <p className="text-gray-700">GGIC, Varanasi</p>
          <p className="text-gray-500 text-sm">2019 – 2021</p>
        </div>
        {/* आप चाहें तो और भी एजुकेशन डिटेल्स यहाँ जोड़ सकते हैं */}
      </div>
    </main>
  );
}
