const DAY_OPTION = { weekday: 'long' };

const DATE_OPTION = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const LANGUAGE_OPTIONS = {
  ES: 'es-ES',
};

const TRANSLATIONS = {
  'vi-VI': {
    DAY: 'ngày',
    DATE: 'ngày',

    // Start of ag-Grid locale translations
    selectAll: '(Chọn tất cả)',
    searchOoo: 'Tìm kiếm...',
    blanks: '(Trống)',
    noMatches: 'Không khớp',

    // Number Filter & Text Filter
    filterOoo: 'Lọc...',
    equals: 'Bằng',
    notEqual: 'Không bằng',
    empty: 'Trống',

    // Number Filter
    lessThan: 'Ít hơn',
    greaterThan: 'Lớn hơn',
    lessThanOrEqual: 'Ít hơn hoặc bằng',
    greaterThanOrEqual: 'Lớn hơn hoặc bằng',

    // Text Filter
    contains: 'Bao gồm',

    // Date Filter
    dateFormatOoo: 'yyyy-mm-dd',

    // Filter Buttons
    applyFilter: 'Áp dụng',
    resetFilter: 'Làm mới',

    // Filter Titles
    textFilter: 'Lọc chữ',
    numberFilter: 'Lọc số',
    dateFilter: 'Lọc ngày',
    setFilter: 'Lọc theo bộ',

    // Side Bar
    columns: 'Cột',
    filters: 'Bộ lọc',

    // Other
    loadingOoo: 'Đang tải...',
    noRowsToShow: 'Không có dữ liệu',
    enabled: 'Enabled',

    // Menu
    pinColumn: 'Ghim cột',
    pinLeft: 'Ghim trái',
    pinRight: 'Ghim phải',
    noPin: 'không ghim',

    autosizeThiscolumn: 'tự động điều chỉnh kích thước cột',
    autosizeAllColumns: 'tự động điều chỉnh tất cả các cột',
    resetColumns: 'Làm mới cột',
    copy: 'Sao chép',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copy With Headers',
    paste: 'Dán',
    ctrlV: 'Ctrl+V',
    export: 'Xuất',
    csvExport: ' Xuất CSV',
    excelExport: ' Xuất Excel (.xlsx)',
    excelXmlExport: ' Xuất Excel (.xml)',
  },
};

export { DATE_OPTION, DAY_OPTION, TRANSLATIONS, LANGUAGE_OPTIONS };
