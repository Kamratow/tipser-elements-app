import React from "react";
import {
    ModularCheckout,
    CheckoutProductList,
    CheckoutOrderConfirmation,
    CheckoutPayment,
    CheckoutOrderProcessing,
} from "@tipser/tipser-elements";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

export const CheckoutPageView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Checkout page</h2>
                <ModularCheckout>
                    <ModularCheckout.New>
                        <CheckoutProductList />
                        <CheckoutPayment />
                    </ModularCheckout.New>

                    <ModularCheckout.Processing>
                        <CheckoutOrderProcessing />
                    </ModularCheckout.Processing>

                    <ModularCheckout.Empty>
                        <div>Your cart is empty!</div>
                    </ModularCheckout.Empty>

                    <ModularCheckout.Confirmed>
                        <CheckoutOrderConfirmation />
                    </ModularCheckout.Confirmed>
                </ModularCheckout>
            </Content>
        </>
    );
};
