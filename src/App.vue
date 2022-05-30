<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = useTitle()
title.value = t('title')
</script>

<template>
  <main class="h-full w-full flex items-center justify-center">
    <router-view />
  </main>
</template>
