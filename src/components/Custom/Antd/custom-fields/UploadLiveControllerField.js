import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, message, Upload } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import videosManagerApi from 'src/api/videosManagerApi';
import Message from 'src/components/Message';

UploadLiveControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
};

UploadLiveControllerField.defaultProps = { size: 'middle' };

function UploadLiveControllerField(props) {
  const { control, name, validateStatus, setValue } = props;

  const [urlLocal, setUrlLocal] = useState(null);
  const [showLocalImage, setShowLocalImage] = useState(false);

  // const [delegate_scannedFrontIdCard, setDelegate_scannedFrontIdCard] = useState(null)

  // const onChange = (info) => {
  //   // setValue(name, [info.file], { shouldValidate: true })
  // }

  const beforeUpload = async (file) => {
    const isJpgOrPng = file.type === 'video/mp4';
    if (!isJpgOrPng) {
      Message('error', 'Warn !!!', 'You can only upload JPG/PNG file!');
      // message.warn('You can only upload JPG/PNG file!')
      return false;
    }
    if (file.size >= 500000000) {
      Message('error', 'Warn !!!', 'File size < 500MB');
      // message.warn('file size < 500MB')
      return false;
    }
    // data.files?.forEach((e, i) => {
    // })
    // const formData = new FormData()
    // formData.append(`video`, file)

    // const res = await videosManagerApi.uploadVideo(formData)
    // debugger
    return true;
  };

  const onRemove = async (info) => {
    return;
    // try {
    //   // const resultAction = await dispatch(actionDelete(info.uid))
    //   // const result = unwrapResult(resultAction)
    //   // message.success('Xoá File thành công')
    // } catch (error) {
    //   console.log(error)
    //   // message.success('Xoá File thất bại')
    // }
  };
  const token = JSON.parse(JSON.parse(window.localStorage['persist:admin-news']).auth);

  const uploadVideo = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append('video', file);
    try {
      setUrlLocal(null);
      setShowLocalImage(true);
      const res = await videosManagerApi.uploadVideo(fmData, config);
      onSuccess('Ok');
      console.log('server res: ', res);
      if (res.status === 'Success') {
        setValue(name, res.data._id, { shouldValidate: true });
        setUrlLocal(res.data);
        setShowLocalImage(false);
        Message('success', 'Thành công !!!', 'Tải Video Thành công');
        // message.success('Tải Video Thành công');
      }
    } catch (err) {
      console.log('Eroor: ', err);
      setShowLocalImage(false);
      // message.success('Tải Video thất bại')
      Message('error', 'Xảy ra lỗi !!!', 'Tải Video Thất bại');
      // message.error('upload video Thất bại');
      // const error = new Error('Some error')
      onError({ err });
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
            <div className="d-flex justify-content-between align-items-center">
              <Upload
                customRequest={uploadVideo}
                style={{ width: '100%' }}
                // className="avatar-uploader"
                // onRemove={() => setFileList([])}
                headers={{ Authorization: token }}
                // fileList={[
                //   {
                //     uid: '1',
                //     name: 'xxx.png',
                //     status: 'done',
                //     response: 'Server Error 500', // custom error message to show
                //     url: 'http://www.baidu.com/xxx.png',
                //   },
                // ]}
                showUploadList={false}
                accept=".mp4"
                // showUploadList={{ showRemoveIcon: false }}
                beforeUpload={beforeUpload}
                // onChange={onChange}
                maxCount={1}
                onRemove={onRemove}
                // {...field}
              >
                {/* {delegate_scannedFrontIdCard ? <img src={delegate_scannedFrontIdCard} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                <Button
                  style={{ marginTop: '10px', background: '#3CBC7F', borderColor: '#3CBC7F' }}
                  disabled={urlLocal === null && showLocalImage}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UploadOutlined style={{ color: 'white' }} />
                    <div style={{ marginLeft: '5px', color: 'white', fontWeight: 500 }}>{'Upload Video'}</div>
                  </div>
                </Button>
              </Upload>
              {field.value && (
                <div style={{ margin: 'auto', padding: 5 }}>
                  <a
                    href={
                      field.value.public_url && !showLocalImage
                        ? process.env.REACT_APP_API_URL_DUNG_MEDIA + field.value.public_url
                        : process.env.REACT_APP_API_URL_DUNG_MEDIA + urlLocal?.public_url
                    }
                    target="_blank"
                    width={200}
                    rel="noreferrer"
                  >
                    {field.value.public_url && !showLocalImage ? field.value.file_name : urlLocal?.file_name}
                  </a>
                </div>
              )}
              {showLocalImage && (
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
export default UploadLiveControllerField;
