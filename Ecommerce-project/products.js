// filterSelection("all")

// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("gallery__item");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }


// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }


// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }


// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
let itemGall = document.querySelectorAll('.gallery__item')
let shoes = document.querySelectorAll('.shoes')
let accessories = document.querySelectorAll('.accessories')
let price1 = document.querySelectorAll('.prices-100')
let price2 = document.querySelectorAll('.prices-200')
let price3 = document.querySelectorAll('.prices-300')

document.querySelector('.btnAll').addEventListener('click', () => {
  for (var i = 0; i < itemGall.length; i++) {
    itemGall[i].style['display'] = 'block'
  }
});

document.querySelector('.btnShoes').addEventListener('click', () => {
  for (var i = 0; i < shoes.length; i++) {

    shoes[i].style['display'] = 'block';
    // for (var i = 0; i < accessories.length; i++) {
    //   accessories[i].style['display'] = 'none';
    // }
    

   
  }
 
});

document.querySelector('.btnAccessories').addEventListener('click', () => {
  for (var i = 0; i < accessories.length; i++) {
    shoes[i].style['display'] = 'none'
    accessories[i].style['display'] = 'block'




  }

});
document.querySelector('.btnPrices-100').addEventListener('click', () => {
  for (var i = 0; i < price1.length; i++) {
    price1[i].style['display'] = 'block'
  }
});

document.querySelector('.btnPrices-200').addEventListener('click', () => {
  for (var i = 0; i < price2.length; i++) {
    price2[i].style['display'] = 'block'
  }
});

document.querySelector('.btnPrices-300').addEventListener('click', () => {
  for (var i = 0; i < price3.length; i++) {
    price3[i].style['display'] = 'block'
  }
})

// Filter
// var items = document.getElementsByClassName('product');
// function filterItems() {
//    var type = document.getElementById("filterSelect").value;
//    for (var i = 0; i < items.length; i++){
//        var itemType= items[i].getElementsByClassName("type");
//        var itemTypeValue= itemType[0].innerText;
//        if(itemTypeValue == type){
//            items[i].style.display = '';
//        }
//        else if(type == 'default'){
//            items[i].style.display = '';
//        }
//        else{
//            items[i].style.display = 'none';
//        }
//    }
// }

// // Price
// var items = document.getElementsByClassName('product');

// function priceItems() {
//    var price = document.getElementById("priceSelect").value;

//    for (var i = 0; i < items.length; i++){
//        var itemPrice= items[i].getElementsByClassName("item__price");
//        var itemPriceValue= itemPrice[0].innerText;

//        if(itemPriceValue == price){
//            items[i].style.display = '';
//        }
//        else if(price == 'default'){
//            items[i].style.display = '';
//        }
//        else{
//            items[i].style.display = 'none';
//        }

//    }
// }
