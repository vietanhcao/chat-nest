import { toast } from 'react-toastify';
import { notification } from 'antd';

// toastSuccess(this.props.t('create') + " TVKD " + data.code + " " + this.props.t('Success, Awaiting approval'));
export const toastSuccess = (info) => {
  toast.success(info, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    showDuration: 300,
  });
};

export const toastError = (info) => {
  toast.error(info, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    showDuration: 300,
  });
};

export const toastInfoKind2 = (info) => {
  toast.info(info, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const w = (message, description) => {
  notification.info({
    message,
    description,
    placement: 'bottomRight',
    duration: 2,
  });
};
