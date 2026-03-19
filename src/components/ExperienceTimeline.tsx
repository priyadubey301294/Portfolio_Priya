"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  return (
    <main>

      <h2 className="text-4xl font-bold text-center mb-16">
        Career Timeline
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* vertical line */}

        <div className="absolute left-4 top-0 h-full w-1 bg-gray-200"></div>

        {experience.map((job, index) => (

          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-12 relative"
          >

            {/* circle */}

            <div
              className={`absolute -left-10.5 top-2 w-6 h-6 rounded-full ${job.color}`}
            />

            {/* card */}

            <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  {job.role}
                </h3>

                <span className="text-sm text-gray-500">
                  {job.year}
                </span>

              </div>

              <p className="text-gray-600 font-medium mt-1">
                {job.company}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {job.period}
              </p>

              <ul className="mt-4 space-y-1 text-gray-600 list-disc ml-5">

                {job.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}

              </ul>

            </div>

          </motion.div>

        ))}

      </div>

    </main>
  );
}