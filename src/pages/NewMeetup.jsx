import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useNavigate} from 'react-router-dom'

const NewMeetupPage = () => {

    const navigate = useNavigate();

    const handleOnAddMeetup = (meetupData) => {
        fetch('https://react-meetup-aba72-default-rtdb.firebaseio.com/meetups.json',
          {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type':'appilcation/json'
            }
          }
        ).then(() => {
          navigate("/",{replace:true})
        });
    }
 
  return (
    <div>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={handleOnAddMeetup} />
    </div>
  )
}

export default NewMeetupPage