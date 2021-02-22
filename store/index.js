import { createClient } from '~/plugins/contentful'

const client = createClient()

export const state = () => ({
  showMobileFilter: false,
  singleProcedure : {},
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
  setAllProcedures(state, data) {
    state.allProcedures = data
  },
  setAllBodyAreas(state, data) {
    state.allBodyAreas = data
  },
  setShowMobileFilter(state, value){
    state.showMobileFilter = value
  },
  setSingleProcedure(state, data){
    state.singleProcedure = data
  }
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

      commit('setAllProcedures', procedures)
      commit('setAllBodyAreas', bodyAreas)
    } catch (e) {
      console.error(e)
    }
  },
  fetchEntry({ commit }, id) {
    return new Promise((resolve, reject) => {
      client.getEntry(id).then(data => {
        commit('setSingleProcedure', data)
        resolve()
      })
      .catch(reject)
    })
  },
}

export const getters = {
  currentProcedures: (state) => {
    return state.allProcedures.filter((procedure) => {
      if (state.selectedBodyAreas.includes('all')) return true
      else
        return procedure.fields.bodyAreas.some((bodyArea) =>
          state.selectedBodyAreas.includes(bodyArea.sys.id)
        )
    })
  },
}
