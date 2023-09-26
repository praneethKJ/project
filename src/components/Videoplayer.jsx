import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const VideoPlayer = () => {
  const params = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch(`https://cloudinaryprojectbackend.onrender.com/api/upload/${params.id}`);
      const { clickedData } = await response.json();
      console.log(clickedData);
      setVideoInfo(clickedData);
      setLoader(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching video");
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-lg flex justify-center py-4">
      {loader && <Loader />}

      {videoInfo && (
        <div>
          <h1 className="font-bold">{videoInfo.title}</h1>
          <p>{videoInfo.description}</p>
          <br />
          <video height={300}
            controls
            loop
            autoPlay
            poster={videoInfo.imageUrl}
            preload="auto">
            <source src={videoInfo.videoUrl} />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;