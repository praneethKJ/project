import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Listing() {
  const [videoList, setVideoList] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch("https://cloudinaryprojectbackend.onrender.com/api/upload");
      const { videoData } = await response.json();
      console.log(videoData);
      setVideoList(videoData);
      setLoader(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching videos");
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container-lg">
      <h1 className="flex justify-center text-base">Uploaded videos</h1>
      {loader && <Loader />}

      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-12">
        {videoList.length > 0 &&
          videoList.map((video) => (
            <Link to={`/videos/${video._id}`} key={video._id}>
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg m-3 cursor-pointer">
                <img
                  className="w-fit m-auto p-3"
                  src={video.imageUrl}
                  alt={video.description}
                />
                <div className="px-6 pt-0 pb-2">
                  <div className="title font-bold">{video.title.length > 50
                    ? `${video.title.substring(0, 50)}...`
                    : video.title}</div>
                  <p>
                    {video.description.length > 200
                      ? `${video.description.substring(0, 200)}...`
                      : video.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
export default Listing;