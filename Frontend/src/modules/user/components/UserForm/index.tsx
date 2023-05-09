import { Control, Controller, FieldError, FieldValues } from "react-hook-form";
import { Input, Radio, Select } from "antd";
import { FC } from "react";
import styles from './index.module.css';
import { Option } from "antd/es/mentions";
import Title from "antd/es/typography/Title";
import { IData, IUser } from "../../types";

type Errors = {
  name?: FieldError | undefined;
  role?: FieldError | undefined;
  status?: FieldError | undefined;
  address?: FieldError | undefined;
  amount?: FieldError | undefined;
};

type FormProps = {
  control: Control<IUser, any>;
  errors: Errors
};
const UserForm: FC<FormProps> = ({ control, errors}) => {

  return <form>
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <Input placeholder="Name" {...field} />}
      />
      <div className={styles.errorMessage}>{errors.name ? errors.name.message : ''}</div>
    </div>
    <div className={styles.input}>
      <Title level={5}>Role</Title>
      <Controller
        name="role"
        control={control}
        render={({ field }) =>
          <Select defaultValue="client" {...field}>
            <Option value="admin">Admin</Option>
            <Option value="client">Client</Option>
            <Option value="business">Business</Option>
          </Select>}
      />
    </div>
    <div className={styles.input}>
      <Title level={5}>Status</Title>
      <Controller
        name="status"
        control={control}
        render={({ field }) =>
          <Select defaultValue="open" {...field}>
            <Option value="open">Open</Option>
            <Option value="pending">Pending</Option>
            <Option value="close">Close</Option>
          </Select>}
      />
      <div className={styles.errorMessage}>{errors.status ? errors.status.message : ''}</div>
    </div>
    <div className={styles.input}>
      <Controller
        name="address"
        control={control}
        render={({ field }) => <Input placeholder="Address" {...field} />}
      />
      <div className={styles.errorMessage}>{errors.address ? errors.address.message : ''}</div>
    </div>
    <div className={styles.input}>
      <Controller
        name="amount"
        control={control}
        render={({ field }) => <Input placeholder="Amount" {...field} />}
      />
      <div className={styles.errorMessage}>{errors.amount ? errors.amount.message : ''}</div>
    </div>
  </form>
};

export default UserForm;
