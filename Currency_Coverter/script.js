
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll("#dropdown select")
const btn = document.querySelector('#Exchange')
const fromCurr = document.querySelector('#from')
const toCurr = document.querySelector('#to')
const msg = document.querySelector('#message')

for(let select of dropdowns){
    for(let countryCode in countryList){
        // console.log(countryCode);
        const newOption = document.createElement('option')
        newOption.innerText = countryCode
        newOption.value = countryCode
        select.appendChild(newOption)
        if(select.name === 'from' && newOption.value === 'USD'){
            newOption.selected = 'selected'
        }
        else if(select.name === 'to' && newOption.value === 'INR'){
            newOption.selected = 'selected'
        }
        
    }
    select.addEventListener('change' , (evt) => {
        // console.log(evt.target);
        updateFlag(evt.target)
    });
    
}

const updateFlag =  ((element) =>{
    const flagCode = countryList[element.value]
    const imgUrl = `https://flagsapi.com/${flagCode}/flat/64.png`
    // console.log(imgUrl , flagCode);
    const selectImg = element.parentElement.querySelector('img')
    selectImg.src = imgUrl

})

const updateExchangeRate = (async () => {
    const amount = document.querySelector("#amount input")
    let amountValue = amount.value
    if(amountValue ==='' || amountValue < 1){
        amount.value = '1'
        amountValue = 1
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data[toCurr.value.toLowerCase()]

    let finalAmount = Math.floor(amountValue * rate)
    msg.innerText = `${amountValue} ${fromCurr.value}  ≈  ${finalAmount} ${toCurr.value}`

});

btn.addEventListener('click' , (evt) =>{
    evt.preventDefault()
    updateExchangeRate()
})

window.addEventListener('load' ,() =>{
    updateExchangeRate()
});
