import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        hello: "hhhs",
    };
    res.json(obj);
});

export default router;
