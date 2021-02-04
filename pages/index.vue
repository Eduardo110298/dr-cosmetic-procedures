<template>
  <div>
    index.vue works
    <body-areas-top-filter :items="bodyAreas"></body-areas-top-filter>
  </div>
</template>

<script>
import BodyAreasTopFilter from "@/components/BodyAreasTopFilter.vue";

import { createClient } from "~/plugins/contentful";

const client = createClient();

export default {
  data: () => ({
    bodyAreas: []
  }),
  components: {
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