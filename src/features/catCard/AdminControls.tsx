import { Button, Card, Message } from "semantic-ui-react";
import { catApi, updateAdoptionStatus } from "../../services/cats";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { CatImage } from "../../types";

interface Props {
  catImage: CatImage;
}
export const AdminControls: React.FC<Props> = ({ catImage }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {catImage.adoptionStatus === "waiting" ? (
        <>
          <Button
            basic
            color="green"
            onClick={() => {
              dispatch(
                catApi.util.updateQueryData(
                  "getImages",
                  undefined,
                  (draftCatImages) =>
                    updateAdoptionStatus(draftCatImages, catImage, "approved")
                )
              );
            }}
          >
            Approve
          </Button>
          <Button
            color="red"
            onClick={() =>
              dispatch(
                catApi.util.updateQueryData(
                  "getImages",
                  undefined,
                  (draftCatImages) =>
                    updateAdoptionStatus(draftCatImages, catImage, "")
                )
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
      )}
    </>
  );
};
