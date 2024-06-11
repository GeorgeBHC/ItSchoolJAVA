// const data = 
// ["testing",// string
//  false, // boolean
//   30, // nmmber
// {model: "3", color: "red"}, // object
// [1, 2, 3, 4, 5], // array
// ];//lenght = 5, but last index = 4

// const multiplier = data[4];

// for(let i; i < multiplier.length; i++) {
//     console.log("i:", i);
// }


// function calculateIngredients(numOfPortions) {
//   const pastePerPortie = 450;
//   const uleiPerPortie = 60;
//   const usturoiPerPortie = 6;
//   const ardeiPerPortie = 1;
//   const sarePerPortie = 3;

//   return {
//     paste : numOfPortions * pastePerPortie,
//     ulei : numOfPortions * uleiPerPortie,
//     usturoi : numOfPortions * usturoiPerPortie,
//     ardei : numOfPortions * ardeiPerPortie,
//     sare : numOfPortions * sarePerPortie,
//   };
// }

// const ingredientsFor2Portions = calculateIngredients(2)
// console.log(ingredientsFor2Portions);



// function ajusteazaReteta(portii) {
//   const spaghetti = 450 * portii;
//   const uleiMasline = 60 * portii;
//   const usturoi = 6 * portii;  
//   const ardeiIute = 1 * portii;
//   const sare = 'după gust'; 

//   return `Pentru ${portii} porții, ai nevoie de:
//   - ${spaghetti} grame de spaghetti
//   - ${uleiMasline} ml de ulei de măsline
//   - ${usturoi} căței de usturoi
//   - ${ardeiIute} ardei iuți
//   - sare ${sare}`;
// }

// // Implementeaza o logica simplista de magazin care sa contina:
// - o functie care returneaza produsele din cos (tu decizi unde si in ce forma se tine evidenta produselor)

// - o functie care returneaza cosul de cumparaturi actualizat dupa adaugarea unui produs

// - o functie care returneaza cosul de cumparaturi actualizat dupa eliminarea unui produs

// - o functie care returneaza totalul cosului de cumparaturi

// - o functie care returneaza informatii pentru checkout, cum ar fi: total, nr produse, lista produse si un mesaj de succes 


const shoppingCart = [];

shoppingCart.push({name : 'Tricou', price: '50 lei'});
shoppingCart.push({name : 'Adidasi', price: '250 lei'});
shoppingCart.push({name : 'Pantaloni scurti', price: '100 lei'});

function pushProductsToCart () {
  shoppingCart.push ({name : 'Tricou', price: '50 lei'});
  shoppingCart.push({name : 'Adidasi', price: '250 lei'});
shoppingCart.push({name : 'Pantaloni scurti', price: '100 lei'});
}

function getUpdatedCart () {
  return shoppingCart;
}

function removeProductFromCart (Tricou) {
  const index = shoppingCart.indexOf('Tricou');
  if (index !== -1) {
    shoppingCart.splice(index, 1);
  }
}

function getCartTotal ()  {
  let total = 0;
  for (const name of shoppingCart) {
    total += name.price;
  }
  return total;
}

function getCheckoutInfo () {
  const name = getUpdatedCart();
  const total = getCartTotal();
  const message = "Multumim pentru comanda";

  return {
    total,
    name,
    message
  };
}


console.log(shoppingCart);
console.log(getUpdatedCart());
console.log(getCartTotal());
console.log(getCheckoutInfo());