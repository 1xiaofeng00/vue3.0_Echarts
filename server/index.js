let express = require("express");
let app = express();

//设置跨域
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE,OPTIONS");
  next();
});

// 引用路由文件;
let chartOne = require("./router/one");
let chartTwo = require("./router/two");
let chartThree = require("./router/three");
let chartFour = require("./router/four");
let chinaData = require("./router/map");

// 使用中间件配置路由
app.use("/one", chartOne);
app.use("/two", chartTwo);
app.use("/three", chartThree);
app.use("/four", chartFour);
app.use("/map", chinaData);

app.listen(3000, () => {
  console.log("服务器启动成功");
});
