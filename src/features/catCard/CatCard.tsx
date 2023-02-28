import React from "react";
import { CategorizedCats, CatImage } from "../../types";
import { Card, Image, Message } from "semantic-ui-react";
import { useAppSelector } from "../../app/hooks";
import { breedMenuActiveState } from "../breedMenu/breedMenuSlice";

interface Props {
  categorizedCats: CategorizedCats;
}

export const CatCard: React.FC<Props> = ({ categorizedCats }) => {
  const catCategory = useAppSelector(breedMenuActiveState);
  const catImages: CatImage[] | undefined =
    catCategory === "all"
      ? Object.values(categorizedCats).flat()
      : categorizedCats[catCategory];
  return (
    <Card.Group doubling itemsPerRow={3} stackable>
      {catImages ? (
        catImages.map((catImage) => (
          <Card key={catImage.id}>
            <Image src={catImage.url} />
            {/*<Card.Content></Card.Content>*/}
          </Card>
        ))
      ) : (
        <Message>
          <Message.Header>Failed to load images</Message.Header>
          <p>
            Unfortunately the cats you are looking for are in another castle...
          </p>
        </Message>
      )}
    </Card.Group>
  );
};

export default CatCard;
