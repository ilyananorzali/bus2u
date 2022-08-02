import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'
import { auth } from '../firebase';
import {db} from '../firebase'

// 

const initialState = {
  username: '',
  id: '',
  email: '',
  authenticated: false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

export const createUserWithEmailAndPassword = createAsyncThunk('auth/signup', async ({email, password, username},thunkAPI) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    await res.user.updateProfile({
      displayName: username
    })
    .then(() => {
      const payload = {
        email: res.user.email,
        username: res.user.displayName,
        id: res.user.uid
      }
      return payload
    })
   
    // here dispatch signup
    return res;



  } catch (err) {
    console.error(err)
    return thunkAPI.rejectWithValue(err.toString())
    // here dispatch error 
  }
})

export const signInWithEmailAndPassword = createAsyncThunk('auth/signin', async ({email, password}, thunkAPI) => {
  try {
    const user =  await 
    auth.signInWithEmailAndPassword(email, password)
    .then((u) => {
      const data = { email: u.user.email, id: u.user.uid}
      return data
    }).catch(error => {
      return error.message
    })
    
    return user;



  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err.toString())
    // here dispatch error 

  }
})

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await firebase.auth().signOut();
    console.log("userlogout")
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue({ error: error.message });

  } 
});



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      
      return state;
    },
    updateUser: (state, {payload}) => {
      console.log(payload)
      state.authenticated = payload.authenticated;
      state.email = payload.email;
      state.id = payload.id;
      state.username = payload.username;
      state.isSuccess = payload.isSuccess;
      // state = {...action.payload};
    }
  },
  extraReducers: {
    [createUserWithEmailAndPassword.fulfilled]: (state, {payload}) => {
      console.log(payload)
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.username;
      state.id = payload.id;
      state.authenticated = true;
    

    },
    [createUserWithEmailAndPassword.pending]: (state) => {
      state.isFetching = true;
      
    }, 
    [createUserWithEmailAndPassword.rejected]: (state, {payload}) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },



    [signInWithEmailAndPassword.fulfilled]: (state, {payload}) => {
      console.log(payload)
      state.isFetching = false;
      state.authenticated = true;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.username;
      state.id = payload.uid;
     
     
    },
    [signInWithEmailAndPassword.pending]: (state) => {
      state.isFetching = true;
      
    }, 
    
    [signInWithEmailAndPassword.rejected]: (state, {payload}) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
     
    },
    [logout.pending]: (state) => {
      state.isFetching = true;
      
    },

    [logout.fulfilled]: (state) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = initialState.email;
      state.username = initialState.username;
      state.id = initialState.uid;
      state.authenticated = false;

    },
    [logout.rejected]: (state, {payload}) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
      state.authenticated = false;
    }

  } 
});
// builder.addCase(createUserWithEmailAndPassword.fulfilled, (state, action) => {
//   console.log('payload1', payload);
//   state.isFetching = false;
//   state.isSuccess = true;
//   state.email = action.payload.user.email;
//   state.username = action.payload.user.email;
// }),
// [createUserWithEmailAndPassword.pending]: (state, {payload}) => {
//   console.log('payload2', payload);
//   state.isFetching = true;
  
// },
// [createUserWithEmailAndPassword.rejected]: (state, {payload}) => {
//   console.log('payload3', payload);
//   state.isFetching = true;
//   state.isError = true;
//   state.errorMessage = payload.message
// },

export const { clearState } = userSlice.actions
export const {updateUser} = userSlice.actions;

// Selector
export const selectUser = state => state.user;




export default userSlice.reducer