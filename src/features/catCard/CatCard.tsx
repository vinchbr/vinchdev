import React from "react";
import { Card, Image, Message, Dimmer, Icon, Header } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { CategorizedCats, CatImage } from "../../types";
import { useAppSelector } from "../../app/hooks";
import { listMenuActiveState } from "../listMenu/listMenuSlice";
import { AdminControls } from "./AdminControls";
import { AdoptionControls } from "./AdoptionControls";

interface Props {
  categorizedCats: CategorizedCats;
}

export const CatCard: React.FC<Props> = ({ categorizedCats }) => {
  const catCategory = useAppSelector(listMenuActiveState);

  const location = useLocation();

  const catImages: CatImage[] | undefined =
    catCategory === "all"
      ? Object.values(categorizedCats).flat()
      : categorizedCats[catCategory];
  return (
    <Card.Group doubling itemsPerRow={3} stackable>
      {catImages ? (
        catImages.map((catImage) => (
          <Dimmer.Dimmable as={Card} key={catImage.id}>
            <Card.Content>
              <Image src={catImage.url} fluid />
            </Card.Content>
            {catImage.adoptionStatus === "approved" ? (
              <></>
            ) : (
              <Card.Content extra>
                {location.pathname === "/admin" ? (
                  <AdminControls catImage={catImage} />
                ) : (
                  <AdoptionControls catImage={catImage} />
                )}
              </Card.Content>
            )}
            <Dimmer active={catImage.adoptionStatus === "approved"}>
              <Header as="h2" icon inverted>
                <Icon name="heart" />
                Adopted!
              </Header>
            </Dimmer>
          </Dimmer.Dimmable>
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
