### 全局安装lerna 和pnpm
```
npm i lerna pnpm -g
```
### 创建文件夹并进入文件夹
```
mkdir monorepo-project
cd monorepo-project
```
### 使用git初始化
```
git init
```
### 使用lerna初始化
```
lerna init
```
### 在根目录创建pnpm-workspace.yaml文件
```
packages:
  - 'packages/*'
```
### 使用lerna创建包，注意不要在npm中重名，可以使用前缀
```
lerna create @xiaobai/common-util
```
### 使用create-react-app创建react项目
```
cd packages
pnpm dlx create-react-app react-project
// or
cd packages
npx create-react-app react-project
```
### 在根目录运行以下命令安装依赖
```
pnpm i --filter react-project
```
### 使用create-umi创建antd-pro项目
```
cd packages
mkdir antd-pro-project
cd antd-pro-project
pnpm dlx create-umi@latest
// or
cd packages
mkdir antd-pro-project
cd antd-pro-project
npx create-umi@latest
```
### 同理上面的命令可以选择创建vue项目
```
cd packages
mkdir vue-project
cd vue-project
pnpm dlx create-umi@latest
// or
cd packages
mkdir vue-project
cd vue-project
npx create-umi@latest
```
### 使用esm模块规范，在common-util中package.json文件中添加
```
"type": "module"
```
### 编辑common-util包中的文件内容，修改成esm模块规范
```
'use strict';

function commonUtil() {
  return 'Hello from commonUtil';
}

export {
  commonUtil
}
```
### 在react-project项目中使用common-util包，需要建立软链接，在根目录下执行
```
pnpm add @xiaobai/common-util --filter react-project
```
### or在react-project项目package.json中手动添加
```
"dependencies": {
  "@xiaobai/common-util": "workspace:^"
}
// 在根目录中执行
pnpm i --filter react-project
// or在react-project目录下执行
pnpm i
```
### 当然也可以将common-util包放在根目录下，直接在根目录package.json文件中手动添加，这样所有的子项目都可以使用common-util
```
"dependencies": {
  "@xiaobai/common-util": "workspace:^"
}
// 在根目录中执行
pnpm i
```
### 在react-project中引入common-util
```
// react-project/src/App.js
import logo from './logo.svg';
import './App.css';
import { commonUtil } from '@xiaobai/common-util'

function App() {
  console.log("====> App commonUtil", commonUtil())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
### 查看common-util是否引入成功，在根目录执行
### 将react-project项目的package.json启动命令修改为dev，这样三个项目的启动命令都是dev，可以使用下面命令同时启动三个项目
```
lerna run dev
```
### 运行单个项目
```
lerna run --scope react-project dev
```
### 项目启动成功，可以在控制台看到打印消息
### 下载线上依赖包
```
pnpm add webpack -w
// or
pnpm add vite --filter vue-project
```
### 如果想在每一个子项目中都安装，使用-r参数即可
```
pnpm add axios -r
```
### 全部删除packages里子项目的node_modules，使用
```
lerna clean
```
### 依赖包的处理在新版本的lerna中已经丢弃，比如
```
lerna bootstrap
lerna add 
lerna link
```
## 依赖包的下载安装直接用pnpm管理
### 如果要将包发布到npm中，使用 lerna publish
#### 私有项目不发布，这种情况下在项目中的package.json文件中添加"private": true

### 提交代码并将其上传到自己的github仓库
```
git add .
git commmit -m 'xxxx'
git remote add origin https://github.com/<your-username>/<your-repository-name>.git
git push origin master -u
```