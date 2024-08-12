import { Fragment } from "react";
import Button from "../components/Element/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

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

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }
    return (
        <Fragment>
            <div className="flex justify-end items-center h-20 px-20 bg-blue-600 text-white font-bold gap-3">
                {email}
                <Button classname="bg-red-700" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5 gap-3">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))};
            </div>
            <div className="flex justify-center">
                <Counter></Counter>
            </div>
        </Fragment>
    )
}

export default ProductsPage;