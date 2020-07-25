<template>
    <div>
        <div v-if="loading">
            <p>Data is loading</p>
        </div>
        <div v-else>
            <bookable-list-item 
            v-for="bookable in bookables" :key="bookable.id"
            :item-title="bookable.title" 
            :item-content="bookable.content" 
            :price="1000"
            ></bookable-list-item>
        </div>
 

        <!-- <bookable-list-item 
        v-if="bookable2 !== null "
        :item-title="bookable2.title" 
        :item-content="bookable2.content" 
        :price="1500"
        ></bookable-list-item> -->

    
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem"
export default {
    components:{
        BookableListItem
    },
    data(){
        return{
            bookables: null,
            loading: false
        }
    },


    // beforeCreate(){
    //     console.log('before create');
    // },
    created(){
        this.loading = true;
        setTimeout(() => {
            this.bookables=[{
                id: 1,
                title: "Cheap Villa !!!",
                content: "A very cheap villa"
            },
            {
                id: 2,
                title: "Cheap Villa 2",
                content: "A very cheap villa 2"
            }];
            this.loading = false;
        }, 4000);

       
        
        // setTimeout(() => {
        //     this.bookable1.title = "Expensive villa"
        //     this.bookable1.body = "Very Expensive villa"

        //     this.bookable2.title = "Second expensive villa"
        //     this.bookable2.body = "Very Expensive villa numero duo"

        //     this.bookable3.title = "Third Expensive villa"
        //     this.bookable3.body = "Very Expensive villa dos"
        // }, 5000);
    },
    // beforeMount(){
    //     console.log('before mount');
    // },
    
    mounted(){
        

    },
    // beforeDestroy(){
    //     console.log('before destroy');
    // },
    // destroyed(){
    //     console.log('destroyed');
    // },
}
</script>