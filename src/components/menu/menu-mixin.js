/**
 * Created by ZhanG on 2016/12/12.
 */
module.exports = {
    computed: {
        indexPath() {
            const path = [this.index];
            let parent = this.$parent;
            while (parent.$options.componentName !== "Menu") {
                if (parent.index) {
                    path.unshift(parent.index);
                }
                parent = parent.$parent;
            }
            return path;
        },
        rootMenu() {
            let parent = this.$parent;
            while (parent.$options.componentName !== "Menu") {
                parent = parent.$parent;
            }
            return parent;
        }
    }
};