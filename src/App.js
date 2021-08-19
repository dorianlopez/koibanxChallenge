import "./App.css";
import { useState } from "react";
import Logo from "./assets/images/logo.png";
import Search from "./components/search/Search";
import TableList from "./components/tablelist/TableList";
import { mockData } from "./config/mock";
import { getFilteredData } from "./api/storesApi";

const App = () => {
  const response = mockData;
  const [query, setQuery] = useState("");

  const orderByField = (field) => {
    let orderBy =
      query === ""
        ? `?q{}&h={"$orderby": {"${field}": 1}}`
        : `&h={"$orderby": {"${field}": 1}}`;
    let q = query + orderBy;

    getFilteredData(q);
  };

  const searchData = (qery) => {
    let q = query === "" ? query + qery : qery;

    setQuery(q);
    getFilteredData(q);
  };

  return (
    <div className="app">
      <img className="logo" src={Logo} alt="logo" />
      <Search searchData={searchData} />
      <TableList responseApi={response} orderByField={orderByField} />
    </div>
  );
};

export default App;
