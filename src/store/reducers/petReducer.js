import * as types from "../actions/types";

const initialState = {
  pets: [],
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PET:
      return {
        ...state,
        pets: [...state.pets, action.payload.newPet],
      };
    case types.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map((pet) => {
          if (action.payload.updatedPet.id === pet.id)
            return action.payload.updatedPet;
          else return pet;
        }),
      };
    case types.DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id !== action.payload.petId),
      };
    default:
      return state;
  }
};

export default petReducer;
