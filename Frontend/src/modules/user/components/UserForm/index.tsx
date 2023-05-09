import { Control, Controller, FieldError, FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { Input, Radio } from "antd";
import { FC } from "react";
import styles from './index.module.css';

type Errors = {
  name?: FieldError | undefined;
  role?: FieldError | undefined;
  status?: FieldError | undefined;
  address?: FieldError | undefined;
  amount?: FieldError | undefined;
};

type FormProps = {
  control: Control;
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
      <Controller
        name="role"
        control={control}
        render={({ field }) =>
          <Radio.Group defaultValue="2" {...field}>
            <Radio value="admin">Admin</Radio>
            <Radio value="client">Client</Radio>
            <Radio value="business">Business</Radio>
          </Radio.Group>}
      />
    </div>
    <div className={styles.input}>
      <Controller
        name="status"
        control={control}
        render={({ field }) =>
          <Radio.Group defaultValue="2" {...field}>
            <Radio value="open">Open</Radio>
            <Radio value="pending">Pending</Radio>
            <Radio value="close">Close</Radio>
          </Radio.Group>}
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
