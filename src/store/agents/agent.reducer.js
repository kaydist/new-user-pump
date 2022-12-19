import { createSlice } from "@reduxjs/toolkit";
import { addAgentAction, getAllAgentsAction } from "./agent.actions";

const initialState = {
  allAgents: [],
  loadingAllAgentsStatus: "idle",
  isAddingAgentstatus: "idle",
  errorMessage: "",
};

const AgentSlice = createSlice({
  name: "AgentsState",
  initialState,

  reducers: {
    resetAccount: (state) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {
    //All Agents
    builder.addCase(getAllAgentsAction.pending, (state) => {
      state.loadingAllAgentsStatus = "loading";
    });
    builder.addCase(getAllAgentsAction.fulfilled, (state, action) => {
      state.allAgents = action.payload.agents;
      state.loadingAllAgentsStatus = "success";
    });
    builder.addCase(getAllAgentsAction.rejected, (state, action) => {
      state.loadingAllAgentsStatus = "error";
    });

    //Add Agent Action
    builder.addCase(addAgentAction.pending, (state) => {
      state.isAddingAgentstatus = "loading";
    });
    builder.addCase(addAgentAction.fulfilled, (state, action) => {
      state.isAddingAgentstatus = "success";
    });
    builder.addCase(addAgentAction.rejected, (state, action) => {
      state.isAddingAgentstatus = "error";
    });
  },
});

export const { resetAccount } = AgentSlice.actions;

export default AgentSlice.reducer;
