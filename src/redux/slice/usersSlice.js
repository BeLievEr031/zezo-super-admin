import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getCount } from "../../http";

const initialState = {
  data: [],
  count: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      const { data } = actions.payload;
      // console.log("user from redux--> ", data);
      state.data = data;
    },
    setCount: (state, actions) => {
      const { data } = actions.payload;
      console.log("user from redux--> ", data);
      state.count = [data];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setCount } = UserSlice.actions;

export default UserSlice.reducer;

export function fetchUser(page, limit) {
  return async function fetchUserThunk(dispatch, getState) {
    try {
      const res = await getAllUsers(page, limit);
      dispatch(setUser(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCount() {
  return async function fetchCountThunk(dispatch, getState) {
    try {
      const res = await getCount();
      dispatch(setCount(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
