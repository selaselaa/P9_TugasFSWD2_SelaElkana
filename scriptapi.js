
        document.addEventListener("DOMContentLoaded", function() {
            const productForm = document.getElementById('productForm');
            const productList = document.getElementById('productList');

            let editIndex = -1;

            productForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const productName = document.getElementById('productName').value;
                const productQuantity = document.getElementById('productQuantity').value;
                const productPrice = document.getElementById('productPrice').value;

                if (editIndex === -1) {
                    addProduct(productName, productQuantity, productPrice);
                } else {
                    editProduct(productName, productQuantity, productPrice, editIndex);
                    editIndex = -1;
                }

                productForm.reset();
            });

            function addProduct(name, quantity, price) {
                const li = document.createElement('li');
                li.innerHTML = `<span>Name: ${name}</span><span>Quantity: ${quantity}</span><span>Price: ${price}</span><button class="edit-btn" onclick="editProductForm(this)">Edit</button><button class="delete-btn" onclick="deleteProduct(this)">Delete</button>`;
                productList.appendChild(li);
            }

            function editProductForm(element) {
                const li = element.parentElement;
                const productName = li.querySelector('span:nth-of-type(1)').innerText.split(': ')[1];
                const productQuantity = li.querySelector('span:nth-of-type(2)').innerText.split(': ')[1];
                const productPrice = li.querySelector('span:nth-of-type(3)').innerText.split(': ')[1];

                document.getElementById('productName').value = productName;
                document.getElementById('productQuantity').value = productQuantity;
                document.getElementById('productPrice').value = productPrice;

                editIndex = Array.prototype.indexOf.call(li.parentElement.children, li);
            }

            function editProduct(name, quantity, price, index) {
                const li = productList.children[index];
                li.querySelector('span:nth-of-type(1)').innerText = `Name: ${name}`;
                li.querySelector('span:nth-of-type(2)').innerText = `Quantity: ${quantity}`;
                li.querySelector('span:nth-of-type(3)').innerText = `Price: ${price}`;
            }

            window.deleteProduct = function(element) {
                element.parentElement.remove();
            };
        });
