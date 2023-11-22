const jsonServer = require("json-server");
const server = jsonServer.create();

const middlewares = jsonServer.defaults();

let router = require("./router/index");

// 解析body
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use(router);

server.use(middlewares);

// server.use(midd);

// 注册
// server.use("/user/login", (req, res) => {
//   // 查找数据是否已经存在
//   let flag = Login.db.getState().login.some((item) => {
//     return item.phone == req.body.phone;
//   });

//   if (flag) {
//     res.send({
//       code: 0,
//       message: "注册失败",
//     });
//     return;
//   }
// });

// 自定义路由
// server.get("/user/echo", (req, res) => {
//   console.log(req.body, "sahsj");

//   res.jsonp({
//     data: req.body,
//     code: 200,
//     message: "success",
//   });
// });

// // 改变响应结果
// Login.render = (req, res) => {
//   // 如果响应成功状态就是200，不然就是0
//   if (res.statusCode < 200 && res.statusCode > 300) {
//     return res.jsonp({
//       data: res.locals.data,
//       code: res.statusCode,
//       message: "请求出错",
//     });
//   }

//   res.jsonp({
//     data: res.locals.data,
//     code: 200,
//     message: "success",
//   });
// };

// server.use("/user", Login);

// server.use("/user2", DB2);

server.listen(8888, () => {
  console.log("JSON Server http://localhost:8888");
});
