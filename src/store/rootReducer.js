import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import storage from "redux-persist/lib/storage";
import accountReducer from "./account/account.reducer";
import transactionReducer from "./transaction/transaction.reducer";
import usersReducer from "./users/users.reducer";

const persistConfig = {
  key: "PumpRoot",
  storage,
  whitelist: [],
};

const accountPersistConfig = {
  key: "account",
  storage: sessionStorage,
};

const rootReducers = combineReducers({
  account: persistReducer(accountPersistConfig, accountReducer),
  users: usersReducer,
  transactions: transactionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export { rootReducers, persistedReducer };
