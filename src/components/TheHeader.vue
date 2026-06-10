<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 h-14 flex items-center justify-between">
    <div class="text-xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
      GEEK CAMPUS
    </div>
    <button @click="isMenuOpen = !isMenuOpen" class="p-2 text-slate-600 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </header>

  <div v-show="isMenuOpen" class="fixed inset-x-0 top-14 bg-white border-b border-slate-200 shadow-xl z-40 px-6 py-4 flex flex-col space-y-4">
    <a href="#" class="font-semibold text-indigo-600">首页推荐</a>
    <a href="#" class="font-semibold text-slate-600 hover:text-indigo-600">全栈路线</a>
    <a href="#" class="font-semibold text-slate-600 hover:text-indigo-600">关于我们</a>
  </div>
</template>
