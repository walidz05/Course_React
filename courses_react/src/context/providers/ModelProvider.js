import { useState,useReducer } from "react";
import ModelContext from "../ModelContext";
import ModelReducer from '../reducers/ModelReducer';

const ModelProvider = (props) => {

 const [state,dispatch] =  useReducer(ModelReducer,

{modelStatus: false});

const [login,setLogin] = useReducer(
  ModelReducer,
  { login: false }
);

  return (
    <>
      <ModelContext.Provider value={{ state, dispatch, login, setLogin }}>
        {props.children}
      </ModelContext.Provider>
    </>
  );

}

export default ModelProvider;


