<template>
    <div class="calculator">
        <div class="input-section">
            <div>
                <div class="center-content">
                    <h2>Enter Data Points</h2>
                    <div class="data-input">
                        <div class="input-group">
                            <label for="input-data-label">Input data label:</label>
                            <input type="text" id="input-data-label" v-model="chartData.datasets[0].label" />
                        </div>

                        <div v-for="(point, index) in chartData.datasets[0].data" :key="index" class="data-point">
                            <div class="input-group">
                                <label>Value {{ index + 1 }}:</label>
                                <input type="number" class="numberInput input-field"
                                    v-model="chartData.datasets[0].data[index]" placeholder="X" step="0.01" />
                                <input type="text" v-model="chartData.labels[index]" placeholder="January" step="0.01"
                                    class="input-field" />
                                <button @click="deleteDataPoint(index)" class="btn btn-danger">Delete</button>
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
                <div id="curve-output">
                    <LineChart :chartData="chartData" :options="chartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
    name: 'ChartBuilder',
    components: {
        LineChart
    },
    mounted() {
        console.log(this.chartData.datasets[0].data)
    },
    data() {
        return {
            dataPoints: [{ x: 0, label: '' }],
            chartData: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "Tilapia Inventory (tons)",
                        data: [12, 19, 3, 5, 2, 3],
                        cubicInterpolationMode: "monotone",
                        borderColor: '#FFFFFF',
                        backgroundColor: '#FFFFFF'
                    },
                ],
            },

            chartOptions: {
                scales: {
                    x: {
                        grid: {
                            color: "rgba(255, 255, 255, 0.3)",
                            borderDash: [8, 4]
                        },
                        ticks: {
                            color: "white",
                            stepSize: 1,
                            font: {
                                size: 10
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white",
                            stepSize: 1,
                            font: {
                                size: 10
                            }
                        }
                    }
                }


            }
        }
    },
    methods: {
        addDataPoint() {
            this.dataPoints.push({ x: 0, y: 0 });
        },
        deleteDataPoint(index) {
            this.dataPoints.splice(index, 1);
        }
    },
};
</script>
  
<style>
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
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.data-point label {
    margin-right: 10px;
    flex-shrink: 0;
}

.data-point .input-group {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.input-group label {
    margin-right: 10px;
    flex-shrink: 0;
    width: 150px;
    /* Set a fixed width for the label */
}

.input-group input[type="text"],
.input-group input[type="number"] {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
    flex-grow: 1;
}

.input-group input[type="text"]:focus,
.input-group input[type="number"]:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.point {
    margin-bottom: 5px;
}

.label {
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

.numberInput {
    margin-right: 5px;
}</style>