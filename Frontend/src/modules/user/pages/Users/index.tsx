import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../graphql/queries/getUser";
import { InputRef, Table } from "antd";
import { useRef, useState } from "react";
import { FilterConfirmProps } from "antd/es/table/interface";
import Title from "antd/es/typography/Title";
import { getColumnSearchProps } from "../../../common/utils/getColumnSearchProps";
import { IData } from "../../types";
import { userAddress, userAmount, userName, userRole, userStatus } from "../../components/UserColumns";
import AddUser from "../../components/AddUser";

type DataIndex = keyof IData;
const Users = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const { data, loading, fetchMore } = useQuery(USERS_QUERY);
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };


  const columns: any = [
    {...userName, ...getColumnSearchProps(
        'name', searchInput, handleSearch,
                handleReset, setSearchText,
                setSearchedColumn, searchedColumn, searchText)
    },
    userRole,
    userStatus,
    userAddress,
    userAmount
  ];

  return (
    <div>
      <div>
        <Title level={3}>Users</Title>
        <AddUser/>
      </div>
      <Table columns={columns} dataSource={data?.getUsers?.users} loading={loading} pagination={tableParams.pagination} />
    </div>
  )
}

export default Users;
