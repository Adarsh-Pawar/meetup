import { createContext, useState } from 'react';

export const MeetupContext = createContext();

export const MeetupProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (meetup) => {
    setFavourites((prevFavourites) => {
        const isAlreadyFavourite = prevFavourites.some((existingMeetup) => existingMeetup.id === meetup.id)
        if (isAlreadyFavourite) {
            alert("Already in favourites")
            return prevFavourites;
          } else {
            return [...prevFavourites, meetup];
          }
    });
  };

  const removeFavourite = (meetupId) => {
    setFavourites((prevFavourites) => prevFavourites.filter(meetup => meetup.id !== meetupId))
  }

  return (
    <MeetupContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {props.children}
    </MeetupContext.Provider>
  );
};