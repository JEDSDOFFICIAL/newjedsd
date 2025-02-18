'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const members = [
  {
    role: "Editor-in-Chief",
    name: "Dr. Shitshendu Roy",
    position: "Assistant Professor, Dayananda Sagar University",
    email: "shirshenduroy-ece@dsu.edu.in",
  },
  {
    role: "Editorial Member",
    name: "Dr. Ardhendu Sarkar",
    position: "Director, Addauto Technology Pvt. Ltd.",
  },
  {
    role: "Editorial Member",
    name: "Dr. Avik K Das",
    position: "Assistant Professor, UEM Kolkata",
  },
  {
    role: "Editorial Member",
    name: "Dr. Priyajit Biswas",
    position: "Assistant Professor, NSEC, Kolkata",
  },
  {
    role: "Faculty Advisor",
    name: "Dr. Jisy N K",
    position: "Assistant Professor, Dayananda Sagar University",
  },
  {
    role: "Faculty Advisor",
    name: "Dr. Abhinav Karan",
    position: "Assistant Professor, Dayananda Sagar University",
  },
];

export default function Members() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 mt-8"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {members.map((member, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.position}</p>
              {member.email && (
                <p className="text-blue-500 text-sm mt-2">
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
