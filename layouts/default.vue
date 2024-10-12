<template>
    <v-app>
        <v-main>
            <v-container style="height: 100%; background-color: #f3f8fc; padding: 0">
                <v-navigation-drawer left app elevation="10">
                    <side-bar></side-bar>
                </v-navigation-drawer>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '~~/components/layout/sidebar/index.vue';

export default defineComponent({
    name: 'vue',
    components: {
        SideBar,
    },
    setup(props, ctx) {
        return {};
    },
});
</script>
