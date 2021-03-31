import * as types from "./types";

import instance from "./instance";

// Actions

export const addPet = (newPet) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newPet) formData.append(key, newPet[key]);
    const res = await instance.post("/pets", formData);
    dispatch({
      type: types.ADD_PET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePet = (updatedPet) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedPet) formData.append(key, updatedPet[key]);
    const res = await instance.put("/pets", formData);

    dispatch({
      type: types.UPDATE_PET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePet = (petId) => async (dispatch) => {
  try {
    await instance.delete("/pets");
    dispatch({
      type: types.DELETE_PET,
      payload: petId,
    });
  } catch (error) {
    console.log(error);
  }
};
