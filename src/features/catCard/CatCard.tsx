import React from "react";
import { CategorizedCats, CatImage } from "../../types";
import { Button, Card, Image, Message } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { breedMenuActiveState } from "../breedMenu/breedMenuSlice";
import {
  addToAdoptionQueue,
  adoptionQueueStatus,
} from "../adoptionQueue/adoptionQueueSlice";

interface Props {
  categorizedCats: CategorizedCats;
}

export const CatCard: React.FC<Props> = ({ categorizedCats }) => {
  const catCategory = useAppSelector(breedMenuActiveState);
  const adoptionStatus = useAppSelector(adoptionQueueStatus);
  console.log(adoptionStatus);
  const dispatch = useAppDispatch();

  const catImages: CatImage[] | undefined =
    catCategory === "all"
      ? Object.values(categorizedCats).flat()
      : categorizedCats[catCategory];
  return (
    <Card.Group doubling itemsPerRow={3} stackable>
      {catImages ? (
        catImages.map((catImage) => (
          <Card key={catImage.id}>
            <Card.Content>
              <Image src={catImage.url} fluid />
            </Card.Content>
            <Card.Content extra>
              {adoptionStatus.some(
                (catStatus) => catStatus.id === catImage.id
              ) ? (
                <Card.Description>
                  <Message info>Cat is waiting approval for adoption</Message>
                </Card.Description>
              ) : (
                <Button
                  basic
                  color="green"
                  onClick={() =>
                    dispatch(
                      addToAdoptionQueue({ id: catImage.id, status: "waiting" })
                    )
                  }
                >
                  Adopt Me!
                </Button>
              )}
            </Card.Content>
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
