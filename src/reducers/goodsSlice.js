import { createSlice } from "@reduxjs/toolkit";

const initialState = { goods: [
    {id: 1, name: "Макароны", description: "Макфа по акции", price: 54, available: true},
    {id: 2, name: "Шоколад", description: "Бабаевский с миндалем", price: 120, available: true},
    {id: 3, name: "Сосиски", description: "Вязанка 500 гр.", price: 200, available: true},
]};

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        add: (state, action) => {
            state.goods = [...state.goods, {
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                available: action.payload.available
            }];
        }, 
        remove: (state, action) => {
            state.goods = state.goods.filter((item) => item.id != action.payload);
        },
    }
});

export const { add, remove } = goodsSlice.actions;
export default goodsSlice.reducer; 