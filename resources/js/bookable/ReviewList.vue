<template>
    <div style="padding: 1.25rem">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">Review list</h6>
        <div v-if="loading">Loading...</div>
            <div v-else>
                <div class="border-bottom d-none d-md-block" v-for="(review, index) in reviews" :key="index" >
                <div class="row pt-3">
                    <div class="col-md-6">Jan Hazincak</div>
                    <div class="col-md-6 d-flex justify-content-end">{{review.rating}}</div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-12">{{ review.created_at | fromNow}}</div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-12">{{review.content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Locally defined filter
// import moment from "moment";

export default {
    props:{
        bookableId: String,
    },
    data(){
        return{
            loading:false,
            reviews:null
        }
    },
    created(){
        this.loading = true;
        //If you relly on this.$route.params.id, your components are not reusable. Declare props 
        //bookableId instead and  use it. 
        axios.get(`/api/bookables/${this.bookableId}/reviews`)
            .then(response => this.reviews = response.data.data)
            .then(() => this.loading = false);
    },
    // Locally defined filter
    // filters:{
    //     fromNow(value){
    //         return moment(value).fromNow();
    //     }
    // }
}
</script>