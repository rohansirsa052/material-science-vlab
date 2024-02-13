const charts = {};
const schema = ["loadKN", "dialReading"];

const readingData = {"extension":[0,0.22569,0.45062,0.67562,0.90037,1.12531,1.35062,1.57556,1.8005,2.02525,2.25031,2.47569,2.70062,2.92562,3.15037,3.37531,3.60062,3.82556,4.05044,4.27525,4.50031,4.72562,4.95056,5.17562,5.40031,5.62531,5.85062,6.07562,6.3005,6.52525,6.75031,6.97569,7.20062,7.42562,7.65037,7.87531,8.10062,8.32562,8.55044,8.77525,9.00031,9.22562,9.45062,9.67562,9.90031,10.12531,10.35062,10.57556,10.80044,11.02525,11.25031,11.47569,11.70062,11.92562,12.15037,12.37531,12.60062,12.82562,13.05044,13.27525,13.50031,13.72562,13.95062,14.17562,14.40037,14.62531,14.85062,15.07562,15.30044,15.52525,15.75031,15.97562,16.20056,16.42562,16.65031,16.87531,17.10062,17.32562,17.55043,17.77531,18.00031,18.22562,18.45062,18.67569,18.90037,19.12531,19.35062,19.51719,19.70606,19.77956],"load":[0,455.28766,641.08826,760.81116,854.06256,931.67944,995.89362,1048.53979,1091.7959,1127.23572,1160.74109,1190.36414,1216.45044,1238.58215,1256.15601,1275.87048,1294.84363,1310.23877,1323.28027,1334.08423,1347.948,1360.80835,1372.59521,1381.54297,1388.50562,1398.81812,1408.92383,1416.47937,1422.3623,1427.06274,1435.16821,1442.42444,1449.15149,1453.40723,1455.50269,1461.85205,1468.18042,1472.26782,1473.95935,1475.55383,1480.88586,1484.79272,1489.12439,1490.13586,1490.3938,1493.97363,1497.82153,1498.90552,1498.72046,1498.58081,1501.25916,1503.8894,1505.27869,1504.82788,1502.68286,1505.02527,1506.75061,1506.52478,1504.65027,1502.8075,1503.71777,1504.20874,1504.40576,1502.40833,1499.57214,1500.19812,1500.51941,1498.90259,1495.52612,1492.5365,1492.18286,1491.39612,1490.1366,1486.82996,1482.21399,1481.26904,1479.12866,1473.96387,1465.86194,1454.21619,1439.27356,1415.46167,1381.50049,1333.29065,1267.43799,1184.80859,1073.39746,961.29913,672.08112,301.42917],"strain":[0,0.007523,0.015021,0.022521,0.030012,0.03751,0.045021,0.052519,0.060017,0.067508,0.07501,0.082523,0.090021,0.097521,0.105012,0.11251,0.120021,0.127519,0.135015,0.142508,0.15001,0.157521,0.165019,0.172521,0.18001,0.18751,0.195021,0.202521,0.210017,0.217508,0.22501,0.232523,0.240021,0.247521,0.255012,0.26251,0.270021,0.277521,0.285015,0.292508,0.30001,0.307521,0.315021,0.322521,0.33001,0.33751,0.345021,0.352519,0.360015,0.367508,0.37501,0.382523,0.390021,0.397521,0.405012,0.41251,0.420021,0.427521,0.435015,0.442508,0.45001,0.457521,0.465021,0.472521,0.480012,0.48751,0.495021,0.502521,0.510015,0.517508,0.52501,0.532521,0.540019,0.547521,0.55501,0.56251,0.570021,0.577521,0.585014,0.59251,0.60001,0.607521,0.615021,0.622523,0.630012,0.63751,0.645021,0.650573,0.656869,0.659319],"stress":[0,23.712899,33.390014,39.625581,44.482425,48.524971,51.869459,54.611447,56.86437,58.710194,60.455265,61.998132,63.356794,64.509487,65.424792,66.451588,67.439772,68.241603,68.920847,69.483554,70.205625,70.875435,71.489334,71.955363,72.318001,72.85511,73.381449,73.774967,74.08137,74.326184,74.748344,75.126273,75.47664,75.698293,75.807432,76.138128,76.46773,76.680616,76.768716,76.851762,77.129472,77.332954,77.558562,77.611243,77.624677,77.811127,78.011538,78.067996,78.058357,78.051084,78.190581,78.327573,78.399932,78.376452,78.264732,78.386733,78.476594,78.464832,78.367202,78.271224,78.318634,78.344205,78.354467,78.250434,78.102716,78.135319,78.152053,78.067843,77.891985,77.736276,77.717857,77.676881,77.611281,77.43906,77.198645,77.149429,77.037951,76.768952,76.346976,75.740427,74.962165,73.721962,71.953151,69.442221,66.012395,61.708781,55.906118,50.067663,35.004225,15.699436]}

