<template>
<div v-for="project in projects" :key="project.id" class="card p-4 my-4 d-flex flex-row justify-content-between">
    <div class="w-50">
        <h4 class="card-title">{{ project.project_title }}</h4>
        <h6>{{ project.slug }}</h6>
        <p>{{ project.github_url }}</p>
    </div>
    <div class="w-50 text-end">
        <button class="btn bg-lightbrown">More Details</button>
    </div>
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
</style>