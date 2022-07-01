<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const title = useTitle()
title.value = `Fallback - ${t('maintenance')}`

watch(locale, () => {
  title.value = `Fallback - ${t('maintenance')}`
})
</script>

<template>
  <section class="w-2/3 text-justify">
    <h1 class="text-2xl lg:text-5xl font-black">
      {{ t('maintenance_reason') }}
    </h1>
    <h3 class="text-lg lg:text-3xl my-4">
      {{ t('maintenance_description') }}
    </h3>
    <p class="text-md lg:text-xl text-gray-600 dark:text-gray-300">
      {{ t('team') }}
    </p>
  </section>
</template>
