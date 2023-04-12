import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loadingQuotesReducer from "../features/loading_quotes/loadingQuotes";
export const store = configureStore({
  reducer: {
    loadingQuotes: loadingQuotesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
