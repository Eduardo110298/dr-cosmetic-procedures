<template>
  <section id="leftSidebarFilter">
    <collapsible>
      <template slot="title">Body Areas</template>
      <template slot="content">
        <checkbox v-for="ba in bodyAreas" :key="ba.sys.id" :checked="bodyAreasSelected.indexOf(ba.sys.id) > -1">{{ ba.fields.name }}</checkbox>
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
    props: {
      bodyAreas: {
        type: Array,
        required: true,
        default: () => []
      },
      bodyAreasSelected: {
        type: Array,
        required: true,
        default: () => []
      }
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