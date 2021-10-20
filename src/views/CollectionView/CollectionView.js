import React from "react";
import { Collection } from "@tipser/tipser-elements";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

const COLLECTION_ID = "604ce7d6a8587a3fbe69fa06";

export const CollectionView = () => {
    return (
        <>
            <Header />
            <Content>
                <h2 className="heading">Collection</h2>
                <Collection collectionId={COLLECTION_ID} />
            </Content>
        </>
    );
};
