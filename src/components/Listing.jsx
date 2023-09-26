import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Listing() {
  const [videoList, setVideoList] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch("https://cloudinaryprojectbackend.onrender.com/api/upload"); //fetch data from backend api
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
  //date and time
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    return date.toLocaleString(undefined, options);
  }
  return (
    <div className="container-lg h-0">
      <strong className="flex justify-center text-xl pt-3">Uploaded videos</strong>
      {loader && <Loader />}
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-12">
        {videoList.length > 0 && videoList.map((video) => (
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-3 cursor-pointer p-2">
            <Link to={`/videos/${video._id}`} key={video._id}>
              <img
                className="w-fit m-auto rounded-md"
                src={video.imageUrl}
                alt={video.description}
              />
              <div className="pt-3 pb-1.5">
                <div className="title font-bold text hover:underline">{video.title}</div>
              </div>
            </Link>
            <p className="cursor-auto pt-0.5">
              {video.description}
            </p>
            <p className="text-xs text-end">{formatDate(video.createdAt)}</p>
          </div>
        ))}
      </div>
    </div >

  );
}
export default Listing;


