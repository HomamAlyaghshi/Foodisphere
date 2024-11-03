import React, { useRef, useState } from "react";

const AboutVideo = () => {
  const videoRef = useRef(null); // مرجع للفيديو للتحكم به
  const [isPlaying, setIsPlaying] = useState(false); // حالة لإخفاء النص وزر التشغيل

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // بدء تشغيل الفيديو
      setIsPlaying(true); // إخفاء النص وزر التشغيل
    }
  };

  return (
    <div className="w-full h-full grid justify-center items-center my-10 relative">
      {/* الحاوية الرئيسية للفيديو */}
      <div
        className={`w-full bg-slate-400 rounded-xl relative transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-80"
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-auto rounded-xl"
          controls
          autoPlay={false} // عدم التشغيل التلقائي حتى يضغط المستخدم
          loop
          muted
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* طبقة متراكبة لعرض النص وزر التشغيل */}
        {!isPlaying && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-white text-6xl font-playfair italic mb-4">
              Feel the authentic &<br/>orginal taste from us
            </h2>
            <button
              className="bg-white p-4 rounded-full  shadow-lg"
              onClick={handlePlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-themeRed"
                 fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-4.197-2.482a1 1 0 00-1.555.832v4.964a1 1 0 001.555.832l4.197-2.482a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutVideo;
