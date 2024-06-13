<template>
<div v-for="project in projects" :key="project.id" class="card p-4 my-4 d-flex flex-row justify-content-between">
    <div class="w-50">
        <h4 class="card-title">{{ project.project_title }}</h4>
        <h6>{{ project.slug }}</h6>
        <p>{{ project.github_url }}</p>
    </div>
    <div class="w-50 text-end">
        <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }" >
            <button class="btn bg-lightbrown">More Details</button>
        </router-link>
    </div>
</div>
</template>

<script>
export default { 
    props:{
        projects: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
</style>