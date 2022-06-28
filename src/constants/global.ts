export const STATUS_MAP = {
  0: 'Chờ duyệt',
  1: 'Đã duyệt',
  2: 'Đã đăng',
  3: 'Bị Từ chối',
  4: 'Bị gỡ',
};
export const PRIORITY_MAP = {
  0: 'Bài viết bình thường',
  1: 'Bài viết quan trọng',
  2: 'Bài viết rất quan trọng',
};

export const ROLE_STATUS_LIST = [
  {
    name: 'Hoạt động',
    value: 'ACTIVE',
  },
  { name: 'Không hoạt động', value: 'INACTIVE' },
  { name: 'Đang chờ kích hoạt', value: 'PENDING' },
];

export const ROLE_STATUS_LIST_LOWER_VER = [
  {
    name: 'Hoạt động',
    value: 'active',
  },
  { name: 'Không hoạt động', value: 'inactive' },
  { name: 'Đang chờ kích hoạt', value: 'pending' },
];

export const STATUS_COLUMN_LOWER_VER = (field?: string) => {
  return {
    field: field ? field : 'status',
    headerName: 'Trạng thái',
    cellRenderer: (e: any) => {
      return e.value ? ROLE_STATUS_LIST_LOWER_VER.find((o) => o.value === e.value)?.name : '';
    },
    filter: 'agSetColumnFilter',
    filterParams: {
      suppressMiniFilter: true,
      values: function (params: any) {
        params.success(['active', 'inactive', 'pending']);
      },
      valueFormatter: (params: any) => {
        return params.value === 'active'
          ? 'Hoạt động'
          : params.value === 'inactive'
          ? 'Không hoạt động'
          : 'Đang chờ kích hoạt';
      },
    },
  };
};

export const STATUS_COLUMN_UPPER_VER = {
  field: 'status',
  headerName: 'Trạng thái',
  cellRenderer: (e: any) => {
    return e.value ? ROLE_STATUS_LIST.find((o) => (o.value = e.value))?.name : '';
  },
  filter: 'agSetColumnFilter',
  filterParams: {
    suppressMiniFilter: true,
    values: function (params: any) {
      params.success(['ACTIVE', 'INACTIVE', 'PENDING']);
    },
    valueFormatter: (params: any) => {
      return params.value === 'ACTIVE'
        ? 'Hoạt động'
        : params.value === 'INACTIVE'
        ? 'Không hoạt động'
        : 'Đang chờ kích hoạt';
    },
  },
};

export const ORDER_STATUS: any = {
  PENDING: 'Đang chờ gửi',
  IN_TRANSIT: 'Đã gửi đi',
  REJECTED: 'Đã bị từ chối',
  WORKING: 'Đang chờ khớp',
  PARTIALLY_FILLED: 'Khớp một phần',
  FILLED: 'Đã khớp',
  MODIFIED: 'Đã sửa',
  CANCELLED: 'Đã hủy',
  EXPIRED: 'Hết hạn',
  SUSPENDED: 'Treo',
};

export const MAPPED_COL = (field: string, title: string, mappingList: any, specialRender?: any) => {
  let arrayKey = Object.keys(mappingList);
  return {
    field: field,
    headerName: title,
    cellRenderer: specialRender
      ? specialRender
      : (e: any) => {
          return e.value ? mappingList[arrayKey.filter((value) => value === e.value)[0]] : '';
        },
    filter: 'agSetColumnFilter',
    filterParams: {
      suppressMiniFilter: true,
      values: function (params: any) {
        params.success(arrayKey);
      },
      valueFormatter: (e: any) => {
        return e.value ? mappingList[arrayKey.filter((value) => value === e.value)[0]] : '';
      },
    },
  };
};

export const TRUE_FALSE_LIST = [
  {
    name: 'Có',
    value: true,
  },
  { name: 'Không', value: false },
];

export const ORDER_TYPE = {
  MKT: 'Thị trường',
  LMT: 'Giới hạn',
  STP: 'Dừng',
  STL: 'Giới hạn dừng',
};

export const DURATION_ORDER_TYPE: any = {
  DAY: 'Trong ngày',
};

export const SIDE_ORDER: any = {
  SELL: 'Bán',
  BUY: 'Mua',
};

export const STATUS_USER_MAP = {
  ACTIVE: 'Bình thường',
  INACTIVE: 'Tạm khoá',
  PENDING: 'Đang chờ',
};

export const TYPE_POST = {
  1: 'Phân tích',
  2: 'Khác',
};

