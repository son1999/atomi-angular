import { AsideMenuItem } from './_interfaces/aside-menu-item.interface';
import { TABS } from 'src/app/modules/tab-wizards/_services/tabs';
import { CONFIG } from 'src/app/_utils/constants';
export const items: AsideMenuItem[] = [
  {
    title: 'Khách hàng doanh nghiệp',
    translate: 'MENU.KHDN',
    type: 'ROOT',
    url: 'khdn',
    svg: 'ic_khdn.svg',
    roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
    subs: [
      {
        title: TABS.KHDN_CAP_NHAT_PHAN_QUYEN.translate,
        type: 'TAB',
        url: TABS.KHDN_CAP_NHAT_PHAN_QUYEN.url,
        roles: [CONFIG.ROLES.MAKER],
      },
      {
        title: TABS.KHDN_KSV_DS_YEU_CAU_DUYET.translate,
        type: 'TAB',
        url: TABS.KHDN_KSV_DS_YEU_CAU_DUYET.url,
        roles: [CONFIG.ROLES.CHECKER],
      },
    ],
  },
  {
    title: 'Khách hàng cá nhân',
    translate: 'MENU.KHCN',
    type: 'ROOT',
    svg: 'ic_khcn.svg',
    url: 'khcn',
    roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
    subs: [
      {
        title: TABS.KHCN_DICH_VU_THE_KHACH_HANG.translate,
        type: 'TAB',
        url: TABS.KHCN_DICH_VU_THE_KHACH_HANG.url,
        roles: [CONFIG.ROLES.MAKER],
      },
      {
        title: TABS.KHCN_DICH_VU_THE_KSV_YEU_CAU_DUYET.translate,
        type: 'TAB',
        url: TABS.KHCN_DICH_VU_THE_KSV_YEU_CAU_DUYET.url,
        roles: [CONFIG.ROLES.CHECKER],
      },
      {
        title: 'Thanh toán quốc tế',
        type: 'ROOT',
        url: 'khcn/thanh-toan-quoc-te',
        roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
        subs: [
          {
            title: TABS.KHCN_THANH_TOAN_QUOC_TE_BO_PHONG_TOA_SO_DU.translate,
            type: 'TAB',
            url: TABS.KHCN_THANH_TOAN_QUOC_TE_BO_PHONG_TOA_SO_DU.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THANH_TOAN_QUOC_TE_THAM_DINH_HO_SO.translate,
            type: 'TAB',
            url: TABS.KHCN_THANH_TOAN_QUOC_TE_THAM_DINH_HO_SO.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THANH_TOAN_QUOC_TE_XU_LY_HO_SO.translate,
            type: 'TAB',
            url: TABS.KHCN_THANH_TOAN_QUOC_TE_XU_LY_HO_SO.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THANH_TOAN_QUOC_TE_THOA_THUAN_TY_GIA.translate,
            type: 'TAB',
            url: TABS.KHCN_THANH_TOAN_QUOC_TE_THOA_THUAN_TY_GIA.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THANH_TOAN_QUOC_TE_QUAN_LY_HO_SO_GOC.translate,
            type: 'TAB',
            url: TABS.KHCN_THANH_TOAN_QUOC_TE_QUAN_LY_HO_SO_GOC.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: 'Cấu hình',
            type: 'ROOT',
            url: 'khcn/ttqt/cau-hinh',
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
            subs: [
              {
                title:
                  TABS
                    .KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_DAU_MOI_DON_VI
                    .translate,
                type: 'TAB',
                url: TABS
                  .KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_DAU_MOI_DON_VI
                  .url,
                roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
              },
              {
                title:
                  TABS.KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_TY_GIA
                    .translate,
                type: 'TAB',
                url: TABS.KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_TY_GIA
                  .url,
                roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
              },
              {
                title:
                  TABS
                    .KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_NGAY_NGHI_LE
                    .translate,
                type: 'TAB',
                url: TABS
                  .KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_NGAY_NGHI_LE
                  .url,
                roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
              },
              {
                title:
                  TABS.KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_CUTOFFTIME
                    .translate,
                type: 'TAB',
                url: TABS
                  .KHCN_THANH_TOAN_QUOC_TE_QUAN_CAU_HINH_KHAI_BAO_CUTOFFTIME
                  .url,
                roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
              },
            ],
          },
        ],
      },
      {
        title: 'Thu phí thẻ',
        type: 'ROOT',
        url: 'khcn/thu-phi-the',
        roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
        subs: [
          {
            title: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_TIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_TIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_THANG_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_THANG_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_THANG_NO_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_CAU_HINH_SO_THANG_NO_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title:
              TABS.KHCN_THU_PHI_THE_DANH_SACH_KHACH_HANG_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_DANH_SACH_KHACH_HANG_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_THE_UPLOAD_KH_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_UPLOAD_KH_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_THE_DUYET_DS_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_THE_DUYET_DS_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
        ],
      },
      {
        title: 'Thu phí LienViet24h',
        type: 'ROOT',
        url: 'khcn/thu-phi-lienviet24h',
        roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
        subs: [
          {
            title: TABS.KHCN_THU_PHI_LV24H_THU_PHI_QUAN_LY_TAI_KHOAN.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_LV24H_THU_PHI_QUAN_LY_TAI_KHOAN.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title:
              TABS.KHCN_THU_PHI_LV24H_DUYET_THU_PHI_QUAN_LY_TAI_KHOAN.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_LV24H_DUYET_THU_PHI_QUAN_LY_TAI_KHOAN.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_LV24H_DS_KH_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_LV24H_DS_KH_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_LV24H_UPLOAD_KH_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_LV24H_UPLOAD_KH_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title: TABS.KHCN_THU_PHI_LV24H_DUYET_DS_KH_MIEN_PHI.translate,
            type: 'TAB',
            url: TABS.KHCN_THU_PHI_LV24H_DUYET_DS_KH_MIEN_PHI.url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
        ],
      },
      {
        title: 'Phân nhóm khách hàng',
        type: 'ROOT',
        url: 'khcn/phan-nhom-khach-hang',
        roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
        subs: [
          {
            title:
              TABS.KHCN_PHAN_NHOM_KHACH_HANG_DANH_SACH_KHACH_HANG_MIEN_PHI
                .translate,
            type: 'TAB',
            url: TABS.KHCN_PHAN_NHOM_KHACH_HANG_DANH_SACH_KHACH_HANG_MIEN_PHI
              .url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title:
              TABS.KHCN_PHAN_NHOM_KHACH_HANG_PHE_DUYET_PHAN_NHOM_KHACH_HANG
                .translate,
            type: 'TAB',
            url: TABS.KHCN_PHAN_NHOM_KHACH_HANG_PHE_DUYET_PHAN_NHOM_KHACH_HANG
              .url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
          {
            title:
              TABS.KHCN_PHAN_NHOM_KHACH_HANG_TRA_CUU_THONG_TIN_KHACH_HANG
                .translate,
            type: 'TAB',
            url: TABS.KHCN_PHAN_NHOM_KHACH_HANG_TRA_CUU_THONG_TIN_KHACH_HANG
              .url,
            roles: [CONFIG.ROLES.MAKER, CONFIG.ROLES.CHECKER],
          },
        ],
      },
    ],
  },
];
