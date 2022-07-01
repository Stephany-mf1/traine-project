
export const state = () =>({
  listaTutorial:[]
})
export const mutations = {
    updateTutorial(state, newTutorial){
        state.listaTutorial.slice(0)
        state.listaTutorial.push(...newTutorial)
    }
}
export const actions = {
    createTutorial({commit, state}, tutorial){
        return this.$axios.$post('https://whispering-thicket-02747.herokuapp.com/api/tutorials/', tutorial)
    },
    updateTutorial({commit, state}, tutorial){
        return this.$axios.$put('https://whispering-thicket-02747.herokuapp.com/api/tutorials/'+tutorial.id, tutorial)
    },
    deleteTutorial({commit, state}, tutorial){
        return this.$axios.$delete('https://whispering-thicket-02747.herokuapp.com/api/tutorials/'+tutorial.id)
    },    
    getTodos({commit, state}){
        return this.$axios.$get('https://whispering-thicket-02747.herokuapp.com/api/tutorials/')
    },
    getById({commit, state}, id){
        return this.$axios.$get('https://whispering-thicket-02747.herokuapp.com/api/tutorials/'+id)
    },
    getPublished({commit, state}, published){
        return this.$axios.$get('https://whispering-thicket-02747.herokuapp.com/api/tutorials/', published)
    }
}
