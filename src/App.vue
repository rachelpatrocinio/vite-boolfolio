<template>
  <div>
    <!-- sto passando i dati di projects al componente figlio -->
    <ProjectCard :projects="projects"></ProjectCard>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'
  export default {
    components:{
      ProjectCard
    },
    data(){
      return{
        projects: []
      }
    },
    methods:{
      fetchProjects(){
        axios
          .get('http://127.0.0.1:8000/api/projects')
          .then(res =>{
            // console.log(res.data.projects);
            this.projects = res.data.projects;
          })
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<style lang="scss" scoped>
</style>