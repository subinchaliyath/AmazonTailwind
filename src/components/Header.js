import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 mx-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width="150"
            height="40"
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden sm:flex item-center rounded-md flex-grow cursor-pointor h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 height-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            name=""
            id=""
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-black font-bold     text-center rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 pd-2 pl-1 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
