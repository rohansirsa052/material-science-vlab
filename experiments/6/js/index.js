const charts = {};
const schema = ["elongation", "time"];
const readingData1 = [
  [0, 0.38],
  [3, 0.45],
  [9, 0.5],
  [15, 0.52],
  [21, 0.53],
  [27, 0.56],
  [33, 0.58],
  [39, 0.59],
  [45, 0.61],
  [50, 0.62],
  [56, 0.64],
  [62, 0.65],
  [68, 0.66],
  [75, 0.67],
  [80, 0.69],
  [86, 0.7],
  [92, 0.72],
  [98, 0.74],
  [104, 0.76],
  [110, 0.8],
  [116, 0.86],
  [119, 0.9],
  [121, 0.96],
  [123, 1.03],
  [126, 1.04],
  [128, 1.33],
];

const readingData2 = [
  [0, 0.41],
  [5, 0.5],
  [10, 0.57],
  [16, 0.61],
  [22, 0.65],
  [28, 0.68],
  [34, 0.71],
  [40, 0.75],
  [45, 0.79],
  [51, 0.83],
  [58, 0.86],
  [63, 0.9],
  [70, 0.94],
  [75, 0.98],
  [81, 1.03],
  [87, 1.1],
  [89, 1.1],
  [94, 1.21],
  [97, 1.24],
  [100, 1.28],
  [103, 1.38],
];
const readingData3 = [
  [0, 0.87],
  [0.5, 0.75],
  [1, 0.92],
  [1.5, 0.83],
  [1.6, 1.01],
  [3.5, 1.06],
  [5.39, 1.11],
  [7, 1.15],
  [9, 1.19],
  [10, 1.23],
  [12, 1.31],
  [14, 1.36],
  [15, 1.45],
  [16, 1.59],
];

// x axis
const time1 = [
  0.01, 0.89, 3.37, 6.07, 9.19, 12.17, 15.15, 18.12, 21.1, 24.08, 27.05, 30.03, 33.01, 35.98, 38.96, 41.94, 44.91,
  47.89, 50.87, 53.84, 56.82, 59.8, 62.77, 65.75, 68.73, 71.7, 74.68, 77.66, 80.63, 83.61, 86.59, 89.56, 92.54, 95.52,
  98.49, 101.47, 104.45, 107.42, 110.33, 113.58, 116.15, 118.5, 119.4, 121.14, 121.48, 123.84, 123.84, 126.73, 126.23,
  127.4, 128.95,
];
// y axis
const elongation1 = [
  0.38, 0.43, 0.45, 0.48, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.58, 0.59, 0.6, 0.61, 0.62, 0.62, 0.63,
  0.64, 0.64, 0.65, 0.66, 0.66, 0.68, 0.67, 0.68, 0.69, 0.7, 0.7, 0.71, 0.72, 0.73, 0.74, 0.74, 0.76, 0.78, 0.8, 0.83,
  0.86, 0.9, 0.9, 0.94, 0.96, 1.03, 1.03, 1.1, 1.04, 1.16, 1.33,
];

const time2 = [
  0.01, 2.71, 4.94, 7.13, 10.16, 13.16, 16.27, 19.12, 22.09, 25.07, 28.05, 31.02, 34.0, 36.97, 39.9, 42.93, 45.84,
  48.88, 51.86, 54.93, 57.81, 60.79, 63.76, 66.93, 69.65, 72.69, 75.73, 78.78, 81.45, 84.6, 87.18, 89.71, 89.89, 92.54,
  94.78, 95.52, 97.62, 97.83, 99.99, 101.29, 102.7, 104.03,
];

const elongation2 = [
  0.41, 0.45, 0.5, 0.54, 0.57, 0.6, 0.61, 0.63, 0.65, 0.67, 0.68, 0.7, 0.71, 0.73, 0.75, 0.78, 0.79, 0.81, 0.83, 0.84,
  0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.01, 1.03, 1.06, 1.1, 1.14, 1.1, 1.16, 1.21, 1.18, 1.24, 1.19, 1.28, 1.32,
  1.38, 1.45,
];

