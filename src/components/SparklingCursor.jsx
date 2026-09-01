import React, { useEffect, useRef } from 'react';

export default function SparklingCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const sparkles = [];

    const addSparkle = (x, y) => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        sparkles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          size: Math.random() * 3 + 1.5,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5 - 0.5,
          alpha: 1,
          decay: Math.random() * 0.035 + 0.02,
          rotation: Math.random() * Math.PI,
        });
      }
    };

    const handleMouseMove = (e) => {
      addSparkle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        addSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.speedX;
        s.y += s.speedY;
        s.alpha -= s.decay;
        s.rotation += 0.08;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.fillStyle = `rgba(247, 231, 169, ${s.alpha})`;
        ctx.shadowColor = `rgba(212, 175, 55, ${s.alpha})`;
        ctx.shadowBlur = 8;

        // Draw 4-point star sparkle
        const r = s.size;
        ctx.beginPath();
        ctx.moveTo(0, -r * 2);
        ctx.quadraticCurveTo(0, 0, r * 2, 0);
        ctx.quadraticCurveTo(0, 0, 0, r * 2);
        ctx.quadraticCurveTo(0, 0, -r * 2, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
