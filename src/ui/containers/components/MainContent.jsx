import React, { useState, useEffect } from "react";

export function MainContent() {
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  console.log(currentTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000); // Обновляем каждую минуту

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-content">
        <div>
          <iframe></iframe>
          <img src="../images/video-wrapper.png" alt="баннер" />
        </div>
      </div>
    </>
  );
}
