import { reactive } from "vue";


export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  charactersListData:[],
  isLoaded:false,
  characterToSearch:'',
  statusToSearch:''
});