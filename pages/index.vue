<template>
  <main>
    <body-areas-top-filter :items="bodyAreas" @change="handleBodyAreaChange" ></body-areas-top-filter>
    <section id="main-grid">
      <left-sidebar-filter :bodyAreas="bodyAreas" :bodyAreasSelected="bodyAreaIds"></left-sidebar-filter>
      <procedures-grid :items="procedures.filter(filterProcedure)"></procedures-grid>
    </section>
  </main>
</template>

<script>
import BodyAreasTopFilter from "@/components/BodyAreasTopFilter.vue";
import ProceduresGrid from "@/components/ProceduresGrid.vue";
import LeftSidebarFilter from "@/components/LeftSidebarFilter.vue";

import { createClient } from "~/plugins/contentful";

const client = createClient();

export default {
  data: () => ({
    bodyAreaIds: ['all']
  }),
  components: {
    LeftSidebarFilter,
    ProceduresGrid,
    BodyAreasTopFilter
  },
  async asyncData({env}){
    try{
      const data = await client.getEntries();
      console.log(data)

      const procedures = data.items.filter(item => item.sys.contentType.sys.id === env.CTF_PROCEDURE_TYPE)
      const bodyAreas = data.items.filter(item => item.sys.contentType.sys.id === env.CTF_BODY_AREA_TYPE)
      const categories = data.items.filter(item => item.sys.contentType.sys.id === env.CTF_CATEGORY_TYPE)

      console.log(procedures)
      console.log(bodyAreas)
      console.log(categories)

      return { procedures, bodyAreas, categories }
    } catch (e) {
      console.error(e)
    }
    return []
  },
  methods: {
    handleBodyAreaChange(id){
      this.bodyAreaIds = [id]
    },
    filterProcedure(procedure){
      if (this.bodyAreaIds.indexOf('all') > -1)
        return true
      else
        return procedure.fields.bodyAreas.find(bodyArea => this.bodyAreaIds.indexOf(bodyArea.sys.id) > -1)
    }
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