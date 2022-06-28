import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Message from 'src/components/Message';

UploadImageControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  base64: PropTypes.bool,
};

UploadImageControllerField.defaultProps = {
  size: 'middle',
  base64: true,
  dataConfigImage: { maxSizeImage: 100000, messageMaxSizeImage: 'file size < 100kb' },
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function UploadImageControllerField(props) {
  const { control, name, validateStatus, setValue, base64, disabled, dataConfigImage } = props;

  const [base64Preview, setBase64Preview] = useState();

  const [showLocalImage, setShowLocalImage] = useState(false);

  const handleChangeScannedFrontIdCard = (info) => {
    const isJpgOrPng =
      info.fileList[info.fileList.length - 1].originFileObj.type === 'image/jpeg' ||
      info.fileList[info.fileList.length - 1].originFileObj.type === 'image/png';
    if (!isJpgOrPng) {
      Message('error', 'Warn !!!', 'You can only upload JPG/PNG file!');
      // message.warn('You can only upload JPG/PNG file!');
      return;
    }
    if (info.fileList[info.fileList.length - 1].originFileObj.size >= dataConfigImage.maxSizeImage) {
      Message('error', 'Warn !!!', dataConfigImage.messageMaxSizeImage);
      // message.warn(dataConfigImage.messageMaxSizeImage);
      return;
    }
    if (base64) {
      getBase64(info.fileList[info.fileList.length - 1].originFileObj, (imageUrl) => {
        setValue(name, imageUrl, { shouldValidate: true });
      });
      return;
    }
    setValue(name, info.fileList[info.fileList.length - 1].originFileObj, { shouldValidate: true });
    getBase64(info.fileList[info.fileList.length - 1].originFileObj, (imageUrl) => {
      setBase64Preview(imageUrl);
    });
    setShowLocalImage(true);
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
                name="avatar"
                // listType="picture-card"
                style={{ width: '100%' }}
                className="avatar-uploader"
                accept=".png,.tif,.jpg,.gif,.jpeg,.HEIC"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChangeScannedFrontIdCard}
                // {...field}
              >
                {/* {delegate_scannedFrontIdCard ? <img src={delegate_scannedFrontIdCard} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}

                <Button
                  style={{ marginTop: '10px', background: '#3CBC7F', borderColor: '#3CBC7F' }}
                  disabled={disabled}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UploadOutlined style={{ color: 'white' }} />
                    <div style={{ marginLeft: '5px', color: 'white', fontWeight: 500 }}>{'Upload'} </div>
                  </div>
                </Button>
              </Upload>
              {field.value && (
                <div style={{ margin: 'auto' }}>
                  <Image
                    src={
                      field.value.publicUrl && !showLocalImage
                        ? process.env.REACT_APP_API_URL + `/news-content/public${field.value.publicUrl}`
                        : base64
                        ? field.value
                        : base64Preview
                    }
                    width={200}
                  />
                </div>
              )}
            </div>
          </Form.Item>
        );
      }}
    />
  );
}
export default UploadImageControllerField;
