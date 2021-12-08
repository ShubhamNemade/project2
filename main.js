let n1 = Math.floor(Math.random() * 20 );
let n2 = Math.floor(Math.random() * 20 );

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let adds = n1 + n2;

function game() {
    var user = document.getElementById('intext2').value;

    if (user==adds) {
  document.getElementById("ans").innerHTML="wel done ur ans is Correct"
        // showans.innerHTML="Correct Ans is" + adds;
    }

    else  {
        document.getElementById("ans").innerHTML = "wrong Ans is" +adds+ ":Try Again";

    }
  
     }

