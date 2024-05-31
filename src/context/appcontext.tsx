import React, { createContext, useState } from "react";

export const Context = createContext<any>(null);

const AppContext = (props: any) => {
  const { children } = props;
  const [favourtiesList, setFavourtiesList] = useState<any>([]);
  
  return (
    <Context.Provider value={{ setFavourtiesList, favourtiesList }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
