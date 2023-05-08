import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../graphql/queries/getUser";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";

const columns: ColumnsType<any> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    width: '20%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address - b.address,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status - b.status,
    sortDirections: ['descend', 'ascend'],
  },
];
const Users = () => {

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const { data, loading, fetchMore } = useQuery(USERS_QUERY);

  return (
    <div>
      <Table columns={columns} dataSource={data.getUsers.users} loading={loading} pagination={tableParams.pagination} />
    </div>
  )
}

export default Users;
