<template>
    <div class="row">
        <div class="col-md-8 pb-4">
            <div class="card">
                <div class="card-body">
                    <div v-if="!loading">
                        <h2>{{bookable.title}}</h2>
                        <hr>
                        <article>{{bookable.description}}</article>
                    </div>
                </div>
            </div>
            <review-list :bookable-id='this.$route.params.id'></review-list>
        </div>
        <div class="col-md-4 pb-4">
            <availability :bookable-id='this.$route.params.id'></availability>

        </div>
    </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
export default {

    // props:{
    //     bookableId: String,
    // },
    components:{
        Availability,
        ReviewList
    },

    data(){
        return{
            bookable:null,
            loading:false
        };
},

    created(){
        this.loading = true;
        //If you relly on this.$route.params.id, your components are not reusable. Declare props 
        //bookableId instead and  use it. 
        axios.get(`/api/bookables/${this.$route.params.id}`)
        .then(response => {
            this.bookable = response.data.data
            this.loading = false;
            });
    
}
}
</script>