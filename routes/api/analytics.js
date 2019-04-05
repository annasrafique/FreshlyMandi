const express = require("express");
const router = express.Router();

// @route   GET api/analytics/test
// @desc    Test analytics route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Analytics Works" }));

module.exports = router;
