let year = document.getElementById('year');

let DyDate = new Date().getFullYear();

year.innerHTML = DyDate





let BlogData = async () => {
    try {

        let content = document.getElementById('content');

        let ApiData = await fetch(`https://dummyjson.com/products`);

        let response = await ApiData.json();

        let Data = response.products;

        Data.forEach((item, index) => {
            content.innerHTML +=
                `  <div class="card">
                            <div class="card-head">
                                <img src="${item.thumbnail}" alt="${item.title}">
                            </div>
                            <div class="card-content">
                                <h4>${item.title}</h4>
                                <p>${item.description}</p>
                                <p>Price : ${item.price} </>
                                <a href="productdetails.html?id=${item.id}">
                                <button>View Details</button>
                                </a>
                            </div>
                        </div>`
        })
    }
    catch (error) {
        console.log(error.message)
    }
}

BlogData();

let categories = async () => {
    try {

        let apiget = await fetch('https://dummyjson.com/products/categories');

        let res = await apiget.json();

        let Data = await res;

        let categoriesData = document.getElementById('categories-list');

        Data.forEach((item, index) => {
            categoriesData.innerHTML += `
            
                <label id="filter_men"><input type="radio" name="${item.name}" onclick="GetSlugName(this)" id="getvalue" value=${item.slug}> ${item.name}</label>
            `
        })

    }
    catch (error) {
        console.log(error.message)
    }

}
categories();


let GetSlugName = async (radio) => {
    let Slug = radio.value;
    let content = document.getElementById('content');

    content.innerHTML = "";

    let API_URL = Slug
        ? `https://dummyjson.com/products/category/${Slug}`
        : `https://dummyjson.com/products`;

    let APIData = await fetch(API_URL);
    let response = await APIData.json();

    let data = response.products;

    data.forEach((item) => {
        content.innerHTML += `
            <div class="card">
                <div class="card-head">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>

                <div class="card-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>

                    <a href="productdetails.html?id=${item.id}">
                        <button>View Details</button>
                    </a>
                </div>
            </div>
        `;
    });
};