<template>
    <v-list-item
        v-if="item"
        :to="item.to"
        :disabled="item.disabled"
        :target="item.type === 'external' ? '_blank' : ''"
        active-class="primary"
        color="white"
        density="comfortable"
        class="p-1"
    >
        <template v-slot:prepend>
            <span>
                <v-icon v-if="type == 'item'" size="24">{{ item.icon }}</v-icon>
                <v-icon v-else-if="type == 'children' && item.icon" size="8"> {{ item.icon }}</v-icon>
                <v-icon v-if="type == 'children' && !item.icon" size="8"
                    >material-symbols-light:fiber-manual-record</v-icon
                >
            </span>
        </template>
        <v-list-item-title :title="item.title">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle v-if="item.subCaption"> {{ item.subCaption }}</v-list-item-subtitle>
    </v-list-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IMenu } from './data-menu';

export default defineComponent({
    name: 'vue',
    components: {},

    props: {
        item: {
            type: Object as PropType<IMenu | undefined>,
        },
        type: {
            type: String as PropType<'children' | 'item'>,
            default: 'children',
        },
    },

    setup() {
        return {};
    },
});
</script>
