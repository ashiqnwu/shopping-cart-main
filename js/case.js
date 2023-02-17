function updateNumber(isIncrease,fieldId,priceId){
    const phoneNumberString = document.getElementById(fieldId).value;
    const phonePriceValueString = document.getElementById(priceId).innerText;
    const previousPhoneNumber = parseInt(phoneNumberString);
    const phonePriceValue = parseInt(phonePriceValueString);
    let newPhoneNumber = 0;
    let phonePriceValueNew = 0;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber+1;
        if(previousPhoneNumber===0 && priceId==='phone-price'){
            phonePriceValueNew = 1219;
        }
        else if(previousPhoneNumber===0 && priceId==='case-price'){
            phonePriceValueNew = 59;
        }
        else{
            phonePriceValueNew = phonePriceValue+(phonePriceValue/previousPhoneNumber);
        }
    }
    else{
        newPhoneNumber = previousPhoneNumber-1;
        phonePriceValueNew = phonePriceValue-(phonePriceValue/previousPhoneNumber);
    }
    document.getElementById(fieldId).value = newPhoneNumber;
    document.getElementById(priceId).innerText = phonePriceValueNew;
    updateCost();
}
function updateCost(){
    const phonePrice = parseFloat(document.getElementById('phone-price').innerText);
    const casePrice =  parseFloat(document.getElementById('case-price').innerText);
    const subTotal = phonePrice + casePrice;
    const totalTax = subTotal*.02;
    const totalPrice = subTotal+ totalTax;
    document.getElementById('subtotal-price').innerText = subTotal;
    document.getElementById('tax-price').innerText = totalTax;
    document.getElementById('total-price').innerText = totalPrice;
}


// phone minus button event listener start here///
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    updateNumber(false,'phone-number-field','phone-price');
})
// phone minus button event listener end here///
// phone plus button event listener start here///
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    updateNumber(true,'phone-number-field','phone-price');
})
// phone plus button event listener end here///
// case minus button event listener start here///
document.getElementById('btn-case-minus').addEventListener('click',function(){
    updateNumber(false,'case-number-field','case-price');
})
// case minus button event listener end here///
// case plus button event listener start here///
document.getElementById('btn-case-plus').addEventListener('click',function(){
    updateNumber(true,'case-number-field','case-price');
})
// case plus button event listener end here///
