<template>
    <label class="radio-container">
        <span class="radio-wrapper" :class="{
            'radio-disabled':disabled,
            'radio-focus':focus,
            'radio-active':model===label}">
            <input
                    :value="label"
                    :disabled="disabled"
                    v-model="model"
                    @focus="focus=true"
                    @blur="focus=false"
                    :name="name"
                    class="radio-input"
                    type="radio">
        </span>
        <span class="radio-content" v-if="$slots.default"><slot></slot></span>
        <span class="radio-content" v-else>{{label}}</span>
    </label>
</template>
<script>
    export default{
        name: "Radio",
        props: {
            value: {},
            label: [String, Number],
            disabled: Boolean,
            name: String
        },
        data() {
            return {
                focus: false
            };
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit("input", val);
                }
            }
        }
    };

</script>
<style lang="less" scoped>
    .radio-container{
        margin:0;
        padding:0;
        .radio-wrapper{
            width:16px;
            height: 16px;
            display: inline-block;
            box-sizing: border-box;
            border:1px solid #cccccc;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            background: #ffffff;
            vertical-align:middle;
        }
        .radio-input{
            display: block;
            opacity: 0;
            width:14px;
            height: 14px;
            cursor: pointer;
            margin: 0;
        }
        .radio-wrapper:after{
            content: " ";
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            /*background: #ffffff;*/
            z-index: 1000;
            margin:0;
            position: absolute;
            top:4px;
            left:4px;
        }
    .radio-wrapper.radio-active{
        border-color: #18b025;
    }
    .radio-wrapper.radio-active:after{
        background-color:#18b025;
    }
    .radio-wrapper.radio-disabled{
        background-color: #eff2f7;
        cursor: not-allowed;
        .radio-input{
            cursor: not-allowed;
        }
    }
    .radio-wrapper.radio-active.radio-disabled{
        background-color:#e4e3e3;
        border-color:#cccccc;
        &:after{
            background-color: #ffffff;
         }
    }
    .radio-content{
        display: inline-block;
        vertical-align:middle;
    }
    }
</style>