<template>
  <div class="board-item">
    <div class="board-item-content">
      <span>Titolo Descrizione Prova </span>
      <br>
      <span>2020/01/01 - 00:00</span>
    </div>
  </div>
</template>

<script>
export default {

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
