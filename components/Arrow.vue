<template>
  <i class="arrow" :class="direction" style="float: right"></i>
</template>

<script>
export default {
    name: "Arrow",
    props: ['direction']
}
</script>

<style scoped>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: all 0.3s ease-in-out;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  margin-top: 7px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  margin-top: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>