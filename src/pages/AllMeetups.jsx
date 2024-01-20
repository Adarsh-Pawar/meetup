import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {

const [allMeetups,setAllMeetups] = useState([]);


  useEffect(() => {
    fetch(
      "https://react-meetup-aba72-default-rtdb.firebaseio.com/meetups.json"
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key]
        }
      });
      setAllMeetups(meetups);
    });
  },[])


 
  

  return (
    <div>
    <div className="heading">
    <h1>All Meetups</h1>
    </div>
      <MeetupList meetups={allMeetups} type='all'/>
    </div>
  );
};

export default AllMeetupsPage;
