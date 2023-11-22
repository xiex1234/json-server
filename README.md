## json-server 工程化启动

```bash
node server.js
有nodemon的可以用nodemon server.js
```

## 启动后访问

```bash
http://localhost:8888/user
http://localhost:8888/user?_page=1&_limit=10
http://localhost:8888/user?_page=1&_limit=10&_sort=id&_order=desc
http://localhost:8888/user?_page=1&_limit=10&_sort=id&_order=desc&_where=(id>10)

以上是正常的访问方式，如果要访问单个数据库，需要在url后面加上数据库的名字，如：

http://localhost:8888/user/login



localhost可以换成你的ip地址，如：

http://192.168.1.100:8888/user/login
```
