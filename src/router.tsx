import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import UserHome from "./components/user/UserHome";
import UserOffers from "./components/user/UserOffers";
import UserBids from "./components/user/UserBids";
import ConfirmRegistration from "./components/security/ConfirmRegistration";
import StaticLayoutContainer from "./components/layout/StaticLayoutContainer";
import ActivateRegistration from "./components/security/ActivateRegistration";
import LoginPage from "./components/security/LoginPage";
import CompleteRegistration from "./components/security/CompleteRegistration";
import SecureRoute from "./components/security/SecureRoute";
import HomePage from "./components/HomePage";
import Registration from "./components/security/Registration";
import CreateArticle from "./components/article/CreateArticle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StaticLayoutContainer />}>
      <Route index element={<HomePage />} />
      <Route path="registro">
        <Route index element={<Registration />} />
        <Route path="confirmar" element={<ConfirmRegistration />} />
        <Route
          path="activar/:registrationId"
          element={<ActivateRegistration />}
        />
        <Route
          path="completar"
          element={
            <SecureRoute>
              <CompleteRegistration />
            </SecureRoute>
          }
        />
      </Route>
      <Route path="acceder" element={<LoginPage />} />
      <Route path="muro" element={<HomeFeed />} />
      <Route
        path="perfil"
        element={
          <SecureRoute>
            <UserHome />
          </SecureRoute>
        }
      >
        <Route path="ofertas">
          <Route index element={<UserOffers />} />
          <Route path="crear" element={<CreateArticle />} />
        </Route>
        <Route path="pujas" element={<UserBids />} />
      </Route>
    </Route>
  )
);

export default router;
