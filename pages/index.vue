<template>
  <main>
    <body-areas-top-filter/>
    <section id="main-grid">
      <left-sidebar-filter/>
      <procedures-grid/>
    </section>
  </main>
</template>

<script>
import BodyAreasTopFilter from "@/components/BodyAreasTopFilter.vue";
import ProceduresGrid from "@/components/ProceduresGrid.vue";
import LeftSidebarFilter from "@/components/LeftSidebarFilter.vue";

export default {
  data: () => ({
    bodyAreaIds: ['all'],
    showMobileFilter: false
  }),
  components: {
    LeftSidebarFilter,
    ProceduresGrid,
    BodyAreasTopFilter
  },
  methods: {
    handleBodyAreaChange(id){
      this.bodyAreaIds = [id]
    }
  },
  created(){
    this.$store.dispatch('fetchData')
  }
}
</script>

<style scoped>
@media (min-width: 768px){
  #main-grid {
    display: flex
  }
}
</style>