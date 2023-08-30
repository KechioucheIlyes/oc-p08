
const express = require('express');
const likeCtrlr = require("../../controllers/likes/likes")
const router = express.Router()


router.post("/post", likeCtrlr.postLikes)
router.get("/get", likeCtrlr.getLikes)

module.exports = router
