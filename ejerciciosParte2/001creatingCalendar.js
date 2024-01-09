"use strict";
function createCalendar(elem, anyo, mes) {
    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let primerDiaMes = new Date(anyo, mes - 1, 1);
    let ultimoDiaMes = new Date(anyo, mes, 0);
    let diasMes = ultimoDiaMes.getDate();

    let tabla = document.createElement("table");

    // Crea los encabezados de los días de la semana
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    for (let dia of diasSemana) {
        let th = document.createElement("th");
      th.textContent = dia;
      tr.appendChild(th);
    }

    thead.appendChild(tr);
    tabla.appendChild(thead);

    // Crea los días del mes
    let tbody = document.createElement("tbody");
    let diaActual = 1;//primer dia del mes

    for (let i = 0; i < 6; i++) {
        let tr = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        let td = document.createElement("td");

        if ((i === 0 && j < primerDiaMes.getDay()) || diaActual > diasMes) {
          // Celda vacía antes del primer día o después del último día tema estetica
          td.textContent = "";
        } else {
          td.textContent = diaActual++;
        }

        tr.appendChild(td);
      }

      tbody.appendChild(tr);
//evita el bucle o rotura 
      if (diaActual > diasMes) {
        break;
      }
    }

    tabla.appendChild(tbody);
    elem.appendChild(tabla);
  }

  let cal = document.getElementById("cal");
  createCalendar(cal, 2012, 9);