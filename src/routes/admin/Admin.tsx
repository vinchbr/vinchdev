import { Container, Grid, Loader } from "semantic-ui-react";

import { useGetImagesQuery } from "../../services/cats";

import CatCard from "../../features/catCard/CatCard";
import ListMenu from "../../features/listMenu/ListMenu";

export const Admin = () => {
  const catImages = useGetImagesQuery();
  return (
    <Container className="adoptionContainer" data-testid="adminList">
      {catImages.isFetching || !catImages.data ? (
        <Loader active inline="centered" />
      ) : (
        <Grid data-testid="adoptionList">
          <Grid.Column width={3}>
            <ListMenu
              listItems={["waiting", "approved"]}
              title="Adoption Status"
            />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <CatCard categorizedCats={catImages.data} />
          </Grid.Column>
        </Grid>
      )}
    </Container>
  );
};
