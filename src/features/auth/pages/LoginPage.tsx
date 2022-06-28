import { CCardBody, CContainer } from '@coreui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
// import { logout, selectEmailRemember, selectRememberMe, setRememberMe } from 'src/features/Auth/authSlice';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import passwordIcon from '../../../assets/icons/password_login_icon.svg';
import usernameIcon from '../../../assets/icons/username_login_icon.svg';
import InputControllerField from '../../../components/Custom/Antd/custom-fields/InputControllerField';
import { authAction, LoginPayload, selectAccessToken, selectAuthLoading, selectAuthStatus } from '../authSlice';
import CustomCardLogin from '../components/CustomCardLogin';
// import { postAuthLogin } from '../../authSlice';
import './style.scss';

const schema = yup.object().shape({
  email: yup.string().required('Trường bắt buộc'),
  password: yup.string().required('Trường bắt buộc'),
});

export interface LoginPageProps {}

function LoginPage(props: LoginPageProps) {
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

  type FormInputs = {
    email: string;
    password: string;
  };

  // const [data, setData] = useState(null)
  const loading = useAppSelector(selectAuthLoading);
  const accessToken = useAppSelector(selectAccessToken);
  const statusAuth = useAppSelector(selectAuthStatus);
  // const emailRemember = useAppSelector(selectEmailRemember);
  const dispatch = useAppDispatch();
  const history = useHistory();
  // console.log(errors);
  const onSubmit = async (data: LoginPayload) => {
    dispatch(authAction.login(data));
    // try {
    //   const resultAction = await dispatch(postAuthLogin(data));
    //   const result = unwrapResult(resultAction);
    //   if (result.validation) {
    //     result.validation.forEach(({ param, msg }) => setError(param, { message: msg }));
    //     return;
    //   }
    //   if (result.msg) {
    //     message.error(result.msg);
    //     return;
    //   }
    //   setTimeout(() => {
    //     // wait set permission
    //     history.push(`/`);
    //   }, 100);
    // } catch (error) {
    //   // showToast('error', `Fetch failed: ${err.message}`)
    //   console.log(error);
    // }
  };
  useEffect(() => {
    dispatch(authAction.logout());
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (statusAuth === 'SUCCESS' && accessToken) {
      history.push(`/dashboard`);
    }
  }, [statusAuth, accessToken]);

  // useEffect(() => {
  //   if (emailRemember) {
  //     setValue('email', emailRemember);
  //   }
  // }, [emailRemember]);

  // const handleRememberMe = (e) => {
  //   dispatch(setRememberMe(e.target.checked));
  // };

  return (
    <div className="bg--image min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div>
          <div style={{ maxWidth: '640px', minWidth: 500, margin: 'auto' }}>
            <CustomCardLogin title="ĐĂNG NHẬP">
              <CCardBody style={{ padding: '50px' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                  <section>
                    <label style={{ marginBottom: 6, color: '#162A3A' }}>Tên đăng nhập</label>
                    <InputControllerField
                      control={control}
                      name="email"
                      placeholder="Tên đăng nhâp"
                      prefix={<img src={usernameIcon} alt="icon-email" />}
                      size="large"
                      validateStatus={errors.email?.message}
                    />
                  </section>

                  <section style={{ paddingBottom: 10 }}>
                    <label style={{ marginBottom: 6, color: '#162A3A' }}>Mật khẩu</label>
                    <InputControllerField
                      control={control}
                      name="password"
                      type="password"
                      placeholder="Mật khẩu"
                      size="large"
                      prefix={<img src={passwordIcon} alt="icon-password" />}
                      validateStatus={errors.password?.message}
                    />
                  </section>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Checkbox
                      style={{ color: '#727C8A', fontSize: 14 }}
                      className="custom--bg"
                      // checked={isRememberMe} onChange={handleRememberMe}
                    >
                      Ghi nhớ đăng nhập
                    </Checkbox>
                    <Link
                      to="/forgot-password"
                      style={{ color: '#727C8A', backgroundColor: 'white', textDecoration: 'none', fontSize: 14 }}
                      className="px-0"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <Button
                      htmlType="submit"
                      onClick={handleSubmit(onSubmit)}
                      size="large"
                      type="primary"
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

export default LoginPage;
