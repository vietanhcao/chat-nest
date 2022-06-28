import React, { useState, useEffect } from 'react';
import { CCardBody, CContainer } from '@coreui/react';
import { Button, Form } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { authAction, LoginPayload, selectAuthId, selectAuthLoading, selectAuthStatus } from '../authSlice';
import CustomCardLogin from '../components/CustomCardLogin';
import usernameIcon from '../../../assets/icons/username_login_icon.svg';
import iconBack from '../../../assets/icons/icon_back.svg';
import './style.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Countdown from 'react-countdown';
import InputControllerField from 'src/components/Custom/Antd/custom-fields/InputControllerField';
import { useAppSelector } from 'src/app/hooks';

const schema = yup.object().shape({
  username: yup.string().required('Trường bắt buộc'),
});

interface ForgotPasswordPageProps {}

type FormInputs = {
  username: string;
};

function ForgotPasswordPage(props: ForgotPasswordPageProps) {
  const {
    handleSubmit,
    // reset,
    setValue,
    control,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const loading = useAppSelector(selectAuthLoading);
  // const authId = useAppSelector(selectAuthId);
  // const statusAuth = useAppSelector(selectAuthStatus);
  // const [otp, setOtp] = useState('');
  const [restartCountdown, setRestartCountdown] = useState(Date.now());
  // const dispatch = useAppDispatch();
  const history = useHistory();
  const onSubmit = async () => {
    setRestartCountdown(Date.now() + 60000);
    // dispatch(authAction.verifyPin({ pin: otp, user: authId }));
  };

  // useEffect(() => {
  //   dispatch(authAction.setStatus('IDLE'));
  // }, []);

  // useEffect(() => {
  //   if (statusAuth === 'SUCCESS') {
  //     history.push(`/`);
  //   }
  // }, [statusAuth]);

  return (
    <div className="bg--image min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div>
          <div style={{ maxWidth: '640px', minWidth: 500, margin: 'auto' }}>
            <CustomCardLogin title="QUÊN MẬT KHẨU">
              <CCardBody style={{ padding: '50px' }}>
                <form className="form">
                  <div className="d-grid gap-2">
                    <section>
                      <label style={{ marginBottom: 6, color: '#162A3A' }}>Địa chỉ Email</label>
                      <InputControllerField
                        control={control}
                        name="username"
                        placeholder="Nhập email để lấy lại mật khẩu"
                        prefix={<img src={usernameIcon} alt="icon-username" />}
                        size="large"
                        validateStatus={errors.username?.message}
                      />
                    </section>

                    <div style={{ padding: '0 70px' }}>
                      <p style={{ fontSize: '16px', lineHeight: '20px', textAlign: 'center', color: '#162A3A' }}>
                        Mật khẩu mới đã được gửi về Email đăng ký của bạn. Nếu chưa nhận được vui lòng bấm &nbsp;
                        <span style={{ color: '#2EAD90' }}>lấy lại mật khẩu</span>
                      </p>
                    </div>

                    <Countdown
                      date={restartCountdown}
                      intervalDelay={1000}
                      key={restartCountdown}
                      renderer={(props) => {
                        return (
                          <div style={{ display: 'flex' }}>
                            <Button
                              onClick={() => history.push('/login')}
                              size="large"
                              type="primary"
                              style={{
                                backgroundColor: '#CED9E1',
                                borderColor: '#CED9E1',
                                width: 48,
                                height: 48,
                                fontSize: 18,
                                borderRadius: 48,
                                padding: 0,
                                marginRight: 10,
                              }}
                            >
                              <img src={iconBack} alt="icon-back" />
                            </Button>
                            <Button
                              onClick={onSubmit}
                              size="large"
                              type="primary"
                              disabled={!props.completed}
                              style={{
                                backgroundColor: '#2EAD90',
                                borderColor: '#2EAD90',
                                height: 48,
                                flex: 1,
                                fontSize: 18,
                                borderRadius: 4,
                              }}
                              loading={loading}
                            >
                              Lấy lại mật khẩu &nbsp; {!props.completed && <span>({props.total / 1000}s)</span>}
                            </Button>
                          </div>
                        );
                      }}
                    />
                  </div>
                </form>
              </CCardBody>
            </CustomCardLogin>
          </div>
        </div>
      </CContainer>
    </div>
  );
}

export default ForgotPasswordPage;
