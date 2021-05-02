import axios from "axios";
import swal from "sweetalert";
import getCookie from "./getCookie";
import setCookie from "./setCookie";

export const asyncSignUp = async ({
  name,
  agency,
  phone,
  email,
  id,
  password,
  identity,
  authKey,
}) => {
  try {
    await axios.post("http://3.34.2.185:8000/api/auth/signup", {
      dataBody: {
        RRNO_BFNB: identity.slice(0, 6),
        ENCY_RRNO_LSNM: identity.slice(6, 13),
        ENCY_SMS_CRTF_NO: "1111111",
        CRTF_UNQ_NO: authKey,
      },
      signup: {
        name: name,
        agency: agency,
        phone: phone,
        email: email,
        id: id,
        password: password,
      },
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
    const response = await axios.get(
      "http://3.34.2.185:8000/api/user/getUser",
      {
        headers: {
          token: token,
        },
      }
    );
    console.log("response user/getUser:", response);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (e) {
    console.log("asyncGetUser", e.message);
    return;
  }
};

export const asyncLogin = async ({ id, password }) => {
  try {
    let response = await axios.post("http://3.34.2.185:8000/api/auth/login", {
      id: id,
      password: password,
    });
    const { token } = response.data;
    console.log("response auth/login :", response);
    setCookie("user", token, 30);
    response = await asyncGetUser();
    console.log("response asyncGetUser:", response);
    return response;
  } catch (e) {
    console.log("asyncLogin", e.message);
    swal("아이디 혹은 비밀번호가 일치하지 않습니다.").then(() => {
      window.history.pushState({}, "", "/");
      window.location.reload();
    });
    return;
  }
};

export const asyncGetTranList = async ({ year, month, acc }) => {
  try {
    const token = getCookie("user");
    let lastDate = new Date(year, month, 0).getDate();
    if (month.length === 1) month = "0" + month;
    let response = await axios.post(
      "http://3.34.2.185:8000/api/user/getTranList",
      {
        dataHeader: {
          UTZPE_CNCT_IPAD: "",
          UTZPE_CNCT_MCHR_UNQ_ID: "",
          UTZPE_CNCT_TEL_NO_TXT: "",
          UTZPE_CNCT_MCHR_IDF_SRNO: "",
          UTZ_MCHR_OS_DSCD: "",
          UTZ_MCHR_OS_VER_NM: "",
          UTZ_MCHR_MDL_NM: "",
          UTZ_MCHR_APP_VER_NM: "",
        },
        dataBody: {
          INQ_ACNO: acc,
          INQ_STA_DT: year + month + "01",
          INQ_END_DT: year + month + `${lastDate}`,
          NEW_DT: "20140522",
          ACCT_KND: "P",
          CUCD: "KRW",
        },
      },
      {
        headers: {
          token: token,
          appKey: "APPKEYISATRASHVALUE",
        },
      }
    );
    console.log("response user/getTranList :", response);
    return response.data.dataBody.GRID;
  } catch (e) {
    console.log("asyncGetTransList", e.message);
    return;
  }
};

export const asyncAuth = async ({ name, agency, phone, identity }) => {
  try {
    const response = await axios.post(
      "http://3.34.2.185:8000/api/auth/getCellCerti",
      {
        dataBody: {
          COMC_DIS: agency,
          HP_NO: phone.slice(0, 3) + phone.slice(4, 8) + phone.slice(9, 13),
          HP_CRTF_AGR_YN: "Y",
          FNM: name,
          RRNO_BFNB: identity.slice(0, 6),
          ENCY_RRNO_LSNM: identity.slice(6, 13),
        },
      }
    );
    console.log("asyncAuth", response.data);

    return response.data;
  } catch (e) {
    return;
  }
};

export const asyncGetDiscount = async ({ year, month, code, acc }) => {
  let token = getCookie("user");
  if (month.length === 1) month = "0" + month;

  try {
    const response = await axios.post(
      "http://3.34.2.185:8000/api/user/getDiscount",
      {
        year: Number(year),
        month: month,
        code: code,
        acc: acc,
      },
      {
        headers: {
          token,
        },
      }
    );
    console.log("asyncAuth", response.data);

    return response.data.dataBody.GRID;
  } catch (e) {
    return;
  }
};
