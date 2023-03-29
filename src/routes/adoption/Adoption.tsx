import { Container, Grid, Loader } from "semantic-ui-react";
import { useGetImagesQuery } from "../../services/cats";
import ListMenu from "../../features/listMenu/ListMenu";
import CatCard from "../../features/catCard/CatCard";
import "./Adoption.css";
export const Adoption = () => {
  const catImages = useGetImagesQuery();

  return (
    <Container className="adoptionContainer" data-testid="adoptionList">
      {catImages.isFetching || !catImages.data ? (
        <Loader active inline="centered" />
      ) : (
        <Grid data-testid="adoptionList">
          <Grid.Column width={3}>
            <ListMenu
              listItems={Object.keys(catImages.data)}
              title="Available Breeds"
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

export default Adoption;
