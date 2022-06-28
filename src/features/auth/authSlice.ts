import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import axiosClient from 'src/api/axiosClient';
import { RootState } from 'src/app/store';
import Message, { ErrorMessage, SuccessMessage } from 'src/components/Message';
// import { RootState } from '../../app/store';
import { UserLogin } from '../../models/user';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface authState {
  accessToken?: string;
  messageError: string;
  id: string;
  functions: string[];
  rememberMe: boolean;
  status: 'IN_PROGRESS' | 'IDLE' | 'SUCCESS';
  emailRemember?: string;
  email: string;
  fullName: string;
  loading: boolean;
  phoneNumber: string;
  deptName: string;
  userLogin?: UserLogin;
  // currentUser?: User;
}

const initialState: any = {
  accessToken: undefined,
  functions: [],
  rememberMe: false,
  loading: false,
  status: 'IDLE',
  emailRemember: undefined,
  id: '',
  email: '',
  fullName: '',
  phoneNumber: '',
  deptName: '',
  messageError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.userLogin = action.payload;
      state.accessToken = action.payload?.accessToken;
      state.id = action.payload?.id;
      state.email = action.payload?.user?.email;
      state.fullName = action.payload?.fullName;
      state.phoneNumber = action.payload?.phoneNumber;
      state.deptName = action.payload?.deptName;
      state.status = 'SUCCESS';
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      Message('error', 'Xảy ra lỗi !!!', action.payload);
      // message.error(action.payload);
    },

    verifyPin: (state, action: PayloadAction<{ pin: string; user: string }>) => {
      state.loading = true;
    },
    verifyPinSuccess: (state) => {
      state.loading = false;
      state.status = 'SUCCESS';
    },
    verifyPinFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      Message('error', 'Xảy ra lỗi !!!', action.payload);
      // message.error(action.payload);
    },

    logout: (state) => {
      state.id = '';
      state.messageError = '';
      state.functions = [];
      state.accessToken = undefined;
    },
    setStatus: (state, action: PayloadAction<'IN_PROGRESS' | 'IDLE' | 'SUCCESS'>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   });
  },
});

// export const { login } = authSlice.actions;
export const authAction = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthId = (state: RootState) => state.auth.id;
export const selectAuthUsername = (state: RootState) => state.auth.email;
export const selectAuthDeptName = (state: RootState) => state.auth.deptName;
export const selectAuthPhoneNumber = (state: RootState) => state.auth.phoneNumber;
export const selectAuthFullName = (state: RootState) => state.auth.fullName;
export const selectAuthEmail = (state: RootState) => state.auth.email;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
const authReducer = authSlice.reducer;

const changePassAPI = async (id: string, newPassword: string, oldPassword: string) => {
  return await axiosClient.post(`/am/admin/users/${id}/password`, {
    newPassword: newPassword,
    oldPassword: oldPassword,
  });
};

export const changePass =
  (id: string, newPassword: string, oldPassword: string, onFinish: () => void, onFinishAndOut: () => void) =>
  async () => {
    try {
      let res: any = await changePassAPI(id, newPassword, oldPassword);
      console.log(res);
      if (res.status === 'error') {
        if (res.errMsg === 'Incorrect password.') {
          ErrorMessage('Mật khẩu hiện tại chưa chính xác');
          onFinish();
          return;
        }

        if (res.errMsg === 'Invalid request.')
          if (res.validation[0].message === 'Invalid format.') {
            ErrorMessage('Mật khẩu mới cần dài 8 ký tự, bao gồm đầy đủ chữ số, chữ hoa, chữ thường và ký tự đặc biệt');
            onFinish();
            return;
          }
      } else SuccessMessage('Đổi mật khẩu thành công');
      onFinishAndOut();
    } catch {
      ErrorMessage('Đổi mật khẩu không thành công');
      onFinishAndOut();
    }
  };

export default authReducer;
