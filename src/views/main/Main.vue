<template>
    <div>
        <div>hello</div>
        <div class="yq-content-nav">
            <router-link :to="{name:'quickstart'}">Go to quickstart</router-link>
            <router-link :to="{name:'content',params:{category:123}}">Go to content</router-link>
            <router-link :to="{name:'content',params:{category:456}}">Go to content</router-link>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
    export default{
        name: "main"
    };
</script>
<style>
.yq-content-nav{
    background-color: red;
}
</style>