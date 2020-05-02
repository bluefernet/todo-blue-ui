<template>
  <div>
    <header-blue />
    <div class="columns has-text-centered">
      <div class="column">
        <h1 class="title">
          Task <strong>{{ statePage }}</strong>
        </h1>
      </div>
    </div>

    <task-card-list :tasks="tasksList" />
    <footer-blue />
  </div>
</template>

<script>
import TaskCardList from '../../../components/TaskCardList.vue'
import HeaderBlue from '../../../components/HeaderBlue.vue'
import FooterBlue from '../../../components/FooterBlue.vue'
export default {
  components: {
    TaskCardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData (context) {
    const tasks = [
      {
        title: 'titolo 1',
        description: 'descrizione 1',
        date: '2020-01-01',
        id: 'TASK1ID'
      },
      {
        title: 'titolo 2',
        description: 'descrizione 2',
        date: '2020-02-02',
        id: 'TASK2ID'
      }
    ]
    console.log(' tasksList ' + context.route.params.id)
    return {
      tasksList: tasks,
      statePage: context.route.params.id
    }
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
