document.addEventListener("DOMContentLoaded", start);

async function start() {
  let jsonData = await getJson();
  const listeInfo = document.querySelector(".liste");
  const temp = document.querySelector("template");

  listeInfo.innerHTML = "";
  jsonData.forEach(entry => {
    const klon = temp.cloneNode(true).content;
    klon.querySelector(".fullname").textContent = entry.fullname;
    klon.querySelector(".house").textContent = entry.house;
    listeInfo.appendChild(klon);

    // For hver entry, laves en ny eventlistener med det pågældende entry som argument
    // Eventlisteneren "gemmer" informationen omkring hvad showPopUp skal vise, når der klikkes på entry
    listeInfo.lastElementChild.addEventListener("click", () => {
      showPopUp(entry);
    });
  });
}

async function getJson() {
  let jsonData = await fetch("students1991.json");
  console.log("jsonData", jsonData);
  data = await jsonData.json();
  console.log("parsedJsonData", data);

  return data;
}

function showPopUp(entry) {
  document.querySelector("#popup").style.display = "block";

  document.querySelector(".content .fullname").textContent = entry.fullname;
  document.querySelector(".content .house").textContent = entry.house;

  document.querySelector("#popup .close").addEventListener("click", closePopUp);
}

function closePopUp() {
  document.querySelector("#popup").style.display = "none";
}
