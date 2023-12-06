
const token = localStorage.getItem("token")
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    let resultContainer = document.getElementById('qr-reader-results');
    let lastResult, countResults = 0;

    function onScanSuccess(decodedText, decodedResult) {
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;

            
            console.log(`Scan result ${decodedText}`, decodedResult);

            
            // var newWindow = window.open("", "_blank");
            // newWindow.document.write(`<h1>Resultado do Scan:</h1><p>${decodedText}</p>`);
            // getarmarios()"dar get armario com a url"
        }

    }


    var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
});
async function getarmarios(url){
    const headers = { 'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json", "accept": "application/json"
      }
      const response=await fetch(url,{headers:headers })
      const resultado=await response.json()
      console.log(resultado)
}
