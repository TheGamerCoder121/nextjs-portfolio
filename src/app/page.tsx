"use client";
import React from "react"; // Add import statement for React
import MovingGradient from "./components/movingGradient";

export default function Home() {
  const numCircles = 18;
  const gridSize = 6;
  const delayIncrement = 0.2;

  // Use viewport units or percentages for responsive design
  const circleSizeVW = 15; // Circle size in viewport width units
  const gapVW = 2; // Gap in viewport width units

  const circles = [];
  for (let i = 0; i < numCircles; i++) {
    const delay =
      Math.floor(i / gridSize) * delayIncrement +
      (i % gridSize) * delayIncrement;
    const top = Math.floor(i / gridSize) * (circleSizeVW + gapVW) + "vw";
    const left = (i % gridSize) * (circleSizeVW + gapVW) + "vw";

    circles.push(
      <MovingGradient
        key={i}
        delay={delay}
        style={{
          position: "absolute",
          top: top,
          left: left,
          width: circleSizeVW + "vw",
          height: circleSizeVW + "vw",
        }}
      />
    );
  }

  // CSS for responsive container
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingTop: `${(circleSizeVW + gapVW) * Math.ceil(numCircles / gridSize)}vw`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden'
  };

  return (
    <main className="flex flex-col items-center justify-center p-24 text-center overflow-x-hidden">
      <div style={containerStyle}>
        {circles}
        <h1 className="text-8xl font-bold z-10">
          Nicklaus Vega
        </h1>
        <h2 className="text-2xl z-10">
          Aspiring entrepreneur and Computer Science student
        </h2>
      </div>
      {/* Rest of the page content */}
    </main>
  );
}
