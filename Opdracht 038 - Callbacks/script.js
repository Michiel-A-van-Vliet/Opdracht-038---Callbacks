function huiswerkMaken(vak, callback) {
  console.log(`Start: ${vak}`);
  setTimeout(() => {
    console.log(`Eind: ${vak}`);
    callback();
  }, 3000);
}

function klaarMetHuiswerk() {
  console.log("Klaar. Broek ophijzen.");
}

huiswerkMaken("FED Level 42", klaarMetHuiswerk);
