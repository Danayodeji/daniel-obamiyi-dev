import React, { useEffect, useState } from 'react';

const generateStars = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const numStars = Math.floor((width * height) / 10000);
  const newStars = [];

  for (let i = 0; i < numStars; i += 1) {
    newStars.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    });
  }

  return newStars;
};

const generateMeteors = () => {
  const numMeteors = 20;
  const newMeteors = [];

  for (let i = 0; i < numMeteors; i += 1) {
    newMeteors.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 90,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    });
  }

  return newMeteors;
};

const StarBackgroundEffects = () => {
  const [stars, setStars] = useState(generateStars);
  const [meteors, setMeteors] = useState(generateMeteors);

  useEffect(() => {
    const handleResize = () => {
      setStars(generateStars());
      setMeteors(generateMeteors());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            position: 'absolute',
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      ))}

   {/* LOGICS FOR THE METEORS */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            position: 'absolute',
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 5}px`,
            height: `${meteor.size}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackgroundEffects;
