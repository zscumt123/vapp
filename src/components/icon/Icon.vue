<template>
    <span class="glyphicon" :class="'glyphicon-'+name"></span>

</template>
<script>
    export default {
        name: "Icon",
        props: {
            name: {
                type: String,
                required: true
            }
        }
    };
</script>