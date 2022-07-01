<template>
<v-container>
    <v-simple-table>
    <template v-slot:default>
      <table>
      <thead>
        <tr>
          <th class="text-left">Title </th>
          <th class="text-left">Description</th>
          <th class="text-left">Published</th>
          <th class="text-left">CreatedAt</th>
          <th class="text-left">UpdatedAt</th>
          <th class="text-left">Edições</th>
          <th class="text-left">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tutorial in listaTutorial" :key="tutorial.id">
          <td>{{ tutorial.title }}</td>
          <td>{{ tutorial.description }}</td>
          <td>{{ tutorial.published }}</td>
          <td>{{ tutorial.createdAt }}</td>
          <td>{{ tutorial.updatedAt }}</td>
          <td><v-btn @click="btnEditarTutorial(tutorial)">Editar</v-btn></td>
          <td><v-btn @click.prevent="deleteTutorial(tutorial)">Deletar</v-btn></td>
        </tr>
      </tbody>
      </table>
    </template>
  </v-simple-table>
      <v-btn depressed outlined tile onclick="window.location.href='/createtutorial'">Create</v-btn>
</v-container>  
</template>
<script>
export default {

  data() {
    return {
      listaTutorial: [],
    }
  },

  async fetch() {
    const tutorial = await this.$store.dispatch('tutorial/getTodos')
    this.listaTutorial = tutorial
  },
  methods:{
  async deleteTutorial(tutorial){
   await this.$store.dispatch('tutorial/deleteTutorial', tutorial)
  },
    btnEditarTutorial(tutorial){
    this.$router.push({ path: '/editedTutorial', query: { id: tutorial.id} })
  }
  }
}
</script>
