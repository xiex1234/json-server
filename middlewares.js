module.exports = (req, res, next) => {
  // 获取token
  const token = req.headers.authorization;
  console.log("token", token);

  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE" ||
    req.method === ""
  ) {
    // 判断是否有token，没有token返回401
    if (!token) {
      return res.status(401).json({
        code: 401,
        message: "请先登录,无权限访问",
      });
    }
    next();
  }
};
