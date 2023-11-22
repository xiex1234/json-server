module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // 获取token
  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE" ||
    req.method === ""
  ) {
    if (!token) {
      return res.status(401).json({
        code: 401,
        message: "请先登录,无权限访问",
      });
    }
    next();
  }

  // // 获取cookie
  // if (req.method === "GET") {
  //   const cookie = req.headers.cookie;

  //   if (cookie) {
  //     const cookies = cookie.split(";");

  //     cookies.forEach((item) => {
  //       const [key, value] = item.split("=");

  //       // 设置请求头
  //       if (key === "token") {
  //         res.header("X-Token", value);
  //       }
  //     });
  //   }
  // }

  // next();
};
