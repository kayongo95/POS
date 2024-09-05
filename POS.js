let cart = [];
let totalAmount = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    if (itemName && itemPrice > 0 && itemQuantity > 0) {
        const itemTotal = itemPrice * itemQuantity;
        cart.push({ itemName, itemPrice, itemQuantity, itemTotal });
        updateCart();
        clearInputFields();
    } else {
        alert("Please enter valid item details.");
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    totalAmount = 0;

    cart.forEach(item => {
        const row = `
            <tr>
                <td>${item.itemName}</td>
                <td>UGx${item.itemPrice.toFixed(2)}</td>
                <td>${item.itemQuantity}</td>
                <td>UGx${item.itemTotal.toFixed(2)}</td>
            </tr>
        `;
        cartItemsElement.innerHTML += row;
        totalAmount += item.itemTotal;
    });

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function clearInputFields() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';
}
