<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{ page: string }>()

const goBack = () => {
  router.back()
}
</script>
<template>
    <div class="flex justify-between items-center gap-2 mb-6">
        <div class="flex items-center gap-2">
            <UButton icon="i-lucide-arrow-left" variant="ghost" @click="goBack" />
            <h1 class="text-lg text-highlighted font-bold">{{ page }}</h1>
        </div>
        <template v-if="$slots.actions">
            <slot name="actions" />
        </template>
    </div>
</template>