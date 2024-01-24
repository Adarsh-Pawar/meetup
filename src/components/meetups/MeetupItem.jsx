import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { MeetupContext } from "../../context/main";

const MeetupItem = (props) => {
  const {addFavourite, removeFavourite, itemIsFavoriteHandler} = useContext(MeetupContext);
  const itemIsFavorite = itemIsFavoriteHandler(props.id);

  const favouriteHandler = () => {
    if(itemIsFavorite){
      removeFavourite(props.id);
    }
    else{
      addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description
      })
    }
  }


  return (

      <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favouriteHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add To Favorites'}</button>
        </div>
        </Card>
      </li>
  
  );
};

export default MeetupItem;
