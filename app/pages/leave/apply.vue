<script setup lang="ts">
import Header from '../../components/core/Header.vue'
</script>
<template>
    <Header page="Apply for Leave" />
    <UCard class="mb-4">
        <UFormField label="Leave Type" class="mb-4">
            <USelect placeholder="Select leave type" :items="[
                { label: 'Vacation Leave', value: 'vacation' },
                { label: 'Sick Leave', value: 'sick' },
                { label: 'Maternity Leave', value: 'maternity' },
                { label: 'Paternity Leave', value: 'paternity' },
                { label: 'Bereavement Leave', value: 'bereavement' },
            ]" size="lg" class="w-full" />
        </UFormField>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <UFormField label="Start Date">
                <UInput type="date" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="End Date">
                <UInput type="date" size="lg" class="w-full" />
            </UFormField>
        </div>

        <UFormField label="Reason" class="mb-4">
            <UTextarea placeholder="Please provide a reason for your leave request..." :rows="4" class="w-full" />
        </UFormField>

        <UButton size="lg" block>
            Submit Application
        </UButton>
    </UCard>
</template>