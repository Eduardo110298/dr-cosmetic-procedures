<template>
  <section id="leftSidebarFilter">
    <collapsible>
      <template slot="title">Body Areas</template>
      <template slot="content">
        <checkbox>My categoria</checkbox>
      </template>
    </collapsible>
  </section>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";
import Collapsible from "@/components/Collapsible.vue";
export default {
    name: 'LeftSidebarFilter',
    components: {
      Checkbox,
      Collapsible
    },
    created(){
      console.log(this.items)
    } 
}
</script>

<style lang="sass" scoped>
#leftSidebarFilter
  min-width: 220px
  border-right: 1px solid rgba(31,26,57,.101961)
  // background: red
</style>