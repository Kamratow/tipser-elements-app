import React from "react";
import {
    TipserElementsProvider,
    TipserEnv,
    TipserLang,
} from "@tipser/tipser-elements";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { CollectionView } from "./views/CollectionView";
import { CartPageView } from "./views/CartPageView";
import { CheckoutPageView } from "./views/CheckoutPageView";
import { ProductPageView } from "./views/ProductPageView";

import "@tipser/tipser-elements/dist/index.css";
import "./App.css";

const hashHistory = createBrowserHistory();

const tipserConfig = {
    lang: TipserLang.enUS,
    env: TipserEnv.stage,
    primaryColor: "#000000",
    disableCartIconDropdown: true,
    eventsHandlers: {
        onError: (error) => {
            console.log(error);
        },
        onAddToCart: ({ cartSize, product }) => {
            console.log("Hurray, you have added item to cart. ", product);
            console.log("Your cart size is now. ", cartSize);
        },
    },
    customUrls: {
        productBaseUrl: "/product",
        checkoutConfirmationUrl: "/checkout-confirmation",
        checkoutUrl: "/checkout",
        cartUrl: "/cart-page",
    },
};

const App = () => (
    <TipserElementsProvider
        posId={"59e86b79b8f3f60a94ecd26a"}
        config={tipserConfig}
        history={hashHistory}
    >
        <Router history={hashHistory}>
            <Switch>
                <Route exact path="/product/:productId">
                    <ProductPageView />
                </Route>
                <Route path="/collection" component={CollectionView} />
                <Route path="/cart-page" component={CartPageView} />
                <Route path="/checkout" component={CheckoutPageView} />
                <Redirect path="/" to="/collection" />
            </Switch>
        </Router>
    </TipserElementsProvider>
);

export default App;
