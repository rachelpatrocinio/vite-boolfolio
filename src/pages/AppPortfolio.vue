<template>
<div class="container">
    <div class="row">
    <div class="cards">
        <ProjectCard :projects="projects"></ProjectCard>
    </div>

    <div class="pages d-flex justify-content-center">
        <ul class="d-flex">
        <li class="p-2 mx-1 page text-white rounded"
            v-for="pageN in lastPage" :key="pageN"
            @click="changePage(pageN)">
            {{ pageN }}
        </li>
        </ul>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components:{
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