import express from "express";
import {
  getAllJobs,
  postJob,
  getMyJobs,
  updateJob,
  deleteJob,
  getSinglejob,
} from "../controller/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getMyJobs);
router.get("/updatejob/:id", isAuthorized, updateJob);
router.get("/deletejob/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSinglejob);

export default router;
