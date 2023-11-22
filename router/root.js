const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const Login = jsonServer.router(path.join(__dirname, "../DB/db2.json"));
// 导入中间件
const midd = require("../middlewares");
// 使用中间件
server.use(midd);

server.get("/root/echo", (req, res) => {
  res.jsonp({
    data: Login.db.users,
    code: 200,
    message: "success",
  });
});

Login.render = (req, res) => {
  // 如果响应成功状态就是200，不然就是0
  if (res.statusCode < 200 && res.statusCode > 300) {
    return res.jsonp({
      data: res.locals.data,
      code: res.statusCode,
      message: "请求出错",
    });
  }

  res.jsonp({
    data: res.locals.data,
    code: 200,
    message: "success",
  });
};

// 配置根路径
server.use("/root", Login);

module.exports = server;