// polymer
const readingData2 = {"extension":[0,2.0835,4.16681,6.25019,8.3335,10.41681,12.50019,14.5835,16.66681,18.75012,20.8335,22.91687,25.00012,27.0835,29.16687,31.25018,33.3335,35.41681,37.50012,39.58349,41.66687,43.75011,45.83343,47.91687,50.00012,52.08349,54.1668,56.25011,58.33349,60.4168,62.50011,64.58349,66.6668,68.75018,70.83349,72.91686,75.00018,77.08349,79.16686,81.25018,83.33349,85.4168,87.50011,89.58348,91.66686,93.75011,95.83348,97.91686,100.00011,102.08342,104.16686,106.25011,108.33349,110.41679,112.50018,114.58349,116.66679,118.75011,120.83343,122.9168,125.00011,127.08348,129.16679,131.05429,131.10442],"load":[0,486.26392,540.26788,532.86176,522.41602,512.23303,501.19278,488.70087,475.37576,461.37039,447.39066,436.16266,431.00906,428.49155,429.9014,431.74591,432.85849,434.74594,436.78003,438.61295,440.24075,442.83234,444.94803,446.32031,447.65649,448.72543,451.0235,453.56372,455.09399,457.04083,458.09326,459.34674,461.35983,462.97229,464.55829,465.93314,467.30582,468.83813,469.37955,469.3931,471.57202,471.048,471.72388,472.36475,474.29428,475.02005,476.07306,477.38644,478.57901,480.11014,481.9801,483.85611,485.80676,488.42166,490.6543,493.15378,495.80676,498.95142,501.69043,504.99329,508.03311,509.55359,496.83997,312.03781,99.99374],"strain":[0,0.10418,0.20834,0.31251,0.41668,0.52084,0.62501,0.72918,0.83334,0.93751,1.04168,1.14584,1.25001,1.35418,1.45834,1.56251,1.66668,1.77084,1.87501,1.97917,2.08334,2.18751,2.29167,2.39584,2.50001,2.60417,2.70834,2.81251,2.91667,3.02084,3.12501,3.22917,3.33334,3.43751,3.54167,3.64584,3.75001,3.85417,3.95834,4.06251,4.16667,4.27084,4.37501,4.47917,4.58334,4.68751,4.79167,4.89584,5.00001,5.10417,5.20834,5.31251,5.41667,5.52084,5.62501,5.72917,5.83334,5.93751,6.04167,6.14584,6.25001,6.35417,6.45834,6.55271,6.55522],"stress":[0,17.36657,19.29528,19.03078,18.65772,18.29404,17.89974,17.4536,16.97771,16.47751,15.97824,15.57724,15.39318,15.30327,15.35362,15.4195,15.45923,15.52664,15.59929,15.66475,15.72288,15.81544,15.891,15.94001,15.98773,16.02591,16.10798,16.1987,16.25336,16.32289,16.36047,16.40524,16.47714,16.53472,16.59137,16.64047,16.68949,16.74422,16.76356,16.76404,16.84186,16.82314,16.84728,16.87017,16.93908,16.965,17.00261,17.04952,17.09211,17.14679,17.21358,17.28058,17.35024,17.44363,17.52337,17.61264,17.70738,17.81969,17.91752,18.03547,18.14404,18.19834,17.74428,11.14421,3.57121]};

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
  }, 1500);
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

  if (len < 34 || len > 36) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 34 to 36 mm)");
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

  if (len < 3 || len > 3.5) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 3 to 3.5 mm)");
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
      labels: readingData.extension,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Extension in mm",
    "Load in N"
  );
  
  plotGraph(
    document.getElementById("outputGraphB").getContext("2d"),
    {
      labels: readingData2.extension,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Extension in mm",
    "Load in N"
  );

  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");

  let sampleNo = 1;
  document.getElementById("nextSample").addEventListener("click", function () {
    utm.destory();
    utm.init();
    utm.loadSample1();
    sampleNo = 2;
    document.getElementById("startTest").disabled = false;
    document.getElementById("nextSample").disabled = true;
  });

  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    let tableBody = document.getElementById("testData");
    let tableBody2 = document.getElementById("testData2");
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    utm.setConfig({
      yield_point: 10, // no yield point
      breaking_point: 0.65,
      finish_point: 0.7,
    });

    let timeout = 4000;
    if(sampleNo == 2) {
      timeout = 1000;
    } 

    setTimeout(() => {
      utm.start(0.015, 1);
    }, timeout);

    let intr = setInterval(() => {
      if(sampleNo == 1) {
        if (currPos >= readingData.extension.length) {
          clearInterval(intr);
          document.getElementById("startTest").disabled = true;
          document.getElementById("nextSample").disabled = false;
          document.getElementById("startTest").innerHTML = "Start Test";

          utm.stop();
          currPos = 0;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        tableBody.innerHTML += `
            <tr>
              <td>${parseFloat(readingData.extension[currPos]).toFixed(2)}</td>
              <td>${parseFloat(readingData.load[currPos]).toFixed(1)}</td>
              <td>${parseFloat(readingData.strain[currPos]).toFixed(2)}</td>
              <td>${parseFloat(readingData.stress[currPos]).toFixed(1)}</td>
            </tr>
          `;
        currPos++;

        let progress1 = (readingData.load.length / readingData.extension.length) * currPos;
        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          {
            labels: readingData.extension,
            datasets: [
              {
                data: readingData.load.slice(0, progress1),
                borderColor: "#3e95cd",
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 2
              },
            ],
          },
          "Extension in mm",
          "Load in N"
        );
      }

      if(sampleNo == 2) {
        if (currPos >= readingData2.extension.length) {
          clearInterval(intr);
          document.getElementById("startTest").disabled = false;
          document.getElementById("startTest").innerHTML = "Done";
          document.getElementById("showGraphBtn").disabled = false;
          // utm.stop();
          document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        tableBody2.innerHTML += `
            <tr>
              <td>${parseFloat(readingData2.extension[currPos]).toFixed(2)}</td>
              <td>${parseFloat(readingData2.load[currPos]).toFixed(1)}</td>
              <td>${parseFloat(readingData2.strain[currPos]).toFixed(2)}</td>
              <td>${parseFloat(readingData2.stress[currPos]).toFixed(1)}</td>
            </tr>
          `;
        currPos++;

        let progress2 = (readingData2.load.length / readingData2.extension.length) * currPos;
        plotGraph(
          document.getElementById("outputGraphB").getContext("2d"),
          {
            labels: readingData.extension,
            datasets: [
              {
                data: readingData2.load.slice(0, progress2),
                borderColor: "#3e95cd",
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 2
              },
            ],
          },
          "Extension in mm",
          "Load in N"
        );
      }

      // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 200);
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

  currentStepProgress = 5;
}

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step6");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 6;

  if (vc) vc.init();
  if (utm) utm.destory();
  if (sample1) sample1.init();

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "What does point A indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Yield Strength", "Tensile Strength", "Plastic Strength", "Ultimate Tensile Strength"],
        correct: 0,
      },
      {
        page: 2,
        title: "What does point U indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Tensile Strength", "Yield Strength", "Ultimate Tensile Strength", "Plastic Strength"],
        correct: 2,
      },
      {
        page: 3,
        title: "What does point F indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Tensile Strength", "Facture Point", "Ultimate Tensile Strength", "Plastic Strength"],
        correct: 1,
      },
      {
        page: 4,
        title: "For which of the following stress-strain curve is linear till fracture?",
        options: ["Metal", "Ceramic", "Thermoplastic polymer", "All of the above"],
        correct: 1,
      },
    ],
    onClose: handleStep6,
  });
  modal.show();
}


function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  // let next = document.getElementById("step8");
  // next.classList.add("active");
  // next.classList.remove("disabled");

  //last
  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");
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
        legend: { display: false },
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
                callback: function (value, index, values) {
                  return parseFloat(value).toFixed(2);
                },
                max: 5,
              },
              stacked: true,
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
                callback: function (value, index, values) {
                  return parseFloat(value).toFixed(0);
                },
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
    title: "Stree Strain Curve",
    body: [
      {
        page: 1,
        title: "Stress Strain Curve for Metal",
        image: "images/stress-strain-metal.jpg",
      },
      {
        page: 2,
        title: "Stress Strain Curve for Polymer",
        image: "images/stress-strain-curve-polymer.jpg",
      },
    ],
  });
  graphModal.show();
}
