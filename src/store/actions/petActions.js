import instance from "./instance";
import * as types from "./types";

// Add Pet
export const addPet = (ownerId, newPet) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newPet) formData.append(key, newPet[key]);
    const res = await instance.post(`/owners/${ownerId}/pets`, formData);
    dispatch({ type: types.ADD_PET, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Update Pet
export const updatePet = (updatedPet) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedPet) formData.append(key, updatedPet[key]);
    const res = await instance.put(`/pets/${updatedPet.id}`, formData);
    dispatch({ type: types.UPDATE_PET, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Delete Pet
export const deletePet = (petId) => async (dispatch) => {
  try {
    await instance.delete(`/pets/${petId}`);
    dispatch({ type: types.DELETE_PET, payload: petId });
  } catch (error) {
    console.log("Error: ", error);
  }
};
