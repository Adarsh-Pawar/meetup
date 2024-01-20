import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const MeetupContext = createContext();

export const MeetupProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const addFavourite = (meetup) => {
    setFavourites((prevFavourites) => {
        const isAlreadyFavourite = prevFavourites.some((existingMeetup) => existingMeetup.id === meetup.id)
        if (isAlreadyFavourite) {
          toast.warning('ALready added to Favourites!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            return prevFavourites;
          } else {
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
            return [...prevFavourites, meetup];
          }
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
  }

  return (
    <MeetupContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {props.children}
    </MeetupContext.Provider>
  );
};