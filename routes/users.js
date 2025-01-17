var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.get("/sseDemo", function (req, res, next) {
    res.setHeader("X-Accel-Buffering", "no");
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const timeId = setInterval(() => {
        console.log("setInterval on sseDemo");
        const data = {data: "dummy data!"};
        res.send(JSON.stringify(data));
    }, 3000);
});

module.exports = router;
