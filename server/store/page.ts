import { defineStore } from 'pinia';
import type { IBreadcrumb } from '~/types/page';

export const useGameTypeStore = defineStore({
    id: 'gameType',
    state: () => ({
        breadcrumbs: [
            {
                title: 'Trang chủ',
                disabled: true,
                href: '/',
            },
        ] as Array<IBreadcrumb>,
    }),
    actions: {
        async setBreadcrumb(props: IBreadcrumb) {
            this.breadcrumbs = props;
        },
    },
});
