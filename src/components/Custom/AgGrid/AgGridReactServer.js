import { ServerSideStoreType } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import PropTypes, { number } from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import { columnTypes } from '../../../utils/agGrid';
import customDateComponent from './customDateComponent';
import CustomHeader from './CustomHeader';
import CustomRow from './CustomRow';
import CustomRowCategories from './CustomRowCategories';
import CustomRowCategoriesTemplate from './CustomRowCategoriesTemplate';
import { TRANSLATIONS } from './Transaltions';
import { Select } from 'antd';
import './HeaderAgGrid.scss';
import { selectTableSetting, setTableSetting } from 'src/components/appBarSlice';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import AGPagination from 'src/components/AGPagination';

AgGridReactServer.propTypes = {
  height: PropTypes.string,
  tableName: PropTypes.string,
  rowSelection: PropTypes.string,
  columnDefs: PropTypes.array,
  getRowHeight: PropTypes.number,
  pageSize: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
  onRowDoubleClicked: PropTypes.func,
  onGridReady: PropTypes.func,
  gridColumnApi: PropTypes.any,
  onModelUpdated: PropTypes.func,
  gridApi: PropTypes.any,
  onRowClicked: PropTypes.func,
  onPageSizeChanged: PropTypes.func,
  rowMultiSelectWithClick: PropTypes.bool,
  sideBar: PropTypes.bool,
  onRowSelected: PropTypes.bool,
  onSelectionChanged: PropTypes.func,
  rowSelection: PropTypes.string,
  defaultPagesize: PropTypes.string,
  serverSideDatasource: PropTypes.any,
  totalPaginationPage: PropTypes.number,
  getRowStyle: PropTypes.func,
  components: PropTypes.any,
};

AgGridReactServer.defaultProps = {
  height: 'calc(100vh - 225px)',
  rowMultiSelectWithClick: true,
  headerHeight: 52,
  rowSelection: 'single',
  defaultPagesize: '10',
};

function AgGridReactServer(props) {
  const {
    columnDefs,
    onGridReady,
    pageSize,
    height,
    onRowDoubleClicked,
    onColumnVisible,
    onColumnResized,
    onRowClicked,
    rowSelection,
    rowMultiSelectWithClick,
    getRowHeight,
    rowHeight,
    sideBar,
    onRowSelected,
    gridColumnApi,
    gridApi,
    onSelectionChanged,
    onPageSizeChanged,
    headerHeight,
    onModelUpdated,
    tableName,
    defaultPagesize,
    serverSideDatasource,
    totalPaginationPage,
    getRowStyle,
    components,
  } = props;

  const timeoutId = useRef();
  const [current, setCurrent] = useState(1);
  let tableSetting = useAppSelector(selectTableSetting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gridApi) gridApi.paginationGoToPage(current - 1);
  }, [gridApi, current]);

  useEffect(() => {
    setCurrent(1);
  }, [totalPaginationPage]);

  const setDefaultColumn = () => {
    const dataColumn = gridColumnApi.getColumnState();
    const dataTableClone = { ...tableSetting };
    dataTableClone[tableName] = dataColumn;
    dispatch(setTableSetting(dataTableClone));
    // appBarApi.postTableSetting(dataTableClone);
    // AxiosInstance.post('/am/admin/users/tableSetting', data)
    //   .then(({ data: result }) => {})
    //   .catch((err) => {});
  };

  // autoSize() {
  //   if (gridColumnApi) {
  //     let id = [];
  //     gridColumnApi.getAllColumns().forEach(function (column) {
  //       id.push(column.colId);
  //     });
  //     id.length = id.length - 1;
  //     gridColumnApi.autoSizeColumns(id);
  //   }
  // }

  return (
    <div className="custom-contains-ag">
      <div className="ag-theme-material" style={{ height }}>
        <AgGridReact
          localeText={TRANSLATIONS['vi-VI']}
          components={components}
          columnDefs={columnDefs}
          frameworkComponents={{
            agColumnHeaderCustom: CustomHeader,
            CustomRowCategories: CustomRowCategories,
            medalCellRenderer: CustomRow,
            customRowCategoriesTemplate: CustomRowCategoriesTemplate,
            agDateInput: customDateComponent,
          }}
          headerHeight={headerHeight}
          rowModelType="serverSide"
          animateRows
          pagination
          defaultColDef={{
            flex: 1,
            headerClass: 'header-background',
            cellClass: 'cellClass',
            minWidth: 70,
            resizable: true,
            sortable: true,
            filter: true,
            menuTabs: ['filterMenuTab'],
          }}
          // localeText={this.state.localeText}
          columnTypes={columnTypes()}
          enableServerSideSorting
          onGridReady={onGridReady}
          rowMultiSelectWithClick={rowMultiSelectWithClick}
          getRowStyle={getRowStyle}
          rowSelection={rowSelection}
          paginationPageSize={pageSize}
          cacheBlockSize={pageSize}
          enableServerSideFilter
          suppressDragLeaveHidesColumns={true}
          suppressContextMenu={true}
          suppressColumnVirtualisation={true}
          suppressCellSelection={true}
          onColumnResized={() => {
            if (tableName) {
              if (timeoutId.current) {
                clearTimeout(timeoutId.current);
              }
              timeoutId.current = setTimeout(() => {
                setDefaultColumn();
              }, 500);
            }
          }}
          onColumnVisible={() => {
            if (tableName) {
              setDefaultColumn();
            }
          }}
          onColumnMoved={() => {
            if (tableName) {
              if (timeoutId.current) {
                clearTimeout(timeoutId.current);
              }
              timeoutId.current = setTimeout(() => {
                setDefaultColumn();
              }, 2000);
            }
          }}
          serverSideStoreType={ServerSideStoreType.Partial}
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
          onRowSelected={onRowSelected}
          onSelectionChanged={onSelectionChanged}
          onRowDoubleClicked={onRowDoubleClicked}
          onRowClicked={onRowClicked}
          onColumnResized={onColumnResized}
          onColumnVisible={onColumnVisible}
          getRowHeight={getRowHeight}
          onModelUpdated={onModelUpdated}
          rowHeight={rowHeight ? rowHeight : 48}
          suppressPaginationPanel={true}
          serverSideDatasource={serverSideDatasource}
        />
      </div>

      <div className="ag-footer">
        {totalPaginationPage > 1 && (
          <AGPagination page={totalPaginationPage} current={current} setCurrent={setCurrent} />
        )}
        <div className="select-pagesize">
          <span> Hiển thị </span>
          <Select defaultValue={defaultPagesize} style={{ width: 70, margin: '0 5px' }} onChange={onPageSizeChanged}>
            <Select.Option value="10">10</Select.Option>
            <Select.Option value="25">25</Select.Option>
            <Select.Option value="50">50</Select.Option>
            <Select.Option value="100">100</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
export default AgGridReactServer;
