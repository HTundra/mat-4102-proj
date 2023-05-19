<template>
    <div class="calculator-page">
        <h1>Cubic Spline Interpolation Calculator</h1>
        <div class="toggle-container">
            <label for="toggle" class="toggle-label-left">Math Mode</label>
            <label class="toggle">
                <input type="checkbox" v-model="toggleValue" @change="toggleSlider" />
                <span class="slider"></span>
            </label>
            <label for="toggle" class="toggle-label-right">Presentation Mode</label>
        </div>
    <Calculator v-if="this.toggleValue === false"/>
    <ChartBuilder v-if="this.toggleValue === true"/>
    </div>
</template>
  
<script>
import Calculator from './Calculator.vue'
import ChartBuilder from './ChartBuilder.vue'
export default {
    name: 'CalculatorPage',
    data() {
        return {
            toggleValue: false
        };
    },
    mounted() {
    },
    methods: {
        toggleSlider() {
            // Do something with the toggle value
            console.log('Toggle value:', this.toggleValue);
        }
    },
    components:{
        Calculator,
        ChartBuilder
    }
};
</script>
  
<style scoped>
.calculator-page {
    padding: 20px;
    background-color: #222;
    color: #fff;
}

.toggle-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-label-left {
    margin-right: 10px;
}
.toggle-label-right{
    margin-left: 10px
}

.toggle {
    position: relative;
    width: 60px;
    height: 34px;
}

.toggle input[type="checkbox"] {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input[type="checkbox"]:checked+.slider {
    background-color: #2196f3;
}

input[type="checkbox"]:checked+.slider:before {
    transform: translateX(26px);
}



h1 {
    text-align: center;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 10px;
}
</style>
  