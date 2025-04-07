import { series } from './data.js';
import { Serie } from './Serie.js';

const tableBody: HTMLElement = document.querySelector("#seriesTable tbody")!;
const averageText: HTMLElement = document.getElementById("average")!;

const card: HTMLElement = document.getElementById("cardDetail")!;
const cardImage: HTMLImageElement = document.getElementById("cardImage") as HTMLImageElement;
const cardTitle: HTMLElement = document.getElementById("cardTitle")!;
const cardDescription: HTMLElement = document.getElementById("cardDescription")!;
const cardLink: HTMLAnchorElement = document.getElementById("cardLink") as HTMLAnchorElement;

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

function showSerieDetail(serie: Serie): void {
    card.classList.remove("d-none");
    cardImage.src = serie.image;
    cardTitle.textContent = serie.name;
    cardDescription.textContent = serie.description;
    cardLink.href = serie.link;
}