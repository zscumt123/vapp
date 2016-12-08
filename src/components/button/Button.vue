<template>
    <button type="button" class="btn" :disabled="disabled" @click="handleClick"
            :class="[
                status ? 'btn-'+status : 'btn-default',
                size ? 'btn-'+size : '',
                {
                    'btn-block':block,
                }
            ]">
        <Icon :name="icon" v-if="icon"></Icon>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
    import Icon from "../icon/Icon.vue";
    export default {
        name: "btn",
        props: {
            status: String,
            size: String,
            icon: {
                type: String,
                default: ""
            },
            disabled: {
                type: Boolean,
                default: false
            },
            block: Boolean
        },
        components: {
            Icon
        },
        methods: {
            handleClick(event) {
                console.log(event);
                this.$emit("click", event);
            }
        }
    };

</script>