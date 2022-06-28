import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { store } from 'src/app/store';

export default function useNavigate() {
  let state = store.getState();
  let functions = state?.auth?.functions;

  const [nav, setNav] = useState([]);
  useEffect(() => {
    let _nav = [
      // System management
      {
        _component: 'CNavGroup',
        anchor: 'Thiết lập hệ thống',
        icon: 'fa fa-server',
        // style: CheckPermission.isAllowedRoute(),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Thiết lập phiên',
            to: '/system-management/trans-session-config',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'QL COB (Close of Business)',
            to: '/system-management/cob-management',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            // style: CheckPermission.isAllowedRoute(),
            as: NavLink,
            anchor: 'QL đăng nhập',
            to: '/system-management/login-management',
            icon: 'fa fa-circle',
          },
        ],
      },

      // ICX users
      {
        _component: 'CNavGroup',
        anchor: 'Người dùng Sở giao dịch',
        icon: 'fas fa-user-cog',
        // style: CheckPermissionStyle([""]),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermissionStyle([""]),
            anchor: 'QL phòng ban',
            to: '/ICX-users/departmentManagement',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermissionStyle([""]),
            anchor: 'QL nhóm quyền',
            to: '/ICX-users/role-list',
            icon: 'fa fa-circle',
          },
        ],
      },

      // User management
      {
        _component: 'CNavGroup',
        anchor: 'Quản lý khách hàng',
        icon: 'fas fa-users',
        // style: CheckPermissionStyle([""]),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermissionStyle([""]),
            anchor: 'Thành viên kinh doanh',
            to: '/customer-management/trading-members',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermissionStyle([""]),
            anchor: 'Nhà đầu tư',
            to: '/customer-management/investors',
            icon: 'fa fa-circle',
          },
        ],
      },

      // Market Infomation
      {
        _component: 'CNavGroup',
        anchor: 'Dữ liệu thị trường',
        icon: 'fas fa-dollar-sign',
        // style: CheckPermission.isAllowedRoute(),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Hàng hóa',
            to: '/market-infomation/merchandise',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Hợp đồng',
            to: '/market-infomation/contract',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Tiền tệ và tỷ giá',
            to: '/market-infomation/currency',
            icon: 'fa fa-circle',
          },
        ],
      },

      // Order
      {
        _component: 'CNavGroup',
        anchor: 'Quản lý lệnh và vị thế',
        icon: 'fas fa-exchange-alt',
        // style: CheckPermission.isAllowedRoute(),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Danh sách lệnh',
            to: '/order-management/orders',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Trạng thái mở Admin',
            to: '/order-management/opens',
            icon: 'fa fa-circle',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Trạng thái đóng Admin',
            to: '/order-management/closes',
            icon: 'fa fa-circle',
          },
        ],
      },

      // Approvement management
      {
        _component: 'CNavGroup',
        anchor: 'Phê duyệt',
        icon: 'fas fa-check-square',
        // style: CheckPermission.isAllowedRoute(),
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            // style: CheckPermission.isAllowedRoute(),
            anchor: 'Danh sách phê duyệt',
            to: '/Approve/pendingApprovalList',
            icon: 'fa fa-circle',
          },
        ],
      },
    ];

    setNav(_nav);
  }, [functions]);

  return nav;
}
