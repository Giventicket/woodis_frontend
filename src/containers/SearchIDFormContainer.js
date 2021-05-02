import React from "react";
import { SearchIDForm } from "../components";
import axios from "axios";

const SearchIDFormContainer = () => {
  async function onSearchID(name, phone, email) {
    let res;
    try {
      res = await axios.post("http://3.34.2.185:8000/api/user/findUser", {
        name,
        phone,
        email,
      });
    } catch (error) {
      console.log(error);
      return undefined;
    }
    console.log(res);
    return res.data.id;
  }
  return <SearchIDForm onSearchID={onSearchID} />;
};

export default React.memo(SearchIDFormContainer);
