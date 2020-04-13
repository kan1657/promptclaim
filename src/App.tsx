import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { refresh, addCircleOutline, document } from "ionicons/icons";
import Home from "./pages/Home";
import HistoryPage from "./pages/history";
import MyWarranty from "./pages/MyWarranty";
import AddWarranty from "./pages/AddWarranty";
import DynamicWarrantyInfo from "./pages/DynamicWarrantyInfo";
import Notification from "./pages/Notification";
import AddClaimDate from "./pages/AddClaimDate"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} />
            <Route path="/myWarranty" component={MyWarranty} exact={true} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/addWarranty" component={AddWarranty} />
            <Route path="/myWarranty/:id" component={DynamicWarrantyInfo} />
            <Route path="/notification" component={Notification} />
            <Route path="/AddClaimDate" component={AddClaimDate}/>

            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/myWarranty" />}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="myWarranty" href="/myWarranty">
              <IonIcon icon={document} />
              <IonLabel>Warranty</IonLabel>
            </IonTabButton>
            <IonTabButton tab="addWarranty" href="/addWarranty">
              <IonIcon icon={addCircleOutline} />
              <IonLabel>Add Warranty</IonLabel>
            </IonTabButton>
            <IonTabButton tab="history" href="/history">
              <IonIcon icon={refresh} />
              <IonLabel>History</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
// <Redirect exact from="/" to="/home" />