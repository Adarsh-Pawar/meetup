import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

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
          toast.success('New Meetup Added!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
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