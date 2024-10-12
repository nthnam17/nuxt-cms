<template>
    <div class="pa-4">
        <NuxtLink to="" class="d-flex">
            <v-img src="/logo-mini.png" height="50" width="50"></v-img>
        </NuxtLink>
    </div>
    <!--@@@ Navigation -->

    <perfect-scrollbar class="scrollnavbar">
        <v-list v-model:opened="openedGroups">
            <template v-for="(item, index) in sidebarMenu" :key="index">
                <v-list-subheader v-if="item.header" class="font-weight-bold text-uppercase"
                    >{{ item.header }}
                </v-list-subheader>
                <v-list-group v-if="item.children" :value="item.to">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            :disabled="item.disabled"
                            density="comfortable"
                            :append-icon="
                                checkGroup(item?.to as string)
                                    ? 'material-symbols-light:keyboard-arrow-down'
                                    : 'material-symbols-light:keyboard-arrow-right'
                            "
                        >
                            <v-list-item-title :title="item.title" class="pl-3">
                                {{ item.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle v-if="item.subCaption">{{ item.subCaption }}</v-list-item-subtitle>
                            <template v-slot:prepend>
                                <span>
                                    <v-icon size="24">{{ item.icon }}</v-icon>
                                </span>
                            </template>
                        </v-list-item>
                    </template>
                    <nav-item v-for="(child, i) in item.children" :item="child" :type="'children'"></nav-item>
                </v-list-group>
                <nav-item v-else :item="item" :type="'item'"></nav-item>
            </template>
        </v-list>
    </perfect-scrollbar>
</template>

<script lang="ts">
import { ref, defineComponent, shallowRef, type Ref } from 'vue';
import listMenu, { type IMenu } from './data-menu';
import NavItem from './nav-item.vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

export default defineComponent({
    name: 'vue',
    components: {
        NavItem,
        PerfectScrollbar,
    },
    setup(props, ctx) {
        const sidebarMenu: Ref<Array<IMenu>> = shallowRef(listMenu);
        const openedGroups = ref([]);
        const checkGroup = (value: string) => {
            return openedGroups.value?.find((str) => str == value) ? true : false;
        };

        return {
            sidebarMenu,
            openedGroups,
            checkGroup,
        };
    },
});
</script>

<style scoped lang="scss"></style>
