let vue;
// 全局混入
const install = (_vue) => {
    vue = _vue;
    vue.mixin({
        beforeCreate(){
            if(this.$options && this.$options.store){
                this.$store = this.$options.store;
            } else if(this.$parent && this.$parent.$store){
                this.$store = this.$parent.$store;
            };
        }
    });
};

// 属性遍历
function attrLoop(obj, callback){
    Object.keys(obj).forEach((item) => {
        callback && callback(item);
    });
};

class Store {
    constructor(options){
        const vm = new vue({
            data: {
                state: options.state
            }
        });

        // state
        this.state = vm.state;

        // getters
        const getters = options.getters || {};
        this.getters = {};
        attrLoop(getters, (name) => {
            Object.defineProperty(this.getters, name, {
                get: () => {
                    return getters[name](this.state);
                }
            });
        });

        // mutations
        const mutations = options.mutations || {};
        this.mutations = {};
        attrLoop(mutations, (name) => {
            this.mutations[name] = (pay) => {
                mutations[name](this.state, pay);
            }
        });

        // actions
        const actions = options.actions || {};
        this.actions = {};
        attrLoop(actions, (name) => {
            this.actions[name] = (pay) => {
                actions[name](this.state, pay);
            }
        });
    };

    // commit
    commit(name, val){
        this.mutations[name](val);
    };

    // dispatch
    dispatch(name, val){
        this.actions[name](val);
    };
};


export default {
    install,
    Store
}