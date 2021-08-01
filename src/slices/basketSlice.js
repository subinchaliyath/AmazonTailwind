import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const indexItem = state.items.findIndex((e) => e.id === action.payload);
      let newArray = [...state.items];
      newArray.splice(indexItem, 1);
      state.items =newArray;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = ({basket:{items}}) => (
  items.reduce((a,c)=>(a+c.price),0)
)

export default basketSlice.reducer;
