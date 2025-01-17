// server-sent events 테스트용 코드
const SSE_URL = "/users/sseDemo";
let eventSrc = null;

// button event
const stopBtn = document.querySelector(".stopBtn");
const startBtn = document.querySelector(".startBtn");

stopBtn?.addEventListener("click", (e) => {
    eventSrc?.close();
    // delete eventSrc;
    console.log("closeBtn:", eventSrc);
});

startBtn?.addEventListener("click", (e) => {
    eventSrc = new EventSource(SSE_URL);
    setEventSrc(eventSrc);
});

function setEventSrc(_eventSrc) {
    _eventSrc?.onmessage = function (e) {
        const newElement = document.createElement("li");
        const eventList = document.getElementById("list");

        newElement.textContent = `msg: ${e.data}`;
        eventList.appendChild(newElement);
    };

    _eventSrc?.addEventListener("ping", (e) => {
        const newElement = document.createElement("li");
        const eventList = document.getElementById("list");

        const time = JSON.parse(e.data).time;
        newElement.textContent = `ping at ${time}`;
        eventList.appendChild(newElement);
    });

    _eventSrc?.onerror = (e) => {
        alert("eventSource faild to.");
        eventSrc?.close();
    };
}
