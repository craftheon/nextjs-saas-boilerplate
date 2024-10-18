<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Online Clock',
    meta: [
      { name: 'description', content: 'A simple online clock with countdown and timer.' }
    ],
  })
</script>