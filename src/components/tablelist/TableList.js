import { Table } from "react-bootstrap";
import "./TableList.css";

const TableList = ({ responseApi, orderByField }) => {
  return (
    <div className="table-container">
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th
              className="table-field"
              onClick={() => orderByField("comercio")}
            >
              Comercio
            </th>
            <th className="table-field" onClick={() => orderByField("cuit")}>
              CUIT
            </th>
            <th>Concepto 1</th>
            <th>Concepto 2</th>
            <th>Concepto 3</th>
            <th>Concepto 4</th>
            <th>Concepto 5</th>
            <th>Concepto 6</th>
            <th>Balance actual</th>
            <th>Activo</th>
            <th>Última venta</th>
          </tr>
        </thead>
        <tbody>
          {responseApi.data.map((store, index) => {
            return (
              <tr key={index}>
                <td>{store.id}</td>
                <td>{store.comercio}</td>
                <td>{store.cuit}</td>
                <td>{store.concepto_1}</td>
                <td>{store.concepto_2}</td>
                <td>{store.concepto_3}</td>
                <td>{store.concepto_4}</td>
                <td>{store.concepto_5}</td>
                <td>{store.concepto_6}</td>
                <td>{store.balance}</td>
                <td>{store.activo === 1 ? "Activo" : "Inactivo"}</td>
                <td>{store.ultima_venta}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
