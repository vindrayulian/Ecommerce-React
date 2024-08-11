import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Bunga Harum",
        image: "/products-image/flower-1.jpg",
        price: "Rp. 80.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum fugiat quo, officia fuga molestiae adipisci eveniet unde perspiciatis maiores.",
    },
    {
        id: 2,
        name: "Bunga Wangi",
        image: "/products-image/flower-1.jpg",
        price: "Rp. 100.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum fugiat quo, officia fuga molestiae.",
    },
];

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5 gap-3">
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))};
        </div>
    )
}

export default ProductsPage;