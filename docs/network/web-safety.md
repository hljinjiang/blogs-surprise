# Web安全漏洞

## XSS（跨站脚本攻击）
1. 通过虚假输⼊表单骗取⽤户个⼈信息
2. 显示伪造的⽂章或图⽚，诱导用户去点击
3. 通过表单输⼊，动态⽣成 **script** 等造成漏洞危险
4. 嵌入恶意脚本，修改页面数据

## CSRF（跨站请求伪造）
1. 跨站请求伪造是指黑客可以冒充用户向目标站点发送请求，从而获取用户信息，篡改用户数据
2. 用户验证存在，如 用户session存储在客户端，黑客使用该 session来伪造请求给目标站点

## SQL注⼊攻击
1. 通过表单输⼊，查询或提交时，使⽤处理过的字符串请求接⼝
1. 当服务器调⽤ SQL语句时，特殊的字符串就会注⼊到 SQL语句中，造成意想不到的结果
1. ⾮法查看或篡改数据库数据
1. 规避认证