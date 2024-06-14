<template>
    <div class="container">
        <div class="row">
            <h3>{{ slug }}</h3>

            <!-- inizialmente settando project null mi dava errore in console.. perchè veniva rendirizzato piu tardi. ora mettendo il v-if non darà piu errore. -->
            <div v-if="project" class="card">
                <div class="card-title">
                    <h2>{{ project.project_title }}</h2>
                    <p>{{ project.project_description }}</p>
                </div>
            </div>

            <button @click="goBack" class="btn bg-brown mt-2">GO BACK</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props:{
        slug:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            project: null,
        }
    },
    methods:{
        goBack(){
            this.$router.back()
        },
        fetchProject(){
            axios
                .get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res =>{
                    // console.log(res.data.project);
                    this.project = res.data.project;
                })
                .catch((err) => {
                    this.$router.push({name: 'NotFound'});
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