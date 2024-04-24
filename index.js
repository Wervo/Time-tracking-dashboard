const timeframeButtons = document.querySelector(".timeframe-button");
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const dataContainer = document.querySelector('.data');
const dateSpans = document.querySelectorAll('.dates span');

// JSON Data
const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

//Timeframe Dates (Daily, Weekly, and Monthly)
  function updateData(timeframe){
    dataContainer.innerHTML = "";
    data.forEach((item, index) => {
        const timeframeData = item.timeframes[timeframe];

        const titleElement = document.querySelectorAll('.title')[index];
        const currentHoursElement = document.querySelectorAll('.current-hour')[index];
        const previousHoursElement = document.querySelectorAll('.previous-hour')[index];

        titleElement.textContent = item.title;
        currentHoursElement.textContent = `${timeframeData.current}hrs`;
        previousHoursElement.textContent = `Last ${timeframe} - ${timeframeData.previous}hrs`;

    });
}

//Dates Button
dailyBtn.addEventListener("click", function() {
    updateData('daily');
});

weeklyBtn.addEventListener("click", function() {
    updateData('weekly');
});

monthlyBtn.addEventListener("click", function() {
    updateData('monthly');
});

//Dates color change
dateSpans.forEach(span => {
    span.addEventListener('click', function() {
        dateSpans.forEach(span => {
            span.classList.remove('active');
            span.classList.add('inactive');
        });

        this.classList.remove('inactive');
        this.classList.add('active');
    });
});

//Fetch
function fetchData(){
    fetch("data.json")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.error("error fetching data:", error);
    })
}

fetchData()