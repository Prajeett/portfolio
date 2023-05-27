import React from "react";


const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundColor:"#1b1b1b"}}>
      <img
        className="md:max-h-96 max-h-80  "
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ5NWU1Nzk5OGZlMWQ2MGMxZmNhMDI5ZmIyMmEwNDQ0YWVmYTZjMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/VX7yEoXAFf8as/giphy.gif"
        alt="loading screen"
      />
    </div>
  );
};

export default LoadingScreen;
