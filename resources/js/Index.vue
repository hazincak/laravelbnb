<template>
    <div>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/second">Second</router-link> -->
        <!-- Named Routes -->
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>    
        </nav> 

        <div class="container mt-4 mb-r pr-4 pl-4">
            <router-view></router-view>
        </div>
       
        
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return{
            lastSearch: this.$store.state.lastSearch
        };
    },
    computed: {
        ...mapState({
            lastSearchComputed: "lastSearch"
        })
        
    }
}
</script>