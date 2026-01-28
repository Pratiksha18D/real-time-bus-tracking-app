let routes = [];

function addRoute() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;

  if (source === "" || destination === "") {
    alert("Enter source and destination");
    return;
  }

  routes.push(`${source} → ${destination}`);
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  displayRoutes();
}

function displayRoutes() {
  const list = document.getElementById("routeList");
  list.innerHTML = "";

  routes.forEach((route, index) => {
    const li = document.createElement("li");
    li.textContent = route;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      routes.splice(index, 1);
      displayRoutes();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
