<template>
  <v-container>
    <v-card-title juastify="center">
        Create Tutoriais
    </v-card-title>
    <v-card>
        <v-form>
            <v-row>
              <v-container>
                <v-col cols="12" sm="12" md="9">
                <v-text-field 
                label="Titles" 
                outlined
                v-model="title">
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="9">
                <v-text-field 
                label="Description" 
                outlined
                v-model="description">
                </v-text-field>                  
                </v-col>

                <v-col cols="12" sm="12" md="9">
                <v-text-field 
                label="Published" 
                outlined
                v-model="published">
                </v-text-field>
                </v-col>
                
              
                <v-btn @click.prevent="createTutorial"
                color="success"
                class="mr-4"> Salvar          
                </v-btn>

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
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      //passar os dados que vão para o banco
      id:null,
      title:null,
      description:null,
      published: true,
      createdAt:null,
      updatedAt:null, 
    }
  },

methods:{
    async createTutorial(){ 
       const dataTutorial = {
        //passar o obejeto como parametro com valor que foi recebido na tela
         id: this.id,
         title: this.title,
         description : this.description,
         published : this.published,
         createdAt : this.createdAt,
         updatedAt : this.updatedAt
        }
          await this.$store.dispatch('tutorial/createTutorial', dataTutorial)
          
          //passar uma mensagem para informar ao usuário que seu dado foi inserido


          //limpar os campos
          this.title= "";
          this.description="";
          this.published="";
    }   
}
    
}
</script>