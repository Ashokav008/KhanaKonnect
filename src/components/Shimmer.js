import React from "react";

export default function Shimmer() {
  return (
    <>
      <div className="shimmer-wrapper">
        {new Array(20).fill("").map((data, index) => {
          return <div className="shimmer" key={index}></div>;
        })}
      </div>
    </>
  );
}
