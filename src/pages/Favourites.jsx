import React, { useContext } from 'react'
import { MeetupContext } from '../context/main'
import MeetupList from '../components/meetups/MeetupList';

const FavouritesPage = () => {

  const {favourites} = useContext(MeetupContext);


  return (
    <div>
      <h1>My Favourites</h1>
      <MeetupList meetups={favourites} type='fav'/>
    </div>
  )
}

export default FavouritesPage