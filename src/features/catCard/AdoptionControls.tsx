import { useAppDispatch } from "../../app/hooks";
import { Button, Card, Message } from "semantic-ui-react";
import { catApi, updateAdoptionStatus } from "../../services/cats";
import React from "react";
import { CatImage } from "../../types";

interface Props {
  catImage: CatImage;
}
export const AdoptionControls: React.FC<Props> = ({ catImage }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {catImage.adoptionStatus === "waiting" ? (
        <Card.Description>
          <Message info>Cat is waiting approval for adoption</Message>
        </Card.Description>
      ) : (
        <Button
          basic
          color="green"
          onClick={() =>
            dispatch(
              catApi.util.updateQueryData(
                "getImages",
                undefined,
                (draftCatImages) =>
                  updateAdoptionStatus(draftCatImages, catImage, "waiting")
              )
            )
          }
        >
          Adopt Me!
        </Button>
      )}
    </>
  );
};
