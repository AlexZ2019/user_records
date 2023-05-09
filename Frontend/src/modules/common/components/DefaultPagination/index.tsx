import { Pagination } from "antd";
import { useState } from "react";

type FetchMoreArgs = {
  page: number;
};
const DefaultPagination = ({ total, getNewPage }: { total: number, getNewPage: (arg: FetchMoreArgs) => void } ) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    getNewPage({ page });
  }

  return <Pagination current={currentPage} total={total} pageSize={pageSize} onChange={onPageChange} />
}

export default DefaultPagination;