const time3 = [
  0.01, 0.02, 0.03, 1.12, 1.3, 1.61, 1.52, 3.57, 5.39, 7.21, 9.16, 10.7, 12.48, 12.17, 13.91, 15.08, 14.55, 15.81,
  14.82, 16.13,
];

const elongation3 = [
  0.87, 0.78, 0.75, 0.92, 0.83, 1.01, 0.97, 1.06, 1.11, 1.15, 1.18, 1.24, 1.31, 1.27, 1.36, 1.45, 1.4, 1.53, 1.49, 1.59,
];

var currPos = 0;

var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

window.addEventListener("load", function () {
  setTimeout(() => {
    if (vc) vc.init();
    if (sample1) sample1.init();
    //utm.init();
  }, 1000);
});

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  let len = document.getElementById("step1Length").value;
  if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 48 || len > 53) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 48 to 53 mm)");
    return;
  }

  sampleLength = len;

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");
  let len = document.getElementById("step2Dia").value;
  if (!len) {
    alert("Please enter the diameter in step 2.");
    return;
  }

  if (len < 8 || len > 10) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 8 to 10 mm)");
    return;
  }

  sampleDiameter = len;

  if (vc) vc.destory();
  if (utm) utm.init();
  if (sample1) sample1.init();

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;
}

