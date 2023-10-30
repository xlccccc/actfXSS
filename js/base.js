var loginData = {
  username: "http://47.115.201.35:7799/", // 替换为您的用户名
  password: "5543f02abbd854192cd335464c038e4c" // 替换为您的密码
  };
  
  // 将登录数据转换为表单编码格式
  var formData = new URLSearchParams();
  for (var key in loginData) {
  formData.append(key, loginData[key]);
  }
  
  // 使用Fetch API进行登录
  fetch("/login", {
  method: "POST",
  body: formData,
  headers: {
  "Content-Type": "application/x-www-form-urlencoded"
  },
  credentials: "include" // 包括身份验证信息
  })
  .then(function (response) {
  if (response.ok) {
    return fetch("/vip", {
      method: "POST", // 使用POST请求
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "include" // 包括身份验证信息
    });
  } else {
    throw new Error("登录失败");
  }
  
  
  })
  .then(function (vipResponse) {
  if (vipResponse.ok) {
  return vipResponse.text();
  } else {
  throw new Error("访问VIP页面失败");
  }
  })
  .then(function (vipData) {
  console.log("VIP页面内容:", vipData);
  // 在这里处理VIP页面的数据
  })
  .catch(function (error) {
  console.error("出错:", error);
  // 在这里处理错误
  });