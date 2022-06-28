import React from 'react';
import { message } from 'antd';
import Main from './main';
import Icon from './icon';

const Message = (type: string, title: string, text: string) => {
  message.error({
    content: <Main text={text} title={title} type={type} />,
    className: 'message-modal',
    icon: <Icon type={type} />,
  });
};

export const SuccessMessage = (text: string) => Message('success', 'Thành công !!!', text);

export const ErrorMessage = (text: string) => Message('error', 'Xảy ra lỗi !!!', text);

export default Message;
