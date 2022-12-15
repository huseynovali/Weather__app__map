import { useEffect, useState } from "react";
import "./video.css";
export default function VideoComponent({ video }) {

 
  return (
    <>
    {video &&
    <video className="background-video" autoPlay loop>
      <source src={video} type="video/mp4"></source>
      {console.log(video)}
    </video>
  }</>
  );
}
