<template>
  <section id="bodyAreasTopFilter">
    <figure class="selectedArea" id="area-all" @click="setArea('all')">
      <img :src="allUrl" alt="All" :width="width" :height="height" />
      <h5>All</h5>
    </figure>
    <figure v-for="ba in items" :key="ba.sys.id" @click="setArea(ba.sys.id)" :id="`area-${ba.sys.id}`">
      <img
        :src="ba.fields.image ? ba.fields.image.fields.file.url : noImageUrl"
        :alt="ba.fields.name"
        :width="width"
        :height="height"
      />
      <h5>{{ ba.fields.name }}</h5>
    </figure>
  </section>
</template>

<script>
export default {
    name: 'BodyAreasTopFilter',
    data() {
      return {
        noImageUrl: '/img/no-image-133x133.png',
        allUrl: 'https://fi.realself.com/images/list-pages/procedures/bodypart-filter-imgs/view-all.jpg',
        width: '60',
        height: '60',
      }
    },
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
      setArea(areaId){
        document.querySelector('#bodyAreasTopFilter figure.selectedArea').classList.remove('selectedArea')
        document.getElementById(`area-${areaId}`).classList.add('selectedArea')
      }
    }
}
</script>

<style lang="sass" scoped>
#bodyAreasTopFilter
  overflow-x: auto
  display: flex
  flex-flow: row nowrap
  width: 420px

  figure
    cursor: pointer
    text-align: center
    margin-right: 35px
    
    img
      border: 3px solid #ffffff
      border-radius: 50%
    h5
      margin-top: 10px
      font-weight: 400

  figure.selectedArea
    img
      border: 3px solid #ff838a
    h5
      font-weight: 700
      color: #ff838a

  &::-webkit-scrollbar
    width: 8px
    height: 8px

  &::-webkit-scrollbar-track
    background-color: rgba(0, 0, 0, 0)

  &::-webkit-scrollbar-thumb
    background-color: rgba(31, 26, 57, 0.101961)
    border-radius: 10px
</style>