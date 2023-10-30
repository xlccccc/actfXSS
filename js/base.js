// 访问您的网站
fetch('http://124.70.33.170:3000/')
  .then(response => {
    // 登录
    const username = 'http://47.115.201.35:7799/';
    const password = '5543f02abbd854192cd335464c038e4c';
    return fetch('http://124.70.33.170:3000//login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${username}&password=${password}`
    });
  })
  .then(response => {
    // 等待登录成功后重定向到主页
    return fetch('http://124.70.33.170:3000/');
  })
  .then(response => {
    return fetch('http://124.70.33.170:3000//vip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `code=123`,
      redirect: 'follow'
    });
  })
  .then(response => {
    // 处理VIP页面的响应
    console.log(response);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });