import "./video.css";
import { rain, snow, clear, clouds ,fog} from "../../assets/videos";
export default function VideoComponent({ video }) {
  return (
    <>
      {video === "Clouds" && (
        <video className="background-video" autoPlay loop>
          <source src={clouds} type="video/mp4"></source>
        </video>
      )}
      {video === "Rain" && (
        <video className="background-video" autoPlay loop>
          <source src={rain} type="video/mp4"></source>
        </video>
      )}
      {video === "Clear" && (
        <video className="background-video" autoPlay loop>
          <source src={clear} type="video/mp4"></source>
        </video>
      )}
      {video === "Snow" && (
        <video className="background-video" autoPlay loop>
          <source src={snow} type="video/mp4"></source>
        </video>
      )}
          {video === "Fog" || video === "Mist" && (
        <video className="background-video" autoPlay loop>
          <source src={fog} type="video/mp4"></source>
        </video>
      )}
    </>
  );
}
