console.log("init q1");

const refreshInterval = 250;
const maxSpeed = 10;
const drainRate = 0.1;
class Smart_Fan {
  static lastId;
  constructor() {
    let lastId = Smart_Fan.lastId;
    if (lastId == undefined || lastId == null) {
      Smart_Fan.lastId = 0;
    }
    this.Id = Smart_Fan.lastId++;
    this.fanStats = {
      speed: 0,
      isRunning: false,
      wifiConnection: false,
      runningMeter: 0,
      //millis for timer
      timerLeft: 0,
      batteryStats: {
        level: 60,
        chargingCycles: 0,
        //millis for one percent more charge
        chargeRate: 500,
      },
      fanLog: [],
    };
    this.runningInterval = null;
  }

  updateStats = () => {
    // if (this.fanStats.isRunning) {
    //   let lastTick = this.getLastEvent("tick");
    //   if (lastTick) {
    //     let accumulatedTime = window.performance.now() - lastTick.time;
    //     this.fanStats.runningMeter += accumulatedTime;
    //   }
    // } else {
    // }
  };
  getLastTime = () => {
    let firstTick = this.getLastEvent("on").time;
    let lastTick = this.getLastEvent("off").time;
    return lastTick - firstTick;
  };
  getLastEvent = (event) => {
    let logArray = this.fanStats.fanLog;
    for (let i = logArray.length - 1; i >= 0; i--) {
      let current = logArray[i];
      if (current.event == event) {
        return current;
      }
    }
    return "no event found";
  };
  consumeBattery = () => {
    let level = this.fanStats.batteryStats.level;
    if (level <= 0) {
      this.setOff();
      this.fanStats.fanLog.push({
        event: "batLow",
        time: window.performance.now(),
      });
    } else {
      this.fanStats.batteryStats.level -= drainRate;
    }
  };
  setOn = () => {
    console.log("fan on");
    this.fanStats.isRunning = true;
    this.fanStats.speed = 10;
    this.fanStats.fanLog.push({ event: "on", time: window.performance.now() });
    if (this.runningInterval == null) {
      this.runningInterval = setInterval(() => {
        let thisTick = {
          event: "tick",
          time: window.performance.now(),
        };
        this.fanStats.fanLog.push(thisTick);
        this.consumeBattery();
        // this.updateStats();
      }, refreshInterval);
    }
  };
  setOff = () => {
    console.log("fan off");
    this.fanStats.isRunning = false;
    this.fanStats.speed = 0;
    clearInterval(this.runningInterval);
    this.fanStats.fanLog.push({ event: "off", time: window.performance.now() });
    this.fanStats.runningMeter += this.getLastTime();
  };
  getRunning = (duration) => {
    return this.fanStats.runningMeter / 1000 / 60;
  };
  toHTML = () => {
    let cover = document.createElement("div");
    let line = document.createElement("p");
    line.innerHTML = `Fan ID: ${this.Id}`;
    let stats = document.createElement("p");
    let statsString =
      "Status: Fan is " +
      (this.fanStats.isRunning ? "On" : "Off") +
      "WiFi: Fan is " +
      (this.fanStats.wifiConnection ? "" : "Not") +
      " connected" +
      `Speed: ${this.fanStats.speed}
    Running Total: ${this.getRunning()} mins
    Timer: ${this.fanStats.timerLeft / 1000 / 60} mins
    Bat Lvl: ${this.fanStats.batteryStats.level} %`;
    stats.innerHTML = statsString;
    let offButton = document.createElement("button");
    offButton.onclick = this.setOff;
    offButton.innerHTML = "Turn Off";
    let onButton = document.createElement("button");
    onButton.onclick = this.setOff;
    onButton.innerHTML = "Turn On";
    cover.append(line);
    cover.append(stats);
    cover.append(onButton);
    cover.append(offButton);
    return cover;
  };
}
// repaint = function (el) {
//   console.log(el);
// };
let fans = [];
let fanCount = 10;
for (let i = 0; i < fanCount; i++) {
  let x = new Smart_Fan();
  Math.random() < 0.2 ? x.setOn() : x.setOff();
  fans.push(x);
}
let container = document.querySelector(".q1");
showFans = () => {
  for (let i = 0; i < fanCount; i++) {
    let x = fans[i];
    container.append(x.toHTML());
  }
};
showFans();
