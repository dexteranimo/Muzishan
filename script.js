

window.onscroll = function() {skrolFunkcija()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function skrolFunkcija() {
  if (window.pageYOffset >= sticky && window.scrollY >= 50) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = 'black';
  } 
  else {
    navbar.style.backgroundColor = 'transparent';
  }
}





var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}




function readFormData() {
    var formData = {};
    formData["nazivpesme"] = document.getElementById("nazivpesme").value;
    formData["zanrpesme"] = document.getElementById("zanrpesme").value;
    formData["ocenapesme"] = document.getElementById("ocenapesme").value;
    formData["domacastrana"] = document.getElementById("domacastrana").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("pesmelista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nazivpesme;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.zanrpesme;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.ocenapesme;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.domacastrana;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="dugme-menjaj1">Izmeni</a>
                       <a onClick="onDelete(this)" class="dugme-menjaj2">Obriši</a>`;
}

function resetForm() {
    document.getElementById("nazivpesme").value = "";
    document.getElementById("zanrpesme").value = "";
    document.getElementById("ocenapesme").value = "";
    document.getElementById("domacastrana").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nazivpesme").value = selectedRow.cells[0].innerHTML;
    document.getElementById("zanrpesme").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ocenapesme").value = selectedRow.cells[2].innerHTML;
    document.getElementById("domacastrana").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nazivpesme;
    selectedRow.cells[1].innerHTML = formData.zanrpesme;
    selectedRow.cells[2].innerHTML = formData.ocenapesme;
    selectedRow.cells[3].innerHTML = formData.domacastrana;
}

function onDelete(td) {
    if (confirm('Da li zaista želite da obrišete ovu pesmu ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("pesmelista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nazivpesme").value == "") {
        isValid = false;
        document.getElementById("nazivPesmeError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nazivPesmeError").classList.contains("hide"))
            document.getElementById("nazivPesmeError").classList.add("hide");
    }
    return isValid;
}






function pitaj(){
    document.getElementById("link-pitaj");
    location.href = "https://www.instagram.com/nidzolin/";
}

function otvori() {
    let o = document.getElementById("osajtu");
    let z = document.getElementById("zatvori");
    o.style.height = "100%";
    z.style.opacity = "1";
}


function zatvori() {
    let o = document.getElementById("osajtu");
    let z2 = document.getElementById("zatvori");
    o.style.height = "0vh";
    z2.style.opacity = "0";
}

$(document).ready(function(){
    $('#show').click(function() {
      $('.glavni').slideDown(700);
    });
});
$(document).ready(function(){
    $('#show2').click(function() {
      $('.glavni').slideDown(700);
    });
});

$(document).ready(function(){
    $('#zatvori').click(function() {
      $('.glavni').slideUp(300);
    });
});


const hamburger = document.querySelector(".hamburger");
const navMali = document.querySelector(".navMali");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("navMali-active1");
    navMali.classList.toggle("navMali-active");
})

document.querySelectorAll(".navMali").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("navMali-active1");
    navMali.classList.remove("navMali-active");
}))



$(document).ready(function() {
    $('#preloader').delay(3000).fadeOut(400);
});


