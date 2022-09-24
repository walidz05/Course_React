import { useState, useReducer } from "react";
import ServicesContext from "../ServicesContext";
import NavReducer from "../reducers/NavReducer";
import {services} from '../../data/services';
import ServicesReducer from "../reducers/ServicesReducer";

const ServicesProvider = (props) => {

  const [state, dispatch] = useReducer( ServicesReducer , {services});

  return (
    <>
      <ServicesContext.Provider value={{ state, dispatch }}>
        {props.children}
      </ServicesContext.Provider>
    </>
  );
};

export default ServicesProvider;
