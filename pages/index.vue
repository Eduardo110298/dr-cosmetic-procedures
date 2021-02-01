<template>
  <div>
    <section v-for="(procedure) in procedures" :key="procedure.sys.id">
      <h1>{{ procedure.fields.title }}</h1>
      <p>{{ procedure.fields.description }}</p>
    </section>
    <Logo />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful";

const client = createClient();

export default {
  async asyncData({env}){    
    try{
      const data = await client.getEntries({'content_type': env.CTF_CONTENT_TYPE_ID})
      console.log(data)
      return { procedures: data.items }
    } catch (e) {
      console.error(e)
    }
    return []
  }
}
</script>
