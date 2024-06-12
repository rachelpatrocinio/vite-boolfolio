<template>
  <div>
    <ul>
      <li v-for="project in projects">
        <h5>{{ project.project_title }}</h5>
        <p>{{ project.project_description }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';
  export default {
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