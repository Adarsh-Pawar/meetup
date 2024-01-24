import React, { useContext } from 'react'
import { MeetupContext } from '../context/main'
import MeetupList from '../components/meetups/MeetupList';

const FavouritesPage = () => {

  const {favourites,totalFavourites} = useContext(MeetupContext);
  let content;

  if(totalFavourites === 0){
    content = 
      <div className="fav-message">
      <p>No Favourites!! Add some favourites first...</p>
      </div>
    
  }
  else {
    content = <MeetupList meetups={favourites}/>
  }

  return (
    <div>
      <h1>My Favourites</h1>
      <div>{content}</div>
    </div>
  )
}

export default FavouritesPage