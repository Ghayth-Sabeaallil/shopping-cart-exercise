const productButtons: NodeList = document.querySelectorAll("button");
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");
const numProduct: HTMLElement = document.querySelector("#productsInCart");
const product: HTMLElement = document.querySelector("#products");

let num: number = 0;

function updateCart(): void {
  openCartButton.setAttribute("onclick", "listProductsInCart();");
}

function addClickEvent(): void {
  productButtons.forEach((cardBtn) => {
    cardBtn.addEventListener("click", (event) => {
      const card: HTMLElement = event.currentTarget as HTMLElement;
      if (checkBook(card.parentElement.getAttribute("data-product"))) {
        num++;
        numProduct.textContent = num.toString();
        const li: HTMLElement = document.createElement("li");
        li.setAttribute("id", card.parentElement.getAttribute("data-product"));
        const span: HTMLElement = document.createElement("span");
        const btn: HTMLElement = document.createElement("button");
        btn.innerHTML = "Remove product";
        btn.setAttribute("id", card.parentElement.getAttribute("data-product"));
        btn.setAttribute("onclick", "removeBook(this.id);");
        span.setAttribute("class", "product-title");
        span.innerHTML = "Title: ";
        const span2: HTMLElement = document.createElement("span");
        span2.innerHTML = card.parentElement.getAttribute("data-product") + " ";
        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(btn);
        product.appendChild(li);
      } else {
        alert("Boken redan är tillagd i varukorgen!!");
      }

      updateCart();
    });
  });
}

function checkBook(book: string): boolean {
  const even = (bookLint) => bookLint === book;
  if (!shoppingCart.some(even)) {
    shoppingCart.push(book);
    return true;
  } else {
    return false;
  }
}

function listProductsInCart(): void {
  cart.classList.toggle("hide");
}
function removeBook(book): void {
  const index = shoppingCart.indexOf(book);
  shoppingCart.splice(index, 1);
  const child = document.getElementById(book);
  product.removeChild(child);
  num--;
  numProduct.textContent = num.toString();
}

addClickEvent();
