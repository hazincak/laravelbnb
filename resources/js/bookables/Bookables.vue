<template>
    <div>
        <div v-if="loading">
            <p>Data is loading</p>
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                <div class="col" v-for="(bookable, columns) in bookablesInRow(row)" :key="'row' + row + columns" >
                    <bookable-list-item 
                        :item-title="bookable.title" 
                        :item-content="bookable.content" 
                        :price="1000"
                    ></bookable-list-item>
                </div>
                <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
            </div>
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
            loading: false,
            columns: 3
        }
    },

    computed:{
        rows(){
            return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods:{
        bookablesInRow(row){
            return this.bookables.slice((row -1) * this.columns, row * this.columns);
        },

        placeholdersInRow(row){
            return this.columns - this.bookablesInRow(row).length;
        }
    },

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
            },
              {
                id: 3,
                title: "Cheap Villa 3",
                content: "A very cheap villa 3"
            },
              {
                id: 4,
                title: "Cheap Villa 4",
                content: "A very cheap villa 4"
            },
              {
                id: 5,
                title: "Cheap Villa 5",
                content: "A very cheap villa 5"
            },
              {
                id: 6,
                title: "Cheap Villa 6",
                content: "A very cheap villa 6"
            },
            {
                id: 7,
                title: "Cheap Villa 7",
                content: "A very cheap villa 7"
            },
            
            ];
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