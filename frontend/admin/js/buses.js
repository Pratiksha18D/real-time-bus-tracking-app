let buses = [];

function addBus() {
  const busNumber = document.getElementById("busNumber").value;

  if (busNumber === "") {
    alert("Enter bus number");
    return;
  }

  buses.push(busNumber);
  document.getElementById("busNumber").value = "";
  displayBuses();
}

function displayBuses() {
  const list = document.getElementById("busList");
  list.innerHTML = "";

  buses.forEach((bus, index) => {
    const li = document.createElement("li");
    li.textContent = bus;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      buses.splice(index, 1);
      displayBuses();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
