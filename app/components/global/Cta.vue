<script setup lang="ts">
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

type Color =
  | 'green'
  | 'blue'
  | 'cyan'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'gray'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: {
    type: String as PropType<Color>,
    default: 'green',
  },
  to: { type: String, default: undefined },
  href: { type: String, default: undefined },
})

const router = useRouter()

function handleClick() {
  if (props.to) router.push(props.to)
  else if (props.href) window.location.href = props.href
}

// ✅ Map color -> classes (light + dark)
const colorMap: Record<
  Color,
  { bg: string; text: string; darkBg: string; darkText: string }
> = {
  green: { bg: 'bg-green-100', text: 'text-green-600', darkBg: 'dark:bg-green-900', darkText: 'dark:text-green-400' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', darkBg: 'dark:bg-blue-900', darkText: 'dark:text-blue-400' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', darkBg: 'dark:bg-cyan-900', darkText: 'dark:text-cyan-400' },
  red: { bg: 'bg-red-100', text: 'text-red-600', darkBg: 'dark:bg-red-900', darkText: 'dark:text-red-400' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', darkBg: 'dark:bg-yellow-900', darkText: 'dark:text-yellow-400' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', darkBg: 'dark:bg-orange-900', darkText: 'dark:text-orange-400' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', darkBg: 'dark:bg-indigo-900', darkText: 'dark:text-indigo-400' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', darkBg: 'dark:bg-purple-900', darkText: 'dark:text-purple-400' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', darkBg: 'dark:bg-pink-900', darkText: 'dark:text-pink-400' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-600', darkBg: 'dark:bg-gray-800', darkText: 'dark:text-gray-400' },
}
</script>

<template>
  <UCard
    class="text-center cursor-pointer hover:shadow-md transition"
    @click="handleClick"
  >
    <!-- Icon wrapper -->
    <div
      class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
      :class="[colorMap[color].bg, colorMap[color].text, colorMap[color].darkBg, colorMap[color].darkText]"
    >
      <UIcon :name="icon" class="w-6 h-6" />
    </div>

    <!-- Title -->
    <h3 class="font-semibold text-sm text-highlighted mb-1">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-xs text-muted">
      {{ description }}
    </p>
  </UCard>
</template>
