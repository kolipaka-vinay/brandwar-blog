import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { 
    //VIDEO FOLDER ROUTES
    getVideoFolders, 
    createVideoFolder, 
    updateVideoFolder,
    deleteVideoFolder, 

    //vIDEOS ROUTES
    getVideos, 
    createVideo, 
    updateVideo, 
    deleteVideo, 
 } from "../controllers/videoController.js";
const router = express.Router();

//FOLDER ROUTES
router.get("/",requireAuth,getVideoFolders);
router.post("/",requireAuth,createVideoFolder);
router.put("/:id",requireAuth,updateVideoFolder);
router.delete("/:id",requireAuth,deleteVideoFolder);

//VIDEO ROUTES
router.get("/:folderId/videos",requireAuth,getVideos)
router.post("/:folderId/videos",requireAuth,createVideo)
router.put("/videos/:id",requireAuth,updateVideo)
router.delete("/videos/:id",requireAuth,deleteVideo)

export default router;