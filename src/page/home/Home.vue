<template>
    <div>
        {{hotCity}}
    </div>
</template>
<script>
export default {
    created() {
        this.getHotCity()
    },
    data() {
        return {
            hotCity: 'aaa'
        }
    },
    methods: {
        getHotCity() {
            this.$api.getHotCity().then(res => {
                this.hotCity = res
            })
        }
    }
}
</script>

