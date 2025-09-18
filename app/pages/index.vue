<script setup lang="ts">
const ctas = [
    {
        icon: 'i-lucide-calendar',
        title: 'Apply for Leave',
        description: 'Request time off',
        color: 'green' as 'green',
        to: '/leave',
    },
    {
        icon: 'i-lucide-timer',
        title: 'Request Overtime',
        description: 'Submit overtime request',
        color: 'orange' as 'orange',
        to: '/overtime',
    },
    {
        icon: 'i-lucide-philippine-peso',
        title: 'View Payslip',
        description: 'Access pay information',
        color: 'cyan' as 'cyan',
        to: '/payslip',
    },
    {
        icon: 'i-lucide-user',
        title: 'Update Profile',
        description: 'Edit personal details',
        color: 'purple' as 'purple',
        to: '/profile',
    }
]
</script>
<template>
    <div class="mb-6">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-highlighted">Good Morning, John!</h1>
                <p class="text-sm text-muted">Welcome back to your dashboard</p>
            </div>
            <UChip size="xl" color="error" inset>
                <UButton icon="i-lucide-bell" variant="ghost" />
            </UChip>
        </div>
    </div>
    <div class="mb-6">
        <div class="flex items-center justify-between p-6 rounded-lg text-white shadow-lg
         bg-gradient-to-r from-blue-600 to-blue-700
         dark:from-blue-700 dark:to-blue-800">
            <div>
                <h3 class="text-xl font-semibold">Time Tracking</h3>
                <p class="text-sm text-blue-100 dark:text-blue-200">Clock in/out quickly</p>
            </div>

            <UButton icon="i-lucide-clock" size="lg" class="bg-white text-blue-600 hover:bg-blue-50
           dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800" to="/time">
                Time In
            </UButton>
        </div>

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <!-- Pending Requests -->
        <div class="flex flex-col items-center justify-between gap-2 p-6 rounded-lg text-white shadow-lg
           bg-gradient-to-r from-amber-500 to-amber-600
           dark:from-amber-600 dark:to-amber-700">
            <UIcon name="i-lucide-file-text" class="size-8 text-amber-300 dark:text-amber-200" />
            <div class="space-y-1 text-center">
                <h3 class="text-2xl font-bold">3</h3>
                <p class="text-xs">Pending Requests</p>
            </div>
        </div>

        <!-- Leave Credit -->
        <div class="flex flex-col items-center justify-between gap-2 p-6 rounded-lg text-white shadow-lg
           bg-gradient-to-r from-green-500 to-green-600
           dark:from-green-600 dark:to-green-700">
            <UIcon name="i-lucide-user-check" class="size-8 text-green-300 dark:text-green-200" />
            <div class="space-y-1 text-center">
                <div class="flex space-x-2 items-baseline">
                    <h3 class="text-2xl font-bold">
                        18 <span class="text-xs font-medium">VL</span>
                    </h3>
                    <span class="text-2xl text-white/20">|</span>
                    <h3 class="text-2xl font-bold">
                        8 <span class="text-xs font-medium">SL</span>
                    </h3>
                </div>
                <p class="text-xs">Leave Credit</p>
            </div>
        </div>
    </div>
    <UCard class="mb-6">
        <div class="flex items-center justify-between mb-8">
            <h4 class="text-lg text-highlighted font-semibold">Performance Overview</h4>
            <UIcon name="i-lucide-trending-up" class="w-5 h-5 text-green-600 dark:text-green-500" />
        </div>
        <div class="flex items-end justify-between">
            <div>
                <p class="text-2xl font-semibold text-green-600 dark:text-green-500">85%</p>
                <p class="text-sm text-muted">Overall Score</p>
            </div>
            <div class="text-right">
                <p class="text-sm text-muted">Last Review</p>
                <p class="text-sm text-highlighted font-semibold">Mar 2025</p>
            </div>
        </div>
    </UCard>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Cta v-for="(item, i) in ctas" :key="i" v-bind="item" />
    </div>

</template>