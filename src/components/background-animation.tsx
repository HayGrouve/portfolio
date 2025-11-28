"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Triangle = ({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        top: `${y}vh`,
        left: `${x}vw`,
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid hsl(var(--primary) / 0.1)`,
      }}
      initial={{ y: "100vh", opacity: 0, rotate: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay,
      }}
    />
  );
};

export default function BackgroundAnimation() {
  const [triangles, setTriangles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generateTriangles = () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Random X position
        y: Math.random() * 100, // Random starting Y position
        size: Math.random() * 20 + 10, // Random size (10px - 30px)
        delay: Math.random() * 5, // Random delay
      }));
    setTriangles(generateTriangles());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {triangles.map(({ id, x, y, size, delay }) => (
        <Triangle key={id} x={x} y={y} size={size} delay={delay} />
      ))}
    </div>
  );
}
