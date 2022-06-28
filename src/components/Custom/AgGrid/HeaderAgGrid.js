import { CButton } from '@coreui/react';
import { Input, Select, Button } from 'antd';
import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import Popconfirm from 'antd/es/popconfirm';

function HeaderAgGrid(props) {
  const {
    onPageSizeChanged,
    onClickCopy,
    onClickCreate,
    onClickDelete,
    onClickBan,
    onClickSave,
    onClickStop,
    onClickEdit,
    onClckApproval,
    onClickReject,
    title,
    loadingPlay,
    isHideButtons,
    onSearch,
    suppressPagesize,
    titlePost,
    onClickPlay,
    onClickStopPlay,
    onClickCancel,
    style,
  } = props;

  const history = useHistory();
  return (
    <div
      style={{
        padding: '4px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style,
      }}
      className="HeaderAgGrid"
    >
      {title && <span className="card--title">{title}</span>}

      {titlePost && (
        <div style={{ padding: '2px' }}>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: titlePost === 'MẪU BÀI VIẾT' ? '#3656C8' : '#95A5BB',
              borderBottom: titlePost === 'MẪU BÀI VIẾT' ? '2px solid #3656C8' : 'none',
              paddingBottom: 10,
              marginRight: 5,
              cursor: 'pointer',
            }}
            onClick={() => history.push('/news-manager/teamplate-post')}
          >
            {titlePost}
          </span>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: titlePost === 'MẪU BÁO CÁO' ? '#3656C8' : '#95A5BB',
              borderBottom: titlePost === 'MẪU BÁO CÁO' ? '2px solid #3656C8' : 'none',
              paddingBottom: 10,
              marginRight: 5,
              cursor: 'pointer',
            }}
            onClick={() => history.push('/news-manager/teamplate-report')}
          >
            {titlePost}
          </span>
        </div>
      )}
      <div>
        {onSearch && (
          <>
            {/* <span style={{ marginRight: 5 }}>Các kết quả tìm thấy cho</span> */}
            <Input.Search
              style={{ width: 200, marginRight: 5 }}
              allowClear
              onSearch={onSearch}
              // defaultValue="đậu tương"
            />
          </>
        )}
        {!suppressPagesize && (
          <>
            <span>xem</span>
            <Select defaultValue="10" style={{ width: 70, margin: '0 5px' }} onChange={onPageSizeChanged}>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="25">25</Select.Option>
              <Select.Option value="50">50</Select.Option>
              <Select.Option value="100">100</Select.Option>
            </Select>
            <span style={{ marginRight: '10px' }}>bản ghi</span>
          </>
        )}

        {!isHideButtons && (
          <>
            {onClickCopy && (
              <CButton size="sm" color="success" className="button-create" onClick={onClickCopy} style={{ width: 100 }}>
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-copy"></i>
                Sao chép
              </CButton>
            )}

            {onClickCreate && (
              <Button size="middle" type="primary" className="group--botton--update" onClick={onClickCreate}>
                Thêm mới
              </Button>
            )}

            {onClckApproval && (
              <CButton
                size="sm"
                color="success"
                style={{
                  color: 'white',
                  marginRight: 10,
                  marginLeft: 10,
                  backgroundColor: '#3CBC7F',
                }}
                className="button-create"
                onClick={onClckApproval}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-check"></i>
                Phê duyệt
              </CButton>
            )}

            {onClickEdit && (
              <CButton size="sm" color="primary" active onClick={onClickEdit} className="button-edit">
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-edit"></i>
                Chỉnh sửa
              </CButton>
            )}

            {onClickBan && (
              <CButton
                size="sm"
                color="danger"
                onClick={onClickBan}
                className="button-delete"
                style={{ marginRight: 5 }}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 10 }} className="fa fa-trash"></i>
                Gỡ
              </CButton>
            )}

            {onClickPlay && (
              <CButton
                size="sm"
                color="success"
                style={{
                  color: 'white',
                  marginRight: 10,
                  backgroundColor: '#3CBC7F',
                  width: 70,
                }}
                disabled={loadingPlay}
                className="button-edit"
                onClick={onClickPlay}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-play"></i>
                Phát
              </CButton>
            )}

            {onClickStopPlay && (
              <CButton
                size="sm"
                color="danger"
                onClick={onClickStopPlay}
                className="button-delete"
                style={{ marginRight: 10, width: 70 }}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-stop"></i>
                Dừng
              </CButton>
            )}

            {onClickDelete && (
              <Popconfirm
                placement="topRight"
                title={'Bạn có chắc chắn muốn xoá?'}
                onConfirm={onClickDelete}
                okText="Đồng ý"
                cancelText="Huỷ"
              >
                <CButton
                  size="sm"
                  color="danger"
                  // onClick={onClickDelete}
                  className="button-delete"
                >
                  {' '}
                  <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-trash"></i>
                  Xoá
                </CButton>
              </Popconfirm>
            )}

            {onClickStop && (
              <CButton color="danger" onClick={onClickStop} className="button-stop">
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-ban"></i>
                Dừng
              </CButton>
            )}

            {onClickReject && (
              <CButton
                size="sm"
                color="danger"
                onClick={onClickReject}
                style={{ color: 'white', backgroundColor: '#F45C6E', width: 90 }}
                className="button-delete"
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-trash"></i>
                Từ chối
              </CButton>
            )}

            {onClickSave && (
              <CButton
                size="sm"
                color="primary"
                active
                onClick={onClickSave}
                className="button-edit"
                style={{ width: '80px' }}
              >
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-edit"></i>
                Lưu
              </CButton>
            )}

            {onClickCancel && (
              <CButton size="sm" className="button-undo" active onClick={onClickCancel}>
                {' '}
                <i style={{ textAlign: 'center', marginRight: 5 }} className="fa fa-undo"></i>
                Huỷ
              </CButton>
            )}
          </>
        )}
      </div>
    </div>
  );
}

HeaderAgGrid.propTypes = {
  title: PropTypes.string,
  isHideButtons: PropTypes.bool,
  loadingPlay: PropTypes.bool,
};
HeaderAgGrid.defaultProps = { isHideButtons: false, loadingPlay: false };

export default HeaderAgGrid;
