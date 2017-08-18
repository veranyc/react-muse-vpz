
export default const VZAPI {
}

//POST to create Artists

export default const CreateUserFetch {
  let userURL = 'https://morning-brushlands-34721.herokuapp.com/api/v1/users'
  fetch(userURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user})
  })
  .then(response => response.json())
  .then(jsonObj => console.log(jsonObj))
  }
}

//POST to create Event
//POST to create setlist
//POST to create Songs
//Post to create setlist_songs

//POST to create Event (notes)
//POST to create Pictures

//GET user
//POST user


//
