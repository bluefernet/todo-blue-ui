<template>
  <div>
    <div class="card" @click="visualizza">
      <a>      <header class="card-header">
        <div class="card-header-title">
          <p>{{ title }} - {{ date }}</p>
        </div>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header></a>

      <div class="card-content">
        <div class="content">
          {{ description }}
          <time datetime="2016-1-1" />
        </div>
      </div>
      <footer class="card-footer" />
      <div />
    </div>
    <div class="section" />
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
  methods: {
    visualizza () {
      this.$router.push({ path: '/tasks/' + this.id })
    }
  }
}
</script>

<style scoped>
</style>
