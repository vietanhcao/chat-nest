import React, { useState } from 'react';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload/interface';
import { UploadRequestOption } from 'node_modules/rc-upload/lib/interface';
import axiosClient from 'src/api/axiosClient';

type Props = {};

export default function UploadPage({}: Props) {
  const [base64Preview, setBase64Preview] = useState<string | null>(null);

  function getBase64(img: Blob, callback: (base64: string | ArrayBuffer | null) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleUpload = async (options: UploadRequestOption) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      // onUploadProgress: (event: ProgressEvent) => {
      //   onProgress?.({ percent: (event.loaded / event.total) * 100 });
      // },
    };
    fmData.append('file', file);
    try {
      setBase64Preview(null);
      const res = await axiosClient.post<any>('/api/resource/upload/image-public', fmData, config);
      console.log('server res: ', res);
      if (res.status === 200) {
        // onSuccess?.('ok');
        getBase64(file as Blob, (imageUrl) => {
          setBase64Preview(imageUrl as string);
        });
        message.success('Tải ảnh lên Thành công');
      }
    } catch (event) {
      console.log('Eroor: ', event);
      message.error('Tải ảnh lên Thất bại');
      // const error = new Error('Some error')
      // onError?.({ percent: 100 });
    }
  };
  const handleBeforeUpload = (info: RcFile) => {
    const isJpgOrPng = info.type === 'image/jpeg' || info.type === 'image/png';
    if (!isJpgOrPng) {
      message.warn('You can only upload JPG/PNG file!');
      return false;
    }
    if (info.size >= 100000000) {
      message.warn('file size < 10MB');
      return false;
    }
    return true;
  };
  return (
    <Upload
      name="avatar"
      customRequest={handleUpload}
      // listType="picture-card"
      style={{ width: '100%' }}
      className="avatar-uploader"
      accept=".png,.jpg"
      showUploadList={false}
      beforeUpload={handleBeforeUpload}
    >
      {base64Preview && <img src={base64Preview} alt="avatar" style={{ width: '100%' }} />}

      <Button style={{ marginTop: '10px', background: '#3CBC7F', borderColor: '#3CBC7F' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <UploadOutlined style={{ color: 'white' }} />
          <div style={{ marginLeft: '5px', color: 'white', fontWeight: 500 }}>Upload</div>
        </div>
      </Button>
    </Upload>
  );
}
