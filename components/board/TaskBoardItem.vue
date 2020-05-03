<template>
  <div class="board-item">
    <div class="board-item-content has-text-centered">
      <div class="has-text-right" />
      <div @click="details">
        <span>{{ title }}</span>
        <br>
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default Title Card'
    },
    date: {
      type: String,
      required: true,
      default: '00:00 AM - 1 Jan 2020'
    },
    description: {
      type: String,
      required: false,
      default: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
    },
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  date () {
    return {}
  },
  mounted () {
    this.date = new Date(this.date).toDateString()
  },
  methods: {
    details () {
      this.$router.push({ path: '/tasks/' + this.id })
    }
  }
}
</script>

<style scoped>
.board-item {
  margin: 5px 0;
  will-change: transform;
}

.board-item-content {
  word-break: break-all;
  position: relative;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  font-size: 17px;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
  margin: 5px;
}
</style>
