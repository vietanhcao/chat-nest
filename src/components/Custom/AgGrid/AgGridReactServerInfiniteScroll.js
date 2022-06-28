import { ServerSideStoreType } from 'ag-grid-community'
import 'ag-grid-enterprise'
import { AgGridReact } from 'ag-grid-react'
import PropTypes from 'prop-types'
import React from 'react'
import { columnTypes } from '../../../utils/agGrid'
import customDateComponent from './customDateComponent'
import CustomHeader from './CustomHeader'
import CustomRow from './CustomRow'
import CustomRowCategories from './CustomRowCategories'
import CustomRowCategoriesTemplate from './CustomRowCategoriesTemplate'

AgGridReactServerInfiniteScroll.propTypes = {
  height: PropTypes.string,
  getRowHeight: PropTypes.number,
  onRowDoubleClicked: PropTypes.func,
  onRowClicked: PropTypes.func,
  rowMultiSelectWithClick: PropTypes.bool,
}

AgGridReactServerInfiniteScroll.defaultProps = {
  height: 'calc(100vh - 225px)',
  rowMultiSelectWithClick: true,
}

function AgGridReactServerInfiniteScroll(props) {
  const {
    columnDefs,
    onGridReady,
    pageSize,
    height,
    onRowDoubleClicked,
    onColumnVisible,
    onColumnResized,
    onRowClicked,
    rowMultiSelectWithClick,
    getRowHeight,
    rowHeight,
    sideBar,
  } = props

  return (
    <div className="ag-theme-material" style={{ height }}>
      <AgGridReact
        columnDefs={columnDefs}
        frameworkComponents={{
          agColumnHeaderCustom: CustomHeader,
          CustomRowCategories: CustomRowCategories,
          medalCellRenderer: CustomRow,
          customRowCategoriesTemplate: CustomRowCategoriesTemplate,
          agDateInput: customDateComponent,
        }}
        headerHeight={39}
        rowModelType="infinite"
        animateRows
        defaultColDef={{
          // flex: 1,
          headerClass: 'header-background',
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
        rowSelection="single"
        paginationPageSize={pageSize}
        cacheBlockSize={pageSize}
        enableServerSideFilter
        suppressDragLeaveHidesColumns={true}
        suppressContextMenu={true}
        suppressColumnVirtualisation={true}
        suppressCellSelection={true}
        onColumnMoved={() => {
          // if (timeoutId) {
          //   clearTimeout(timeoutId)
          // }
          // timeoutId = setTimeout(() => {
          //   setDefaultColumn()
          // }, 2000)
        }}
        serverSideStoreType={ServerSideStoreType.Partial}
        rowBuffer={0}
        cacheOverflowSize={2}
        maxConcurrentDatasourceRequests={1}
        infiniteInitialRowCount={100}
        maxBlocksInCache={10}
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
        onColumnResized={onColumnResized}
        onColumnVisible={onColumnVisible}
        getRowHeight={getRowHeight}
        rowHeight={rowHeight ? rowHeight : 48}
      />
    </div>
  )
}
export default AgGridReactServerInfiniteScroll
