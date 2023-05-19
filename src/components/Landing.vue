<template>
    <div class="min-vh-100 d-flex flex-column">
        <!-- Header -->
        <header class="bg-dark text-white text-center py-5">
            <h1 class="display-4">Cubic Spline Interpolation Calculator</h1>
            <p class="lead">Effortlessly compute smooth curves</p>
            <!-- <a href="#calculator" class="btn btn-light btn-lg">Get Started</a> -->
            <router-link to="/calculatorPage" class="btn btn-success">Get Started</router-link>
        </header>

        <!-- Calculator Section -->
        <section id="calculator" class="py-5" style="background-color: #222">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <!-- <img src="path/to/illustration.png" alt="Illustration" class="img-fluid"> -->
                        <LineChart :chartData="data" :options="options" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="text-white">Cubic Spline Interpolation Calculator</h2>
                        <p class="text-white">
                            Use our intuitive calculator to perform cubic spline interpolation calculations. Simply enter
                            your data points, and the calculator will generate a smooth curve that accurately fits your
                            data.
                        </p>
                        <p class="text-white">
                            Cubic spline interpolation is a powerful technique widely used in computer graphics, data
                            analysis, and numerical methods. With our calculator, you can effortlessly apply this technique
                            to your own datasets.
                        </p>
                        <a href="#how-it-works" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="bg-light py-5">
            <div class="container">
                <h2 class="text-center mb-5">How It Works</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <i class="bi bi-pencil-square display-4 mb-4 text-primary"></i>
                                <h5 class="card-title">Enter Data Points</h5>
                                <p class="card-text">
                                    Simply input your data points into the calculator. You can specify the X and Y values
                                    for each point.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <i class="bi bi-gear display-4 mb-4 text-primary"></i>
                                <h5 class="card-title">Choose Interpolation Method</h5>
                                <p class="card-text">
                                    Select the interpolation method, such as natural spline or clamped spline, to determine
                                    the behavior of the curve.
                                </p>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <i class="bi bi-graph-up display-4 mb-4 text-primary"></i>
                                <h5 class="card-title">Generate Smooth Curve</h5>
                                <p class="card-text">
                                    Click the "Calculate" button, and our calculator will generate a smooth curve that
                                    accurately fits your data points.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
    name: 'Landing',
    components: {
        LineChart
    },
    setup() {
        const data = {
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
        };

        const options = {
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


        };

        return { data, options };
    },
};
</script>
  