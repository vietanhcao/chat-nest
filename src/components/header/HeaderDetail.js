import { CButton } from '@coreui/react';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'antd';
import ExportExcel from '../../utils/platformUtils/ExportExcel';

function HeaderDetail(props) {
  const {
    onClickCancel,
    onClickSave,
    type,
    title,
    onClickAdd,
    onClickRemove,
    onClickEdit,
    onClickCancelUpdate,
    onClickShowListPermission,
    onClickSaveUpdate,
    queryExcelExport,
    axiosGet,
    idExportExcel,
    fileNameDefault,
  } = props;

  return (
    <div
      style={{
        padding: '4px',
        display: 'flex',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className="card--title">{title}</span>
      <div>
        {onClickShowListPermission && (
          <Button onClick={onClickShowListPermission} className="button-edit" style={{ marginRight: '10px' }}>
            Quyền riêng
          </Button>
        )}
        {onClickAdd && (
          <Button onClick={onClickAdd} className="group--botton--update" style={{ marginRight: '10px' }}>
            Tạo mới
          </Button>
        )}
        {queryExcelExport && (
          <ExportExcel
            style={{
              borderRadius: '5px',
              width: 38,
              height: 38,
              backgroundColor: '#009CC1',
              borderColor: '#009CC1',
              padding: 0,
            }}
            axiosGet={axiosGet}
            id={idExportExcel}
            queryString={queryExcelExport || ''}
            fileNameDefault={fileNameDefault}
          />
        )}
        {type === 'create' ? (
          <>
            <CButton size="sm" className="button-undo" active onClick={onClickCancel}>
              {' '}
              <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-undo"></i>
              Huỷ
            </CButton>
            {onClickSave && (
              <CButton
                size="sm"
                color="primary"
                active
                className="button-edit"
                style={{
                  color: 'white',
                  marginRight: 10,
                  marginLeft: 10,
                  width: 65,
                }}
                onClick={onClickSave}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-save"></i>
                Lưu
              </CButton>
            )}
          </>
        ) : (
          <>
            {onClickRemove && (
              <CButton
                size="sm"
                onClick={onClickRemove}
                className="button-delete"
                style={{ marginRight: '10px', backgroundColor: '#FF844F' }}
              >
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-chevron-circle-right"></i>
                Bớt
              </CButton>
            )}
            {onClickCancel && (
              <CButton size="sm" color="primary" className="button-undo" active onClick={onClickCancel}>
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-undo"></i>
                Huỷ
              </CButton>
            )}
            {onClickSave && (
              <CButton
                size="sm"
                color="primary"
                active
                className="button-edit"
                style={{
                  color: 'white',
                  marginRight: 10,
                  marginLeft: 10,
                  width: 65,
                }}
                onClick={onClickSave}
                disabled={onClickSave === true ? true : false}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-save"></i>
                Lưu
              </CButton>
            )}
          </>
        )}

        {type === 'update' && onClickEdit && (
          <CButton size="sm" color="primary" active onClick={onClickEdit} className="button-edit">
            {' '}
            <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-edit"></i>
            Chỉnh sửa
          </CButton>
        )}

        {type === 'updateFalse' && (
          <>
            <CButton size="sm" className="button-undo" active onClick={onClickCancelUpdate}>
              {' '}
              <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-undo"></i>
              Huỷ
            </CButton>
            <CButton
              size="sm"
              color="primary"
              active
              className="button-edit"
              style={{
                color: 'white',
                marginRight: 10,
                marginLeft: 10,
                width: 65,
              }}
              onClick={onClickSaveUpdate}
            >
              {' '}
              <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-save"></i>
              Lưu
            </CButton>
          </>
        )}
      </div>
    </div>
  );
}

HeaderDetail.propTypes = {
  // onClickCancel: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func,
  onClickShowListPermission: PropTypes.func,
  axiosGet: PropTypes.func,
  title: PropTypes.string.isRequired,
  fileNameDefault: PropTypes.string.isRequired,
  idExportExcel: PropTypes.string,
  queryExcelExport: PropTypes.string.isRequired,
};

export default HeaderDetail;
