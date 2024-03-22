document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const productPrice = document.getElementById('productPrice').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${productName}</strong> - Quantity: ${productQuantity}, Price: ${productPrice}`;
        productList.appendChild(listItem);

        form.reset();
    });
});