export const STATUS_STREAM = {
  IDLE: 'Đang đợi',
  INACTIVE: 'Đã dừng phát',
  ACTIVE: 'Đang phát',
};

export const STATUS_TICKET = {
  PENDING: 'Đang xử lý',
  OPEN: 'Đang chờ',
  CLOSE: 'Đã đóng',
};

export const STATUS = {
  ACTIVE: 'Đang hoạt động',
  INACTIVE: 'Không hoạt động',
};

export const LOWER_STATUS = {
  active: 'Đang hoạt động',
  inactive: 'Không hoạt động',
};

export const STATUS_ORDER = {
  PENDING: 'Chờ phê duyệt',
  CANCEL: 'Đã huỷ',
  SUCCESS: 'Thành công',
  FAILURE: 'Thất bại',
};

export const STATUS_TRANSFER = {
  TRANSFER: 'Chuyển khoản',
  NAPAS: 'NAPAS',
};

export const STATUS_PACKET = {
  'Nâng cao': 'Nâng cao',
  'Cơ bản': 'Cơ bản',
  'Chuyên nghiệp': 'Chuyên ngiệp',
};

export const HELP_CATEGORY_MAP = {
  ACCOUNT: 0,
  PAYMENT: 1,
  FUNCTION: 2,
  OTHER: 3,
};

export const TYPE_NOTIFYBOX_MAP = {
  POST_PENDING: 'Bài viết đang chờ duyệt',
  POST_APPROVED: 'Bài viết đã duyệt',
  POST_REJECTED: 'Bài viết đã từ chối',
  POST_DELETED: 'Bài viết đã xoá',
  POST_BAN: 'Bài viết đã gỡ',
  ORDER_CREATED: 'Có đơn hàng mới',
};

export const COB_RESULT_TYPE = {
  pending_sync: 'Chờ đồng bộ',
  running: 'Đang chạy COB',
  run_fail: 'Chạy COB không thành công',
  pending_update: 'Chờ cập nhật SOD',
  updating: 'Đang cập nhật SOD',
  update_fail: 'Cập nhật SOD không thành công',
  syncing: 'Đang đồng bộ',
  sync_fail: 'Đồng bộ không thành công',
};

export const INVESTOR_TYPE = [
  {
    value: 'P',
    name: 'Tự doanh',
  },
  {
    value: 'C',
    name: 'NĐT cá nhân trong nước',
  },
  {
    value: 'E',
    name: 'NĐT tổ chức trong nước',
  },
  {
    value: 'F',
    name: 'NĐT cá nhân nước ngoài',
  },
  {
    value: 'I',
    name: 'NĐT tổ chức nước ngoài',
  },
];

export const COUNTER_CURRENCY = 'VND';

export const HEADER_HEIGHT = '54px';
export const MAIN_CONTAINER_PADDING = '20px';
export const WHITE_CARD_PADDING = '42px';
export const HEADER_WHITE_CARD_HEIGHT = '53px';
export const TAB_CHANGER_HEIGHT = '55px';
export const CHART_FOOTER_HEIGHT = '48px';
export const DATE_PICKER_HEIGHT = '52px';

export const BASIC_SERVER = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${CHART_FOOTER_HEIGHT}`;
export const BASIC_SERVER_WITH_TAB = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${CHART_FOOTER_HEIGHT} - ${TAB_CHANGER_HEIGHT}`;
export const BASIC_SERVER_WITH_SELECTOR = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${CHART_FOOTER_HEIGHT} - ${DATE_PICKER_HEIGHT}`;
export const BASIC_SERVER_WITH_TAB_AND_SELECTOR = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${CHART_FOOTER_HEIGHT} - ${TAB_CHANGER_HEIGHT} - ${DATE_PICKER_HEIGHT}`;

export const BASIC_CLIENT = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT}`;
export const BASIC_CLIENT_WITH_SELECTOR = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${DATE_PICKER_HEIGHT}`;
export const BASIC_CLIENT_WITH_TAB = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${TAB_CHANGER_HEIGHT}`;
export const BASIC_CLIENT_WITH_TAB_AND_SELECTOR = `100vh - ${HEADER_HEIGHT} - ${MAIN_CONTAINER_PADDING} - ${WHITE_CARD_PADDING} - ${HEADER_WHITE_CARD_HEIGHT} - ${DATE_PICKER_HEIGHT} - ${TAB_CHANGER_HEIGHT}`;

export const SELL_OR_LOSS_COLOR = '#EE4F46';
export const BUY_OR_GAIN_COLOR = '#00D341';
