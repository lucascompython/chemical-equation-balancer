
var checkIfExists = setInterval(() => {
    var exists = document.getElementById("results");

    if (exists) {
        clearInterval(checkIfExists);
        ajustResults(exists);
    }
}, 10);

const ajustResults = (element) => {
  const results = element.innerHTML.split(" ");

  
  const sliced = [];

  for (let elemento of results) {
    if (elemento[0] === "1")
      sliced.push(elemento.substring(1));
    else {
      sliced.push(elemento);
    }
    
  }
  

  const regSubbed = sliced.join(" ").replace(/\B(\d+)/g, '<sub>$1</sub>');
  const ajusted = document.getElementById("results").innerHTML = regSubbed;

  console.log(ajusted);
}
