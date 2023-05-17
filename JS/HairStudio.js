
function geek() {
           
    var doc = prompt("Please enter some text",
        "GeeksforGeeks");
   
    if (doc != null) {
        document.getElementById("g").innerHTML =
            "Welcome to " + doc;
    }
}

function showDropInfo() {
    var sT = dropForm.dropSelect;
    var pF = document.getElementById('pF');
    var pS = document.getElementById('pS');
    var pT = document.getElementById('pT');
    pF.innerHTML = ('Selected option index: ' + sT.selectedIndex);
    pS.innerHTML = ('Selected value: ' + sT[sT.selectedIndex].value);
    pT.innerHTML = ('Selected text: ' + sT[sT.selectedIndex].text);
 }

 function BPHairCut() {
    var sT = dropForm.dropSelect;
    var pF = document.getElementById('pF');
    var pS = document.getElementById('pS');
    var pT = document.getElementById('pT');
    pF.innerHTML = ('Selected option index: ' + sT.selectedIndex);
    pS.innerHTML = ('Selected value: ' + sT[sT.selectedIndex].value);
    pT.innerHTML = ('Selected text: ' + sT[sT.selectedIndex].text);
 }