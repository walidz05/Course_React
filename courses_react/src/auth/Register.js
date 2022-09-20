import React, { useState, useContext } from "react";
import ModelContext from "../context/ModelContext";

const Register = (props) => {

  const {state:stateModel, dispatch } = useContext(ModelContext);

  return (
    <form>
      <div className="modal__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter name"
        />
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
        <input type="submit" name="" className="btn-dark" value="Register" />
        <span
          onClick={() =>
            dispatch({ type: "OPEN_MODEL", payload: props.currentModel })
          }
          style={{ cursor: "pointer" }}
        >
          are ayou have un account ?
        </span>
      </div>
    </form>
  );
};

export default Register;
