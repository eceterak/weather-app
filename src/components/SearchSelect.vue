<template>
    <div class="search-select" v-on-clickaway="hideDropdown">
        <input type="text" 
            :class="classes"
            class="search-select-input"
            v-model="value"
            placeholder="select city"
            @focus="showDropdown"
            @blur="setValue"
            v-autowidth="{maxWidth: '960px', comfortZone: 0}">
        <div :class="dropdownClasses" class="search-select-dropdown">
            <ul>
                <li v-for="(option, index) in availableOptions" 
                    v-bind:key="option.id" 
                    @click="select(option, index)">
                    {{ option.name }}, <small>{{ option.country }}</small>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mixin as clickaway} from 'vue-clickaway';

    export default {
        props: ['data', 'label', 'classes', 'val'],
        mixins: [clickaway],
        data() {
            return {
                value: (this.val) ? this.val : null, 
                displayDropdown: false,
                clearOnSelect: true,
                options: this.data
            }
        },
        computed: {
            dropdownClasses() {
                return this.displayDropdown ? 'd-block' : 'd-none';
            },
            optionLabel() {
                return this.label ? this.label : 'name';
            },
            availableOptions() {
                if(this.value) {
                    return this.options.filter(option => {
                        return option[this.optionLabel].toLowerCase().includes(this.value.toLowerCase());
                    });
                }
                else return this.options;
            }
        },
        methods: {
            showDropdown() {
                //this.value = '';
                this.displayDropdown = true;
            },
            hideDropdown() {
                this.displayDropdown = false;
            },
            select(option, index) {
                this.value = option.name + ', ' + option.country;

                this.$emit('select', option, index);

                this.hideDropdown();
            },
            setValue() {
                this.$emit('blur', this.value);
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../scss/components/searchselect";

</style>