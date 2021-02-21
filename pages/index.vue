<template>
  <main>
    <body-areas-top-filter :items="bodyAreas"></body-areas-top-filter>
    <section id="main-grid">
      <left-sidebar-filter></left-sidebar-filter>
      <procedures-grid :items="procedures"></procedures-grid>
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