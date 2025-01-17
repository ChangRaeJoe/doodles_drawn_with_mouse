// server-sent events 테스트용 코드
const SSE_URL = "123.html";
const eventSrc = new EventSource(SSE_URL);

console.log(eventSrc);

eventSrc.onmessage = function (e) {
    const newElement = document.createElement("li");
    const eventList = document.getElementById("list");

    newElement.textContent = `msg: ${e.data}`;
    eventList.appendChild(newElement);
};

eventSrc.addEventListener("ping", (e) => {
    const newElement = document.createElement("li");
    const eventList = document.getElementById("list");

    const time = JSON.parse(e.data).time;
    newElement.textContent = `ping at ${time}`;
    eventList.appendChild(newElement);
});

eventSrc.onerror = (e) => {
    alert("eventSource faild to.");
};

const stopBtn = document.querySelector(".stopBtn");
stopBtn?.addEventListener("click", (e) => {
    console.log("sse closed");
    eventSrc.close();
});
