<template>
  <AppHeader></AppHeader>
  <main>
    <div class="container">
      <div class="row">
        <!-- sto passando i dati di projects al componente figlio -->
        <ProjectCard :projects="projects"></ProjectCard>

        <ul class="d-flex">
          <li 
            v-for="pageN in lastPage" :key="pageN"
            @click="changePage(pageN)">
            {{ pageN }}
          </li>
        </ul>
      </div>
    </div>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectCard from './components/ProjectCard.vue';
  export default {
    components:{
      AppHeader,
      AppFooter,
      ProjectCard
    },
    data(){
      return{
        projects: [],
        currentPage: 1,
        lastPage: null
      }
    },
    methods:{
      fetchProjects(){
        axios
          .get('http://127.0.0.1:8000/api/projects',{
            params:{
              page: this.currentPage
            }
          })
          .then(res =>{
            console.log(res.data.projects.data);
            this.projects = res.data.projects.data;
            this.lastPage = res.data.projects.last_page;
          })
      },
      changePage(pageN){
        this.currentPage = pageN;
        this.fetchProjects();
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<style lang="scss" scoped>
</style>