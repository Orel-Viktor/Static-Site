import React, { useState, useEffect } from "react";
import videoBanner from "../../images/videoBanner.png";

export function MainContent() {
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  console.log(currentTime);
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000);
  }, []);

  return (
    <>
      <div className="content">
        <div className="content__video-image">
          {/* <iframe></iframe> */}
          <div className="content__image">
            <img src={videoBanner} />
          </div>
        </div>
      </div>
    </>
  );
}
