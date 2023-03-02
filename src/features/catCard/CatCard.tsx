import React from "react";
import { Button, Card, Image, Message } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { CategorizedCats, CatImage } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { listMenuActiveState } from "../listMenu/listMenuSlice";
import {
  addToAdoptionQueue,
  adoptionQueueStatus,
  approveAdoption,
  removeFromAdoptionQueue,
} from "../adoptionQueue/adoptionQueueSlice";

interface Props {
  categorizedCats: CategorizedCats;
}

export const CatCard: React.FC<Props> = ({ categorizedCats }) => {
  const catCategory = useAppSelector(listMenuActiveState);
  const adoptionStatus = useAppSelector(adoptionQueueStatus);
  const dispatch = useAppDispatch();

  const location = useLocation();

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
                location.pathname === "/admin" ? (
                  <>
                    <Button
                      basic
                      color="green"
                      onClick={() =>
                        dispatch(
                          approveAdoption({
                            id: catImage.id,
                            status: "approved",
                          })
                        )
                      }
                    >
                      Approve
                    </Button>
                    <Button
                      color="red"
                      onClick={() =>
                        dispatch(
                          removeFromAdoptionQueue({
                            id: catImage.id,
                            status: "",
                          })
                        )
                      }
                    >
                      Reject
                    </Button>
                  </>
                ) : (
                  <Card.Description>
                    <Message info>Cat is waiting approval for adoption</Message>
                  </Card.Description>
                )
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
