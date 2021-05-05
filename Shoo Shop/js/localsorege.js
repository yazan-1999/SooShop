class Localsorege {

    constructor() {
        this.keyName = "products";


    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return [];


    }
    putProducts(id) {
        let products = []
            // let products = [this.getProducts()]
        products.push(`${id}`);

        localStorage.setItem(this.keyName, JSON.stringify(products)
        }
    }

    let localsore = new Localsorege();

    localsore.putProducts("el23", "el55");
    localsore.putProducts(["el32"]);
    localsore.putProducts("el33");
    localsore.putProducts("el44")
    console.log(localsore.putProducts.products)
        // localsorege.putProducts()

    // const a = localsorege.getProducts();

    // console.log(a);
    // console.dir(document.getElementById("row"));

    // localStorage.setItem("products ", "value")