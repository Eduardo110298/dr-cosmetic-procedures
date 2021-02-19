<template>
  <section id="proceduresGrid">
    <div
    v-for="p in items"
    :key="p.sys.id"
    class="procedure" @click="()=>{}">
      <b>{{ p.fields.title }}</b>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ProceduresGrid',
    props: {
      items:{
        type: Array,
        required: true,
        default: () => []
      }
    },
    created(){
      console.log(this.items)
    } 
}
</script>

<style lang="sass" scoped>
#proceduresGrid
  margin: 25px 5px 5px 25px 
  .procedure
    padding: 20px
    border: 1px solid rgba(31,26,57,.101961)
    margin-right: 20px
    margin-bottom: 20px
    box-shadow: 0 2px 5px 0 rgba(31,26,57,.101961)
    border-radius: 5px
    cursor: pointer

    &:hover
      color: #ff838a

    @media (min-width: 768px)
      width: calc(50% - 20px)
      display: inline-block

</style>