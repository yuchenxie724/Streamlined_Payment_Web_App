// assets
import { IconBrandChrome, IconHelp, IconFileAnalytics, IconDashboard, IconReceipt, IconSquarePlus } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconFileAnalytics, IconDashboard, IconReceipt, IconSquarePlus };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        // {
        //     id: 'sample-page',
        //     title: 'Sample Page',
        //     type: 'item',
        //     url: '/sample-page',
        //     icon: icons.IconBrandChrome,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'documentation',
        //     title: 'Documentation',
        //     type: 'item',
        //     url: 'https://codedthemes.gitbook.io/berry/',
        //     icon: icons.IconHelp,
        //     external: true,
        //     target: true
        // },
        {
            id: 'sample-dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/sample-dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'statistic',
            title: 'Statistic',
            type: 'item',
            url: '/statistic',
            icon: icons.IconFileAnalytics,
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: icons.IconReceipt,
            breadcrumbs: false
        },
        {
            id: 'service',
            title: 'Create Service',
            type: 'item',
            url: '/create-service',
            icon: icons.IconSquarePlus,
            breadcrumbs: false
        }
    ]
};

export default other;
