<template>
    <div class="">
        <i v-for="estrela in estrelas" :key="estrela.id" 
        :class="estrela.estilo" @click="marcarAvaliacao(estrela.id)"></i>
    </div>
</template>
<script>
export default {

    props: {
        numeroEstrelas: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            estrelas: [],
            avaliacao: 0
        }
    },
    mounted(){
        this.iniciarEstrelas();
    },
    methods: {
        iniciarEstrelas(){
            this.estrelas = Array.from({ length: this.numeroEstrelas }, (_, i) => ({ id: i, estilo: 'bi-star estrela' }));
        },
        marcarAvaliacao(e){
            this.iniciarEstrelas();
            this.avaliacao = e + 1;
            e++;
            for(let i = 0; i < e; i++){
                this.estrelas[i].estilo = 'bi-star-fill estrela';
            }
            //enviar um evento global para o componente pai

           //Método comum de emitir eventos mas não eficaz com v-model
          // this.$emit('avaliar', this.avaliacao);
           //Método funcional com v-model
           this.$emit('update:avaliar', this.avaliacao);
        }
    }
}
</script>
<style scoped>
    .estrela{
        font-size: 1.5rem;
        color: #999;
        margin-left: 1px;
        margin-right: 1px;
    }
    .estrela:hover{
        color: #f0ad4e;
        cursor: pointer;
    }
    .bi-star-fill{
        color: #f0ad4e;
    }
</style>