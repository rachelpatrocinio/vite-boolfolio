<template>
  <AppHeader></AppHeader>
  <main class="my-5">
    <RouterView/>
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
.page{
  background-color: #9A7A5C;
  aspect-ratio: 1/1;
  &:hover{
    background-color: #694E3C;
  }
}
</style>