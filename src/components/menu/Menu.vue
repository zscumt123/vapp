<template>
    <ul class="yq-menu">
        <slot></slot>
    </ul>
</template>
<script>
    export default {
        name: "Menu",
        componentName: "Menu",
        props: {
            defaultActive: {
                type: String,
                default: ""
            },
            defaultOpeneds: Array,
            uniqueOpened: Boolean,
        },
        data() {
            return {
                activeIndex: this.defaultActive,
                openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice[0] : [],
                menuItems: {},
                submenus: {}
            };
        },
        watch: {
            defaultActive(value) {
                this.activeIndex = value;
                if (!this.menuItems[value]) {
                    return;
                }
                let menuItem = this.menuItems[value];
                let indexPath = menuItem.indexPath;
                this.handleSelect(value, indexPath, menuItem);
            },
            defaultOpeneds(value) {
                this.openedMenus = value;
            }
        },
        methods: {
            openMenu(index, indexPath) {
                let openedMenus = this.openedMenus;
                if (openedMenus.indexOf(index) !== -1) {
                    return;
                }
                if (this.uniqueOpened) {
                    this.openedMenus = openedMenus.filter((index) => {
                        return indexPath.indexOf(index) !== -1;

                    }) ;
                }
                this.openedMenus.push(index);
                console.log(this);

            },
            closeMenu(index) {
                this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
            },
            handleSubmenuClick(index, indexPath) {
                let isOpened = this.openedMenus.indexOf(index) !== -1;
                let nextOption = isOpened ? "close" : "open";
                isOpened ? this.closeMenu(index) : this.openMenu(index, indexPath);
                this.$emit(nextOption, index, indexPath);
            },
            handleSelect(index, indexPath, instance) {
                this.activeIndex = index;
                this.$emit("select", index, indexPath, instance);
                this.openActiveItemMenus();
            },
            openActiveItemMenus() {
                let index = this.activeIndex;
                if (!this.menuItems[index]) {
                    return;
                }
                if (index) {
                    let indexPath = this.menuItems[index].indexPath;
                    indexPath.forEach((index) => {
                        let submenu = this.submenus[index];
                        submenu && this.openMenu(index, submenu.indexPath);
                    });
                }
            }
        },
        mounted() {
            console.log(this);
            this.openActiveItemMenus();
        }
    };

</script>
<style lang="less" scoped>
    .yq-menu{
        width:182px;
    }

</style>