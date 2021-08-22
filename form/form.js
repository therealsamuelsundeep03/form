function checkBox(){
    var val = [];
    var count = 0;
    var checkboxes = document.getElementsByName("food");
    for(var i = 0;i < checkboxes.length;i++){
        if(checkboxes[i].checked){
            val.push(checkboxes[i].value);
            count++;
        }if(count>2){
            alert("Select Only Two Options");
            checkboxes[i].checked = false;
            break;
        }
    }
    return val;
}


function displaydata(){
    var res = checkBox();
    var tbody = document.getElementById("tbody");
    tbody.innerHTML +=`<td>${document.getElementById("fn").value}</td>
                       <td>${document.getElementById("ln").value}</td>
                       <td>${document.getElementById("address").value}</td>
                       <td>${document.querySelector('input[name="gen"]:checked').value}</td>
                       <td>${document.getElementById("pin").value}</td>
                       <td>${document.getElementById("state").value}</td>
                       <td>${document.getElementById("country").value}</td>
                       <td>${res}</td>`
    document.querySelector("form").reset();

              
}