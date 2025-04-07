import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById("seriesTable")!;
const tbody: HTMLElement = seriesTable.getElementsByTagName("tbody")[0];
const averageText: HTMLElement = document.getElementById("average")!;

let totalSeasons = 0;

series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    tbody.appendChild(row);
    totalSeasons += serie.seasons;
});

const avg = totalSeasons / series.length;
averageText.textContent = `Seasons average: ${avg.toFixed(2)}`;
