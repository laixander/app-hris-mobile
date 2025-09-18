<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = [
    {
        label: 'Dasboard',
        icon: 'i-lucide-home',
        to: '/'
    },
    {
        label: 'Time',
        icon: 'i-lucide-clock',
        to: '/time'
    },
    {
        label: 'Leave',
        icon: 'i-lucide-calendar',
        to: '/leave'
    },
    {
        label: 'Overtime',
        icon: 'i-lucide-timer',
        to: '/overtime'
    },
    {
        label: 'Profile',
        icon: 'i-lucide-user',
        to: '/profile'
    }
] satisfies NavigationMenuItem[]

const uiNavbarConfig = {
    item: 'w-full',
    link: 'flex-col text-xs',
}
</script>
<template>
    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <UNavigationMenu :items="items" :ui="uiNavbarConfig" size="xs"
            class="w-full justify-center px-2 *:w-full">
        </UNavigationMenu>
    </div>
</template>