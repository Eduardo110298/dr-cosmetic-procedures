<template>
<div>
    <h1>ID: {{ procedure.fields.title }}</h1>
    <NuxtLink to='/'>Go back</NuxtLink>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        procedure: 'singleProcedure'
    }),
    async validate({ params, store }){
        try{
            const procedure = await store.dispatch('fetchEntry', params.id)
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