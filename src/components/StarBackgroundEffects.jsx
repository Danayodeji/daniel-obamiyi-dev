import React, { useState } from 'react';

const StarBackgroundEffects = () => {
  const generateStars = () => {
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
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
    for (let i = 0; i < numMeteors; i++) {
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

  const [stars] = useState(() => generateStars());
  const [meteors] = useState(() => generateMeteors());

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
