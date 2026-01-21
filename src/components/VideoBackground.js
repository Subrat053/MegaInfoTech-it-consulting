import React from "react";
import videoUrl1 from "../assets/images/hero-desktop.mp4";
const VideoBackground = ({
  videoUrl,
  fallbackImage,
  children,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background - Replace with actual video when available */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={fallbackImage}
        >
          <source src={videoUrl1} type="video/mp4" />
        </video>
        {/* {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={fallbackImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage || ""})` }}
          />
        )} */}

        {/* Cosmic Gradient Overlay */}
        <div className="video-overlay" />

        {/* Animated Glowing Orb */}
        <div className="cosmic-orb top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        {/* Additional Glow Effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBackground;
