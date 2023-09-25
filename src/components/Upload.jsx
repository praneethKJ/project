import React, { useState } from 'react';

function Upload() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleDesc = (event) => {
        setDesc(event.target.value);
    }
//  when image is uploaded
const uploadImage = () => {
    if (image) {
        const timestamp = Date.now(); // Get the current date and time
        const imageName = `image_${timestamp}`; //  passed current date and time to imageName varialble

        const imageData = new FormData();
        imageData.append("file", image, imageName); // appeded the data and time here
        imageData.append("upload_preset", "ov0twnfe");
        imageData.append("cloud_name", 'dxzb2ouxh');

        fetch(`https://api.cloudinary.com/v1_1/dxzb2ouxh/image/upload`, {
            method: "post",
            body: imageData,
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    }
}
//  when video is uploaded
const uploadVideo = () => {
    if (video) {
        const timestamp = Date.now(); // Get the current date and time
        const videoName = `video_${timestamp}`; // passed current date and time to videoName varialble

        const videoData = new FormData();
        videoData.append("file", video, videoName); // appeded the data and time here
        videoData.append("upload_preset", "ov0twnfe");
        videoData.append("cloud_name", 'dxzb2ouxh');

        fetch(`https://api.cloudinary.com/v1_1/dxzb2ouxh/video/upload`, {
            method: "post",
            body: videoData,
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error uploading video:', error);
            });
    }
}
//when clicked on submit it will upload image and video
    const handleSubmit = () => {
        uploadImage();
        uploadVideo();
        alert('Uploded successful!');
        window.location.reload(); //window will reload after succefull upload
    }


    return (
        <div className="container-lg flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 p-4">
                <div className="inline-block items-center">
                    <label className='text-base block pb-1' htmlFor="title">Title:</label>
                    <input
                        className="border-2 border-black rounded-md w-[100%] p-1"
                        type="text"
                        id='title'
                        value={title}
                        onChange={handleTitle}
                        placeholder='Give a Title'
                    />
                    <label className='pt-4 pb-1 text-base w-[100%]' htmlFor="desc">Description:</label>
                    <textarea className="border-2 border-black rounded-md w-[100%] p-1" type="text" id="desc" rows="7" value={desc} onChange={handleDesc} placeholder='Give a Description' />

                    <div className="form-row mr-4">
                        <label className='pt-4 pb-1 text-base w-[100%]' htmlFor="desc">Upload Thumbnail:</label>
                        <input className="p-1" type="file" onChange={(event) => setImage(event.target.files[0])} />
                    </div>
                    <div className="form-row">
                        <label className='pt-4 pb-1 text-base w-[100%]' htmlFor="desc">Upload Video:</label>
                        <input className="p-1" type="file" onChange={(event) => setVideo(event.target.files[0])} required />
                    </div>
                    <button className="p-2 mt-4 bg-blue-500 text-white rounded" onClick={handleSubmit}>Upload Video</button>
                </div>
            </div>
        </div>
    )
}

export default Upload;
