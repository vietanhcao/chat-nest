import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { columnTypes } from '../../../utils/agGrid';
import CustomRow from './CustomRow';
import { TRANSLATIONS } from './Transaltions';
import CustomCellStatus from './CustomCellStatus';
import CustomCellStatusTop from './CustomCellStatusTop';
import customDateComponent from './customDateComponent';
import AGPagination from 'src/components/AGPagination';
import { Select } from 'antd';
import './HeaderAgGrid.scss';

AgGridReactClient.propTypes = {
  height: PropTypes.string,
  rowData: PropTypes.array,
  style: PropTypes.object,
  pagination: PropTypes.bool,
  rowMultiSelectWithClick: PropTypes.bool,
  onModelUpdated: PropTypes.func,
  doesExternalFilterPass: PropTypes.func,
  isExternalFilterPresent: PropTypes.func,
  columnDefs: PropTypes.array,
  getRowHeight: PropTypes.any,
  pageSize: PropTypes.number,
  rowHeight: PropTypes.number,
  onRowDoubleClicked: PropTypes.func,
  onGridReady: PropTypes.func,
  gridApi: PropTypes.any,
  onRowClicked: PropTypes.func,
  onPageSizeChanged: PropTypes.func,
  onRowSelected: PropTypes.bool,
  onSelectionChanged: PropTypes.func,
  sideBar: PropTypes.bool,
  rowSelection: PropTypes.bool,
  totalPaginationPage: PropTypes.number,
  pagination: PropTypes.bool,
  onRowSelected: PropTypes.func,
  suppressRowClickSelection: PropTypes.bool,
};

AgGridReactClient.defaultProps = {
  height: 'calc(100vh - 225px)',
  rowData: [],
  pagination: true,
  style: {},
};

function AgGridReactClient(props) {
  const {
    columnDefs,
    onGridReady,
    pageSize,
    height,
    rowData,
    gridApi,
    onRowDoubleClicked,
    sideBar,
    pagination,
    getRowHeight,
    rowSelection,
    onRowClicked,
    rowHeight,
    style,
    onModelUpdated,
    rowMultiSelectWithClick,
    doesExternalFilterPass,
    isExternalFilterPresent,
    onSelectionChanged,
    totalPaginationPage,
    onRowSelected,
    onPageSizeChanged,
    suppressRowClickSelection,
  } = props;

  const [current, setCurrent] = useState(1);
  useEffect(() => {
    setCurrent(1);
  }, [totalPaginationPage]);

  return (
    <div className="custom-contains-ag">
      <div className="ag-theme-material" style={{ height, ...style }}>
        <AgGridReact
          onRowSelected={onRowSelected}
          localeText={TRANSLATIONS['vi-VI']}
          onSelectionChanged={onSelectionChanged}
          getRowHeight={getRowHeight}
          columnDefs={columnDefs}
          headerHeight={39}
          rowData={rowData}
          animateRows
          pagination={pagination}
          frameworkComponents={{
            medalCellRenderer: CustomRow,
            CustomCellStatus,
            CustomCellStatusTop,
            agDateInput: customDateComponent,
          }}
          defaultColDef={{
            // flex: 1,
            headerClass: 'header-background',
            minWidth: 70,
            resizable: true,
            sortable: true,
            filter: true,
            menuTabs: ['filterMenuTab'],
            cellClass: 'cellClass',
          }}
          rowHeight={rowHeight ? rowHeight : 48}
          // localeText={state.localeText}
          columnTypes={columnTypes()}
          onGridReady={onGridReady}
          paginationPageSize={pageSize}
          suppressDragLeaveHidesColumns={true}
          suppressContextMenu={true}
          suppressColumnVirtualisation={true}
          rowMultiSelectWithClick={rowMultiSelectWithClick}
          isExternalFilterPresent={isExternalFilterPresent}
          suppressRowClickSelection={suppressRowClickSelection}
          suppressPaginationPanel={true}
          suppressCellSelection={true}
          rowSelection={rowSelection ? 'multiple' : 'single'}
          onColumnResized={() => {
            // if (timeoutId) {
            //   clearTimeout(timeoutId)
            // }
            // timeoutId = setTimeout(() => {
            //   setDefaultColumn()
            // }, 500)
          }}
          // onColumnVisible={() => {
          //   setDefaultColumn()
          // }}
          onModelUpdated={onModelUpdated}
          doesExternalFilterPass={doesExternalFilterPass}
          onColumnMoved={() => {
            // if (timeoutId) {
            //   clearTimeout(timeoutId)
            // }
            // timeoutId = setTimeout(() => {
            //   setDefaultColumn()
            // }, 2000)
          }}
          sideBar={
            !sideBar && {
              toolPanels: [
                {
                  id: 'columns',
                  labelDefault: 'Columns',
                  labelKey: 'columns',
                  iconKey: 'columns',
                  toolPanel: 'agColumnsToolPanel',
                  toolPanelParams: {
                    suppressRowGroups: true,
                    suppressValues: true,
                    suppressPivots: true,
                    suppressPivotMode: true,
                    suppressSideButtons: true,
                    suppressColumnFilter: true,
                    suppressColumnSelectAll: true,
                    suppressColumnExpandAll: true,
                  },
                },
              ],
            }
          }
          onRowDoubleClicked={onRowDoubleClicked}
          onRowClicked={onRowClicked}
          onSortChanged={() => {
            if (gridApi) gridApi.refreshCells();
          }}
          onFilterChanged={() => {
            if (gridApi) gridApi.refreshCells();
          }}
          overlayNoRowsTemplate="Không có thông tin"
        />
      </div>

      {pagination && (
        <div className="ag-footer">
          {totalPaginationPage !== 1 && (
            <AGPagination page={totalPaginationPage} current={current} setCurrent={setCurrent} />
          )}
          <div className="select-pagesize">
            <span> Hiển thị </span>
            <Select defaultValue={'10'} style={{ width: 70, margin: '0 5px' }} onChange={onPageSizeChanged}>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="25">25</Select.Option>
              <Select.Option value="50">50</Select.Option>
              <Select.Option value="100">100</Select.Option>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
export default AgGridReactClient;
