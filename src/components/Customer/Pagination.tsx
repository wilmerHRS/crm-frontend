import { StyleBtnAS, StyleBtnPag } from "./styled-components";
import { IPagination } from "../../interfaces/global.interface";
import { QueryCustomer } from "../../interfaces/customer.interface";

interface Props {
  data: IPagination;
  getData: (data: QueryCustomer) => Promise<void>;
}

export const Pagination = ({ data, getData }: Props) => {
  const page1 = data.pageNumber > 2 ? data.pageNumber - 1 : 1;
  const page2 = data.pageNumber > 2 ? data.pageNumber : 2;

  const handlePage = (pageNumber: number) => {
    if (!pageNumber) return;
    getData({
      pageNumber,
    });
  };

  return (
    <div className="d-flex justify-content-center pb-3">
      <div
        className="bg-white py-2 mt-3 px-4"
        style={{
          borderRadius: "20px",
        }}
      >
        <div className="d-flex justify-content-center">
          <StyleBtnAS
            className="c-gray-1 mx-1"
            style={{ fontSize: "13px" }}
            onClick={() => handlePage(data.previousPage!)}
          >
            Anterior
          </StyleBtnAS>
          <StyleBtnPag
            className="bg-gray-3 c-gray-1 py-1 px-3 mx-1"
            $active={data.pageNumber === page1}
            onClick={() => handlePage(page1)}
          >
            {page1}
          </StyleBtnPag>
          {data.totalPages > 1 ? (
            <StyleBtnPag
              className="bg-gray-3 c-gray-1 py-1 px-3 mx-1"
              $active={data.pageNumber === page2}
              onClick={() => handlePage(page2)}
            >
              {page2}
            </StyleBtnPag>
          ) : null}
          {data.totalPages > 2 && data.nextPage! > 0 ? (
            <span className="mx-1">...</span>
          ) : null}
          <StyleBtnAS
            className="c-gray-1 mx-1"
            style={{ fontSize: "13px" }}
            onClick={() => handlePage(data.nextPage!)}
          >
            Siguiente
          </StyleBtnAS>
        </div>
      </div>
    </div>
  );
};
