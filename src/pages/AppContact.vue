<template>
<div class="container">
    <div class="row">
        <!-- Con il prevent, preveniamo l'invio del form -->
        <form v-if="success === false" @submit.prevent="sendMessage" action="" >
            <div class="mb-5">
                <label for="name" class="form-label"><h3>NAME</h3></label>
                <input type="text" class="form-control" id="name" v-model="name" placeholder="name">
                <div v-if="errors.name">
                    <p class="text-danger">{{ errors.name.join(' ') }}</p>
                </div>
            </div>
            <div class="mb-5">
                <label for="email" class="form-label"><h3>EMAIL</h3></label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="email">
                <div v-if="errors.email">
                    <p class="text-danger">{{ errors.email.join(' ') }}</p>
                </div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label"><h3>MESSAGE</h3></label>
                <div class="form-floating">
                    <textarea v-model="message" id="message" cols="30" rows="10" class="w-100 h-25 form-control"></textarea>
                </div>
                <div v-if="errors.message">
                    <p class="text-danger">{{ errors.message.join(' ') }}</p>
                </div>
            </div>
            <button class="bg-brown">SEND</button>
            <div v-if="loading === true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
            </div>
        </form>
        <div v-else class="text-success">
            L'invio è andato a buon fine
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                name: '',
                email: '',
                message: '',
                errors: {},
                loading: false,
                success: false
            }
        },
        methods: {
            sendMessage(){

                if(this.loading === true) return

                this.errors = {}
                this.loading = true

                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                axios
                    .post('http://127.0.0.1:8000/api/contacts', data)
                    .then(res =>{
                        if(res.data.success === true) {
                            // l'invio è andato a buon fine
                            this.success = true
                        }
                        else{
                            this.errors = res.data.errors
                        }
                    })
                    .finally(()=>{
                        this.loading = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
svg{
    width: 30px;
    height: 30px;
}

</style>