const express = require("express");
const router = express.Router();

// @route   GET api/channels/test
// @desc    Test channels route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Channels Works" }));

module.exports = router;
