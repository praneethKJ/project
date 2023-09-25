import express from 'express';
import Upload from "../models/Upload.js";
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

cloudinary.config({
    cloud_name: 'dxzb2ouxh',
    api_key: '256832921189371',
    api_secret: 'EojmDHBHhhDNy6An5BN8Q4O09Wc'
});

router.post('/upload', async (req, res) => {
    console.log('Request Body:', req.body);
    const { title, description, imageUrl, videoUrl } = req.body; // Corrected destructuring

    if (!imageUrl || !videoUrl) {
        return res.status(400).json({ errors: "Image and video URLs are both required." });
    }

    try {
        const video = await Upload.create({
            title: title,
            description: description,
            image: imageUrl,
            video: videoUrl,
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

export default router;
