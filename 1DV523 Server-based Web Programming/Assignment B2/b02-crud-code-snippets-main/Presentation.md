下面是一套 **约 6 分 40 秒的演示流程**，从空数据库开始。操作说明用中文，口播用英文；按自然速度讲，不必逐字背诵。

录制前准备：

- MongoDB 容器已运行，终端执行 `npm start`。
- 浏览器打开 `http://localhost:3000/snippets`，清除地址里的筛选参数。
- VS Code 打开 B02 项目，提前准备好下面要展示的文件。
- 准备两个演示账号：`alice`、`bob`，使用专用测试密码。
- 数据库只在录制前清空，不必在视频中演示清空命令。
- 不展示 `.env`、密码或 Cookie 值。

**0:00–0:30｜介绍与匿名访问**

操作：展示空列表，指出导航中的 Login / Register。

英文口播：

> This is my B02 code snippet application, built with Node.js, Express, Mongoose, and MongoDB. I use EJS to render the pages on the server.
>
> Visitors can browse snippets without logging in. Registered users can create snippets and edit or delete their own content. I have also implemented tags and filtering by tag and author.
>
> I am starting with an empty database.

**0:30–1:25｜注册、重复用户名和登录**

操作：

1. 注册 `alice`，展示成功提示和登录页面。
2. 再次用 `alice` 注册，展示用户名已存在提示。
3. 转到登录页，输入一次错误密码。
4. 使用正确密码登录。

英文口播：

> First, I will register a user called Alice. After registration, the application redirects me to the login page and displays a confirmation message.
>
> Usernames must be unique. If I try to register Alice again, the application rejects the duplicate username.
>
> An incorrect password is also rejected. With the correct credentials, I can log in. The navigation now shows the create and logout options.

**1:25–2:45｜创建、编辑和删除多行代码**

操作：创建第一条片段，填写：

标题：

```text
Greeting function
```

代码：

```js
function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet('Alice'))
```

标签：

```text
JavaScript, functions, javascript
```

提交后指出换行、缩进、作者、去重后的小写标签。刷新一次，展示数据仍存在。

然后：

1. 编辑标题为 `Reusable greeting function`。
2. 在代码末尾增加：
   ```js
   console.log(greet('Bob'))
   ```
3. 保存。
4. 另建一条临时片段，标题 `Temporary snippet`，代码 `console.log('temporary')`。
5. 删除临时片段，保留第一条。

英文口播：

> I can create a snippet containing multiple lines of code. The application preserves the line breaks and indentation when displaying it.
>
> Tags are optional. Here I entered JavaScript twice, with different capitalization. The application converts tags to lowercase and removes duplicates.
>
> After refreshing, the snippet is still available because it is stored in MongoDB.
>
> I can edit my snippet and save the changes. I will also create and delete a temporary snippet to demonstrate the complete CRUD flow. Flash messages confirm the results of these actions.

**2:45–3:45｜第二个账号与归属权限**

操作：

1. 用 Alice 点击保留片段的 Edit，复制完整编辑地址。
2. 退出，指出匿名用户仍能看到片段，但没有 Edit / Delete。
3. 注册 `bob`，登录。
4. 指出 Bob 看得到 Alice 的片段，但没有编辑、删除按钮。
5. 把刚复制的 Alice 编辑地址粘到地址栏，展示 403。
6. 返回 `/snippets`。

英文口播：

> After logging out, I can still read public snippets, but I cannot modify them.
>
> I will now register and log in as Bob. Bob can see Alice’s snippet, but the edit and delete controls are not available.
>
> Hiding buttons is not sufficient protection, so the server also checks ownership. If Bob directly requests Alice’s edit URL, the server returns 403 Forbidden.
>
> The same ownership middleware protects the update and delete POST routes.

**3:45–4:35｜标签与作者组合筛选**

操作：Bob 创建一条片段：

标题：

```text
HTML greeting
```

代码：

```html
<section>
  <h1>Hello, world!</h1>
</section>
```

标签：

```text
html, example
```

随后快速展示：

1. 标签 `javascript` → 只显示 Alice 的片段。
2. 清除筛选。
3. 作者 `bob` → 只显示 Bob 的片段。
4. 保留作者 `bob`，标签填 `html` → 匹配 Bob 的 HTML 片段。
5. 将标签改成 `javascript` → 无结果。
6. 点击 Clear filters。

英文口播：

> Bob can create his own snippets. This HTML example is displayed as code rather than being interpreted as page markup.
>
> The optional filtering feature supports a tag, an exact author username, or both conditions together.
>
> With Bob and HTML selected, I see Bob’s matching snippet. If I select Bob and JavaScript, there are no matches. Clearing the filters restores the full list.

**4:35–5:40｜MVC 与请求流程**

切换 VS Code，按顺序展示：

| 文件 | 展示重点 |
|---|---|
| `src/routes/snippetRoutes.mjs` | 路由与权限中间件 |
| `src/controllers/snippetController.mjs` | `createSnippet` 的校验、保存、重定向 |
| `src/models/Snippet.mjs` | 字段及关联用户 |
| `views/index.ejs` | 循环展示、转义输出 |

英文口播：

> The application follows an MVC structure.
>
> Routes connect URLs and HTTP methods to controllers. Middleware checks authentication and ownership before protected controller actions run.
>
> Controllers validate input, call the models, and either render a view or redirect after a change.
>
> The Mongoose models define the stored data. Each snippet references its owner through a user ID.
>
> EJS views generate the HTML. User content is displayed using escaped output, so submitted HTML and script tags appear as text.
>
> For example, creating a snippet goes through the POST route, the security checks, input validation, and the model’s save operation. The controller then redirects to the list with a success message.

**5:40–6:20｜密码、session 和 CSRF**

操作：快速展示：

- `src/models/User.mjs` 中密码哈希和比较。
- `src/controllers/authController.mjs` 中 `session.regenerate`。
- `src/middleware/csrfMiddleware.mjs`。
- 一个表单中的 `_csrf` 隐藏字段。

英文口播：

> Passwords are hashed with bcrypt before storage, and login compares the submitted password with the stored hash.
>
> Authentication uses express-session. After a successful login, I regenerate the session and save the user ID before redirecting.
>
> POST forms also include a CSRF token tied to the session. The server rejects missing or incorrect tokens.
>
> CSRF validation and ownership checks have different purposes: the token protects against forged requests, while ownership checks determine whether the logged-in user may modify a particular snippet.

**6:20–6:50｜验证结果与改进空间**

操作：展示 `npm run lint` 无错误的终端结果即可。不要为了录制临时停止数据库；500 测试可以口头说明。

英文口播：

> I manually tested registration, login, CRUD operations, multiline content, filtering, and access restrictions. I also tested invalid CSRF tokens, cross-account modification attempts, and error handling when MongoDB was unavailable.
>
> ESLint passes. At the time of checking, the production dependency audit reported no known vulnerabilities, while development dependencies still had warnings.
>
> One improvement would be persistent session storage, because the current in-memory sessions are lost when the server restarts. Pagination would also help if the number of snippets grows.

录制时，**优先让观众看清每次操作的结果**：成功提示、列表变化、403 和筛选结果。如果超过七分钟，缩短代码讲解和临时片段的输入时间；不必在视频里重复全部 Console 安全测试。

这份口播中的验证结果以你实际完成的测试为准；最后的改进空间也可以换成你自己最想完善的部分。