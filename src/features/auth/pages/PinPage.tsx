import React, { useState, useEffect } from 'react';
import { CCardBody, CContainer } from '@coreui/react';
import { Button, Form } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authAction, LoginPayload, selectAuthId, selectAuthLoading, selectAuthStatus } from '../authSlice';
import CustomCardLogin from '../components/CustomCardLogin';
import './style.scss';
import OtpInput from 'react-otp-input';
import Countdown from 'react-countdown';

interface PinPageProps {}

function PinPage(props: PinPageProps) {
  const loading = useAppSelector(selectAuthLoading);
  const authId = useAppSelector(selectAuthId);
  const statusAuth = useAppSelector(selectAuthStatus);
  const [otp, setOtp] = useState('');
  const [restartCountdown, setRestartCountdown] = useState(Date.now() + 60000);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onSubmit = async () => {
    dispatch(authAction.verifyPin({ pin: otp, user: authId }));
  };

  useEffect(() => {
    dispatch(authAction.setStatus('IDLE'));
  }, []);

  useEffect(() => {
    if (statusAuth === 'SUCCESS') {
      history.push(`/`);
    }
  }, [statusAuth]);

  return (
    <div className="bg--image min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div>
          <div style={{ maxWidth: '640px', minWidth: 500, margin: 'auto' }}>
            <CustomCardLogin title="XÁC NHẬN MÃ PIN">
              <CCardBody style={{ padding: '50px' }}>
                <form className="form">
                  <div className="d-grid gap-2">
                    <div style={{ padding: '0 29px' }}>
                      <p style={{ fontSize: '16px', lineHeight: '20px', textAlign: 'center', color: '#162A3A' }}>
                        Mã PIN đã được gửi đến Email/số điện thoại đã đăng ký của bạn. Vui lòng nhập mã để sử dụng dịch
                        vụ!
                      </p>
                    </div>
                    <div style={{ margin: 'auto', paddingBottom: 20 }}>
                      {/* <Form.Item validateStatus={'Mã PIN không hợp lệ' && 'error'} help={'Mã PIN không hợp lệ'}> */}
                      <OtpInput
                        numInputs={6}
                        isInputNum
                        // isInputSecure
                        inputStyle={'otpInput'}
                        value={otp}
                        onChange={(e: string) => {
                          setOtp(e);
                        }}
                      />
                      {/* </Form.Item> */}
                    </div>
                    <Button
                      onClick={onSubmit}
                      size="large"
                      type="primary"
                      disabled={otp.length !== 6}
                      style={{
                        backgroundColor: '#2EAD90',
                        borderColor: '#2EAD90',
                        height: 48,
                        fontSize: 18,
                        borderRadius: 4,
                      }}
                      loading={loading}
                    >
                      Đăng nhập
                    </Button>

                    <Countdown
                      date={restartCountdown}
                      intervalDelay={1000}
                      key={restartCountdown}
                      renderer={(props) => {
                        return (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              paddingTop: '6px',
                            }}
                          >
                            <div className={`style.reSendPin style.disable`}>
                              Mã PIN tồn tại trong (<span style={{ color: '#2EAD90' }}>{props.total / 1000}s</span>)
                            </div>
                            <Button
                              disabled={!props.completed}
                              style={{ fontSize: 16 }}
                              type="text"
                              onClick={() => {
                                setRestartCountdown(restartCountdown + 1);
                              }}
                            >
                              Gửi lại mã PIN
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

export default PinPage;
