const express = require("express");


const postController = require("../controllers/post");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

// AUTHENTICATED
router.post(
  "", 
  checkAuth,
  extractFile,
  postController.createPost
);

// AUTHENTICATED
router.put(
  "/:id",
  checkAuth, 
  extractFile,
  postController.updatePost
);

// OPEN
router.get("", postController.getPosts);

// OPEN
router.get("/:id", postController.getPost);

// AUTHENTICATED
router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
