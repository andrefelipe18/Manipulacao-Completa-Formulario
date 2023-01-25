<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <form @submit.prevent="enviar($event)" @reset.prevent="resetar()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number="form.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino" v-model="form.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" 
                                v-model="form.licenca" true-value="SIM" false-value="NAO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript" v-model="form.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="VueJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular" v-model="form.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" value="NodeJS" type="checkbox" v-model="form.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'(##) #####-####'" v-model="form.telefone">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'#####-####'" v-model="form.cep">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'###.###.###-##'" v-model="form.cpf">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'##.###.###/####-##'" v-model="form.cnpj">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'#### #### #### ####'" v-model="form.cartaoDeCredito">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veiculo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'AAA-####'" v-model="form.placaVeiculo">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veiculo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'AAA#A##'" v-model="form.placaVeiculoMercoSul">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG: </label>
                        <div class="col">
                            <input type="text" class="form-control" v-mask="'#-X'" v-model="form.rg">
                            <small class="text-muted">Formato: Sem padrão definido</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.alcance">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.escondido">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @chance="selecionarArquivos($event)">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">TextArea:</label>
                        <div class="col">
                            <textarea  rows="2" class="form-control" v-model="form.descricao"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select name="" id="" class="form-select" v-model="form.curso">
                                <option value="" disabled>Selecione</option>
                                <option v-for="curso in cursos" :key="curso.id" :value="curso.id">{{ curso.curso }} </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Estrelas:</label>
                        <div class="col">
                            <!-- Método comum mas não tão eficaz -->
                            <!-- <input-estrelas :numero-estrelas="5" @avaliar="form.avaliacao = $event"></input-estrelas> -->
                            <!-- Método eficaz -->
                            <input-estrelas :numero-estrelas="5" v-model:avaliar="form.avaliacao" ></input-estrelas>
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="reset">Limpar</button>
                            <button class="btn btn-success" type="button">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit" >Enviar (submit)</button>
                        </div>                        
                    </div>
                   
                </form>
            </div>

            
            <div class="col-6 text-white bg-secondary "  :style="'background-color:'+form.cor+'!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>     
                <hr>
                <div class="mb-5 row">
                    <span>{{ form }}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.nome }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha:{{ form.senha }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.idade }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.genero }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.licenca }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses: {{ form.interesses }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.telefone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cep: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão: {{ form.cartaoDeCredito }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veiculo: {{ form.placaVeiculo }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veiculo MercoSul: {{ form.placaVeiculoMercoSul }}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{ form.rg }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ $moment(form.data).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ form.dataHoraLocal }}</span>
                    <ul>
                        <li>{{ $moment(form.dataHoraLocal).format('dddd') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(10, 'days').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(1, 'months').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'years').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(10, 'days').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(1, 'months').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(2, 'years').format('LL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'days').format('LLLL') }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.mes }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form.semana }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hora }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.cor }}</span>
                </div>
                
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.alcance }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.escondido }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload: {{  }}</span>
                </div>  
                <div class="mb-3 row">
                    <span>Descrição: </span>
                    <pre>{{ form.descricao }}</pre>
                </div>
                <div class="mb-3 row">
                    <span>Curso: {{ form.curso }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Estrelas: {{ form.avaliacao }}</span>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
import InputEstrelas from './InputEstrelas.vue'
//console.log(this.formEstadoInicial.avaliacao)
export default {
    components: {
        InputEstrelas
    },
    data(){
        return{
              cursos: [
                {id: 1, curso: 'Bancos de Dados Relacionaios'},
                {id: 2, curso: 'Desenvolvimento web Vue.js'},
                {id: 3, curso: 'Desenvolvimento web React.js'},
                {id: 4, curso: 'Curso completo de PHP'},
              ],
              form: {},
              formEstadoInicial: {
                nome: '',
                email: '',
                senha: '',
                idade:'',
                licenca: '',
                interesses: [],
                genero: '',
                telefone: '',
                cep: '',
                cpf: '',
                cnpj: '',
                cartaoDeCredito: '',
                placaVeiculo: '',
                placaVeiculoMercoSul: '',
                rg: '',
                data: '',
                dataHoraLocal: '',
                mes: '',
                semana: '',
                hora: '',
                cor: '#333',
                alcance: 5,
                escondido: 'Esse form está escondido',
                arquivos: {},
                descricao: '',
                curso: '',
                avaliacao: 0,
              },      
         }
   },
   methods: {
        selecionarArquivos(event) {
            this.form.arquivos = event.target.files
        },
        enviar(e){
            console.log(e)
        },
        resetar(){
            this.form = Object.assign({}, this.formEstadoInicial);
        }
   }
}
</script>
