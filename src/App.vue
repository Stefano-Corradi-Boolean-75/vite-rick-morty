<script>

import axios from 'axios'
import {store} from './data/store'

import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import ResultSearch from './components/ResultSearch.vue'
import CharacterList from './components/CharacterList.vue'


export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components:{
    AppHeader,
    AppSearch,
    CharacterList,
    ResultSearch
  },
  methods:{
    getCharacters(){
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params:{
          name: store.characterToSearch,
          status: store.statusToSearch
        }
      })
        .then( result => {
          store.charactersListData = result.data.results
          store.isLoaded = true;
        })
        .catch( error => {
          store.charactersListData = [];
          store.isLoaded = true;
          //console.log(error)
        })
      },
  },
  mounted(){
    this.getCharacters();    
  }
}
</script>

<template>
  
    <AppHeader title="Rick & Morty App" />
  
  <main>
    <AppSearch @startSearch="getCharacters()"  />
    <CharacterList />
    <ResultSearch />
  </main>

</template>


<style lang="scss">

@use './styles/general';

</style>