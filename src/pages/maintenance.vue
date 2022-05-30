<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = useTitle()
title.value = t('maintenance')
</script>

<template>
  <section class="w-2/3 text-justify">
    <h1 class="text-5xl font-black">
      {{ t('maintenance_reason') }}
    </h1>
    <h3 class="text-3xl my-4">
      {{ t('maintenance_description') }}
    </h3>
    <p class="text-xl text-gray-300">
      {{ t('team') }}
    </p>
  </section>
</template>
