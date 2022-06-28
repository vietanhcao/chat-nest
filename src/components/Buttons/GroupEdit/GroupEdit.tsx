import { Button } from 'antd';
import React, { ReactElement } from 'react';
import './style.scss';

interface Props {
  isEdit: boolean;
  loading: boolean;
  onClickUpate?: any;
  onClickEdit?: any;
  onClickCancel?: any;
}

function GroupEdit({ isEdit, loading, onClickUpate, onClickEdit, onClickCancel }: Props): ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {isEdit ? (
        <>
          <Button
            onClick={onClickUpate}
            size="middle"
            type="primary"
            className="group--botton--update"
            loading={loading}
          >
            Lưu
          </Button>
          <Button
            onClick={onClickCancel}
            size="middle"
            type="primary"
            className="group--botton--cancel"
            style={{ marginLeft: 10 }}
          >
            Huỷ
          </Button>
        </>
      ) : (
        <Button onClick={onClickEdit} size="middle" type="primary" className="group--botton--edit">
          Sửa
        </Button>
      )}
    </div>
  );
}

export default GroupEdit;
