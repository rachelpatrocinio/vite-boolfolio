<template>
<div class="container">
    <div class="row">
        <form action="">
            <div class="mb-5">
                <label for="name" class="form-label"><h3>NAME</h3></label>
                <input type="text" class="form-control" id="name" name="name" placeholder="name">
            </div>
            <div class="mb-5">
                <label for="email" class="form-label"><h3>EMAIL</h3></label>
                <input type="email" class="form-control" id="email" name="email" placeholder="email">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label"><h3>MESSAGE</h3></label>
                <div class="form-floating">
                    <textarea name="message" id="message" cols="30" rows="10" class="w-100 h-25 form-control"></textarea>
                </div>
            </div>
            <button class="bg-brown">SEND</button>
        </form>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>