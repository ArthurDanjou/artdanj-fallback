<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isFrench = computed(() => locale.value === 'fr')
const changeLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div
    class="h-9 w-9 cursor-pointer flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-300 duration-200 dark:hover:bg-dark-400"
    @click="changeLanguage()"
  >
    <FlagIcon :french="isFrench" />
  </div>
</template>
