<script setup lang="ts">
const isDark = useDark()
const toggleDark = () => isDark.value = !isDark.value
</script>

<template>
  <div
    class="h-9 w-9 cursor-pointer flex items-center p-1.5 rounded-xl hover:bg-gray-300 dark:hover:bg-dark-400 duration-200"
    @click.prevent="toggleDark"
  >
    <div v-if="isDark">
      <SunIcon />
    </div>
    <div v-else>
      <MoonIcon />
    </div>
  </div>
</template>
