import Button from "../Element/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="">
            <img src={image} className="p-8 rounded-t-lg" alt="" />
        </a>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-sm text-white">
                    {children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button classname="bg-blue-700">Tambah ke Keranjang</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;