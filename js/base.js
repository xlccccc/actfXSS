let a = window.open('http://localhost:3000','app');
a = window.open('http://localhost:3000/login','app');
const username = 'http://47.115.201.35:7799/';
const password = '5543f02abbd854192cd335464c038e4c';
a.fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `username=${username}&password=${password}`
}).then(res => res.text()).then(res => console.log(res));
a.fetch('http://localhost:3000/vip', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `code=123`,
  redirect: 'follow'
}).then(response => {
// 处理VIP页面的响应
console.log(response);
})
.catch(error => {
// 处理错误
console.error(error);
});