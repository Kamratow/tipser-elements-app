import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    CartIcon,
    ModularCart,
    CartProductList,
    CartSummary,
} from "@tipser/tipser-elements";

import "./Header.css";

export const Header = () => {
    const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

    const showCartPopup = () => {
        setIsCartPopupVisible(true);
    };

    const hideCartPopup = () => {
        setIsCartPopupVisible(false);
    };

    return (
        <header className="header">
            <nav className="navigation">
                <Link className="te-logo" to="/">
                    Add some logo here
                </Link>
                <div
                    className="cart-icon-wrapper"
                    onMouseEnter={showCartPopup}
                    onMouseLeave={hideCartPopup}
                >
                    <CartIcon />
                    {isCartPopupVisible && (
                        <div className="cart-popup-wrapper">
                            <ModularCart>
                                <CartProductList />
                                <CartSummary />
                            </ModularCart>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
