## Prompt 1
I'm having an issue running my JavaScript code. Here's the error message I'm getting: 

"!TypeError: Cannot set properties of null (setting 'textContent')"

Please help me understand what's wrong.

## Prompt 2
I'm having issues with my JavaScript code. Submitting the promo form refreshes the page and does not run the following code as expected:

```
promoForm.addEventListener('submit', function(event) {
  var userCode = promoCodeInput.value;
  var finalPrice = applyDiscount(basePrice, userCode);

  if (finalPrice < basePrice) {
    finalPriceElement.textContent = `Final Tickets Price: $${finalPrice}`;
    promoCodeInput.disabled = true;
  } else {
    promoCodeInput.placeholder = 'Invalid Promo Code!'
  }

  promoCodeInput.value = '';
});
```