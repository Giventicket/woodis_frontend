import React from "react";
import { ReregisterForm } from "../components";
import axios from "axios";

const ReregisterFormContainer = () => {
  async function onChangePassword(id, oldPassword, newPassword) {
    let res;
    try {
      res = await axios.post("http://3.34.2.185:8000/api/user/pwUpdate", {
        id,
        oldPassword,
        newPassword,
      });
    } catch (error) {
      return false;
    }
    console.log(res);
    return true;
  }
  return <ReregisterForm onChangePassword={onChangePassword} />;
};

export default React.memo(ReregisterFormContainer);
