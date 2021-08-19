import { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "./Search.css";

const Search = ({ searchData }) => {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("2");

  const search = (filter) => {
    let query = "";
    let filterActive = filter ? filter : filterValue;
    console.log(filterActive);

    if (inputValue !== "" && filterActive === "2") {
      query = `?q={"$or": [{"id": "${inputValue}"}, {"comercio": "${inputValue}"}, {"cuit": "${inputValue}"}]}`;
    } else if (inputValue !== "" && filterActive !== "2") {
      query = `?q={"$or": [{"id": "${inputValue}"}, {"comercio": "${inputValue}"}, {"cuit": "${inputValue}"}], "activo": "${filterActive}"}`;
    } else if (inputValue === "" && filterActive !== "") {
      query = `q={"activo": "${filterActive}"}`;
    }

    searchData(query);
  };

  return (
    <div className="search-container">
      <div className="search-row">
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            onClick={() => search()}
            variant="outline-secondary"
            id="button-addon2"
          >
            Buscar
          </Button>
        </InputGroup>
      </div>

      <div className="filter-container">
        <div className="filter-row">
          <p className="filter-text">Ver: </p>
          <Form.Select
            onChange={(e) => {
              setFilterValue(e.target.value);
              search(e.target.value);
            }}
            value={filterValue}
          >
            <option value="2">Todos</option>
            <option value="1">Activos</option>
            <option value="0">Inactivos</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default Search;
