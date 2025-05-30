import React, { useEffect, useRef, useState } from 'react';

// Mathematical formulas
const mathFormulas = [
  "E = mc²",
  "a² + b² = c²",
  "F = ma",
  "∫f(x)dx",
  "y = mx + b",
  "∑(n=1 to ∞) 1/n²",
  "e^(iπ) + 1 = 0",
  "∇ × E = -∂B/∂t",
  "PV = nRT",
];

function MathBackground() {
  const canvasRef = useRef(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const animationRef = useRef();
  const sineWaveRef = useRef({
    amplitude: 0,
    frequency: 0,
    phase: 0,
    speed: 0.01,
    color: "rgba(239, 68, 68, 0.15)",
    lineWidth: 1,
    gradient: true,
  });

  const formulasRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to properly size the canvas
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return false;

      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      // Update sine wave properties based on canvas size
      sineWaveRef.current = {
        ...sineWaveRef.current,
        amplitude: height / 15,
        frequency: 0.01,
        phase: sineWaveRef.current.phase || 0,
      };

      initializeFormulas(width, height);
      return true;
    };

    // Initialize math formulas
    const initializeFormulas = (width, height) => {
      formulasRef.current = [];

      const numFormulas = Math.floor(Math.random() * 3) + 4;

      for (let i = 0; i < numFormulas; i++) {
        const formulaIndex = Math.floor(Math.random() * mathFormulas.length);
        const formula = mathFormulas[formulaIndex];

        formulasRef.current.push({
          id: i,
          formula,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 4 + 10,
          opacity: 0,
          rotation: (Math.random() - 0.5) * 20,
          delay: Math.random() * 20000,
        });
      }
    };

    // Draw enhanced grid lines
    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;
      const gridSize = 40;

      // Create subtle gradient for grid
      const minorGridGradient = ctx.createLinearGradient(0, 0, width, height);
      minorGridGradient.addColorStop(0, "rgba(220, 220, 230, 0.15)");
      minorGridGradient.addColorStop(0.5, "rgba(220, 220, 240, 0.2)");
      minorGridGradient.addColorStop(1, "rgba(220, 220, 230, 0.15)");

      // Draw minor grid lines
      ctx.strokeStyle = minorGridGradient;
      ctx.lineWidth = 0.5;

      // Vertical minor lines
      for (let x = 0; x < width; x += gridSize / 4) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal minor lines
      for (let y = 0; y < height; y += gridSize / 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Create gradient for major grid
      const majorGridGradient = ctx.createLinearGradient(0, 0, width, height);
      majorGridGradient.addColorStop(0, "rgba(200, 200, 210, 0.25)");
      majorGridGradient.addColorStop(0.5, "rgba(200, 200, 220, 0.3)");
      majorGridGradient.addColorStop(1, "rgba(200, 200, 210, 0.25)");

      // Draw major grid lines
      ctx.strokeStyle = majorGridGradient;
      ctx.lineWidth = 0.5;

      // Vertical major lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal major lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw x and y axes with subtle highlight
      const axisGradient = ctx.createLinearGradient(0, height / 2, width, height / 2);
      axisGradient.addColorStop(0, "rgba(180, 180, 210, 0.3)");
      axisGradient.addColorStop(0.5, "rgba(180, 180, 220, 0.4)");
      axisGradient.addColorStop(1, "rgba(180, 180, 210, 0.3)");

      ctx.strokeStyle = axisGradient;
      ctx.lineWidth = 0.8;

      // X-axis
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Y-axis
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Add subtle tick marks on axes
      ctx.strokeStyle = "rgba(180, 180, 210, 0.3)";
      ctx.lineWidth = 0.5;

      // X-axis ticks
      for (let x = gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, height / 2 - 5);
        ctx.lineTo(x, height / 2 + 5);
        ctx.stroke();
      }

      // Y-axis ticks
      for (let y = gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(width / 2 - 5, y);
        ctx.lineTo(width / 2 + 5, y);
        ctx.stroke();
      }
    };

    // Draw sine wave
    const drawSineWave = (timestamp) => {
      const wave = sineWaveRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Update phase for animation
      wave.phase += wave.speed;

      // Create gradient for sine wave if enabled
      let strokeStyle;
      if (wave.gradient) {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(239, 68, 68, 0.1)");
        gradient.addColorStop(0.5, "rgba(239, 68, 68, 0.2)");
        gradient.addColorStop(1, "rgba(239, 68, 68, 0.1)");
        strokeStyle = gradient;
      } else {
        strokeStyle = wave.color;
      }

      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = wave.lineWidth;
      ctx.beginPath();

      // Draw the sine wave
      for (let x = 0; x < width; x += 2) {
        const y = height / 2 + Math.sin((x * wave.frequency) + wave.phase) * wave.amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    };

    // Draw math formulas
    const drawFormulas = (timestamp) => {
      formulasRef.current.forEach((formula) => {
        // Handle delay before formula appears
        if (timestamp < formula.delay) return;

        // Fade in animation
        if (formula.opacity < 0.3) {
          formula.opacity += 0.002;
        }

        // Slowly move formulas
        formula.x += 0.1;
        formula.y += 0.05;

        // Wrap around screen
        if (formula.x > canvas.width + 50) {
          formula.x = -50;
        }
        if (formula.y > canvas.height + 50) {
          formula.y = -50;
        }

        // Draw formula
        ctx.save();
        ctx.globalAlpha = formula.opacity;
        ctx.fillStyle = "rgba(100, 100, 120, 0.4)";
        ctx.font = `${formula.size}px Arial`;
        ctx.translate(formula.x, formula.y);
        ctx.rotate((formula.rotation * Math.PI) / 180);
        ctx.fillText(formula.formula, 0, 0);
        ctx.restore();
      });
    };

    // Animation loop
    const animate = (timestamp) => {
      // Clear canvas with very light background
      ctx.fillStyle = "rgba(255, 255, 255, 0.97)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all elements
      drawGrid();
      drawSineWave(timestamp);
      drawFormulas(timestamp);

      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize everything
    const initialize = () => {
      if (!resizeCanvas()) {
        setTimeout(initialize, 100);
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
      setIsCanvasReady(true);
    };

    initialize();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="position-absolute w-100 h-100"
      style={{
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: isCanvasReady ? 1 : 0,
        transition: "opacity 0.5s ease-in",
        backgroundColor: "rgba(255, 255, 255, 0.97)",
        pointerEvents: "none",
      }}
    />
  );
}

export default MathBackground; 