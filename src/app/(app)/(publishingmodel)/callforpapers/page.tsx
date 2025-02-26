'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Publishingmodel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 mt-24"
    >
      <Card className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
        <CallForPapers/>
        </CardContent>
      </Card>
    </motion.div>
  );
}


const CallForPapers = () => {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Call For Papers / Scope</h1>
        <p className="mb-4">
          The Journal of Embedded and Digital System Design (JEDSD) expects the submission of research manuscripts related to the development of innovative ideas on embedded and digital system design. The sub-domains can be listed as:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>FPGA Implementation:</strong> FPGA is a very important reconfigurable hardware to implement digital systems. Digital subsystems or algorithms can be of any domain like signal processing (SP), image processing (IP), video processing (VP), audio processing (AP), natural language processing (NLP), machine learning (ML), neural networks (NN), or other domains.
          </li>
          <li>
            <strong>VLSI or ASIC Implementation:</strong> Any digital system specifically implemented for ASIC or digital VLSI implementation of any aforesaid algorithms.
          </li>
          <li>
            <strong>Processor or Controller-Based Implementations:</strong> CPU, GPU, or DSP processor-based implementations of digital systems or algorithms.
          </li>
          <li>
            <strong>Embedded System Implementations:</strong> Embedded system-based implementation of specific tasks that may include input devices, electronic controllers, and output devices.
          </li>
          <li>
            <strong>Development in the Internet of Things (IoT):</strong> Recent developments (advancement in communication protocols and techniques, development in controllers, or development in peripherals) on IoT.
          </li>
          <li>
            <strong>IoT or Industrial IoT Application:</strong> Application of IoT or IIoT having an impact on our daily life, industry sector, health care, or the defense sector.
          </li>
          <li>
            <strong>Theoretical Development:</strong> Novel algorithms or techniques that can play a crucial role in developing promising embedded or digital hardware systems.
          </li>
        </ul>
      </div>
    );
  };
  

  