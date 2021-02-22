<template>
  <section id="leftSidebarFilter" :class="$store.state.showMobileFilter ? 'mobileFilterVisible' : ''">
    <div class="filterMobileWrapper">
      <h1>Filters <span style="float: right" @click="$store.commit('setShowMobileFilter', false)"><close-icon /></span></h1>
      <body-areas-left-filter />
    </div>
  </section>
</template>

<script>
import BodyAreasLeftFilter from "@/components/BodyAreasLeftFilter.vue";
import CloseIcon from "@/components/CloseIcon.vue";

export default {
    name: 'LeftSidebarFilter',
    components: {
      BodyAreasLeftFilter,
      CloseIcon
    }
}
</script>

<style lang="sass" scoped>
#leftSidebarFilter
  display: none
  @media(min-width: 768px)
    position: static
    min-width: 220px
    display: inline
    border-right: 1px solid rgba(31,26,57,.101961)
    .filterMobileWrapper h1
      display: none

  &.mobileFilterVisible
    background: #0909098a
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    .filterMobileWrapper
      background: white
      width: 50%
      height: 100%
      
      h1
        padding: 15px
        border-bottom: 1px solid rgba(31,26,57,.101961)
</style>