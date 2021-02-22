<template>
<div>
    <NuxtLink to='/'>Go back</NuxtLink>
    <h1>{{ procedure.fields.title }}: What you need to know</h1>
    <img v-if="procedure.fields.image" :src="procedure.fields.image.fields.file.url || ''" :alt="procedure.fields.image.fields.file.title || ''">
    <collapsible v-for="(item, index) in procedure.fields.description.content" :key="index">
        <template slot="title">{{item.content[0].value}}</template>
        <template slot="content">{{item.content[0].value}}</template>
    </collapsible>
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