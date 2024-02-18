const charts = {};
const schema = ["extensionInMM", "loadInN", "strain", "stess"];
const readingData = {
  extension: [
    0, 0.04637, 0.09194, 0.13806, 0.18381, 0.22956, 0.27544, 0.32119, 0.36737, 0.41275, 0.45894, 0.50469, 0.55025,
    0.59637, 0.64212, 0.688, 0.73375, 0.77969, 0.82556, 0.87112, 0.91719, 0.96306, 1.00856, 1.05475, 1.1005, 1.14625,
    1.19212, 1.238, 1.284, 1.32944, 1.37562, 1.42137, 1.46694, 1.51306, 1.55881, 1.60469, 1.65037, 1.69631, 1.74219,
    1.78781, 1.83381, 1.87975, 1.92525, 1.97137, 2.01719, 2.06287, 2.10875, 2.15462, 2.20069, 2.24606, 2.29231, 2.33806,
    2.3835, 2.42975, 2.4755, 2.52131, 2.56706, 2.61312, 2.65887, 2.70444, 2.75056, 2.79644, 2.84194, 2.88806, 2.93387,
    2.97956, 3.02544, 3.07119, 3.11737, 3.16275, 3.20894, 3.25475, 3.30031, 3.34637, 3.39212, 3.438, 3.48369, 3.52969,
    3.5755, 3.62112, 3.66719, 3.71306, 3.75856, 3.80469, 3.8505, 3.89619, 3.94212, 3.988, 4.034, 4.07944, 4.12562,
    4.16769, 4.376, 4.58425, 4.79269, 5.001, 5.20931, 5.41769, 5.626, 5.83425,
  ],
  load: [
    0, 1845.00891, 2183.43201, 2188.04639, 2177.85205, 2176.03711, 2180.1167, 2214.92639, 2235.85229, 2263.21606,
    2282.37244, 2310.58289, 2329.98364, 2348.0127, 2370.8717, 2388.5022, 2410.55774, 2427.20105, 2439.62585, 2458.49756,
    2470.33447, 2487.90918, 2498.29468, 2504.2688, 2519.02185, 2524.71655, 2538.1709, 2544.70728, 2550.63672,
    2560.74011, 2564.45825, 2575.61963, 2581.2345, 2579.93408, 2589.38843, 2591.14917, 2599.29138, 2601.54053,
    2603.07263, 2611.15234, 2610.43958, 2618.85791, 2619.68677, 2618.50476, 2623.25244, 2623.24927, 2628.88879,
    2630.09619, 2628.40063, 2634.25964, 2633.06763, 2638.88831, 2638.40601, 2634.23108, 2639.24792, 2636.13867,
    2640.68237, 2639.30603, 2637.5321, 2640.46375, 2637.49683, 2641.20557, 2639.95605, 2632.54797, 2635.50183,
    2630.18042, 2630.84961, 2625.6134, 2618.14355, 2615.76465, 2602.07739, 2594.31421, 2574.93115, 2549.61816,
    2526.25696, 2493.52893, 2461.9303, 2420.58386, 2369.38721, 2317.672, 2245.84668, 2161.44836, 2030.38037, 1221.51056,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  strain: [
    0, 0.0018548, 0.0036776, 0.0055224, 0.0073524, 0.0091824, 0.0110176, 0.0128476, 0.0146948, 0.01651, 0.0183576,
    0.0201876, 0.02201, 0.0238548, 0.0256848, 0.02752, 0.02935, 0.0311876, 0.0330224, 0.0348448, 0.0366876, 0.0385224,
    0.0403424, 0.04219, 0.04402, 0.04585, 0.0476848, 0.04952, 0.05136, 0.0531776, 0.0550248, 0.0568548, 0.0586776,
    0.0605224, 0.0623524, 0.0641876, 0.0660148, 0.0678524, 0.0696876, 0.0715124, 0.0733524, 0.07519, 0.07701, 0.0788548,
    0.0806876, 0.0825148, 0.08435, 0.0861848, 0.0880276, 0.0898424, 0.0916924, 0.0935224, 0.09534, 0.09719, 0.09902,
    0.1008524, 0.1026824, 0.1045248, 0.1063548, 0.1081776, 0.1100224, 0.1118576, 0.1136776, 0.1155224, 0.1173548,
    0.1191824, 0.1210176, 0.1228476, 0.1246948, 0.12651, 0.1283576, 0.13019, 0.1320124, 0.1338548, 0.1356848, 0.13752,
    0.1393476, 0.1411876, 0.14302, 0.1448448, 0.1466876, 0.1485224, 0.1503424, 0.1521876, 0.15402, 0.1558476, 0.1576848,
    0.15952, 0.16136, 0.1631776, 0.1650248, 0.1667076, 0.17504, 0.18337, 0.1917076, 0.20004, 0.2083724, 0.2167076,
    0.22504, 0.23337,
  ],
  stress: [
    0, 230.6261138, 272.9290013, 273.5057988, 272.2315063, 272.0046388, 272.5145875, 276.8657988, 279.4815363,
    282.9020075, 285.296555, 288.8228613, 291.247955, 293.5015875, 296.3589625, 298.562775, 301.3197175, 303.4001313,
    304.9532313, 307.312195, 308.7918088, 310.9886475, 312.286835, 313.0336, 314.8777313, 315.5895688, 317.2713625,
    318.08841, 318.82959, 320.0925138, 320.5572813, 321.9524538, 322.6543125, 322.49176, 323.6735538, 323.8936463,
    324.9114225, 325.1925663, 325.3840788, 326.3940425, 326.3049475, 327.3572388, 327.4608463, 327.313095, 327.906555,
    327.9061588, 328.6110988, 328.7620238, 328.5500788, 329.282455, 329.1334538, 329.8610388, 329.8007513, 329.278885,
    329.90599, 329.5173338, 330.0852963, 329.9132538, 329.6915125, 330.0579688, 329.6871038, 330.1506963, 329.9945063,
    329.0684963, 329.4377288, 328.7725525, 328.8562013, 328.201675, 327.2679438, 326.9705813, 325.2596738, 324.2892763,
    321.8663938, 318.70227, 315.78212, 311.6911163, 307.7412875, 302.5729825, 296.1734013, 289.709, 280.730835,
    270.181045, 253.7975463, 152.68882, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
};

var currPos = 0;

var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

window.addEventListener("load", function () {
  setTimeout(() => {
    if (vc) vc.init();
    if (sample1) sample1.init();
  }, 1000);
});

function handleStep1() {
  let pane = document.getElementById("step1");
  let len = document.getElementById("step1Length").value;
  if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 24 || len > 26) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 24 to 26 mm)");
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

  if (len < 5 || len > 6) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 5 to 6 mm)");
    return;
  }

  sampleDiameter = len;

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;

  if (vc) vc.destory();
  if (utm) utm.init();
  if (sample1) sample1.init();
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
      labels: readingData.strain,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Strain",
    "Stress"
  );

  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");

  document.getElementById("startTest").addEventListener("click", (e) => {
    let tableBody = document.getElementById("testData");
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    setTimeout(() => {
      utm.start(0.05, 1);
    }, 1200);

    let intr = setInterval(() => {
      if (currPos >= readingData.extension.length) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        utm.stop();
        document.getElementById("btnNext").disabled = false;
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
              pointHoverRadius: 2,
            },
          ],
        },
        "Extension in mm",
        "Load in N"
      );

      let progress2 = (readingData.stress.length / readingData.extension.length) * currPos;

      plotGraph(
        document.getElementById("outputGraphB").getContext("2d"),
        {
          labels: readingData.strain,
          datasets: [
            {
              data: readingData.stress.slice(0, progress2),
              borderColor: "#3e95cd",
              fill: false,
              pointRadius: 0,
              pointHoverRadius: 2,
            },
          ],
        },
        "Strain",
        "Stress"
      );
      document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
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

  if (vc) vc.init();
  if (utm) utm.destory();
  if (sample1) sample1.init();

  //last
  // document.getElementById("arrowNext").classList.add("disabled");
  document.querySelector("#step5 .content").innerHTML = `
    <table>
      <tr>
        <td>Lower yield Stress (MPa)</td>
        <td>272.50</td>
      </tr>
      <tr>
        <td>Upper yield Stress (MPa)</td>
        <td>274.69</td>
      </tr>
      <tr>
        <td>UTS (MPa)</td>
        <td>324.23</td>
      </tr>
      <tr>
        <td>Fracture elongation (%)</td>
        <td>15.20</td>
      </tr>
    </table>
  `;
}

