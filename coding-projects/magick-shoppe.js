  function mayBite() {
    var x = document.getElementById("biteSpan");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("biteAst");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

  function fullCart() {
    let cartEmpty = document.getElementById("shoppingCartEmpty");
    let cartFull = document.getElementById("shoppingCartFull");

    cartEmpty.style.display = "none";
    cartFull.style.display = "block";
  }

  //add items to cart
  let newtQuantity = 0;
  let frogQuantity = 0;
  let batQuantity = 0;
  let cauldronQuantity = 0;

  let newtPrice = 0;
  let frogPrice = 0;
  let batPrice = 0;
  let cauldronPrice = 0;

  function plusNewt() {
    newtQuantity ++;
    newtPrice += 3;
    console.log("Eye of Newt:", newtQuantity);
    document.getElementById("cartNewt").innerHTML = "Eye of Newt: " + newtQuantity;
    document.getElementById("priceNewt").innerHTML = "Price: " + newtPrice;
  }
  function plusFrog() {
    frogQuantity ++;
    frogPrice += 3;
    console.log("Toe of Frog:", frogQuantity);
    document.getElementById("cartFrog").innerHTML = "Toe of Frog: " + frogQuantity;
    document.getElementById("priceFrog").innerHTML = "Price: " + frogPrice;
  }
  function plusBat() {
    batQuantity ++;
    batPrice += 3;
    console.log("Wool of Bat:", batQuantity);
    document.getElementById("cartBat").innerHTML = "Wool of Bat: " + batQuantity;
    document.getElementById("priceBat").innerHTML = "Price: " + batPrice;
  }
  function plusCauldron() {
    cauldronQuantity ++;
    cauldronPrice += 40;
    console.log("Cauldron:", cauldronQuantity);
    document.getElementById("cartCauldron").innerHTML = "Cauldron: " + cauldronQuantity;
    document.getElementById("priceCauldron").innerHTML = "Price: " + cauldronPrice;
  }

  // Get the modal
  var modal = document.getElementById("cartModal");

  // Get the button that opens the modal
  var openBtn = document.getElementById("shoppingCartFull");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the button that removes all items
  var removeBtn = document.getElementById("removeAll");

  // Get the button that removes all items
  var checkoutBtn = document.getElementById("checkout");

  // When the user clicks on the button, open the modal
  openBtn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // When the user clicks on the remove button, remove all items
  removeBtn.onclick = function() {
    document.getElementById("cartNewt").innerHTML = "";
    document.getElementById("cartFrog").innerHTML = "";
    document.getElementById("cartBat").innerHTML = "";
    document.getElementById("cartCauldron").innerHTML = "";

    document.getElementById("priceNewt").innerHTML = "";
    document.getElementById("priceFrog").innerHTML = "";
    document.getElementById("priceBat").innerHTML = "";
    document.getElementById("priceCauldron").innerHTML = "";

    newtQuantity = 0;
    frogQuantity = 0;
    batQuantity = 0;
    cauldronQuantity = 0;

    newtPrice = 0;
    frogPrice = 0;
    batPrice = 0;
    cauldronPrice = 0;

    let cartEmpty = document.getElementById("shoppingCartEmpty");
    let cartFull = document.getElementById("shoppingCartFull");

    cartEmpty.style.display = "block";
    cartFull.style.display = "none";
  }

  // When the user clicks on the checkout button, launch an alert
  checkoutBtn.onclick = function() {
    if (newtQuantity === 0 && frogQuantity === 0 && batQuantity === 0 && cauldronQuantity === 0) {
      document.getElementById("cartNewt").innerHTML = "";
    } else {
      alert("The Office of the Misuse of Magickal Artefacts is now tracking your IP. A representative will visit you shortly to confiscate all magickal items. Magicks are forbidden.");
    }

  }
