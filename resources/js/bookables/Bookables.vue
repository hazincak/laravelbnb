<template>
    <div>
        <bookable-list-item item-title="Cheap Villa" item-content="A very cheap villa" v-bind:price="1500"></bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem"
export default {
    components:{
        BookableListItem
    }
}
</script>