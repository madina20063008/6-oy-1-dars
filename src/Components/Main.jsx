
import React from "react";
import burgerImage from "./sburger.png";

const categories = ["Гамбургеры", "Хот Доги", "Пицца", "Напитки", "Соки"];
const products = [
    { id: 1, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
    { id: 2, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
    { id: 3, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
    { id: 4, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
    { id: 5, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
    { id: 6, name: "С ГОВЯДИНОЙ", price: "14 500", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом." },
];

export function Main() {
    return (
        <div className="bg-black text-white px-10 py-8">
            <main className="w-[1110px] mx-auto">
                <nav className="flex space-x-8 text-lg mb-8">
                    {categories.map((category, index) => (
                        <span key={index} className="cursor-pointer text-gray-400 hover:text-[#4E9F0D]">
                            {category}
                        </span>
                    ))}
                </nav>

                <div className="grid grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={product.id} className="relative group">
                            <div className="relative w-full overflow-hidden">
                                <img src={burgerImage} alt="Burger" className="w-full" />
                                
                                <div className="absolute bottom-0 left-0 w-[190px] h-[55px] bg-[#4E9F0D] text-white text-xl font-semibold text-center py-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    {product.price}
                                </div>

                                <div className="absolute inset-0 bg-[#4E9F0D]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <span className="text-white text-[24px] font-semibold">Добавить в корзину</span>
                                </div>
                            </div>

                            <h3 className="text-[#4E9F0D] text-xl font-bold my-6">{product.name}</h3>
                            <p className="mt-2">{product.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
