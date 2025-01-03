const express = require('express');
const router = express.Router();
const multer = require("multer");

const {
    getPictures,
    getPictureFolder,
    postPicturesFolder,
    deletePictures,
    deleteSinglePicture,
    upload2
} = require("../controllers/pictureController");

//Get all pictures
router.get("/", getPictures);

//Get pictures from folder
router.get('/:userId/:nodeId', getPictureFolder);

//post new picture(s) to specific folder, middle arguement is a multer variable to post files
router.post('/:userId/:nodeId', upload2.array('images',30), postPicturesFolder);

//delete pictures from folder
router.delete('/:userId/:nodeId', deletePictures);

//delete a single picture
router.delete('/', deleteSinglePicture);

module.exports = router;