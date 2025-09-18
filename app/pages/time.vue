<script setup lang="ts">
import Header from '~/components/core/Header.vue'
import { useTimeAttendance } from '~/composables/useTimeAttendance'

const {
  time,
  date,
  isTimedIn,
  logs,
  page,
  pageSize,
  paginatedLogs,
  totalLogs,
  todayLogCount,
  toggleTime,
} = useTimeAttendance()
</script>

<template>
    <Header page="Time Attendance" />

    <!-- Clock -->
    <UCard class="flex flex-col items-center justify-center text-center mb-4">
        <UIcon name="i-lucide-clock" class="size-12 text-blue-600 mb-2" />
        <h2 class="text-3xl text-highlighted font-extrabold mb-2">
            {{ time }}
        </h2>
        <p class="text-muted">
            {{ date }}
        </p>
    </UCard>

    <!-- Buttons -->
    <UCard class="mb-4 space-y-2">
  <UButton
    v-if="!isTimedIn"
    icon="i-lucide-log-in"
    size="xl"
    color="success"
    class="w-full justify-center py-4"
    @click="toggleTime('in')"
  >
    Time In
  </UButton>

  <UButton
    v-else
    icon="i-lucide-log-out"
    size="xl"
    color="error"
    class="w-full justify-center py-4"
    @click="toggleTime('out')"
  >
    Time Out
  </UButton>
</UCard>


    <UCard>
        <h4 class="text-lg text-highlighted font-semibold flex items-center justify-between gap-2 mb-6">
            <div class="flex items-center gap-2">
                <UIcon name="i-lucide-calendar" class="w-5 h-5" />
                <h3>Recent Logs</h3>
            </div>
            <UBadge color="primary" variant="soft">
                Today: {{ todayLogCount }}
            </UBadge>
        </h4>

        <!-- Logs -->
        <div class="divide-y divide-muted -mx-6">
            <div v-for="(log, i) in paginatedLogs" :key="i" class="px-6 py-4">
                <div class="flex justify-between items-center mb-2">
                    <p class="font-medium text-highlighted">{{ log.date }}</p>
                    <UBadge v-if="log.duration" variant="soft" color="primary">{{ log.duration }}</UBadge>
                </div>
                <div class="flex items-center justify-between gap-4 text-sm text-muted">
                    <span class="text-nowrap">In: {{ log.timeIn || '--' }}</span>
                    <div :class="[
                        'w-full h-[1px]',
                        log.timeOut
                            ? 'bg-green-200 dark:bg-green-800/50'   // completed
                            : 'bg-rose-200 dark:bg-rose-800/40' // still active
                    ]"></div>
                    <span class="text-nowrap">Out: {{ log.timeOut || '--' }}</span>
                </div>
            </div>
        </div>

        <div v-if="logs.length === 0" class="text-center py-6">
            <UIcon v-if="logs.length === 0" name="i-lucide-inbox" class="size-12 text-dimmed mx-auto mb-1" />
            <p v-if="logs.length === 0" class="text-center text-sm text-dimmed">No logs yet. Time in to start tracking!
            </p>
        </div>

        <!-- Pagination -->
        <div v-if="totalLogs > pageSize" class="mt-4 flex justify-center">
            <UPagination v-model:page="page" :page-count="pageSize" :total="totalLogs" :show-controls="false"
                show-edges />
        </div>
    </UCard>
</template>
