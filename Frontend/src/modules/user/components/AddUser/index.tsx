import { Button, Modal, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useModal from "../../../common/hooks/useModal";
import UserForm from "../UserForm";
import * as yup from 'yup';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../../graphql/mutations/createUser";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  role: yup.string().required(),
  status: yup.string().required(),
  address: yup.string().min(3).required(),
  amount: yup.string().min(3).required(),
});
const AddUser = () => {
  const modal = useModal();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const [addUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      reset();
      modal.hideModal();
    },
  });
  const showModal = () => {
    modal.showModal();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    debugger
    await addUser({ variables: { ...data } });
  };

  const handleCancel = () => {
    modal.hideModal();
  };


  return <Tooltip placement="topLeft" title="Add user">
    <Button type="ghost" onClick={showModal}>
      <PlusOutlined />
    </Button>
    <Modal title="Add User" visible={modal.isVisible} onOk={handleSubmit(onSubmit)} onCancel={handleCancel} confirmLoading={loading}>
      <UserForm control={control} errors={errors}/>
    </Modal>
  </Tooltip>
}

export default AddUser;
