/* eslint-disable react/prop-types */
import { useState } from "react";
import searchContext from "./searchContext";

export default function SearchContextProvider({ children }) {
  const [searchdata, setSearchdata] = useState([]);
  const [searchfordata, setSearchfordata] = useState("no-result");
  return (
    <searchContext.Provider
      value={{ searchdata, setSearchdata, searchfordata, setSearchfordata }}
    >
      {children}
    </searchContext.Provider>
  );
}
