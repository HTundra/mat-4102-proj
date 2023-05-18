<template>
    <div class="container">
        <header class="bg-dark text-white text-center py-5">
      <h1 class="display-4">Cubic Spline Interpolation Calculator</h1>
      <p class="lead">Effortlessly compute smooth curves</p>
      <a href="#calculator" class="btn btn-light btn-lg">Get Started</a>
    </header>

    <!-- Calculator Section -->
    <section id="calculator" class="py-5" style="background-color: #222">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="path/to/illustration.png" alt="Illustration" class="img-fluid">
          </div>
          <div class="col-lg-6">
            <h2 class="text-white">Cubic Spline Interpolation Calculator</h2>
            <p class="text-white">
              Use our intuitive calculator to perform cubic spline interpolation calculations. Simply enter your data points, and the calculator will generate a smooth curve that accurately fits your data.
            </p>
            <p class="text-white">
              Cubic spline interpolation is a powerful technique widely used in computer graphics, data analysis, and numerical methods. With our calculator, you can effortlessly apply this technique to your own datasets.
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
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <i class="bi bi-pencil-square display-4 mb-4 text-primary"></i>
                <h5 class="card-title">Enter Data Points</h5>
                <p class="card-text">
                  Simply input your data points into the calculator. You can specify the X and Y values for each point.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <i class="bi bi-gear display-4 mb-4 text-primary"></i>
                <h5 class="card-title">Choose Interpolation Method</h5>
                <p class="card-text">
                  Select the interpolation method, such as natural spline or clamped spline, to determine the behavior of the curve.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <i class="bi bi-graph-up display-4 mb-4 text-primary"></i>
                <h5 class="card-title">Generate Smooth Curve</h5>
                <p class="card-text">
                  Click the "Calculate" button, and our calculator will generate a smooth curve that accurately fits your data points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <!-- <h1>Cubic Spline Interpolation</h1>

        <div id="input-container">
            <div class="point-input">
                <div class="form-group row">
                    <label for="x1" class="col-sm-2 col-form-label">X1:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="x1">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="y1" class="col-sm-2 col-form-label">Y1:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="y1">
                    </div>
                </div>
            </div>
            <div class="point-input">
                <div class="form-group row">
                    <label for="x2" class="col-sm-2 col-form-label">X2:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="x2">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="y2" class="col-sm-2 col-form-label">Y2:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="y2">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                    <button class="btn btn-primary btn-block" id="add-point">Add Point</button>
                </div>
            </div>
        </div>

        <div id="solution"></div> -->
        <LineChart :chartData="data" :options="options" />
    </div>
</template>
<script>
// import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
// class Spline {
//     constructor(xs, ys) {
//         this.xs = xs;
//         this.ys = ys;
//         this.ks = this.getNaturalKs(new Float64Array(this.xs.length));
//     }
// }
export default {
    name: 'SplineChart',
    setup() {
        const data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    cubicInterpolationMode: "monotone",
                },
            ],
        };

        const options = {
            scales: {
                x: {},
                y: {},
            },
        };

        return { data, options };
    },
    components: {
        LineChart
    },
    methods: {
        // createSplineChart() {
        //   const xs = [0, 1, 1.5, 2.25];
        //   const ys = [2.0, 4.4366, 6.7134, 13.9130];
        //   const spline = new Spline(xs, ys);

        //   // Insert data
        //   for (let i = 0; i < 50; i++) {
        //     const j = i * 0.1;
        //     this.data.push([j, spline.at(j)]);
        //   }

        //   // Create data set
        //   const dataSet = anychart.data.set(this.data);

        //   // Map the data
        //   const seriesData = dataSet.mapAs({ x: 0, value: 1 });

        //   // Create a line chart
        //   const chart = anychart.line();

        //   // Create the series and name them
        //   const series = chart.line(seriesData);
        //   series.name('DATA');

        //   // Add a legend
        //   chart.title('Sample Data for Cubic Splining');

        //   // Specify where to display the chart
        //   chart.container('container');

        //   // Draw the chart
        //   chart.draw();
        // },
    },
};
</script>