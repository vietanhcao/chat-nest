import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import './style.scss';
import ButtonType1 from 'src/components/Buttons/Type1';
import LoadingButton from 'src/components/LoadingButton';
import { ErrorMessage } from 'src/components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import { authState, changePass } from 'src/features/auth/authSlice';

interface BtnPT {
  onCancel: () => void;
  onSubmit: () => void;
  loading: boolean;
}

const Buttons: React.FC<BtnPT> = ({ onCancel, onSubmit, loading }) => {
  return (
    <div className="change-pass-buttons">
      <ButtonType1 buttonColor="#2EAD90" onClick={onSubmit} className="change-pass-button" disabled={loading}>
        <LoadingButton isLoading={loading} className="merchandise-loading-button" />
        Cập nhật
      </ButtonType1>
      <ButtonType1 buttonColor="#C5C5C5" onClick={onCancel} className="change-pass-button" disabled={loading}>
        <LoadingButton isLoading={loading} className="change-pass-loading-button" />
        Hủy
      </ButtonType1>
    </div>
  );
};

interface PT {
  isShow: boolean;
  setShow: (bool: boolean) => void;
}

const ChangePass: React.FC<PT> = ({ isShow, setShow }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { userLogin } = useSelector<RootState, authState>((state) => state.auth);

  const onCancel = () => {
    setShow(false);
    form.resetFields();
  };

  const onFinish = () => {
    setLoading(false);
  };

  const onFinishAndOut = () => {
    setLoading(false);
    setShow(false);
  };

  const onSubmit = () => {
    form.validateFields().then((values) => {
      // console.log(values);
      setLoading(true);
      if (userLogin)
        dispatch(changePass(userLogin.id, values.newPassword, values.oldPassword, onFinish, onFinishAndOut));
    });
  };

  return (
    <Modal
      closable={false}
      visible={isShow}
      onCancel={onCancel}
      title="Cập nhật"
      footer={<Buttons onCancel={onCancel} onSubmit={onSubmit} loading={loading} />}
      wrapClassName="change-pass-modal"
    >
      <Form form={form}>
        <Form.Item
          name="oldPassword"
          required={false}
          label={<div className="change-pass-label">Mật khẩu hiện tại</div>}
          rules={[
            {
              required: true,
              message: 'Trường này không được bỏ trống',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="newPassword"
          required={false}
          label={<div className="change-pass-label">Mật khẩu mới</div>}
          rules={[
            {
              required: true,
              message: 'Trường này không được bỏ trống',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="repeatPassword"
          required={false}
          label={<div className="change-pass-label">Xác nhận mật khẩu</div>}
          rules={[
            {
              required: true,
              message: 'Trường này không được bỏ trống',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Mật khẩu xác nhận chưa chính xác'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangePass;
