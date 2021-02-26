<template>
  <section>
    <button type="button" class="collapsible" @click="opened = !opened">
      <slot name="title"></slot>
      <arrow :direction="opened ? 'up' : 'down'"></arrow>
    </button>
    <div class="content" :style="'height: ' + (opened ? height : '0px') ">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
import Arrow from "@/components/Arrow.vue";

export default {
    name: "Collapsible",
    props: {
      defaultVisibility: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        required: false,
        default: 'auto'
      }
    },
    data: () => ({
      visible: false,
      defaultVisibilityUsed: false
    }),
    computed: {
      opened: {
        get() {
          return !this.defaultVisibilityUsed ? this.defaultVisibility : this.visible
        },
        set(){
          this.visible = !this.visible
          this.defaultVisibilityUsed = true
        }
      }
    }
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
  outline: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
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