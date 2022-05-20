import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ipicture {
    artist: string;
    year: number;
    photo: string;
    id: string;
}
export interface IStore {
    pictures: Ipicture[] 
};
const initialState : IStore = {
    pictures: [],
};

export const picturesSlice = createSlice({
    name: "pictures",
    initialState,
    reducers: {
        setPicturesData: (state: IStore, {payload}) => {
            state.pictures = payload;
        },
        addPictures : (state : IStore, {payload}: PayloadAction<Ipicture>) => {
            state.pictures.push(payload)
        },
        editPicture: (state : IStore, {payload}:PayloadAction<[string, string]> ) => {
            state.pictures = state.pictures.map((pic : Ipicture) =>{
                if (pic.id === payload[1]){
                    return { 
                        ...pic,
                        artist: payload[0],
                    };
                } else {
                    return pic;
                }
            });
        },
        deletePicture: (state, {payload}) => {
            state.pictures = state.pictures.filter((pic) =>{ return pic.id !== payload});
        }
    },
});

export const { setPicturesData, addPictures, editPicture, deletePicture } = picturesSlice.actions;
export default picturesSlice.reducer;
