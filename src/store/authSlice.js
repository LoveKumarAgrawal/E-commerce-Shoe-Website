// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status : false,
//     userData: null
// }


// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.status = true;
//             state.userData = action.payload.userData;
//         },
//         logout: (state) => {
//             state.status = false;
//             state.userData = null;
//         }
//      }
// })

// export const {login, logout} = authSlice.actions;

// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Load initial authentication state from local storage, if available
const initialState = {
    status: localStorage.getItem("authStatus") === "true",
    userData: JSON.parse(localStorage.getItem("userData")) || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            // Update local storage
            localStorage.setItem("authStatus", "true");
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            // Clear local storage
            localStorage.removeItem("authStatus");
            localStorage.removeItem("userData");
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
