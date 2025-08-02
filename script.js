var selectedRow = null;

function onFormSubmit(event) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  newRow.insertCell(0).innerHTML = data.productCode;
  newRow.insertCell(1).innerHTML = data.product;
  newRow.insertCell(2).innerHTML = data.qty;
  newRow.insertCell(3).innerHTML = data.perPrice;
  newRow.insertCell(4).innerHTML = `
    <button onClick="onEdit(this)">Edit</button>
    <button onClick="onDelete(this)">Delete</button>
  `;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

function onDelete(td) {
  if (confirm("Are you sure about deleting😒 the data ?")) {
    var row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
  selectedRow = null;
}

// Toggle store data section
function toggleStoreData() {
  const section = document.getElementById("storeDataSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
}