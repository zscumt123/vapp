<template>
    <div class="yq-content-nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-2 yq-nav-logo">
                    <img src="../../assets/images/logo.png">
                    <p>CLOUD LUCK</p>
                </div>
                <div class="col-xs-8 clearfix">
                    <div  class="yq-nav-item pull-left" v-for="(item,index) in routerParams">
                        <router-link :to="{name:'content',params:{category:item.Route}}">
                            <div><Icon :name="navIcons[index]"></Icon></div>
                            <span class="yq-nav-title">{{item.Name}}</span>
                        </router-link>
                    </div>

                </div>
                <div class="col-xs-2"></div>
            </div>
        </div>

    </div>
</template>
<script>
    import Icon from "../../components/icon/Icon.vue";
    export default{
        name: "topNav",
        data() {
            return {
                routerParams: this.$store.state.systemParameters,
                navIcons: ["star", "book", "record", "list-alt", "link", "th-list"]
            };
        },
        components: {
            Icon
        },
        computed: {
            routerParams: function () {
                return this.$store.getters.childParam;
            }
        },
        watch: {
            "$route"({params}) {
                if (params.hasOwnProperty("category")) {
                    let param = params.category;
                    if (!this.$store.getters.navRouteParam.includes(param)) {
                        this.$router.push({path: "/main"});
                    }
                }
//                console.log(this.$store.getters.navRouteParam);
            }
        }
    };
</script>
<style lang="less">
    .yq-content-nav{
        padding-top:20px;
        color:#999999;
        .yq-nav-logo{
            margin-left: 30px;
            p{
                letter-spacing: 2px;
                color:#18b025;
                font-weight: bold;
                text-align: center;
                width:130px;
            }
        }
        .yq-nav-item{
            width:16.6%;
            a{
                display: inline-block;
                color:#cecece;
                text-decoration: none;
                width:60px;
                text-align: center;
            }
            a.router-link-active{
                color:#18b025;
            }
            a:hover{
                color:#18b025;
            }
            .glyphicon{
                font-size: 40px;

            }
            .yq-nav-title{
                display: block;
                width:60px;
                text-align: center;
                margin-top: 10px;
            }
        }
    }
</style>