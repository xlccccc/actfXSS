var a = window.open('http://124.70.33.170:3000', 'app');
a.onload = function () {
  const username = 'http://47.115.201.35:7799/';
  const password = '5543f02abbd854192cd335464c038e4c';

  // 等待新窗口加载完成后，执行登录请求
  a.fetch('http://124.70.33.170:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&password=${password}`
  })
  .then(res => res.text())
  .then(res => {
    console.log(res);

    // 继续在新窗口中执行VIP请求
    a.fetch('http://124.70.33.170:3000/vip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `code=123`,
      redirect: 'follow'
    })
    .then(response => {
      // 处理VIP页面的响应
      console.log(response);
    })
    .catch(error => {
      // 处理VIP页面请求错误
      console.error(error);
    });
  })
  .catch(error => {
    // 处理登录请求错误
    console.error(error);
  });
};
