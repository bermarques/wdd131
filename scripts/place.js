const today = new Date();
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}

const temperature = 9;
const windSpeed = 21;

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
  document.getElementById("windChill").textContent = `${windChill} °C`;
} else {
  document.getElementById("windChill").textContent = "N/A";
}
