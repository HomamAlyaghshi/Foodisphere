import React from "react";

const AboutVideo = () => {
  return (
    <div className="w-full h-full grid justify-center items-center my-10">
      <div className="w-full bg-slate-400 rounded-xl ">
        <video className="w-full h-auto rounded-xl" controls autoPlay loop muted>
          <source src="/videos/video.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutVideo;
