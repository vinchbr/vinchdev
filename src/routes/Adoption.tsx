import { Grid, Loader } from "semantic-ui-react";
import { useGetImagesQuery } from "../services/cats";
import ListMenu from "../features/listMenu/ListMenu";
import CatCard from "../features/catCard/CatCard";

export const Adoption = () => {
  const catImages = useGetImagesQuery();

  if (catImages.isFetching || !catImages.data) {
    return <Loader active inline="centered" />;
  }

  return (
    <Grid>
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
  );
};

export default Adoption;
