export const isDifferentFunction = (oldData: any[] = [], Penddingdata: any[] = [], key: string): boolean => {
  if (oldData.length > Penddingdata.length) {
    return true;
  } else if (oldData.length < Penddingdata.length) {
    return true;
  } else {
    for (const obj of oldData) {
      const result = Penddingdata.find((o: any) => o[key] === obj[key]);
      if (!result) {
        return true;
      }
    }
    return false;
  }
};

export const checkFunction = (oldData: any, newData: any, returnType: any) => {
  let increaseRole: any[] = [];
  let decreaseRole: any[] = [];
  let oldRole = oldData.functions || [''];
  let newRole = newData.functions || [''];

  let oldR: any[] = [];
  let newR: any[] = [];
  oldRole.forEach((item: any) => {
    if (item.name) oldR.push(item.name);
  });
  newRole.forEach((item: any) => {
    if (item.name) newR.push(item.name);
  });
  oldR.forEach((item) => {
    if (!newR.includes(item)) decreaseRole.push(item);
  });
  newR.forEach((item) => {
    if (!oldR.includes(item)) increaseRole.push(item);
  });

  let listMapIncreaseRole: any[] = [];
  let listMapDecreaseRole: any[] = [];

  decreaseRole.forEach((item) => {
    if (!menu2.includes(item)) listMapDecreaseRole.push(item);
  });

  increaseRole.forEach((item) => {
    if (!menu2.includes(item)) listMapIncreaseRole.push(item);
  });

  return returnType === 'increase' ? listMapIncreaseRole : listMapDecreaseRole;
};

const menu2 = [
  //  quản lý hệ thống
  'Quản lý hệ thống',
  'Xử lý ký quỹ',
  'Mất kết nối',
  'Phiên giao dịch của MXV',
  'Cấu hình Email/Sms tự động',
  'Cấu hình tất toán trạng thái của hợp đồng khi đến ngày thông báo đầu tiên',
  'Quản lý ngày nghỉ EOD',
  'Thông báo đáo hạn',
  'Âm thanh báo động',
  'EOD',
  'Tin tức',

  // Quản lý người dùng quản trị
  'Quản lý người dùng quản trị',
  'Quản lý phòng ban',
  'Quản lý người dùng admin',
  'Quản lý nhóm quyền của hệ thống',

  // quản lý khách hàng
  'Quản lý Khách hàng',
  'Quản lý TVKD',
  'TVKD',
  'Quản trị tham số rủi ro TVKD',
  'Quản lý người dùng của TVKD',
  'Quản lý nhóm quyền của TVKD',
  'Quản lý Môi giới',
  'Quản lý CTV MG',
  'Quản lý TKGD',
  'TKGD',
  'Nộp rút ký quỹ TKGD',
  'Quản trị tham số rủi ro TKGD',

  // Quản lý tiền tệ & tỷ giá
  'Quản lý tiền tệ & tỷ giá',
  'Tiền tệ',
  'Tỷ giá',

  // quản lý hàng hóa hợp đồng
  'QL hàng hóa - hợp đồng',
  'Quản lý hàng hóa',
  'Danh sách hàng hóa',
  'Thông tin hàng hóa',
  'Ký quỹ hàng hóa',
  'Quản lý hợp đồng',
  'Danh sách hợp đồng',
  'Thông tin hợp đồng',

  // quản lý giá
  'Quản lý giá',
  'Bảng giá',
  'Giá thanh toán',
  'Biên độ giá',

  // Quản lý giao dịch
  'Quản lý giao dịch',
  'Danh sách giao dịch',
  'Danh sách lệnh',

  // Quản lý trạng thái
  'Quản lý trạng thái',
  'Ký quỹ',
  'Giao dịch từ Excel',

  'QL kích hoạt giá',
  'Quản lý exchange',
  'Phê duyệt',
  'Quản lý báo cáo',
];
