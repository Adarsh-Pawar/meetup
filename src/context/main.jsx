import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const MeetupContext = createContext();

export const MeetupProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [totalFavourites, setTotalFavourites] = useState(0);

  const addFavourite = (meetup) => {
    setFavourites((prevFavourites) => {
       
            toast.success('Added to Favourites!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
              setTotalFavourites(prevFavourites.length+1);
            return [...prevFavourites, meetup];
          
    });
    
  };
  const removeFavourite = (meetupId) => {
    toast.success('Removed from Favourites!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      
    setFavourites((prevFavourites) => prevFavourites.filter(meetup => meetup.id !== meetupId));
    setTotalFavourites(favourites.length - 1);
  }

  function itemIsFavoriteHandler(meetupId) {
    return favourites.some(meetup => meetup.id === meetupId)
  }

  return (
    <MeetupContext.Provider value={{ favourites, addFavourite, removeFavourite, totalFavourites, itemIsFavoriteHandler }}>
      {props.children}
    </MeetupContext.Provider>
  );
};