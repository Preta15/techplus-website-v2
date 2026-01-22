import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserRole } from '@/types/user';

interface UserState {
  userRole: UserRole;
  userId: string;
}

const initialState: UserState = {
  userRole: '',
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<UserRole>) => {
      state.userRole = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    clearUser: (state) => {
      state.userRole = '';
      state.userId = '';
    },
  },
});

export const { setUserRole, setUserId, clearUser } = userSlice.actions;
export default userSlice.reducer;
