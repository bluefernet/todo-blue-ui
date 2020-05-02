export const state = () => ({
  counter: 0,
  tasks: [{
    id: 'TASKID1'
  },
  {
    id: 'TASKID2'
  }]
})

export const mutations = {
  increment (state) {
    console.log('store - mutations - increment')
    state.counter++
  },
  decrement (state) {
    console.log('store - mutations - decrement')
    state.counter--
  },
  setTasks (state, tasks) {
    console.log('store - mutations - setTasks')
    state.tasks = tasks
  },
  deleteTasks (state, task) {
    const taskIndex = state.tasks.findIndex(
      taskStore => taskStore.id === task.id
    )
    state.tasks.splice(taskIndex, 1)
  }
}
