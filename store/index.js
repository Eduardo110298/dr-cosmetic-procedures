import { createClient } from '~/plugins/contentful'

const client = createClient()

export const state = () => ({
  allProcedures: [],
  allBodyAreas: [],
  selectedBodyAreas: ['all'],
})

export const mutations = {
  selectBodyArea(state, id) {
    state.selectedBodyAreas.push(id)
  },
  unselectBodyArea(state, id) {
    state.selectedBodyAreas = state.selectedBodyAreas.filter(item => item !== id)
  },
  removeAllSelection(state) {
    if (state.selectedBodyAreas.includes('all'))
      state.selectedBodyAreas.splice(state.selectedBodyAreas.indexOf('all'), 1)
  },
  clearBodyAreasSelection(state) {
    state.selectedBodyAreas = []
  },
  setProcedures(state, data) {
    state.allProcedures = data
  },
  setBodyAreas(state, data) {
    state.allBodyAreas = data
  },
}

export const actions = {
  async fetchData({ commit }) {
    try {
      const data = await client.getEntries()

      const procedures = data.items.filter(
        (item) => item.sys.contentType.sys.id === process.env.CTF_PROCEDURE_TYPE
      )
      const bodyAreas = data.items.filter(
        (item) => item.sys.contentType.sys.id === process.env.CTF_BODY_AREA_TYPE
      )
      const categories = data.items.filter(
        (item) => item.sys.contentType.sys.id === process.env.CTF_CATEGORY_TYPE
      )

      console.log(procedures)
      console.log(bodyAreas)
      console.log(categories)

      commit('setProcedures', procedures)
      commit('setBodyAreas', bodyAreas)
    } catch (e) {
      console.error(e)
    }
  },
}

export const getters = {
  currentProcedures: (state) => {
    return state.allProcedures.filter((procedure) => {
      if (state.selectedBodyAreas.includes('all')) return true
      else
        return procedure.fields.bodyAreas.find((bodyArea) =>
          state.selectedBodyAreas.includes(bodyArea.sys.id)
        )
    })
  },
}
