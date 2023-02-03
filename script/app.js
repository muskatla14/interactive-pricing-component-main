const pageViews = document.querySelector('.pageviews');
const priceAmount =  document.querySelector('.price-amount');
let currentPrice = parseFloat(priceAmount.textContent.substring(1));
const range = document.querySelector('#myRange');
let values = [8, 12, 16, 24, 36];
const checkBox = document.querySelector('.checkbox') ;


function changePrice(value) {
  let price;

  if(value === '0') {
    pageViews.textContent = '10k pageviews'
    price = 8;
  } else if (value === '1') {
    pageViews.textContent = '50k pageviews'
    price = 12;
  } else if (value === '3') {
    pageViews.textContent = '500k pageviews'
    price = 24;
  } else if (value === '4') {
    pageViews.textContent = '1M pageviews'
    price = 36;
  } else {
    value === '2'
    price = 16;
  }


  checkBox.addEventListener('change', function() {
      if(!checkBox.checked) {
        priceAmount.textContent = `$${price.toFixed(2)}`
      } else {
        priceAmount.textContent = `$${(price - price * 0.25).toFixed(2)}`;
      }
  })
}

range.addEventListener('input', function(event) {
  priceAmount.textContent = `$${values[this.value].toFixed(2)}`;  
  changePrice(event.target.value);  
  if(!checkBox.checked) {
    priceAmount.textContent = `$${values[this.value].toFixed(2)}`
    console.log('not checked');
  } else {
    priceAmount.textContent = `$${(values[this.value] - values[this.value] * 0.25).toFixed(2)}`;
    console.log('checked');
  }

  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ' + value + '%, #fff ' + value + '%, #d3d3d3 100%)'
  
})





// checkBox.addEventListener('change', function() {
//   if(this.checked) {
//     console.log("Checkbox is checked");
//   } else {
//     console.log("Checkbox is not checked...");
//   }
//   // const rangeValue = range.event.value;
//   // changePrice(rangeValue)
// })

