import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";


function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5 + 1));
  const [hasPrime] = useState(Math.random() < 0.4);
  const dispatch = useDispatch();


  const AddItemBasket=()=>{
    const product={
      id, title, price, description, category, image,rating,hasPrime
    }
    dispatch(addToBasket(product))
  }
  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30">
      <p className="absolute top-2 right-2 text-gray-400 tet-xs italic">{category}</p>
      <Image src={image} height={200}  width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <div className="mb-5">
        <Currency quantity={price}  />
      </div>
      {
          hasPrime&&(<div className="flex items-center space-x-2 -mt-5">
              <Image height={30} width={50} className="w-12"  src="https://links.papareact.com/fdw" alt=""/>
              <p className="text-xs tetx-gray-500">Free next-day delivery</p>
          </div>)
      }
      <button onClick={AddItemBasket}className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
