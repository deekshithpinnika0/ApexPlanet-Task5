document.addEventListener("DOMContentLoaded", () => {
    // Target all product display blocks
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        // Read text context inside product headers
        const productName = card.querySelector("h3").innerText;

        // Create a programmatic HTML button element
        const cartButton = document.createElement("button");
        cartButton.innerText = "Add to Cart";
        cartButton.style.marginTop = "15px";
        cartButton.style.backgroundColor = "#e67e22";
        cartButton.style.color = "white";
        cartButton.style.border = "none";
        cartButton.style.padding = "10px 20px";
        cartButton.style.borderRadius = "4px";
        cartButton.style.cursor = "pointer";
        cartButton.style.fontWeight = "bold";
        cartButton.style.width = "100%";

        // Trigger action alert window upon click context
        cartButton.addEventListener("click", () => {
            alert(`${productName} has been added to your shopping cart!`);
        });

        // Drop the button inside your card structure
        card.appendChild(cartButton);
    });
});