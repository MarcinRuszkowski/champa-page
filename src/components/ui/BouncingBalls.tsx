import React, { useEffect, useRef } from "react";
import { IoIosTennisball } from "react-icons/io";

interface BouncingBallsProps {
  ballCount: number; // Liczba piłek
  speed: number; // Szybkość piłek
}

interface Ball {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
}

export const BouncingBalls: React.FC<BouncingBallsProps> = ({
  ballCount = 10,
  speed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Tworzenie początkowych piłek
  const balls: Ball[] = Array.from({ length: ballCount }, (_, id) => ({
    id,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() * 2 - 1) * speed, // Prędkość w poziomie
    dy: (Math.random() * 2 - 1) * speed, // Prędkość w pionie
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeContainer = () => {
      if (container) {
        container.style.width = `${window.innerWidth}px`;
        container.style.height = `${window.innerHeight}px`;
      }
    };

    resizeContainer();
    window.addEventListener("resize", resizeContainer);

    const render = () => {
      if (!container) return;

      // Tworzenie nowego elementu div dla każdej piłki
      balls.forEach((ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Odbicie od krawędzi
        if (ball.x < 0 || ball.x > window.innerWidth) ball.dx *= -1;
        if (ball.y < 0 || ball.y > window.innerHeight) ball.dy *= -1;

        const ballElement = document.getElementById(`ball-${ball.id}`);
        if (ballElement) {
          ballElement.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
        }
      });

      requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener("resize", resizeContainer);
    };
  }, [balls]);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-50">
      {balls.map((ball) => (
        <div
          key={ball.id}
          id={`ball-${ball.id}`}
          className="absolute"
          style={{
            width: "40px",
            height: "40px",
            fontSize: "40px",
            transform: `translate(${ball.x}px, ${ball.y}px)`,
          }}
        >
          <IoIosTennisball className="text-green-600 bg-white rounded-full brightness-50" />
        </div>
      ))}
    </div>
  );
};
