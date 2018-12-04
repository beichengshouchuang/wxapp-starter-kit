/**
 *    请求二次封装
 *
 */
function request() {
  wx.request({
    url: 'url', //开发者服务器接口地址",
    data: 'data', //请求的参数",
    method: 'GET',
    dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    success: res => {},
    fail: () => {},
    complete: () => {}
  });
}