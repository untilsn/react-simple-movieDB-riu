import React from "react";
const LoadingSkeleton = (props) => {
  return (
    <div
      className="loading-skeleton"
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
