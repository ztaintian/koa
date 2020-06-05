# koa2框架 #
  https://www.jianshu.com/p/bca058dc54ad

    全局安装 koa-generator
    npm install -g koa-generator

    创建项目
    koa2 demo -e --ejs

    进入项目
    cd demo

    安装依赖
    npm install

    运行项目
    第一种：npm start (每次代码修改都需要重启项目)
    第二种：npm run dev (代码发生改变时自动重启项目)
  


# Koa2实现基本的登录注册 #

    ├── Koa2  
    │   ├── config  
    │   │   ├── DBconfig.js// 数据库配置文件  
    |   ├── controller  
    |   |   ├──userController.js  
    |   ├── lib  
    |   |   ├──mysql.js //连接Mysql  
    |   ├── router  
    |   |   ├──router.js // 总路由  
    |   |   ├──userRoute.js  
    |   ├── service  
    |   |   ├──user.js  
    |   ├── app.js //入口文件  
    └── ── package.json  



    mysql8.0版本报错：Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client解决办法（修改加密规则为普通模式，默认是严格加密模式）：  
    1.打开命令行小黑屏，进入MySQL的bin目录，然后输入mysql -u root -p，输入密码  
    2.然后依次输入ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; (修改加密规则 （必写）)ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; (更新用户密码 )FLUSH PRIVILEGES; #刷新权限（不输入也可以）  
    3.输入刚刚修改的密码，再次测试连接，搞定

