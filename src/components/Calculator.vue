<template>
    <div class="calculator-page">
        <h1>Cubic Spline Interpolation Calculator</h1>
        <div class="calculator">
            <div class="input-section">
                <h2>Enter Data Points</h2>
                <div class="data-input">
                    <div v-for="(point, index) in dataPoints" :key="index" class="data-point">
                        <label>Point {{ index + 1 }}:</label>
                        <div class="input-group">
                            <input type="number" v-model="point.x" placeholder="X" step="0.01" />
                            <input type="number" v-model="point.y" placeholder="Y" step="0.01" />
                        </div>
                    </div>
                </div>
                <button @click="addDataPoint" class="btn btn-primary">Add Point</button>
            </div>
            <div class="output-section">
                <h2>Generated Curve</h2>
                <div class="curve-output">
                    <div v-for="(point, index) in interpolatedPoints" :key="index" class="point">
                        <span class="label">Point {{ index + 1 }}:</span>
                        <span class="value">{{ point }}</span>
                    </div>
                </div>
                <button @click="calculateInterpolation" class="btn btn-success">Calculate</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import {Spline} from '../classes/spline.js'
export default {
    name: "Calculator",
    data() {
        return {
            dataPoints: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
            interpolatedPoints: [],
            xs : [0, 1, 1.5, 2.25],
            ys : [2.0, 4.4366, 6.7134, 13.9130],
        };
    },
    mounted(){
        const xs = [0, 1, 1.5, 2.25];
        const ys = [2.0, 4.4366, 6.7134, 13.9130];
        var spline = new Spline(xs, ys)
        console.table(spline)
    },
    methods: {
        // addDataPoint() {
        //     this.dataPoints.push({ x: 0, y: 0 });
        // },
        // calculateInterpolation() {
        //     // Perform cubic spline interpolation calculation using the data points
        //     // Update the interpolatedPoints array with the generated curve points
        //     // ...
        // },



    },
};
</script>
  
<style scoped>
.calculator-page {
    padding: 20px;
    background-color: #222;
    color: #fff;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 10px;
}

.calculator {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.input-section,
.output-section {
    flex: 1;
    padding: 20px;
}

.data-input {
    margin-bottom: 20px;
}

.data-point {
    margin-bottom: 10px;
}

.input-group {
    display: flex;
    gap: 10px;
}

.point {
    margin-bottom: 5px;
}

.label {
    font-weight: bold;
    margin-right: 5px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

.btn-success {
    background-color: #28a745;
    border-color: #28a745;
    color: #fff;
}

.btn-success:hover {
    background-color: #1c7430;
    border-color: #1c7430;
}
</style>
  