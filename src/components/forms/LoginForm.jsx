import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const { stateAuth, dispatch } = useContext(AuthContext);

  const checkAuth = () => {
    if (stateAuth.isLogin) {
      navigate("/", { replace: true });
    }
  };
  return <div className="">LoginForm</div>;
}

export default LoginForm;
