import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, setSushi, nextFour }) {

  
  const sushiComponents = sushi.filter(sush => sush.id < 5).map((sush) => (
      <Sushi 
      key={sush.id}
      name={sush.name}
      img_url={sush.img_url}
      price={sush.price}
      created_at={sush.created_at}
      />
  ));


  

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton nextfour={sushiComponents}/>
    </div>
  );
}

export default SushiContainer;
