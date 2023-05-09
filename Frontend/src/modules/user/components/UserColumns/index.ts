import { IData } from "../../types";

export const userName = {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: '30%',
};

export const userRole = {
  title: 'Role',
  dataIndex: 'role',
  key: 'role',
  width: '20%',
  filters: [
    {
      text: 'Admin',
      value: 'admin',
    },
    {
      text: 'Client',
      value: 'client',
    },
    {
      text: 'Business',
      value: 'business',
    },
  ],
  onFilter: (value: any, record: { role: string; }) => record.role.toLowerCase().startsWith(value),
  filterSearch: true,
};

export const userStatus = {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  filters: [
    {
      text: 'Open',
      value: 'open',
    },
    {
      text: 'Pending',
      value: 'pending',
    },
    {
      text: 'Close',
      value: 'close',
    },
  ],
  onFilter: (value: any, record: { status: string; }) => record.status.toLowerCase().startsWith(value),
  filterSearch: true,
};

export const userAddress = {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  sorter: (a: IData, b: IData) => a.address.localeCompare(b.address),
  sortDirections: ['descend', 'ascend'],
};

export const userAmount = {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
  sorter: (a: IData, b: IData) => a.amount - b.amount,
  sortDirections: ['descend', 'ascend'],
}
