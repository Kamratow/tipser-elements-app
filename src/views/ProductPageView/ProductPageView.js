import React from "react";
import { useParams } from "react-router";
import {
    ModularProduct,
    ProductTitle,
    ProductPrice,
    ProductImage,
    ProductVariantSelector,
    ProductBuyButton,
} from "@tipser/tipser-elements";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

export const ProductPageView = () => {
    const { productId } = useParams();

    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Product page</h2>
                <ModularProduct productId={productId}>
                    <ProductTitle />
                    <ProductPrice />
                    <ProductImage />
                    <ProductVariantSelector />
                    <ProductBuyButton />
                </ModularProduct>
            </Content>
        </>
    );
};
