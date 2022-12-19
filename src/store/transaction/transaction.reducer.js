import { createSlice } from "@reduxjs/toolkit";
import { depositAction, getAllTransactionsAction } from "./transaction.actions";

const initialState = {
  allTransactions: [],
  loadingAllTransactionsStatus: "idle",
  isDepositingStatus: "idle",
  errorMessage: "",
  depositErrorMessage: "",
};

const TransactionSlice = createSlice({
  name: "TransactionsState",
  initialState,

  reducers: {
    resetAccount: (state) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {
    //All Transactions
    builder.addCase(getAllTransactionsAction.pending, (state) => {
      state.loadingAllTransactionsStatus = "loading";
    });
    builder.addCase(getAllTransactionsAction.fulfilled, (state, action) => {
      state.allTransactions =
        action.payload.account_statement.Transactions.reverse();
      state.loadingAllTransactionsStatus = "success";
    });
    builder.addCase(getAllTransactionsAction.rejected, (state, action) => {
      state.loadingAllTransactionsStatus = "error";
    });

    //Top up
    builder.addCase(depositAction.pending, (state) => {
      state.isDepositingStatus = "loading";
    });
    builder.addCase(depositAction.fulfilled, (state, action) => {
      state.isDepositingStatus = "success";
    });
    builder.addCase(depositAction.rejected, (state, action) => {
      state.isDepositingStatus = "error";
    });
  },
});

export const { resetAccount } = TransactionSlice.actions;

export default TransactionSlice.reducer;
