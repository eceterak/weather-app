<template>
    <button 
        class="btn btn-unit"
        v-text="unit.name"
        @click="unitChanged">
    </button>
</template>

<script>
    export default {
        name: 'unit',
        props: ['data'],
        data() {
            return {
                unit: this.data
            }
        },
        methods: {
            unitChanged() {
                this.$emit('changed', this.unit);
            }
        }
    }
</script>