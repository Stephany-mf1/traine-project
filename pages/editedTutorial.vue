<template>
  <v-card>
    <v-form>
      <v-row>
        <v-container>
          <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="id" 
            outlined 
            disabled
            v-model="tutorial.id">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="Titles" 
            outlined 
            v-model="tutorial.title">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="Description" 
            outlined 
            v-model="tutorial.description">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="Published" 
            outlined 
            v-model="tutorial.published">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="Created at" 
            outlined 
            v-model="tutorial.createdAt"
            disabled>
            </v-text-field>
          </v-col>

            <v-col cols="12" sm="12" md="9">
            <v-text-field 
            label="Updated At" 
            outlined 
            v-model="tutorial.updatedAt"
            disabled>
            </v-text-field>
          </v-col>

          <v-btn color="success" class="mr-4" @click="salvar"> Salvar </v-btn>

          <v-btn 
          color="error" 
          class="mr-4" 
          onclick="window.location.href='/tutorial'">
            Cancelar
          </v-btn>

        </v-container>
      </v-row>
    </v-form>
  </v-card>
</template>
<script>



export default {

  data() {
    return {   
    tutorial:{
      id: "",
      title: "",
      description : "",
      published : "",
      createdAt : "",
      updatedAt : "",
    }
    }
  },
  async fetch(){
    const dadosTutorial = await this.$store.dispatch('tutorial/getById', this.$route.query.id)
    console.log(dadosTutorial)
    this.tutorial = dadosTutorial

  },
  fetchOnServer: false,

  methods: {
      async salvar(){
        const response = await this.$store.dispatch('tutorial/updateTutorial',this.tutorial)      
    }
  }
}
</script>