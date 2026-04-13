let seconds=0;
let interval=null;

const timeInterval = document.getElementById("time");

function updateTime() {
    seconds++;

    const hrs = Math.floor(seconds/3600); // secs into hrs
    let mins = Math.floor((seconds%3600) / 60); // remaining secs into min
    let secs =seconds %60 ; //remaining secs after hrs and mins
    timeInterval.textContent =
    `${String(hrs).padStart(2,'0')}:`+ // 2 digits ex:01
    `${String(mins).padStart(2,'0')}:` +
    `${String(secs).padStart(2,'0')}:`;
}   

// for start button
const start = document.getElementById("start");
const end