import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import appBarApi from 'src/api/appBarApi';
import { RootState } from 'src/app/store';
// import productApi from '../api/productApi';

export const getTradingSessionDate = createAsyncThunk('appbar/getTradingSessionDate', async (userId, thunkAPI) => {
  const response = await appBarApi.getTradingSessionDate();
  return response;
});

interface ITableSetting {
  [key: string]: any;
}
interface appbarState {
  sidebarShow: boolean;
  tradingSessionDate: string;
  tableSetting: ITableSetting;
}

const initialState: appbarState = {
  sidebarShow: false,
  tradingSessionDate: '',
  tableSetting: {},
};
// loading: false,
// hasErrors: false,

const appbar = createSlice({
  name: 'appbar',
  initialState,
  reducers: {
    sidebarToggler: (state, action: PayloadAction<boolean>) => {
      state.sidebarShow = typeof action.payload === 'boolean' ? action.payload : !state.sidebarShow;
    },
    setTableSetting: (state, action: PayloadAction<ITableSetting>) => {
      state.tableSetting = action.payload;
    },
  },
  extraReducers: {
    [getTradingSessionDate.fulfilled.type]: (state, action) => {
      // Add user to the state array
      state.tradingSessionDate = action.payload?.data?.value;
    },
    [getTradingSessionDate.rejected.type]: (state, action) => {
      console.log(action.payload);
    },
  },
});

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectSidebarShow = (state: RootState) => state.appbar.sidebarShow;
export const selectSlideTradingSessionDate = (state: RootState) => state.appbar.tradingSessionDate;
export const selectTableSetting = (state: RootState) => state.appbar.tableSetting;

// Actions
const { actions } = appbar;
export const { sidebarToggler, setTableSetting } = actions;

// Reducer
const appbarReducer = appbar.reducer;

export default appbarReducer;
