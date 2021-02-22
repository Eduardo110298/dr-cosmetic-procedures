<template>
  <collapsible height="300px">
    <template slot="title">Body Areas</template>
    <template slot="content">
      <checkbox
        v-for="ba in items"
        :key="ba.sys.id"
        name="bodyAreaCheckbox"
        :checked="selectedItems.includes(ba.sys.id)"
        @change="handleCheckboxChange"
      >{{ ba.fields.name }}</checkbox>
    </template>
  </collapsible>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";
import Collapsible from "@/components/Collapsible.vue";

export default {
    name: 'BodyAreasLeftFilter',
    components: {
      Checkbox,
      Collapsible
    },
    computed: {
        items() {
            return this.$store.state.allBodyAreas
        },
        selectedItems() {
            return this.$store.state.selectedBodyAreas
        }
    },
    methods: {
      handleCheckboxChange(change){
        this.$store.commit('unselectBodyArea', 'all')
        if (change.checked) {
          this.$store.commit('selectBodyArea', change.value)
        } else {
          this.$store.commit('unselectBodyArea', change.value)
        }
        if(this.$store.state.selectedBodyAreas.length === 0){
          this.$store.commit('selectBodyArea', 'all')
        }
      }
    }
}
</script>