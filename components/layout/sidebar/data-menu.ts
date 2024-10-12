// import { ROLES } from '~/utils/contants';

export interface IMenu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    children?: IMenu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    roleType?: Array<string>;
}

/**
 * PHÂN QUYỀN
//  * - roleType: ...
 */

const listMenu: IMenu[] = [
    {
        title: 'Dashboard',
        icon: 'material-symbols-light:dashboard',
        to: '/',
        // roleType: [ROLES.MANAGER, ROLES.MANAGER_SUPPER],
    },

    {
        header: 'Thông tin chung',
        title: 'Quản lý chung',
        icon: 'material-symbols-light:medical-information-rounded',
        to: '/general-information',
        children: [
            {
                title: 'Quản lý slider',
                to: '/general-information/slider',
                // permission: 'BANNER_LIST',
            },
            {
                title: 'Quản lý đối tác',
                to: '/general-information/partner',
                // permission: 'BANNER_LIST',
            },
            {
                title: 'Quản lý nền tảng',
                to: '/general-information/platform',
                // permission: 'BANNER_LIST',
            },
        ],
    },
    {
        title: 'Chiến dịch',
        icon: 'material-symbols-light:campaign',
        to: '/campaign',
        children: [
            {
                title: 'Quản lý chiến dịch',
                to: '/campaign/caseStudy',
                // permission: 'BANNER_LIST',
            },
        ],
    },
    {
        title: 'Tin tức',
        icon: 'material-symbols-light:news',
        to: '/new',
        children: [
            {
                title: 'Quản lý tin tức',
                to: '/new/news',
                // permission: 'BANNER_LIST',
            },
        ],
    },

    {
        title: 'Quản lý game',
        icon: 'mdi-controller',
        to: '/gamegenre',
        children: [
            {
                title: 'Quản lý thể loại game',
                to: '/gamegenre/gameType',
            },
            {
                title: 'Quản lý game',
                to: '/gamegenre/game',
            },
        ],
    },
    {
        title: 'Gói game',
        icon: 'mdi-gift',
        to: '/package',
        children: [
            {
                title: 'Quản lý gói game',
                to: '/package/list',
                // permission: 'BANNER_LIST',
            },
        ],
    },

    {
        title: 'Trang',
        icon: 'material-symbols-light:medical-information-rounded',
        to: '/page',
        children: [
            {
                title: 'Trang chủ',
                to: '/page/home',
                // permission: 'BANNER_LIST',
            },
            {
                title: 'Event game',
                to: '/page/event-game',
            },
            {
                title: 'Campaign game',
                to: '/page/campaign-game',
            },
            {
                title: 'Liên hệ',
                to: '/page/contact',
            },
        ],
    },
    {
        title: 'Khách hàng',
        icon: 'material-symbols-light:person-rounded',
        to: '/customergame',
        children: [
            {
                title: 'Quản lý khách hàng',
                to: '/customergame/customer',
                // permission: 'BANNER_LIST',
            },
        ],
    },
    {
        title: 'Hỗ trợ khách hàng',
        icon: 'material-symbols-light:support-agent',
        to: '/support',
        children: [
            {
                title: 'Thông tin liên hệ',
                icon: 'material-symbols-light:perm-contact-calendar-outline',
                to: '/support/contact',
            },
        ],
    },
    {
        title: 'Hệ thống',
        icon: 'material-symbols-light:settings',
        to: '/system',
        // roleType: [ROLES.MANAGER_SUPPER],
        children: [
            {
                title: 'Quản lý người dùng',
                to: '/system/users',
                // roleType: [ROLES.MANAGER_SUPPER],
            },
            {
                title: 'Quản lý nhóm quyền',
                to: '/system/roles',
                // roleType: [ROLES.MANAGER_SUPPER],
            },
            {
                title: 'Quản lý quyền',
                to: '/system/permissions',
                // roleType: [ROLES.MANAGER_SUPPER],
            },
            {
                title: 'Quản lý chung',
                to: '/system/general',
                // roleType: [ROLES.MANAGER_SUPPER],
            },
        ],
    },
];

export default listMenu;
