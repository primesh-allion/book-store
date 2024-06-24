import React from "react";
import SummeryCard from "../../molecules/summeryCard/SummeryCard";
import { SUMMERY } from "../../../utilities/summery";

const SummeryCardList = () => {
  return (
    <div>
      {SUMMERY.map(({ title, description, id, image }) => (
        <SummeryCard
          id={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default SummeryCardList;
