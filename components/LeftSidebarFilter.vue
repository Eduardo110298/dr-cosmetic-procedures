<template>
  <section id="leftSidebarFilter">
    <body-areas-left-filter />
  </section>
</template>

<script>
import BodyAreasLeftFilter from "@/components/BodyAreasLeftFilter.vue";
export default {
    name: 'LeftSidebarFilter',
    components: {
      BodyAreasLeftFilter
    }
}
</script>

<style lang="sass" scoped>
#leftSidebarFilter
  min-width: 220px
  border-right: 1px solid rgba(31,26,57,.101961)
</style>