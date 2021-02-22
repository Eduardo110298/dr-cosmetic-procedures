<template>
  <section id="bodyAreasTopFilter">
    <figure id="mobileFilterButton" @click="$store.commit('setShowMobileFilter', true)">
      <div><filter-icon width="20px" height="20px"/></div>
      <h5>Filter</h5>
    </figure>
    <figure
      v-for="ba in items"
      :key="ba.sys.id"
      @click="setArea(ba.sys.id)"
      :id="`area-${ba.sys.id}`"
      :class="checkWhetherClassApply(ba.sys.id)"
    >
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
import FilterIcon from "@/components/FilterIcon.vue";

import { mapState } from "vuex";

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
    components: {
      FilterIcon
    },
    computed: {
      items(){
        return [{
          sys: { id:'all' },
          fields: { name: 'All', image: { fields: { file: { url: this.allUrl } } } }
        }].concat(this.$store.state.allBodyAreas)
      },
      ...mapState({
        selectedItems: 'selectedBodyAreas'
      })
    },
    methods: {
      setArea(areaId){
        this.$store.commit('clearBodyAreasSelection')
        this.$store.commit('selectBodyArea', areaId)
      },
      checkWhetherClassApply(id) {
        return this.selectedItems.includes(id) && this.selectedItems.length === 1 ? 'selectedArea' : ''
      }
    }
}
</script>

<style lang="sass" scoped>
#bodyAreasTopFilter
  overflow-x: auto
  display: flex
  flex-flow: row nowrap
  width: 100%
  margin-bottom: 30px
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
  
  figure#mobileFilterButton
    padding-right: 20px
    margin-right: 20px
    border-right: 1px solid rgba(31,26,57,.101961)

    @media (min-width: 768px)
      display: none
      
    div
      line-height: 60px
      width: 60px
      height: 60px
      border: 2px solid #8f8d9c
      border-radius: 50%

  &::-webkit-scrollbar
    width: 8px
    height: 8px

  &::-webkit-scrollbar-track
    background-color: rgba(0, 0, 0, 0)

  &::-webkit-scrollbar-thumb
    background-color: rgba(31, 26, 57, 0.101961)
    border-radius: 10px
</style>