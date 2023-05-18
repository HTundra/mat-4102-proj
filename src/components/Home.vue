<template>
  <div class="bg-dark">
<!-- 
    <div class="point-input" v-for="(point, index) in points" :key="index">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">{{ `X${index + 1}:` }}</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model="point.x">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">{{ `Y${index + 1}:` }}</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" v-model="point.y">
        </div>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-12">
        <button class="btn btn-primary btn-block" id="add-point" @click="addPoint">Add Point</button>
      </div>
    </div>

    <div class="solution" v-if="solution !== null">
      <h2 class="subtitle">Solution</h2>
      <p>{{ solution }}</p>
    </div> -->
    <SplineChart/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SplineChart from './SplineChart.vue';
// import {Line} from 'vue-chart-js'
export default defineComponent({
  name: 'Home',
  data() {
    return {
      points: [
        { x: null, y: null },
        { x: null, y: null }
      ],
      solution: null
    };
  },
  components:{
    SplineChart
  },
  methods: {
    addPoint() {
      this.points.push({ x: null, y: null });
    },
    calculateSolution() {
      // Perform the cubic spline interpolation calculations
      // ... (your code here) ...
      this.solution = 'Solution';
    }
  },
  mounted() {
    this.calculateSolution();
  }
});
</script>

<style scoped>

.page {
  background-color: #222
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
}

.point-input {
  margin-bottom: 20px;
}

.solution {
  margin-top: 40px;
  text-align: center;
}

.btn-block {
  width: 100%;
}

@media (max-width: 576px) {
  .container {
    padding: 40px 10px;
  }
}
</style>
