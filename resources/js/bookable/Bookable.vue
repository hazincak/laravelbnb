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
            <availability 
                :bookable-id='this.$route.params.id' 
                @availability="checkPrice($event)"
                class="mb-4"    
            ></availability>

             <transition name="fade">
                <price-breakdown v-if="price" :price="price" class="mb-4"></price-breakdown>
            </transition>

            <transition name="fade">
                <button class="btn btn-outline-secondary btn-block" 
                v-if="price" 
                @click="addToBasket"
                :disabled="inBasketAlready"
                >Book now</button>
            </transition>

             <button class="btn btn-outline-secondary btn-block" 
                v-if="inBasketAlready" 
                @click="removeFromBasket"
                >Remove from basket</button>
            <div v-if="inBasketAlready" class="mt-4 text-muted warning">Seems like yoe've added this object to basket already. IF you want to change dates, remove from the basket first.</div>
        </div>
    </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
import PriceBreakdown from "./PriceBreakdown";
import {mapState} from 'vuex';
export default {

    // props:{
    //     bookableId: String,
    // },
    components:{
        Availability,
        ReviewList,
        PriceBreakdown
    },

    data(){
        return{
            bookable: null,
            loading: false,
            price: null
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
    },

    computed: {
        ...mapState({
        lastSearch: "lastSearch",
        // inBasketAlready(state){
        //     if(null == this.bookable){
        //         return false;
        //     }

        //     return state.basket.items.reduce((result, item) => result || item.bookable.id ==this.bookable.id, false);
        // }
    }),
    inBasketAlready(){
        if(null ===this.bookable){
            return false;
        }
        return this.$store.getters.inBasketAlready(this.bookable.id);
    }
},
    
    methods:{
        async checkPrice(hasAvailability){
            if(!hasAvailability){
                this.price = null;
                return;
            }

            try {
                this.price = (await axios.get(
                    `/api/bookables/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
                )).data.data;
            } catch (err) {
                this.price = null;
            }
        },

        //commit is for commiting mutations and dispatch is for actions
        addToBasket(){
            this.$store.dispatch("addToBasket", {
                bookable: this.bookable,
                price: this.price,
                dates: this.lastSearch
            });
        },

        removeFromBasket(){
            this.$store.dispatch("removeFromBasket", this.bookable.id);
        }
    }
}
</script>

<style scoped>
.warning {
    font-size: 0.7rem;
}
</style>