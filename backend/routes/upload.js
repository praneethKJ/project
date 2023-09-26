import express from 'express';
import Upload from "../models/Upload.js";
const router = express.Router();
//page one: psot data
router.post('/', async (req, res) => {
    console.log('Request Body:', req.body);
    const { title, description, imageUrl, videoUrl } = req.body; // Corrected destructuring

    if (!imageUrl || !videoUrl) {
        return res.status(400).json({ errors: "Image and video URLs are both required." });
    }

    try {
        const video = await Upload.create({
            title,
            description,
            imageUrl,
            videoUrl,
        });
        if (video) {
            res.status(201).json({
                success: true,
                video,
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Video creation failed.',
            });
        }
    } catch (error) {
        console.error('Error creating video:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the video.',
        });
    }
});

//page two: get data
router.get('/', async (req, res) => {
    try{
    const videoData = await Upload.find();
    res.status(200).json({
      message: "Successfully Fetched videoData",
      videoData,
    });
}catch{
    res.status(500).json({
        message: "Something went wrong while fetching data",
    })
}
});
//page three: get specific video
router.get('/:id', async (req, res) => {
    try{
    const clickedData = await Upload.findById(req.params.id);
    res.status(200).json({
      message: "Successfully Fetched clickedData",
      clickedData,
    });
}catch{
    res.status(500).jason({
        message: "Something went wrong while fetching data",
    })
}
});

export default router;
