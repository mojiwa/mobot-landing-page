<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>()

</script>

<template>
  <div class="w-1/5">
    <img class="w-1/2 mx-auto" src="/robot.svg"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>
