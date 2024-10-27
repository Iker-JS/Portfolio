console.log("Running the script");

function sumitInfo() {
    var date = document.getElementById("date").value;
    var startTime = document.getElementById("start_time").value;
    var endTime = document.getElementById("end_time").value;
    var activity = document.getElementById("activity").value;
    var place = document.getElementById("place").value;
    var type = document.getElementById("type").value;
    var notes = document.getElementById("notes").value;
    var color = document.getElementById("color").value;
    var freeBusy = document.getElementById("free_busy").checked ? "🔴 Busy" : "🟢 Free";
    
    var tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
    
    var newRow = tableBody.insertRow();

    newRow.insertCell().textContent = date;
    newRow.insertCell().textContent = startTime;
    newRow.insertCell().textContent = endTime;
    newRow.insertCell().textContent = activity;
    newRow.insertCell().textContent = place;
    newRow.insertCell().textContent = type;
    newRow.insertCell().textContent = activity;
    newRow.insertCell().textContent = freeBusy;
    newRow.insertCell().textContent = notes;
    
    var colorCell = newRow.insertCell();
    colorCell.style.backgroundColor = color;
    colorCell.textContent = color;
    
    document.getElementById("form").reset();
}

