<template>
<div v-for="project in projects" :key="project.id" class="card">
    <h4 class="card-title"><strong>Title:</strong> {{ project.project_title }}</h4>
    <p><strong>Description:</strong> {{ project.project_description }}</p>
</div>
</template>

<script>
export default { 
    // sto salvando i dati che mi passa il padre
    props:{
        projects: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    border: 1px solid black;
    border-radius: 10px;
    margin: 30px 0;
    padding: 30px;
}
</style>