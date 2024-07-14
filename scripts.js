let inputs = document.querySelectorAll(".valor");
    


let url = "https://v6.exchangerate-api.com/v6/b2a432e579fae7853daa2565/latest/USD";

fetch(url)
    .then(r => r.json() )
    .then(data => {

      inputs.forEach(input => {
        input.value = input.dataset.cambio;
      });

    })

    .catch(error => console.error(error))

function valorModificado(input){
    let factor = input.value / input.dataset.cambio;

    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2);
    });    
}
