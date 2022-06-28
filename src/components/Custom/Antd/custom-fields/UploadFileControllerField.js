import { UploadOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Message from 'src/components/Message';
import CheckPermission from 'src/utils/CheckPermission';

UploadFileControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
};

UploadFileControllerField.defaultProps = { size: 'middle' };

function UploadFileControllerField(props) {
  const { control, name, validateStatus, setValue, allowRemoveFile, disabled, actionDelete } = props;

  // const [delegate_scannedFrontIdCard, setDelegate_scannedFrontIdCard] = useState(null)

  const onChange = (info) => {
    setValue(name, [info.file], { shouldValidate: true });
  };

  const dispatch = useDispatch();

  const onRemove = async (info) => {
    if (allowRemoveFile && !CheckPermission.isAllowed(allowRemoveFile)) {
      Message('error', 'Xảy ra lỗi !!!', 'Bạn không có quyền');
      // message.error('Bạn không có quyền')
      return false;
    }

    try {
      const resultAction = await dispatch(actionDelete(info.uid));
      unwrapResult(resultAction);
      Message('success', 'Thành công !!!', 'Xoá File thành công');
      // message.success('Xoá File thành công')
    } catch (error) {
      console.log(error);
      Message('error', 'Xảy ra lỗi !!!', 'Xoá File thất bại');
      // message.success('Xoá File thất bại');
    }
  };

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Form.Item validateStatus={validateStatus && 'error'} help={validateStatus}>
            <div className="d-flex justify-content-between align-items-start">
              <Upload
                // name="avatar"
                // listType="picture-card"
                style={{ width: '100%' }}
                // className="avatar-uploader"
                // onRemove={() => setFileList([])}
                fileList={field.value}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.ppt,.pptx,.jpeg,.png,.jpg"
                // showUploadList={false}
                beforeUpload={() => false}
                onChange={onChange}
                maxCount={1}
                onRemove={onRemove}
                // {...field}
              >
                {/* {delegate_scannedFrontIdCard ? <img src={delegate_scannedFrontIdCard} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                <Button
                  style={{ marginTop: '10px', background: '#3CBC7F', borderColor: '#3CBC7F' }}
                  disabled={disabled}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UploadOutlined style={{ color: 'white' }} />
                    <div style={{ marginLeft: '5px', color: 'white', fontWeight: 500 }}>{'Upload File'}</div>
                  </div>
                </Button>
              </Upload>
              {/* {field.value && <Image src={field.value} width={200} />} */}
            </div>
          </Form.Item>
        );
      }}
    />
  );
}
export default UploadFileControllerField;