function handleStep5() {
  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        "page": 1,
        "title": "What does the acronym UTM stand for?",
        "options": ["Universal Tensile Machine", "Uniaxial Testing Machine", "Universal Testing Machine", "Uniaxial Tensile Machine"],
        "correct": 2
      },
      {
        "page": 2,
        "title": "UTM cannot be used for this test",
        "options": ["Tensile Testing", "Compression Testing", "Impact Testing", "Bend/ Flexural Testing"],
        "correct": 2
      },
      {
        "page": 3,
        "title": "Which of these describes Hooke’s Law?",
        "options": ["Necking begins at maximum load", "Deformation is proportional to load", "Yield strength increases with increasing strain", "Stress at which plastic deformation begins"],
        "correct": 1
      },
      {
        "page": 4,
        "title": "Strain is a measurement of",
        "options": ["Extent of load applied on the sample", "Load bearing capacity of the sample", "Rigidity of the sample", "Extent of deformation in the sample"],
        "correct": 3
      },
      {
        "page": 5,
        "title": "Which of the following is not a component of the UTM",
        "options": ["Thermocouple", "Load Cell", "Load frame", "Crosshead"],
        "correct": 0
      },
      {
        "page": 6,
        "title": "If the maximum load during tensile test is 100 N and the original cross sectional area of the sample is 1 mm2, then the maximum engineering stress is:",
        "options": ["100 MPa", "10 MPa", "1 MPa", "0.1 MPa"],
        "correct": 0
      },
      {
        "page": 7,
        "title": "If the engineering stress at a given point in stress-strain curve is 100 MPa and the engineering strain is 0.1, then the true stress at that point is:",
        "options": ["101 MPa", "100 MPa", "100.1 MPa", "110 MPa"],
        "correct": 3
      },
      {
        "page": 8,
        "title": "It is given that a sample of cross sectional area 100 mm2, is reduced to 45 mm2 at fracture, calculate the percentage reduction in area.",
        "options": ["45", "55", "25", "75"],
        "correct": 1
      },
      {
        "page": 9,
        "title": "Which of the following is TRUE for tensile testing of medium carbon steel?",
        "options": ["It does not show UTS", "It does not show failure", "It shows abrupt transition from elastic to plastic region", "It shows brittle behavior"],
        "correct": 2
      },
      {
        "page": 10,
        "title": "Which of the following points are not observed during tensile testing of medium carbon steel?",
        "options": ["Upper yield point", "Lower yield point", "Failure", "cold drawing"],
        "correct": 2
      },
      {
        "page": 11,
        "title": "Engineering strain is given as 0.2, then the true strain at that point is:",
        "options": ["0.2", "0.18", "1.2", "Cannot be evaluated from the above data"],
        "correct": 1
      }
    ],
    onClose: () => {
      let pane = document.getElementById("step5");

      pane.classList.add("done");
      pane.classList.remove("active");

      document.getElementById("btnNext").disabled = true;
      document.getElementById("btnNext").innerText = "Done";
    },
  });
  modal.show();
}

