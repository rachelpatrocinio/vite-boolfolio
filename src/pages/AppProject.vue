<template>
    <div class="container">
        <div class="row">
            <h3>{{ $route.params.slug }}</h3>

            <div class="card">
                <div class="card-title">
                    <h2>{{ project.project_title }}</h2>
                    <p>{{ project.project_description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            project: [],
            slug: this.$route.params.slug
        }
    },
    methods:{
        fetchProject(){
            axios
                .get("http://127.0.0.1:8000/api/projects/" + this.slug)
                .then(res =>{
                    // console.log(res.data.project);
                    this.project = res.data.project;
                })
        }
    },
    created(){
        this.fetchProject()
    }
}
</script>

<style lang="scss" scoped>

</style>