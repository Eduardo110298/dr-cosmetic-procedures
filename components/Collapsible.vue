<template>
  <section>
    <button type="button" class="collapsible" @click="visible = !visible">
      <b><slot name="title"></slot></b>
      <arrow :direction="visible ? 'up' : 'down'"></arrow>
    </button>
    <div class="content" :style="'height: ' + (visible ? '100px' : '0px') ">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
import Arrow from "@/components/Arrow.vue";

export default {
    name: "Collapsible",
    data: () => ({
      visible: false
    }),
}
</script>

<style scoped>
.collapsible {
  background-color: #fff;
  color: black;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 16px;
}

.content {
  padding: 0 18px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
</style>