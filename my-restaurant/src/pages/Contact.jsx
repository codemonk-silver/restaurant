import React from 'react'
import ContactNav from '../components/ContactNav'
import ContactDetails from '../components/ContactDetails'
import ContactReservation from '../components/ContactReservation'

const Contact = () => {
  return (
    <div>
      <ContactNav />
      <ContactDetails />
      <ContactReservation />
    </div>
  )
}

export default Contact