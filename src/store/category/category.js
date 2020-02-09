const category = {
    state: {
        data: [],
        left: [],
        right: [],
        shopCat:[]
    },
    mutations: {
        commitData(state, data) {
            state.data = data;
            let temp = []
            state.data.forEach(element => {
                temp.push(element.category_name)
            });
            state.left = temp
            state.right = data[0].category_items

        },
        commitRight(state, data) {
            state.data.forEach((element) => {
                if (element.category_name === data) {
                    state.right = element.category_items
                }
            })
        },
        toShop(state, data) {
            if (state.shopCat.length == 0) {
                state.shopCat.push(data)
            } else {
                let i = state.shopCat.findIndex((e)=>{return e.item_name===data.item_name})
                if (i == -1) {
                    state.shopCat.push(data)
                }
            }

        },
        add(state,data) {
            let i = state.shopCat.findIndex(e=>{return e.item_name===data.item_name})
            state.shopCat[i].count += 1;
        },
        sub(state,data) {
            if (data.count == 1) {
                return
            } else {
                let i = state.shopCat.findIndex(e=>{return e.item_name===data.item_name})
                state.shopCat[i].count -= 1;
            }
        }
    },
    actions: {

    },
    modules: {

    },
    getters: {
        countAll(state) {
            let temp = 0;
            for (let i = 0; i < state.shopCat.length; i++){
                temp += state.shopCat[i].price * state.shopCat[i].count
            }
            return temp
        }
    }
}
export default category