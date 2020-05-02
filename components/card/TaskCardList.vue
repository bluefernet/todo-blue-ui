<template>
  <div class="section">
    <task-card
      v-for="task in tasks"
      :id="task.id"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :date="task.date"
    />
    <div>
      <nuxt-link to="/">
        <button class="button is-link">
          Home
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TaskCard from '../components/card/TaskCard.vue'
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
