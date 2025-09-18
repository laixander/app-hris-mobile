import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { AttendanceLog } from '~/types/timeAttendance'

export function useTimeAttendance() {
  const time = ref('')
  const date = ref('')
  const isTimedIn = ref(false)
  const logs = ref<AttendanceLog[]>([])

  const page = ref(1)
  const pageSize = 5

  const paginatedLogs = computed(() => {
    const start = (page.value - 1) * pageSize
    return logs.value.slice(start, start + pageSize)
  })

  const totalLogs = computed(() => logs.value.length)

  let intervalId: ReturnType<typeof setInterval>

  function updateDateTime() {
    const now = new Date()
    time.value = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    date.value = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  onMounted(() => {
    updateDateTime()
    intervalId = setInterval(updateDateTime, 1000)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  function toggleTime(action: 'in' | 'out') {
    const now = new Date()
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    const shortDate = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })

    if (action === 'in') {
      isTimedIn.value = true
      logs.value.unshift({ date: shortDate, timeIn: formattedTime })
      page.value = 1
    } else {
      isTimedIn.value = false
      const latest = logs.value[0]
      if (latest) {
        latest.timeOut = formattedTime

        const inTime = new Date(`${now.toDateString()} ${latest.timeIn}`)
        const outTime = now
        const diffMs = outTime.getTime() - inTime.getTime()
        const hours = (diffMs / 1000 / 60 / 60).toFixed(1)
        latest.duration = `${hours}h`
      }
    }
  }

  const todayLogCount = computed(() => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
  return logs.value.filter(log => log.date === today).length
})

  return {
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
  }
}
