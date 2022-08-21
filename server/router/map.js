let express = require("express");
let router = express.Router();
let mapData = require("../mock/china.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是map组件", chinaData: mapData });
});
module.exports = router;
