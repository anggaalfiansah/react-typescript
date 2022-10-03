/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { deleteToLocalStorage } from "src/helper/helper";

type TableProps = { handleRefresh: Function; data: any };

interface IForm {
  email: string;
  name: string;
}

const ExampleTable: FC<TableProps> = (props) => {
  const { handleRefresh, data } = props;

  const handleDeleteData = (index: number) => {
    deleteToLocalStorage(index);
    handleRefresh();
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: IForm, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item?.email}</td>
            <td>{item?.name}</td>
            <td>
              <div role="button" onClick={() => handleDeleteData(index)}>
                <i className="bi bi-trash-fill" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExampleTable;
