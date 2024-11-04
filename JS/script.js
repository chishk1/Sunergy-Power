if (document.getElementById('power-bill')) {
    const range = document.getElementById('power-bill');
    const output = document.getElementById('power-bill-output');

    range.addEventListener('input', function () {
        output.value = `$${range.value}`;
    });
}

const burger = document.getElementById('burgerid');
const nav = document.getElementById('nav__linksid');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

//List of items (Solar Systems)
let itemList = [
    { id: 0, title: "3kW System", category: "R", Size: "3KW", Efficiency: "15%", Price: "Up to $10,000", image_url: "https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 1, title: "5kW System", category: "R", Size: "5KW", Efficiency: "18%", Price: "Up to $12,000", image_url: "https://images.unsplash.com/flagged/photo-1566838616838-c3a720672aad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "8kW System", category: "R", Size: "8KW", Efficiency: "20%", Price: "Up to $16,000", image_url: "https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { id: 3, title: "12kW System", category: "C", Size: "12KW", Efficiency: "22%", Price: "Up to $20,000", image_url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "20kW System", category: "C", Size: "20KW", Efficiency: "24%", Price: "Up to $35,000", image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "60kW System", category: "C", Size: "60KW", Efficiency: "25%", Price: "Up to $50,000", image_url: "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

//Display the above list of items in grid
function displaySolarItems(category) {
    let allItems = "";
    for (let i = 0; i < itemList.length; i++) {
        //build the html display of the item
        if (itemList[i].category == category) {
            allItems += `
        <div class="item-card">
            <div class="item-style">
                <h3 class="text-style-center">${itemList[i].title}</h3>
                <p class="text-style-center">Size: ${itemList[i].Size}</p>
                <p class="text-style-center">Efficiency: ${itemList[i].Efficiency}</p>
                <p class="text-style-center">Price: ${itemList[i].Price}</p>
                <img src="${itemList[i].image_url}" class="image-style">
                <div class="text-style-center">
                    <button class="add-button-style" onclick="addToCartUpdate(${itemList[i].id})">VIEW SYSTEM</button>
                </div>								
            </div>							
        </div>
    `;
        }
    }
    document.getElementById("item-list-" + category).innerHTML = allItems;
}

displaySolarItems("R");
displaySolarItems("C");