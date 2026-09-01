import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
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

    // 1. Golden & Soft Pink Stardust
    const starsCount = Math.min(width < 768 ? 30 : 55, 65);
    const stars = Array.from({ length: starsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      angle: Math.random() * Math.PI * 2,
      isPink: Math.random() > 0.6,
    }));

    // 2. Romantic Falling #FFB6C1 Light Pink Rose Petals & Eucalyptus Leaves
    const petalsCount = Math.min(width < 768 ? 14 : 24, 30);
    const petals = Array.from({ length: petalsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 9 + 8,
      speedY: Math.random() * 0.85 + 0.45,
      speedX: Math.sin(Math.random() * Math.PI) * 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.4,
      type: Math.random() > 0.35 ? 'petal' : 'leaf', // #FFB6C1 pink petals & eucalyptus
      swayOffset: Math.random() * 100,
      opacity: Math.random() * 0.45 + 0.4,
    }));

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Render Stardust
      stars.forEach((star) => {
        star.y += star.speedY;
        star.x += star.speedX;
        star.angle += star.pulseSpeed;

        if (star.y < -10) star.y = height + 10;
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        const currentOpacity = star.opacity * (0.6 + 0.4 * Math.sin(star.angle));

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
        if (star.isPink) {
          grad.addColorStop(0, `rgba(255, 182, 193, ${currentOpacity})`);
          grad.addColorStop(0.5, `rgba(255, 182, 193, ${currentOpacity * 0.5})`);
          grad.addColorStop(1, 'rgba(255, 182, 193, 0)');
        } else {
          grad.addColorStop(0, `rgba(255, 235, 150, ${currentOpacity})`);
          grad.addColorStop(0.5, `rgba(212, 175, 55, ${currentOpacity * 0.5})`);
          grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        }

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      // Render Falling #FFB6C1 Light Pink Petals & Leaves
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin((frame + p.swayOffset) * 0.02) * 0.8;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'petal') {
          // #FFB6C1 Light Pink Rose Petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.65, p.size, Math.PI / 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 182, 193, ${p.opacity})`;
          ctx.shadowColor = 'rgba(255, 182, 193, 0.4)';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.strokeStyle = `rgba(232, 142, 160, ${p.opacity * 0.6})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        } else {
          // Soft Sage Eucalyptus Leaf
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.45, p.size * 1.1, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(108, 143, 128, ${p.opacity * 0.75})`;
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.9);
          ctx.lineTo(0, p.size * 0.9);
          ctx.strokeStyle = `rgba(60, 95, 80, ${p.opacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
