import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket} from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const AddItemBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  const RemoveItemBasket = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width="200" height="200" objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} />
        {hasPrime && (
          <div className="flex items-center space-x-2 ">
            <Image
              height={30}
              width={50}
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs tetx-gray-500">Free next-day delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end ">
        <button onClick={AddItemBasket}  className="button mt-auto">Add to Basket </button>
        <button onClick={RemoveItemBasket} className="button mt-auto">Remove from Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
