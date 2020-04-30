<template>
  <div>
    <header-blue />
    <div class="section">
      <div>
        <div class="tabs" @click="chooseTab">
          <ul>
            <li :class="{'is-active': tabIsActive}">
              <a>Todo</a>
            </li>
            <li>
              <a>Doing</a>
            </li>
            <li>
              <a>Done</a>
            </li>
          </ul>
        </div>
        <div class="columns is-centered is-5">
          <div class="column is-half">
            <!--task-card
              :title="asyncTask.title"
              :description="asyncTask.description"
              :date="asyncTask.date"
            /-->
            <task-card-list :tasks="asyncTasks" />
          </div>
        </div>
      </div>
      <button class="button">
        <nuxt-link to="/tasks">
          go to tasks
        </nuxt-link>
      </button>
      <button class="button">
        <nuxt-link to="/tasks/newTask">
          go to new
        </nuxt-link>
      </button>
    </div>

    <section class="container">
      <div class="level-item">
        <div id="sectioncontainer" class="columns is-multiline is-centered cards-container">
          <div class="column is-narrow">
            <article class="message is-black">
              <div class="message-header">
                <p>Season 1</p>
                <button class="delete" aria-label="delete" />
              </div>
              <div class="message-body">
                <task-board-item />
                <div class="board-item">
                  <div class="board-item-content">
                    <span>Titolo Descrizione</span>
                    <br>
                    <span>2020/01/02</span>
                  </div>
                </div>
                <div class="board-item" @click="boardItemShow">
                  <div class="board-item-content">
                    <span>Fist Like a bullet</span>
                  </div>
                </div>
                <div class="board-item">
                  <div class="board-item-content">
                    <span>White Stork Spreads Wings</span>
                  </div>
                </div>
                <div class="board-item">
                  <div class="board-item-content">
                    <span>Two Tigers Subdue Dragons</span>
                  </div>
                </div>
                <div class="board-item">
                  <div class="board-item-content">
                    <span>Snake Creeps Down</span>
                  </div>
                </div>
                <div class="board-item">
                  <div class="board-item-content">
                    <span>Hand of Five Poisons</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderBlue from '../components/HeaderBlue.vue'
import TaskCardList from '../components/TaskCardList.vue'
import FooterBlue from '../components/FooterBlue.vue'
import TaskBoardItem from '../components/TaskBoardItem.vue'

export default {
  components: {
    TaskBoardItem,
    TaskCardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    console.log('asyncTask')
    return axios
      .get(process.env.EXTERNAL_API_URL + '/v1/tasks')
      .then((res) => {
        console.log('!!!!!!!!!!!!!!!!!' + res.data.tasks)

        return {
          asyncTasks: res.data.tasks
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      taskArray: [
        {
          title: 'titolo 1',
          description: 'descrizione 1',
          date: '2020-01-01'
        },
        {
          title: 'titolo 2',
          description: 'descrizione 2',
          date: '2020-02-02'
        }
      ],
      loadedTask: {},
      tabIsActive: 'true',
      dataPick: new Date(),
      element: '',
      tasks: {
        id: '01E70CK7AR9X6PT17QWV1YMK4V'
      }
    }
  },
  methods: {
    boardItemShow () {
      alert('On click!')
    },
    chooseTab (event) {
      console.log(event)
      this.tabIsActive = ''
    },
    visualizeData () {
      console.log('dataPick ' + this.dataPick)
      this.dataPick = new Date(Date.now())
    },
    LinkId () {
      console.log('id ' + this.tasks.id)
      this.$router.push({ path: '/tasks/' + this.tasks.id })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
