'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const members = [
  {
    role: "Editor-in-Chief",
    name: "Dr. Shirshendu Roy",
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
  {
    "role": "Professor",
    "name": "Dr. Debiprasad Priyabrata Acharya",
    "position": "Professor, NIT Rourkela"
  },
  {
    "role": "Associate Professor",
    "name": "Dr. Priyadarsan Parida",
    "position": "Associate Professor, GIET University"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Shasanka Sekhar Rout",
    "position": "Assistant Professor, GLA University"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Suraj Prakash Sahoo",
    "position": "Assistant Professor, VIT Vellore"
  }
];

export default function Members() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-sm shadow-md shadow-black w-[99%] md:w-[80%]"
    >
      <h2 className="text-3xl font-bold text-center text-black mb-6">Members</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {members.map((member, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl p-4  w-[20rem] max-w-[98vw] mx-4">
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
