<template>
  <section id="proceduresGrid">
    <div
    v-for="p in items"
    :key="p.sys.id"
    @click="$router.push({path: '/procedure/' + p.sys.id})"
    class="procedure">
      <b>{{ p.fields.title }}</b>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'ProceduresGrid',
    computed: mapGetters({
      items: 'currentProcedures'
    }),
    created(){
      console.log(this.items)
    } 
}
</script>

<style lang="sass" scoped>
#proceduresGrid
  width: 100%
  @media (min-width: 768px)
    margin: 25px 5px 5px 25px
  .procedure
    padding: 20px
    border: 1px solid rgba(31,26,57,.101961)
    box-shadow: 0 2px 5px 0 rgba(31,26,57,.101961)
    border-radius: 5px
    cursor: pointer
    margin: 25px
    @media (min-width: 768px)
      margin: 0 20px 20px 0

    &:hover
      color: #e0d0d0

    @media (min-width: 768px)
      width: calc(50% - 20px)
      display: inline-block

</style>