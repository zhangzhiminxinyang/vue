# 1 学习过程

所有Vue.js项目都是在Webpack框架下进行开发的。

## 框架学习的一般顺序

1. 安装
2. 新建一个页面
3. 做一些简单变量的渲染
4. 实现页面跳转（路由）
5. 实现页面间参数的传递（路由）
6. 实现真实的http请求
7. 提交表单
8. 使用一些技巧让代码层次化（组件）

# 2 NVM、NPM、Node

## 2.1 NVM：Node版本管理器

### 下载：https://github.com/coreybutler/nvm-windows/releases 

 下载nvm-setup.zip ，此版本为安装版本

## 2.2 安装NVM

1. 双击nvm-setup.exe文件，开始安装

   ![image](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_1.png)

2. 选择nvm安装路径

   ![安装路径选择](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_2.png)

3. 设置nvm快捷方式位置

   ![设置nvm快捷方式位置](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_3.png)

4. 开始安装

   ![开始安装](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_4.png)

5. nvm安装完成

   ![nvm安装完成](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_6.png)

6. 检查环境变量路径配置是否正确

7. 启动运行窗口

   ![启动运行窗口](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_7.png)

8. 检测nvm是否安装成功

   ```
   nvm
   ```

   ![nvm安装成功标识](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_8.png)

9. 关闭运行窗口，配置nvm配置文件

10. 配置nvm配置文件。默认情况下，使用nvm安装node时会连接国外服务器，速度较慢，因此通过修改配置文件方式改成连接国内的镜像服务器。打开nvm安装目录的配置文件settings.txt，进行如下配置。

    ```
    root: D:\nvm
    path: D:\nodejs
    arch: 64
    proxy: none
    node_mirror: https://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm/
    ```

    ![配置国内镜像服务器](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_9.png)

## 2.3 安装Nodejs和npm

1. 启动运行窗口，查看可用nodejs版本

   ```
   nvm list available
   ```

   ![查看可用nodejs版本](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_10.png)

2. 选择待安装版本进行安装

   ```
   nvm install 14.5.0
   ```

   ![指定nodejs版本进行安装](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_11.png)

3. 检测nodejs和npm是否安装成功

   ```
   nvm use 14.5.0
   node -v
   npm -v
   ```

   ![检测nodejs和npm是否安装成功](https://github.com/zhangzhiminxinyang/vue/blob/master/images/NVM_install_12.png)

## 2.4 安装Webpack

1. 全局安装Webpack

   ```
   npm install webpack webpack-cli -g
   ```

   ![安装Webpack](https://github.com/zhangzhiminxinyang/vue/blob/master/images/webpack_install_1.png)

2. 检测Webpack是否安装成功

   ```
   webpack -v
   ```

   ![检测Webpack是否安装成功](https://github.com/zhangzhiminxinyang/vue/blob/master/images/webpack_install_2.png)

## 2.5 全局安装Vue.js

1. 安装Vue.js

   ```
   npm install vue vue-cli -g
   ```

    ![安装](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_install_1.png)

2. 检测是否安装成功

   ```
   vue -V
   ```

   ![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_install_2.png)

# 3 运行Vue

1. 运行窗口切换至项目目录，创建一个基于Webpack的项目

   ```
   vue init webpack hello
   ```

   ![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_exe_2.png)

   ![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_exe_3.png)

2. 安装依赖

   ```
   cd hello
   npm install
   ```

​	![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_exe_4.png)

3. 以默认端口运行

   ```
   npm run dev
   ```

​	![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_exe_5.png)

​	![测试](https://github.com/zhangzhiminxinyang/vue/blob/master/images/vue_exe_6.png)