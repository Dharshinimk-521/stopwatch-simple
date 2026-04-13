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
    `${String(secs).padStart(2,'0')}`;
}   

// for start button
const start = document.getElementById("start");
const stops = document.getElementById("stop");
const reset = document.getElementById("reset");

//start button
start.addEventListener("click", () => {
    if(!interval){
        interval=setInterval(updateTime,1000); //runs updatetimeevery 1 sec=1000ms
    }
});
//stop button
stops.addEventListener("click" ,() => {
    clearInterval(interval);
    //stops timer;
    interval=null; //resets to null
});
//reset button
reset.addEventListener("click", () => {
    clearInterval(interval);
    interval=null;
    seconds=0;
    timeInterval.textContent= "00:00:00"; //reset UI
});