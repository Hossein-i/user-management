import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page = 1) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    return response.data.data;
  }
);

// export const getUser = createAsyncThunk("users/getOne", async (id) => {
//   const response = await axios.get(`https://reqres.in/api/users/${id}`);
//   return response.data.data;
// });

export const createUser = createAsyncThunk("users/createOne", async (args) => {
  await axios.post("https://reqres.in/api/users", args);
  return args;
});

export const updateUser = createAsyncThunk(
  "users/updateOne",
  async ({ id, ...args }) => {
    await axios.put(`https://reqres.in/api/users/${id}`, args);
    return { id, ...args };
  }
);

export const removeUser = createAsyncThunk("users/removeOne", async (id) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
  return id;
});

export const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const initialState = usersAdapter.getInitialState();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.upsertMany);
    builder.addCase(createUser.fulfilled, usersAdapter.addOne);
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      const { id, ...changes } = payload;
      usersAdapter.updateOne(state, { id, changes });
    });
    builder.addCase(removeUser.fulfilled, usersAdapter.removeOne);
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
