const express = require("express");
const router = express.Router();

// @route   GET api/dashboard/test
// @desc    Test dashboard route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Dashboard Works" }));

module.exports = router;
