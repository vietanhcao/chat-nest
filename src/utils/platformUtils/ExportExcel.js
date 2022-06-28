import { Button, message } from 'antd';
import React, { useState } from 'react';
import Message from 'src/components/Message';
import CSVIcon from '../../assets/icons/csv_icon_export.svg';

const ExportExcel = ({ queryString, style, axiosGet, fileNameDefault, id }) => {
  const [isExcelLoading, setExcelLoading] = useState(false);

  const onClickExportExcel = async (props) => {
    try {
      setExcelLoading(true);
      let response = await axiosGet(
        `${queryString ? `${queryString}` : ''}`,
        {
          responseType: 'blob',
        },
        id
      );

      // Get file name
      let contentDisposition = response?.headers?.['content-disposition'] || '';
      let match = `${contentDisposition}`?.match(/([A-Za-z0-9 _-]+).xlsx/g);
      let fileName = match?.length ? match[0]?.replaceAll(`"`, '') : fileNameDefault;
      debugger;
      if (!fileName) Message('error', 'Xảy ra lỗi !!!', 'Không lấy được tên file excel');
      // message.error('Không lấy được tên file excel');

      const urlDownload = window.URL.createObjectURL(new Blob([response.data ? response.data : response]));
      const link = document.createElement('a');
      link.href = urlDownload;
      link.setAttribute('download', fileName);
      link.click();
    } catch (error) {
      Message('error', 'Xảy ra lỗi !!!', 'Download file không thành công');
      // message.error('Download file không thành công');
      console.log(error);
    } finally {
      setExcelLoading(false);
    }
  };

  return (
    <>
      <Button
        style={style}
        type="primary"
        loading={isExcelLoading}
        // icon={}
        aria-pressed="true"
        onClick={() => onClickExportExcel()}
      >
        <img src={CSVIcon} alt="csv-icon" />
      </Button>
    </>
  );
};

export default ExportExcel;
