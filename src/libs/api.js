import axios from "axios";
import swal from "sweetalert";

function getCookie(cookieName) {
  var cookieValue = null;
  if (document.cookie) {
    var array = document.cookie.split(escape(cookieName) + "=");
    if (array.length >= 2) {
      var arraySub = array[1].split(";");
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
}

function setCookie(name, value, minutes) {
        if (minutes) {
                var date = new Date();
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
        } else {
               var expires = "";
        }
        
        document.cookie = name + "=" + value + expires + "; path=/";
}

export const asyncSignUp = async ({
  name,
  agency,
  phone,
  email,
  id,
  password,
}) => {
  try {
    await axios.post("http://3.34.2.185:8000/api/auth/signup", {
      name: name,
      agency: agency,
      phone: phone,
      email: email,
      id: id,
      password: password,
    });
    swal(
      `회원가입을 완료하였습니다! `,
      `${name}님 WOODIS에 오신 것을 환영합니다. `,
      "success",
      {
        button: "메인화면으로 돌아가기",
      }
    ).then(() => {
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
  } catch (e) {
    swal(`회원가입을 실패했습니다.`).then(() => {
      window.history.pushState({}, "", "/signup");
      window.location.reload();
    });
  }
};

export const asyncGetUser = async () => {
  const token = getCookie("user");
  try {
    const response = await axios.get("http://3.34.2.185:8000/api/user/getUser", {
      headers: {
		  token: token,
	  } 
    });
	localStorage.setItem('user', JSON.stringify(response.data))
	return response.data;
  } catch (e) {
    return;
  }
};

export const asyncLogin = async ({ id, password }) => {
  try {
    let response = await axios.post(
      "http://3.34.2.185:8000/api/auth/login",
      {
        id: id,
        password: password,
      },
      { withCredentials: true, crossDomain: true }
    );
    const {token} = response.data;
	setCookie("user", token, 30);
    response = await asyncGetUser();
	return response;
  } catch (e) {
    swal("아이디 혹은 비밀번호가 일치하지 않습니다.").then(() => {
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
    return;
  }
};
