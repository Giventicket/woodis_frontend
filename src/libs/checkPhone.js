export default function checkPhone(str) {
  var reg_email = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}
