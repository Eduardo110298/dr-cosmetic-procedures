<template>
  <section>
    <button type="button" class="collapsible" @click="visible = !visible">
      <b>
        <slot name="title"></slot>
      </b>
      <arrow :direction="visible ? 'up' : 'down'"></arrow>
    </button>
    <div class="content" :style="'height: ' + (visible ? '300px' : '0px') ">
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
  margin: 0 10px 0 18px;
  transition: all 0.3s ease-in-out;
  overflow: auto;
}

.content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.content::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
.content::-webkit-scrollbar-thumb {
  background-color: rgba(31, 26, 57, 0.101961);
  border-radius: 10px;
}
</style>