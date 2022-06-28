import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import videosManagerApi from 'src/api/videosManagerApi';
import Message from 'src/components/Message';

UploadImageLiveControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  base64: PropTypes.bool,
};

UploadImageLiveControllerField.defaultProps = { size: 'middle', base64: true };

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function UploadImageLiveControllerField(props) {
  const { control, name, validateStatus, setValue, base64, disabled } = props;

  const [base64Preview, setBase64Preview] = useState();

  const [showLocalImage, setShowLocalImage] = useState(false);

  const handleChangeScannedFrontIdCard = (info) => {
    const isJpgOrPng = info.type === 'image/jpeg' || info.type === 'image/png';
    if (!isJpgOrPng) {
      Message('error', 'Warn !!!', 'You can only upload JPG/PNG file!');
      // message.warn('You can only upload JPG/PNG file!')
      return false;
    }
    if (info.size >= 100000000) {
      Message('error', 'Warn !!!', 'File size < 10MB');
      // message.warn('file size < 10MB');
      return false;
    }
    // if (base64) {
    //   getBase64(info, (imageUrl) => {
    //     setValue(name, imageUrl, { shouldValidate: true })
    //   })
    //   return true
    // }
    return true;
  };

  const uploadVideo = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append('image', file);
    try {
      setShowLocalImage(true);
      setBase64Preview(null);
      const res = await videosManagerApi.uploadImage(fmData, config);
      onSuccess('Ok');
      console.log('server res: ', res);
      if (res.status === 'Success') {
        setValue(name, res.data._id, { shouldValidate: true });
        Message('success', 'Thành công !!!', 'Tải ảnh lên Thành công');
        // message.success('Tải ảnh lên Thành công');
        getBase64(file, (imageUrl) => {
          setBase64Preview(imageUrl);
        });
        setShowLocalImage(true);
      }
    } catch (err) {
      console.log('Eroor: ', err);
      // message.success('Tải Video thất bại')
      Message('error', 'Xảy ra lỗi !!!', 'Tải ảnh lên Thất bại');
      // message.error('Tải ảnh lên Thất bại');
      // const error = new Error('Some error')
      onError({ err });
    }
  };

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // )

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Form.Item validateStatus={validateStatus && 'error'} help={validateStatus}>
            <div className="d-flex justify-content-between align-items-center">
              <Upload
                name="avatar"
                customRequest={uploadVideo}
                // listType="picture-card"
                style={{ width: '100%' }}
                className="avatar-uploader"
                accept=".png,.tif,.jpg,.gif,.jpeg,.HEIC"
                showUploadList={false}
                // beforeUpload={() => false}
                beforeUpload={handleChangeScannedFrontIdCard}
                // onChange={handleChangeScannedFrontIdCard}
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
              {field.value && base64Preview && (
                <div style={{ margin: 'auto' }}>
                  <Image
                    src={
                      field.value.public_url && !showLocalImage
                        ? process.env.REACT_APP_API_URL_DUNG_MEDIA + field.value.public_url
                        : base64
                        ? field.value
                        : base64Preview
                    }
                    width={200}
                  />
                  {/* {field.value ? (
                    <img
                      src={process.env.REACT_APP_API_URL + `/news-content/public${field.value}`}
                      alt="avatar"
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )} */}
                </div>
              )}
              {base64Preview === null && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <LoadingOutlined style={{ fontSize: 24 }} />
                </div>
              )}
            </div>
          </Form.Item>
        );
      }}
    />
  );
}
export default UploadImageLiveControllerField;
