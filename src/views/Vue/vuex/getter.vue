<template>
    <div>
        <div>
            <h5>getter</h5>
            <p>
                getter相当于是Vuex的computed属性。
            </p>
            <pre>
        const store = new Vuex.Store({
            state: {
                price: 10,
                number: 10,
                discount: 0.7,
            },
            getters: {
                total: state => {
                    return state.price * state.number
                },
                discountTotal: (state, getters) => {
                    return state.discount * getters.total
                }
            },
        });
        
        components
        computed: {
            total() {
                return this.$store.getters.total
            },
        }
            </pre>
        </div>
        <div>
            <h5>批量使用Vuex的getter属性取别名并使用</h5>
            <pre>
        import {mapGetters} from 'vuex'
        export default{
            computed:{
                ...mapGetters(['total','discountTotal']),
                等价下面的命名方法，只不过多了命名
                ...mapGetters(
                    myTotal:'total',
                    myDiscountTotal:'discountTotal'
                )
            }
        }
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"getter",
}
</script>

