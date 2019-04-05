const express = require("express");
const router = express.Router();

// @route   GET api/settings/test
// @desc    Test settings route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Settings Works" }));

module.exports = router;
