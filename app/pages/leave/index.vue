<script setup lang="ts">
import Header from '../../components/core/Header.vue'
</script>
<template>
    <Header page="Leave Management">
        <template #actions>
            <UButton icon="i-lucide-plus" color="primary" to="/leave/apply">
                Apply
            </UButton>
        </template>
    </Header>

    <div class="mb-6">
        <h2 class="font-semibold text-highlighted mb-4">Available Leave Credits</h2>
        <div class="space-y-3">
            <UCard>
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-medium">Annual Leave</h3>
                    <span class="text-2xl font-bold text-blue-600">18</span>
                </div>
                <div class="flex justify-between text-sm text-muted mb-2">
                    <span>Used: 7</span>
                    <span>Total: 25</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 72%;"></div>
                </div>
            </UCard>
            <UCard>
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-medium">Sick Leave</h3>
                    <span class="text-2xl font-bold text-blue-600">8</span>
                </div>
                <div class="flex justify-between text-sm text-muted mb-2">
                    <span>Used: 2</span>
                    <span>Total: 10</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 80%;"></div>
                </div>
            </UCard>
            <UCard>
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-medium">Emergency Leave</h3>
                    <span class="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div class="flex justify-between text-sm text-muted mb-2">
                    <span>Used: 0</span>
                    <span>Total: 3</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 100%;"></div>
                </div>
            </UCard>
        </div>
    </div>
</template>