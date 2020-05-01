<template>
  <div class="level-item">
    <div id="sectioncontainer" class="columns is-centered cards-container">
      <div class="column">
        <article :class="'message ' + colorClass">
          <div class="message-header">
            {{ titleBoard }}
          </div>
          <div class="message-body">
            <task-board-item
              v-for="task in tasks"
              :id="task.id"
              :key="task.id"
              :title="task.title"
              :description="task.description"
              :date="task.date"
            />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBoardItem from '../components/TaskBoardItem.vue'
export default {
  components: {
    TaskBoardItem
  },
  props: {
    colorClass: {
      type: String,
      required: false,
      default: 'is-info'
    },
    titleBoard: {
      type: String,
      required: true,
      default: 'To do'
    },
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

<style>

</style>
