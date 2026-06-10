<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen max-w-md mx-auto bg-slate-50 shadow-xl shadow-slate-200/50">

    <RouterView />

  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f8fafc;
}
</style>
