<script setup lang="ts">
import { ref } from 'vue'
import type { Course } from '../types/course'
import TheHeader from '../components/TheHeader.vue'
import CourseCard from '../components/CourseCard.vue'

const mockCourses = ref<Course[]>([
  {
    id: 1,
    title: "2026 独立开发者商业全栈轰炸机班",
    description: "从 Rails 思想精髓到 Vue3/TS 高级架构...",
    price: 19.99,
    originalPrice: 39.99,
    tag: "🔥 爆款热卖",
    coverUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
    studentsCount: 1422
  },
  {
    id: 2,
    title: "TypeScript + 编译原理：从手搓 LSP 到魔改编译器",
    price: 9.99,
    tag: "🚀 极客进阶",
    coverUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
  }
])
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pb-12">

    <TheHeader />

    <section class="px-4 pt-6 pb-8 text-center bg-gradient-to-b from-indigo-50/50 to-transparent">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
        用硬核技术<span class="text-indigo-600">重塑全栈基因</span>
      </h1>
    </section>

    <section class="px-4 grid grid-cols-4 gap-3 my-4">
      <div v-for="item in ['路线图', '免费课', '师资库', '故事集']" :key="item" class="bg-white p-3 rounded-2xl text-center text-xs font-medium border border-slate-100 shadow-xs">
        {{ item }}
      </div>
    </section>

    <section class="px-4 mt-6">
      <h2 class="text-lg font-black text-slate-900 mb-4 flex items-center gap-1.5">
        <span class="w-1.5 h-5 bg-indigo-600 rounded-full"></span>
        王牌实战课推荐
      </h2>

      <div class="space-y-5">
        <CourseCard
          v-for="course in mockCourses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>

  </div>
</template>
