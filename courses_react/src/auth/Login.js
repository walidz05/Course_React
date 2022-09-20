import React, { useContext } from "react";
import ModelContext from "../context/ModelContext";

const Login = (props) => {
  const { state: stateModel, dispatch } = useContext(ModelContext);

  return (
    <form>
      <div className="modal__heading">
        <h3>Login</h3>
      </div>

      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Enter email"
        />
      </div>

      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="password"
        />
      </div>

      <div className="group flex">
        <input type="submit" name="" className="btn-dark" value="Login" />
        <span
          onClick={() =>
            dispatch({ type: "OPEN_MODEL", payload: props.currentModel })
          }
          style={{ cursor: "pointer" }}
        >
          create new account ?
        </span>
      </div>
    </form>
  );
};

export default Login;
