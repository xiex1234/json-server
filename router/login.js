const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const Login = jsonServer.router(path.join(__dirname, "../DB/db.json"));

server.get("/user/userinfo", (req, res) => {
  res.jsonp({
    data: req.body,
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

server.use("/user", Login);

module.exports = server;
