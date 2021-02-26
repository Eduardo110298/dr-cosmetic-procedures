<template>
  <div id="procedure-detail">
    <section style="margin: 20px 0; text-transform: uppercase; font-size: 14px">
      <!-- Breadcrumbs -->
      <NuxtLink to="/">Procedures</NuxtLink>&nbsp;/
      <span>{{ procedure.fields.title }}</span>
    </section>
    <h1 style="margin: 20px 0; font-size: 28px; font-weight: 400;">{{ procedure.fields.title }}: What you need to know</h1>
    <section style="margin: 20px 0">
      <!-- Highlighted items -->
      <a
        v-for="(item, index) in procedure.fields.descriptionItem.filter(i => i.fields.highlighted)"
        :key="item.sys.id"
        :href="'#'+item.fields.slug"
        style="padding: 5px 10px"
        :style="index !== 0 ? 'border-left: solid 2px rgba(31,26,57,.101961)' : ''"
      >{{ item.fields.shortTitle }}</a>
    </section>
    <img
      v-if="procedure.fields.image"
      :src="procedure.fields.image.fields.file.url || ''"
      :alt="procedure.fields.image.fields.file.title || ''"
    />
    <!-- <collapsible v-for="(item, index) in procedure.fields.description.content" :key="index">
        <template slot="title">{{item.content[0].value}}</template>
        <template slot="content">{{item.content[0].value}}</template>
    </collapsible>-->
  </div>
</template>

<script>
import Collapsible from "@/components/Collapsible.vue";

import { mapState } from "vuex";

export default {
    components: {
      Collapsible
    },
    computed: mapState({
        procedure: 'singleProcedure'
    }),
    async validate({ params, store }){
        try{
            const procedure = await store.dispatch('fetchEntry', params.id)
            console.log(procedure)
            return true
        } catch(e) {
            console.log(e)
            return false
        }
    }
}
</script>

<style>
</style>