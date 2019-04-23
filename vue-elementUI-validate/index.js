const regArr = {
  username: /^[a-zA-Z0-9_-]{4,16}$/,
  phone: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(166)|(17[5-7])|(18[0,5-9]))\d{8}$/,
  email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
};
/**
 * @param value 要验证的数据
 * @param type 正则表达式类型
 * @param callback 回调函数
 * @param errorText 验证错误的文本
 * @param required 必须的文本，空为非必填
 */
function validateReg(value, type, callback, errorText = "", required = null) {
  if (required) {
    if (!value) {
      callback(new Error(required));
      return;
    }
  }
  if (regArr[type].test(value)) {
    callback();
  } else {
    callback(new Error(errorText));
  }
}
export default validateReg;
