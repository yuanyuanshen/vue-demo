# vue-demo

> 根据github上点赞数排名靠前的项目，自己一步一步做了一遍

## （一）项目使用

``` bash
# 安装项目依赖
npm install

# 本地运行项目
npm run dev

# 项目构建
npm run build
```

## （二）项目介绍

### 1.参考项目

[vue-elm](https://github.com/bailicangdu/vue2-elm)

### 2.项目功能

#### 修改axios封装

1. axios封装参考地址 [地址](https://juejin.im/post/5ae432aaf265da0b9c1063c8)

2. axios部分在项目的http目录中

#### home首页

1. 登录注册
2. 定位当前城市
3. 手动选择城市


#### 通用header

1. 判断登录状态显示 '注册登录' or 已登录图标（右侧）
2. 返回上一页（左侧）
3. 定位地址（中部）

#### 通用footer

1. 外卖
2. 搜索
3. 订单
4. 我的

#### 注册登录页

> 优化点：引入element-ui加入开关组件 可以在短信登录和账户登录间切换

#### 商家页mSite

1. 食品分类列表需要引入swiper

> 优化点：之前使用swiper.min.js 代码会报错，所以我安装 swiper的npm包

```
npm install swiper --save
# 使用方法
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
```
*注意：安装版本"swiper": "^4.4.1",添加分页的代码有变化，请参考代码或者[swiper官网](https://www.swiper.com.cn/usage/index.html)*

2. 附近商家列表










