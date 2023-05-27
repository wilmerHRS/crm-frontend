import { Thead } from "./Thead";
import { Row } from "./Row";
import { ICustomer } from "../../../interfaces/customer.interface";

interface Props {
  customers: ICustomer[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => Promise<void>;
}

export const Table = ({ customers, handleEdit, handleDelete }: Props) => {
  return (
    <div className="bg-white rounded-3 px-3 py-1">
      <table className="table table-hover">
        <Thead />
        <tbody>
          {customers.map((c) => (
            <Row
              key={c.idCustomer}
              customer={c}
              edit={() => handleEdit(c.idCustomer!)}
              _delete={() => handleDelete(c.idCustomer!)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
