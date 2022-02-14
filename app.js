function updateCaseNumber( products, price, isIncreasing) {
    const productsInput = document.getElementById(products +'-number');
    let productsNumber = productsInput.value  ;

    if (isIncreasing == true) {
        productsNumber= parseInt(productsNumber) + 1;
    }
    else if(productsNumber > 0){
        productsNumber = parseInt(productsNumber) -1;
    }
    productsInput.value = productsNumber;

    // update case total
    const productsTotal = document.getElementById(products +'-total');
    productsTotal.innerText = productsNumber * price ;

    // calculate total
    calculateTotal() ;

}

function getInputValue(products) {
    const productsInput = document.getElementById(products +'-number');
    const productsNumber = parseInt(productsInput.value);
    return productsNumber;
}
function calculateTotal() {
    
    const phoneTotal = getInputValue('phone') * 1219 ;
    const caseTotal = getInputValue('case') * 59 ;
    const subTotal = phoneTotal + caseTotal ;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax ;


    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


    
}
// handle case increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false);

});



// handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function(){
    
    
    updateCaseNumber('case', 59, true);
   
    
});
document.getElementById('case-minus').addEventListener('click', function(){
    
   
    updateCaseNumber('case', 59, false);

});