function handleStep3() {
  let pane = document.getElementById("step3");

  if (!utm || !utm.isActive()) {
    alert("Please take UTM machine from menu first!");
    return;
  }

  if (!utm.isSampleLoaded()) {
    alert("Please load the sample on the UTM machine first!");
    return;
  }

  //plot blank graph
  plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: time1,
      datasets: [
        {
          data: [],
          borderColor: "#000",
          fill: false,
          label: "Test 1",
        },
      ],
    },
    "Time in hrs",
    "Elongation (ΔL)"
  );

  document.getElementById("btnNext").disabled = true;

  let isFirstDone = false;
  let isSecondDone = false;

  document.getElementById("changeSample").addEventListener("click", () => {
    document.getElementById("startTest").disabled = false;
    document.getElementById("changeSample").disabled = true;
  });

  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    if (isFirstDone == false) {
      let intr1 = setInterval(() => {
        if (currPos >= readingData1.length) {
          clearInterval(intr1);
          isFirstDone = true;
          currPos = 0;
          document.getElementById("startTest").innerHTML = "Start Test";
          document.getElementById("changeSample").disabled = false;
          // document.getElementById("startTest").disabled = false;
          // document.getElementById("startTest").innerHTML = "Done";
          // document.getElementById("showGraphBtn").disabled = false;
          // utm.stop();
          // document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        const tableData1 = readingData1; // Change to the appropriate data array for Table 1 (readingData1, readingData2, or readingData3)

        const tableBody1 = document.getElementById("testData1");

        tableBody1.innerHTML += `
        <tr>
          <td>${tableData1[currPos][0]}</td>
          <td>${tableData1[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (elongation1.length / tableData1.length) * currPos;

        const chart1Data = {
          labels: time1,
          datasets: [
            {
              data: elongation1.slice(0, progress1),
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
          ],
        };

        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 500);
    }

    if (isFirstDone && isSecondDone == false) {
      let intr2 = setInterval(() => {
        if (!isFirstDone) return;

        if (currPos >= readingData2.length) {
          clearInterval(intr2);
          isSecondDone = true;
          currPos = 0;
          document.getElementById("startTest").innerHTML = "Start Test";
          document.getElementById("changeSample").disabled = false;
          // document.getElementById("startTest").disabled = false;
          // document.getElementById("startTest").innerHTML = "Done";
          // document.getElementById("showGraphBtn").disabled = false;
          // utm.stop();
          // document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        const tableData2 = readingData2; // Change to the appropriate data array for Table 2 (readingData1, readingData2, or readingData3)

        const tableBody2 = document.getElementById("testData2"); // Change to the appropriate table body ID for Table 2 (testData1

        tableBody2.innerHTML += `
        <tr>
          <td>${tableData2[currPos][0]}</td>
          <td>${tableData2[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (elongation2.length / tableData2.length) * currPos;

        const chart1Data = {
          labels: time1,
          datasets: [
            {
              data: elongation1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: elongation2.slice(0, progress1),
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
          ],
        };
        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 500);
    }

    if (isFirstDone && isSecondDone) {
      let intr3 = setInterval(() => {
        if (!isSecondDone) return;

        if (currPos >= readingData3.length) {
          clearInterval(intr3);
          document.getElementById("startTest").disabled = false;
          document.getElementById("startTest").innerHTML = "Done";
          // document.getElementById("showGraphBtn").disabled = false;
          utm.stop();
          document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        const tableData3 = readingData3; // Change to the appropriate data array for Table 3 (readingData1, readingData2, or readingData3)

        const tableBody3 = document.getElementById("testData3"); // Change to the appropriate table body ID for Table 3 (testData1, testData2, or testData3)

        tableBody3.innerHTML += `
        <tr>
          <td>${tableData3[currPos][0]}</td>
          <td>${tableData3[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (elongation3.length / tableData3.length) * currPos;

        const chart1Data = {
          labels: time1,
          datasets: [
            {
              data: elongation1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: elongation2,
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
            {
              data: elongation3.slice(0, progress1),
              borderColor: "#3e95cd", // Choose a different color
              fill: false,
              label: "Test 3",
            },
          ],
        };
        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 500);
    }
  });

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step4");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 4;
}

function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step5");
  next.classList.add("active");
  next.classList.remove("disabled");
  utm.destory();
  currentStepProgress = 5;
}

// function handleStep5() {
//   let pane = document.getElementById("step5");

//   pane.classList.add("done");
//   pane.classList.remove("active");

//   let next = document.getElementById("step6");
//   next.classList.add("active");
//   next.classList.remove("disabled");

//   currentStepProgress = 6;

//   if (vc) vc.init();
//   if (utm) utm.destory();
//   if (sample1) sample1.init();
// }

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step6");
  next.classList.add("active");
  next.classList.remove("disabled");

  let btn = document.getElementById("btnNext");
  btn.disabled = true;
  btn.innerHTML = "Finished";

  currentStepProgress = 5;

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "Creep depends on temperature?",
        //image: "images/creep test curve.png",
        options: ["True", "False"],
        correct: 0,
      },
      {
        page: 2,
        title: "In which of the stages, do we observe a constant deformation rate?",
        //image: "images/creep test curve.png",
        options: ["Transient creep stage", "Constant creep stage", "Fracture stage", "Steady stage creep stage"],
        correct: 3,
      },
      {
        page: 3,
        title: "In which of the following stages do the deformation rate increases and causes failure?",
        //image: "images/creep test curve.png",
        options: ["Transient creep stage", "Constant creep stage", "Fracture stage", "Steady stage creep stage"],
        correct: 2,
      },
      {
        page: 4,
        title: "Which of the following is true for Creep Test?",
        options: [
          "The slope of the strain-time graph increases with temperature and stress",
          "The slope of strain-time graph decreases with temperature",
          "The slope of strain-time graph decreases with stress",
          "The slope of strain-time graph does not depend on temperature or stress",
        ],
        correct: 0,
      },
    ],
    onClose: () => {
      let pane = document.getElementById("step6");
      pane.classList.add("done");
      pane.classList.remove("active");
    },
  });
  modal.show();
}

function plotGraph(graphCtx, data, labelX, labelY) {
  let chartObj = charts[graphCtx.canvas.id];
  if (chartObj) {
    chartObj.config.data.labels = data.labels;
    chartObj.config.data.datasets = data.datasets;
    chartObj.update();
  } else {
    charts[graphCtx.canvas.id] = new Chart(graphCtx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        animation: false,
        scaleOverride: true,
        // legend: { display: false },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelX,
              },
              ticks: {
                beginAtZero: true,
                steps: 20,
                stepValue: 10,
                // max: Math.max(...time1),
                callback: function (label, index, labels) {
                  const n = Number(label);
                  return isNaN(n) ? label : Math.round(n);
                },
              },
              // stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                // max: Math.max(...elongation1),
              },
            },
          ],
        },
      },
    });
  }
}

function showGraph() {
  graphModal = new Modal({
    title: "Creep Test Curve",
    body: [
      {
        page: 1,
        title: "Creep Test Curve",
        image: "images/img/results.jpeg",
      },
    ],
  });
  graphModal.show();
}
