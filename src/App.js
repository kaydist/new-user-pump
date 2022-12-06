import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes, InAppRoutes } from "./routes";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Fragment>
            <BrowserRouter>
              <Routes>
                {AuthRoutes.map((route, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={route.path}
                      element={<AuthLayout>{route.element}</AuthLayout>}
                    />
                  );
                })}

                {InAppRoutes.map((route, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={route.path}
                      element={<AppLayout>{route.element}</AppLayout>}
                    />
                  );
                })}
              </Routes>
            </BrowserRouter>
          </React.Fragment>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
