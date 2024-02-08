import { CartItem } from "@/types/product";
import Image from "next/image";
import ProductQuantity from "../ProductView/ProductQuantity";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";
import { queryClient } from "@/lib/query";

export const ShoppingCartItemWide: React.FC<CartItem> = ({
  id,
  name,
  image,
  color,
  size,
  quantity,
  price,
}) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="my-4 grid grid-cols-10 items-center">
      <div className="col-span-5 flex gap-4">
        <Image src={image} alt={name} width={120} height={120} />
        <div className="flex w-full max-w-60 flex-col justify-center space-y-1">
          <div>{name}</div>
          <div className="text-sm text-gray-500">
            <span>Color: </span>
            <span>{color}</span>
          </div>
          <div className="text-sm text-gray-500">
            <span>Size: </span>
            <span>{size}</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 text-gray-500">&#8377;{price}</div>
      {/* //todo Optimistic Updating */}
      <ProductQuantity
        className="col-span-2 border"
        onIncreaseQuantity={() => {
          increaseItemQuantity({ id, size, color });
        }}
        onDecreaseQuantity={() => decreaseItemQuantity({ id, size, color })}
        size="sm"
        quantity={quantity}
      />
      <div className="col-span-2 flex items-center justify-between">
        {/* <span className="mt-1 cursor-pointer text-gray-500"> */}

        <div className=" text-lg">&#8377;{price * quantity}</div>

        <Button
          onClick={() => removeItemFromCart({ id, size, color })}
          size="icon"
          variant="secondary"
        >
          <IoClose size={18} />
        </Button>
        {/* </span> */}
      </div>
    </div>
  );
};

export const ShoppingCartItem: React.FC<CartItem> = ({
  id,
  name,
  image,
  color,
  size,
  quantity,
  price,
}) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  const { user } = useContext(AuthContext);

  const { mutate } = useMutation({
    mutationFn: (productToDelete: {
      id: string;
      color: string;
      size: string;
    }) =>
      axios.patch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart/add",
        productToDelete,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        },
      ),
    onMutate: async ({ id, color, size }) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData(["cart"]);
      if (!previousCart) return null;

      const findIndex = previousCart.findIndex(
        (item) => item.id === id && item.color === color && item.size === size,
      );
      if (findIndex === -1) return null;
      const temp = [...previousCart];
      temp.splice(findIndex, 1);

      queryClient.setQueryData(["cart"], temp);
      return { previousCart };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["cart"], context?.previousCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: increaseQuantity } = useMutation({
    mutationFn: (productToIncrease: {
      id: string;
      color: string;
      size: string;
    }) =>
      axios.patch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart/quantity/increase",
        productToIncrease,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        },
      ),
    onMutate: async ({ id, color, size }) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const prvCart = queryClient?.getQueryData(["cart"]);
      if (!prvCart) return null;

      const findIndex = prvCart.findIndex(
        (item) => item.id === id && item.color === color && item.size === size,
      );

      if (findIndex === -1) return null;
      const temp = prvCart.map((item, index) => {
        if (index === findIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      queryClient.setQueryData(["cart"], temp);
      return { prvCart };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["cart"], context?.prvCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: decreaseQuantity } = useMutation({
    mutationFn: (productToDecrease: {
      id: string;
      size: string;
      color: string;
    }) =>
      axios.patch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart/quantity/decrease",
        productToDecrease,
        { headers: { Authorization: `Bearer ${user.token}` } },
      ),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const prvCart = queryClient?.getQueryData(["cart"]);

      if (!prvCart) return null;

      const findIndex = prvCart.findIndex(
        (item) => item.id === id && item.color === color && item.size === size,
      );

      if (findIndex === -1) return null;
      const temp = prvCart.map((item, index) => {
        if (index === findIndex) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      queryClient.setQueryData(["cart"], temp);
      return { prvCart };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["cart"], context?.prvCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeItemHandler = ({
    id,
    size,
    color,
  }: {
    id: string;
    color: string;
    size: string;
  }) => {
    // removeItemFromCart({ id, size, color });
    mutate({ id, size, color });
  };
  const handleIncreaseQuantity = ({
    id,
    size,
    color,
  }: {
    id: string;
    color: string;
    size: string;
  }) => {
    // increaseItemQuantity({ id, size, color })
    increaseQuantity({ id, size, color });
  };

  return (
    <div className="my-4 flex gap-5">
      <Image src={image} alt={name} width={120} height={120} />
      <div className="w-full space-y-1">
        <div>{name}</div>
        <div className="text-sm text-gray-500">
          <span>Color: </span>
          <span>{color}</span>
        </div>
        <div className="text-sm text-gray-500">
          <span>Size: </span>
          <span>{size}</span>
        </div>

        {/* //todo Optimistic Updating */}
        <ProductQuantity
          onIncreaseQuantity={() => {
            handleIncreaseQuantity({ id, size, color });
          }}
          onDecreaseQuantity={() => decreaseQuantity({ id, size, color })}
          size="sm"
          quantity={quantity}
        />
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="mt-1 cursor-pointer text-gray-500">
          <Button
            onClick={() => removeItemHandler({ id, size, color })}
            size="icon"
            variant="secondary"
          >
            <IoClose size={18} />
          </Button>
        </span>
        <div className="mb-4 text-lg">&#8377;{price}</div>
      </div>
    </div>
  );
};
