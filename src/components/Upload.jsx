
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const navigate = useNavigate();
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleDesc = (event) => {
        setDesc(event.target.value);
    }

    //  when image is uploaded
    const uploadImage = async () => {
        if (image) {

            const imageData = new FormData();
            imageData.append("file", image);
            imageData.append("upload_preset", "ov0twnfe");
            imageData.append("cloud_name", 'dxzb2ouxh');
            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dxzb2ouxh/image/upload', {
                    method: 'POST',
                    body: imageData
                });
                const responseData = await response.json();
                return responseData.url
            }

            catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }
    //  when video is uploaded
    const uploadVideo = async () => {
        if (video) {
            const videoData = new FormData();
            videoData.append("file", video);
            videoData.append("upload_preset", "ov0twnfe");
            videoData.append("cloud_name", 'dxzb2ouxh');

            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dxzb2ouxh/video/upload', {
                    method: 'POST',
                    body: videoData
                });
                const responseData = await response.json();
                return responseData.url
            } catch (error) {
                console.error('Error uploading video:', error);
            }
        }
    };

    //when clicked on submit it will upload image and video
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!title || !description || !image || !video) {
            alert("All Fields are mandatory");
            return;
        }
        try {
            const imageUrl = await uploadImage('image');
            const videoUrl = await uploadVideo('video');
            //sending api request to backend
            fetch('https://cloudinaryprojectbackend.onrender.com/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, imageUrl, videoUrl })
            });
            alert('Uploded successful!');
            navigate("/video");
        }
        catch (error) {
            console.error('Error uploading:', error);
        }
    }

    return (
        <div className="container-lg flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 p-4">
                <form className="inline-block items-center" onSubmit={handleSubmit}>
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
                    <textarea className="border-2 border-black rounded-md w-[100%] p-1" type="text" id="desc" rows="7" value={description} onChange={handleDesc} placeholder='Give a Description' />

                    <div className="form-row mr-4">
                        <label className='pt-4 pb-1 text-base w-[100%]' htmlFor="desc">Upload Thumbnail:</label>
                        <input className="p-1" type="file" onChange={(event) => setImage(event.target.files[0])} />
                    </div>
                    <div className="form-row">
                        <label className='pt-4 pb-1 text-base w-[100%]' htmlFor="desc">Upload Video:</label>
                        <input className="p-1" type="file" onChange={(event) => setVideo(event.target.files[0])} required />
                    </div>
                    <button className="p-2 mt-4 bg-blue-500 text-white rounded" type='submit'>Upload Video</button>
                </form>
            </div>
        </div>
    )

}
export default Upload;