// function handleStep5() {
//   let pane = document.getElementById("step5");
//   let len = document.getElementById("step5Length").value;
//   if (!len) {
//     alert("Please enter the length in step 5.");
//     return;
//   }

//   if (len < 27 || len > 29) {
//     alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 27 to 29mm)");
//     return;
//   }

//   sampleFinalLength = len;

//   pane.classList.add("done");
//   pane.classList.remove("active");

//   let next = document.getElementById("step6");
//   next.classList.add("active");
//   next.classList.remove("disabled");

//   currentStepProgress = 6;
// }

// function handleStep6() {
//   let pane = document.getElementById("step6");
//   let len = document.getElementById("step6Dia").value;

//   if (!len) {
//     alert("Please enter the diameter in step 6.");
//     return;
//   }

//   if (len < 4 || len > 5) {
//     alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 4 to 5mm)");
//     return;
//   }

//   sampleFinalDiameter = len;

//   pane.classList.add("done");
//   pane.classList.remove("active");

//   let next = document.getElementById("step7");
//   next.classList.add("active");
//   next.classList.remove("disabled");

//   //last
//   document.getElementById("btnNext").disabled = true;
//   // document.getElementById("arrowNext").classList.add("disabled");
//   document.querySelector("#step7 .content").innerHTML = `
//     <table>
//       <tr>
//         <td>Initial Length</td>
//         <td>${sampleLength} mm</td>
//       </tr>
//       <tr>
//         <td>Initial Diameter</td>
//         <td>${sampleDiameter} mm</td>
//       </tr>
//       <tr>
//         <td>Final Length</td>
//         <td>${sampleFinalLength} mm</td>
//       </tr>
//       <tr>
//         <td>Final Diameter</td>
//         <td>${sampleFinalDiameter} mm</td>
//       </tr>
//     </table>
//   `;
// }

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
        title: "Stress Strain Curve",
        image: "images/stress-strain-curve3.jpg",
      },
    ],
  });
  graphModal.show();
}
