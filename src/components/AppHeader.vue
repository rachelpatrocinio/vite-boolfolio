<template>
<header class="main-header shadow-sm">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-md d-flex flex-wrap">
                <div class="logo d-flex justify-content-center w-100">
                    <a class="navbar-brand mt-4" href="#">
                        <img src="../../public/logo.png" alt="Logo">
                    </a>
                </div>

                <ul class="navbar-nav me-auto d-flex">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/Portfolio" class="nav-link">Portfolio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link">Contact Me</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.main-header{
    background-color: #FAF7F2;
}
</style>