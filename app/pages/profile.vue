<script setup lang="ts">
import { computed } from 'vue';
import Header from '~/components/core/Header.vue';

const colorMode = useColorMode()
const isDark = computed({
    get() {
        console.log('colorMode.value :>> ', colorMode.value);
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <Header page="Profile" />
    <UCard>
        <h4 class="text-lg text-highlighted font-semibold flex items-center mb-6">
            <UIcon name="i-lucide-settings" class="w-5 h-5 mr-2" />
            App Settings
        </h4>
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-moon" class="w-5 h-5 text-dimmed" />
                    <div>
                        <p class="font-medium text-highlighted">Dark Mode</p>
                        <p class="text-sm text-dimmed">Set app to dark mode</p>
                    </div>
                </div>
                <USwitch v-model="isDark" />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-bell" class="w-5 h-5 text-dimmed" />
                    <div>
                        <p class="font-medium text-highlighted">Push Notifications</p>
                        <p class="text-sm text-dimmed">Receive app notifications</p>
                    </div>
                </div>
                <USwitch />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <UIcon name="i-lucide-smartphone" class="w-5 h-5 text-dimmed" />
                    <div>
                        <p class="font-medium text-highlighted">Biometric Login</p>
                        <p class="text-sm text-dimmed">Use fingerprint or face ID</p>
                    </div>
                </div>
                <USwitch />
            </div>
        </div>
    </UCard>
</template>