const btn = document.getElementById("button");
const div = document.getElementById("weather");
const input = document.getElementById("input");

getWeather();
btn.addEventListener("click", () => getWeather());

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    getWeather();
  }
});

async function getWeather() {
  let inputText = document.getElementById("input").value;
  if (!inputText) {
    inputText = "San Francisco";
  }
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=483c72cadcb94d8192801601232008&q=" +
      inputText,
    {
      mode: "cors",
    }
  );
  const currentWeather = await response.json();

  const weatherAtLocation = {
    location: currentWeather.location.name,
    status: currentWeather.current.condition.text,
    tempF: currentWeather.current.temp_f,
  };

  div.textContent = `The weather at ${weatherAtLocation.location} is ${weatherAtLocation.status} and is ${weatherAtLocation.tempF} degrees`;
  input.value = "";
}
