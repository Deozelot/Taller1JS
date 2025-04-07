import { series } from './data.js';
const tableBody = document.querySelector("#seriesTable tbody");
const averageText = document.getElementById("average");
const card = document.getElementById("cardDetail");
const cardImage = document.getElementById("cardImage");
const cardTitle = document.getElementById("cardTitle");
const cardDescription = document.getElementById("cardDescription");
const cardLink = document.getElementById("cardLink");
let totalSeasons = 0;
series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td class="serie-link text-primary" style="cursor: pointer">${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    row.addEventListener("click", () => showSerieDetail(serie));
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
});
const average = totalSeasons / series.length;
averageText.textContent = `Seasons average: ${average.toFixed(2)}`;
function showSerieDetail(serie) {
    card.classList.remove("d-none");
    cardImage.src = serie.image;
    cardTitle.textContent = serie.name;
    cardDescription.textContent = serie.description;
    cardLink.href = serie.link;
}
