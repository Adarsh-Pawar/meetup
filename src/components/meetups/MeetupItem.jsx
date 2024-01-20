import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { MeetupContext } from "../../context/main";

const MeetupItem = (props) => {
  const {addFavourite, removeFavourite} = useContext(MeetupContext);

  const addToFavouritesHandler = () => {
    addFavourite({
      id: props.id,
      title: props.title,
      image: props.image,
      address: props.address,
      description: props.description
    })
  }

  const removeFavouriteHandler = () => {
    removeFavourite(props.id);
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
          {props.type==='all' && <button onClick={addToFavouritesHandler}>Add to favourite</button>}
          {props.type==='fav' && <button onClick={removeFavouriteHandler}>Remove from favourites</button>}
        </div>
        </Card>
      </li>
  
  );
};

export default MeetupItem;
