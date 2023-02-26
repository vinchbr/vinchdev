import { useGetImagesQuery } from "../services/cats";
import BreedMenu from "../features/breedMenu/BreedMenu";
import { Grid, Loader } from "semantic-ui-react";
import { CategorizedCats, CatImage, ImageResponse } from "../types";
import CatCard from "../features/catCard/CatCard";

function categorizeCats(catImages: ImageResponse) {
  return catImages.reduce((acc: CategorizedCats, curr: CatImage) => {
    const breedName: string =
      curr.breeds.length > 0 ? curr.breeds[0].name : "unknown";

    if (!acc[breedName]) {
      acc[breedName] = [];
    }

    acc[breedName].push(curr);

    return acc;
  }, {});
}

export const Adoption = () => {
  const catImages = useGetImagesQuery();

  if (catImages.isFetching || !catImages.data) {
    return <Loader active inline="centered" />;
  }

  const categorizedCats = categorizeCats(catImages.data);

  return (
    <Grid>
      <Grid.Column width={3}>
        <BreedMenu categories={Object.keys(categorizedCats)} />
      </Grid.Column>
      <Grid.Column stretched width={12}>
        <CatCard categorizedCats={categorizedCats} />
      </Grid.Column>
    </Grid>
  );
};

export default Adoption;
