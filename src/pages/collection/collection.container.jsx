import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={match.params.collectionId}>
    {({ loading, data: { getCollectionsByTitle } }) => {
      if (loading) return <Spinner />;
      return <CollectionPage />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
