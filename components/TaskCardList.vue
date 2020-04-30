<template>
  <div>
    <task-card
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :date="task.date"
    />
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue'
export default {
  components: {
    TaskCard
  },
  props: {
    tasks: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
