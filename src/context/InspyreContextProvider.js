import React, { createContext, useState, useEffect } from "react";


export const InspyreContext = createContext();

const InspyreContextProvider = props => {

  const [propts, setPrompts] = useState([]);

  const [editOnePrompt, setEditOnePrompt] = useState(null);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(propts), [propts]);
  });

  const addPropts = () => {
    
  };

  const deleteOnePrompt = id => {
    
  };

  const findItem = id => {
   
  };

  const editTask = (title, id) => {
   
  };

  return (
    <InspyreContext.Provider
      value={{
        


      }}
    >
      {props.children}
    </InspyreContext.Provider>
  );
};

export default InspyreContextProvider;
