

export const NavReducer = (state,action) => {

      if (action.type === "OPEN_NAV") {
        return {state:true};
      }
       else if (action.type === "CLOSE_NAV") {
         return !state;
       }
      
      return state;
}


export default NavReducer