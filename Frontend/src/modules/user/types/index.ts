
export interface IUser {
  name: string;
  address: string;
  amount: string;
  role: string;
  status: string;
}
export interface IData extends IUser{
  id: string;
}
