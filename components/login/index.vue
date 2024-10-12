<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12" class="pb-0">
            <v-label class="font-weight-bold mb-1 fs-15">Tên đăng nhập</v-label>
            <v-text-field
                variant="outlined"
                color="primary"
                clearable
                hide-details="auto"
                v-model="username"
                :placeholder="`Tên đăng nhập`"
                :error-messages="usernameError"
                @input="usernameError = ''"
                @keydown.enter="fnSubmit"
            >
                <template v-slot:prepend-inner>
                    <v-icon size="22">solar:user-circle-bold</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1 fs-15">Mật khẩu</v-label>
            <v-text-field
                variant="outlined"
                color="primary"
                hide-details="auto"
                v-model="password"
                :placeholder="`Nhập mật khẩu`"
                @keydown.enter="fnSubmit"
                :type="showPassword ? 'text' : 'password'"
                clearable
                :error-messages="passwordError"
                @input="passwordError = ''"
            >
                <template v-slot:prepend-inner>
                    <v-icon size="22">solar:lock-password-bold</v-icon>
                </template>
                <template v-slot:append-inner>
                    <v-icon size="22" @click="showPassword = !showPassword">
                        {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                    </v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
            <div class="d-flex flex-wrap justify-space-between align-center ml-n2">
                <div class="ml-sm-auto" style="width: 50%">
                    <nuxt-link
                        to="/quan-mat-khau"
                        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-1"
                    >
                        Quên mật khẩu ?
                    </nuxt-link>
                </div>
                <div style="width: 50%" class="d-flex justify-end">
                    <v-label class="text-primary">Lưu đăng nhập</v-label>

                    <v-checkbox v-model="saveLogin" color="primary" hide-details></v-checkbox>
                </div>
            </div>
        </v-col>
        <v-col cols="12" class="pt-0">
            <v-btn block color="primary" size="large" style="height: 50px" :loading="loading" @click="fnSubmit">
                Đăng nhập
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'vue',
    components: {},
    setup() {
        const loading: Ref<boolean> = ref(false);
        const username: Ref<string> = ref('');
        const usernameError: Ref<string> = ref('');
        const password: Ref<string> = ref('');
        const passwordError: Ref<string> = ref('');
        const showPassword = ref(false);
        const saveLogin = ref(false);

        const fnSubmit = () => {
            if (fnVal()) return;
            loading.value = true;
        };

        const fnVal = () => {
            let hasError = false;

            if (isNullOrEmpty(password.value) || isNullOrEmpty(password.value.trim())) {
                passwordError.value = 'Mật khẩu không được để trống !';
                hasError = true;
            }

            if (isNullOrEmpty(username.value) || isNullOrEmpty(username.value.trim())) {
                usernameError.value = 'Tên đăng nhập không được để trống !';
                hasError = true;
            }

            return hasError;
        };

        return {
            loading,
            username,
            usernameError,
            password,
            passwordError,
            showPassword,
            saveLogin,
            fnSubmit,
        };
    },
});
</script>

<style scoped lang="scss">
/* Your scoped styles here */
</style>
