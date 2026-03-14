"use client";

import Link from "next/link";

export default function ResumeDownload() {
    const handleDownload = () => {
        window.open("/api/download-resume", "_blank");
    }
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <h1 className="text-3xl font-bold mb-6">
        My Resume
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Download my latest resume to learn more about my experience
        in React, Node.js, Next.js and cloud architecture.
      </p>

      <Link
        href="/resume.pdf"
        target="_blank"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleDownload}
      >
        View / Download Resume
      </Link>

    </div>
  );
}