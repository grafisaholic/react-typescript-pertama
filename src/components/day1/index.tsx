import React, { Fragment } from 'react'
import Advanced from './advanced'
import Great from './great'

function PropsFundamentals() {
  const friends = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princes", last: "Diana" },
  ]

  const person = {
    name: {
      first: "John",
      last: "Doe"
    },
    messageCount: 10,
    friends: friends
  }

  return (
    <Fragment>
      <Great name={person.name} friends={person.friends} />
      <Advanced status='success'/>
    </Fragment>
  )
}

export default PropsFundamentals