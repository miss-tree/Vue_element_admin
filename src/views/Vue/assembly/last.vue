<template>
    <div></div>
</template>


<script>
export default {
    mounted(){
        console.log(this.$listeners);
        console.log(this.$listeners.click());
    }
}
</script>