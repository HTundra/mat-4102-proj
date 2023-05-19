<template>
        <div class="calculator">
            <div class="input-section">
                <div>
                    <div class="center-content">
                        <h2>Enter Data Points</h2>
                        <div class="data-input">
                            <div v-for="(point, index) in dataPoints" :key="index" class="data-point">
                                <label>Point {{ index + 1 }}:</label>
                                <div class="input-group">
                                    <input type="number" v-model="point.x" placeholder="X" step="0.01" />
                                    <input type="number" v-model="point.y" placeholder="Y" step="0.01" />
                                    <font-awesome-icon :icon="['fas', 'trash']" style="color: #fe3434;" @click="deleteDataPoint(index)" class="pointer"/>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <button @click="addDataPoint" class="btn btn-primary mr-2">Add Point</button>
                            <button @click="calculateInterpolation" class="btn btn-success mx-2">Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="output-section">
                <h2>Generated Curve</h2>
                <div class="chart-container">
                    <div id="curve-output"></div>
                </div>
            </div>
        </div>
</template>
  
<script>
import Anychart from 'anychart';
import { Spline } from '../classes/spline.js';

export default {
    name: 'Calculator',
    data() {
        return {
            dataPoints: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }],
            interpolatedPoints: [],
            spline: {},
            isChartDisplayed: false,
            toggleValue: false
        };
    },
    mounted() {
        this.calculateInterpolation();
    },
    methods: {
        addDataPoint() {
            this.dataPoints.push({ x: 0, y: 0 });
        },
        deleteDataPoint(index) {
            this.dataPoints.splice(index, 1);
        },
        calculateInterpolation() {
            const xs = this.dataPoints.map((point) => point.x);
            const ys = this.dataPoints.map((point) => point.y);
            this.spline = new Spline(xs, ys);
            console.table(this.spline);
            this.drawChart();
        },
        drawChart() {
            document.getElementById('curve-output').innerHTML = '';
            const chartData = [];
            for (let i = 0; i < 50; i++) {
                const j = i * 0.1;
                chartData.push([j, this.spline.at(j)]);
            }

            const dataSet = Anychart.data.set(chartData);
            const seriesData = dataSet.mapAs({ x: 0, value: 1 });

            const chart = Anychart.line();
            chart.line(null);

            const series = chart.line(seriesData);
            series.name('DATA');
            chart.xScale(Anychart.scales.linear());
            chart.yScale(Anychart.scales.linear());
            chart.title('Output Graph');
            chart.container('curve-output');
            chart.draw();
            this.isChartDisplayed = true;
        },
        toggleSlider() {
            // Do something with the toggle value
            console.log('Toggle value:', this.toggleValue);
        }
    },
};
</script>
  
<style scoped>

.pointer{
    cursor:pointer;
}
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

.chart-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    /* Creates a 1:1 aspect ratio */
}

#curve-output {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
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

.center-content {
    text-align: center;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.input-section {
    display: flex;
    justify-content: center
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
  