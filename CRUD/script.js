// Global
var msg = document.getElementById("msg");

// CREATE
// Submit function
function Submit() {
  var dataEntered = retrieveData();
  if (dataEntered) {
    insert(dataEntered);
    msg.innerHTML = `<h3 style="color: yellow;">Data Inserted!</h3>`;
  } else {
    msg.innerHTML = `<h3 style="color: red;">Please enter data!</h3>`;
  }
  document.getElementById("form").reset();
}

// READ
function retrieveData() {
  var name1 = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var exp = document.getElementById("exp").value;

  if (name1.trim() === '' || job.trim() === '' || exp.trim() === '') {
    return null;
  }

  return {
    name: name1,
    job: job,
    exp: exp
  };
}

// INSERT
function insert(dataEntered) {
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  
  cell1.innerHTML = dataEntered.name;
  cell2.innerHTML = dataEntered.job;
  cell3.innerHTML = dataEntered.exp;
  cell4.innerHTML = `<button onclick="edit(this)">Edit</button> &nbsp
                      <button onclick="remove(this)">Delete</button>`;
}

/// EDIT
function edit(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var job = row.cells[1].innerHTML;
    var exp = row.cells[2].innerHTML;
  
    document.getElementById("name").value = name;
    document.getElementById("job").value = job;
    document.getElementById("exp").value = exp;
  
    // Store the row index as a data attribute in the form
    document.getElementById("form").setAttribute("data-row-index", row.rowIndex);
  }
  

// UPDATE
function update() {
    var rowIndex = document.getElementById("form").getAttribute("data-row-index");
    if (rowIndex !== null) {
      var table = document.getElementById("table").rows[rowIndex];
      table.cells[0].innerHTML = document.getElementById("name").value;
      table.cells[1].innerHTML = document.getElementById("job").value;
      table.cells[2].innerHTML = document.getElementById("exp").value;
      msg.innerHTML = `<h3 style="color: orange;">Data Updated!</h3>`;
      document.getElementById("form").reset();
      document.getElementById("form").removeAttribute("data-row-index");
    }
  }
  

// DELETE
function remove(button) {
  var ans = confirm("Are you sure you want to delete the record?");
  if (ans) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    msg.innerHTML = `<h3 style="color: red;">Data Deleted!</h3>`;
  }
}
