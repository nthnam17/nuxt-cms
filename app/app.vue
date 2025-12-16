<template>
  <a-config-provider :theme="themeConfig">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-config-provider>
</template>
<script lang="ts" setup>
  const themeConfig = {
    token: {
      colorPrimary: '#1677ff',
      colorText: '#333333',
      borderRadius: 6,
      colorSuccess: '#52c41a',
    },
  }
</script>
