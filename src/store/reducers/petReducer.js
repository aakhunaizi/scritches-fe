import * as types from "../actions/types";

const initialState = {
  petTypes: [
    { id: 1, type: "Dog" },
    { id: 2, type: "Cat" },
    { id: 3, type: "Bird" },
  ],
  pets: [],
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PETS:
      return { ...state, pets: action.payload };

    case types.ADD_PET:
      return { ...state, pets: [...state.pets, action.payload] };

    case types.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map((pet) =>
          action.payload.id === pet.id ? action.payload : pet
        ),
      };

    case types.DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id !== action.payload),
      };

    default:
      return state;
  }
};

export default petReducer;
