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
import DefaultPagination from "../../../common/components/DefaultPagination";

type DataIndex = keyof IData;
const Users = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const { data, loading, refetch } = useQuery(USERS_QUERY);
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
      <Table columns={columns} rowKey={user => user.id} dataSource={data?.getUsers?.users} loading={loading} pagination={false} />
      <DefaultPagination getNewPage={refetch} total={data?.getUsers?.total}/>
    </div>
  )
}

export default Users;
