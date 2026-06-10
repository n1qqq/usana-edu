<script setup lang="ts">
import type { Course } from '../types/course'

defineProps<{
  course: Course
}>()
</script>

<template>
  <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100 flex flex-col">
    <div class="relative h-44 w-full bg-slate-200">
      <img :src="course.coverUrl" class="w-full h-full object-cover" alt="Cover"/>
      <span v-if="course.tag" class="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black text-white bg-rose-500 rounded-lg shadow-md">
        {{ course.tag }}
      </span>
    </div>
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="text-base font-bold text-slate-900 leading-snug line-clamp-2">
          {{ course.title }}
        </h3>
        <p class="text-xs text-slate-400 mt-1.5 line-clamp-2">
          {{ course.description }}
        </p>
      </div>
      <div class="flex items-end justify-between mt-4 pt-3 border-t border-slate-50">
        <div class="flex items-baseline gap-1.5">
          <span class="text-lg font-black text-rose-500">¥{{ course.price }}</span>
          <span v-if="course.originalPrice" class="text-xs text-slate-400 line-through">¥{{ course.originalPrice }}</span>
        </div>
        <span class="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
          👥 {{ course.studentsCount ?? 0 }} 人已加入
        </span>
      </div>
    </div>
  </div>
</template>
