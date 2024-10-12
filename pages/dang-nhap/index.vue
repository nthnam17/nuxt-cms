<template>
    <div class="authentication">
        <v-container fluid class="bg-main-sign-in">
            <v-row>
                <v-col cols="12" md="12" lg="12" xl="12" class="d-flex justify-center align-center pt-10">
                    <v-card rounded="medium" elevation="10" max-width="700">
                        <v-card-item>
                            <div class="d-flex flex-column justify-center align-center">
                                <v-img src="/logo-mini.png" height="200" width="200"></v-img>
                                <b class="fs-30 text-primary">ChillAndFree CMS</b>
                            </div>
                        </v-card-item>
                        <div class="" style="width: 500px; margin: auto; padding-bottom: 150px">
                            <form-login></form-login>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import FormLogin from '~~/components/login/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'dang-nhap',
    components: {
        FormLogin,
    },
    setup() {
        definePageMeta({
            layout: false,
        });

        useHead({
            title: 'Đăng nhập hệ thống cms',
        });

        return {};
    },
});
</script>

<style scoped lang="scss">
.text {
    color: #000;
}

.authentication {
    width: 100vw;
    height: 100vh;
}

.bg-main-sign-in {
    width: 100%;
    height: 100%;
    background: url('/bg-main.jpg');
    background-position: center;
    background-repeat: no-repeat;
}
</style>
