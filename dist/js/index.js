const productButtons = document.querySelectorAll("button");
const shoppingCart = [];
const cart = document.querySelector("#cart");
const openCartButton = document.querySelector("#open-cart");
const numProduct = document.querySelector("#productsInCart");
const product = document.querySelector("#products");
let num = 0;
function updateCart() {
    openCartButton.setAttribute("onclick", "listProductsInCart();");
}
function addClickEvent() {
    productButtons.forEach((cardBtn) => {
        cardBtn.addEventListener("click", (event) => {
            const card = event.currentTarget;
            if (checkBook(card.parentElement.getAttribute("data-product"))) {
                num++;
                numProduct.textContent = num.toString();
                const li = document.createElement("li");
                li.setAttribute("id", card.parentElement.getAttribute("data-product"));
                const span = document.createElement("span");
                const btn = document.createElement("button");
                btn.innerHTML = "Remove product";
                btn.setAttribute("id", card.parentElement.getAttribute("data-product"));
                btn.setAttribute("onclick", "removeBook(this.id);");
                span.setAttribute("class", "product-title");
                span.innerHTML = "Title: ";
                const span2 = document.createElement("span");
                span2.innerHTML = card.parentElement.getAttribute("data-product") + " ";
                li.appendChild(span);
                li.appendChild(span2);
                li.appendChild(btn);
                product.appendChild(li);
            }
            else {
                alert("Boken redan är tillagd i varukorgen!!");
            }
            updateCart();
        });
    });
}
function checkBook(book) {
    const even = (bookLint) => bookLint === book;
    if (!shoppingCart.some(even)) {
        shoppingCart.push(book);
        return true;
    }
    else {
        return false;
    }
}
function listProductsInCart() {
    cart.classList.toggle("hide");
}
function removeBook(book) {
    const index = shoppingCart.indexOf(book);
    shoppingCart.splice(index, 1);
    const child = document.getElementById(book);
    product.removeChild(child);
    num--;
    numProduct.textContent = num.toString();
}
addClickEvent();
