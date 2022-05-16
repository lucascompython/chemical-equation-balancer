
const setSub = (string) => {
  return string.replace(/\B(\d+)/g, '<sub>$1</sub>');
}



var checkIfExists = setInterval(() => {
    var exists = document.getElementById("results");

    if (exists) {
        clearInterval(checkIfExists);
        ajustResults(exists);
    }
}, 50);

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

  
  // results = results.join(" ")
  const regSubbed = setSub(sliced.join(" "));
  const ajusted = document.getElementById("results").innerHTML = regSubbed;
  // const resultsArray = results.split(" ");
  // const ajusted = removeItemAll(resultsArray, ["+", "-&gt;"]);
  // for (letter of results){
  //   if (isNumeric(letter)){
  //     console.log(letter)
  //   }
  // }
 
}
 const amongus = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣷⣶⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡟⠁⣰⣿⣿⣿⡿⠿⠻⠿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠏⠀⣴⣿⣿⣿⠉⠀⠀⠀⠀⠀⠈⢻⣿⣿⣇⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣼⣿⣿⡏⠀⢠⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡀⠀⠀
⠀⠀⠀⣰⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀
⠀⠀⢰⣿⣿⡿⣿⣿⣿⡇⠀⠘⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢀⣸⣿⣿⣿⠁⠀⠀
⠀⠀⣿⣿⣿⠁⣿⣿⣿⡇⠀⠀⠻⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⠃⠀⠀⠀
⠀⢰⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀
⠀⢸⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠉⢉⣿⣿⠀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣇⠀⣿⣿⣿⠀⠀⠀⠀⠀⢀⣤⣤⣤⡀⠀⠀⢸⣿⣿⣿⣷⣦⠀⠀⠀
⠀⠀⢻⣿⣿⣶⣿⣿⣿⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣦⡀⠀⠉⠉⠻⣿⣿⡇⠀⠀
⠀⠀⠀⠛⠿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠈⠹⣿⣿⣇⣀⠀⣠⣾⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣦⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⠿⠋⠉⠛⠋⠉⠉⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁`;
  console.log("Quem utilizar este website concorda que Linux é superior a Windows");
  console.log(amongus);
  console.log("Quem utilizar este website concorda que Linux é superior a Windows");




const changeInput = (mode) => {
  const reagentes = document.getElementById("reagentes");
  
  const produtos = document.getElementById("produtos");
  const gramas = document.getElementById('gramas');
  const moles = document.getElementById('moles');

  const reagentes_valor = reagentes.value;
  const produtos_valor = produtos.value;
  
 // gramas.placeholder = `Gramas de ${reagentes_valor}`;
 // moles.placeholder = `Moles de ${produtos_valor}`;

  const advanced = document.getElementById("advanced");

  advanced.innerHTML = "";
  
  for(let reagente of reagentes.value.split("+")) {
    advanced.innerHTML += `
      <br /><input type="text" name="gramas_${reagente}" placeholder="Gramas de ${reagente}"/>
      ou
      <input type="text" name="moles_${reagente}" placeholder="Moles de ${reagente}"/>
    `;
 
  if(reagentes.value == "" || produtos.value == ""){
    advanced.innerHTML = "Comece por adicionar reagentes/produtos";
  }
    
  }
  

  
}
