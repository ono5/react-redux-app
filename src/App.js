import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
  const profiles = [
    {name: "Harry", age: 30},
    {name: "Hanako", age: 3},
    {name: "NoName", age:20}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  ) 
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired // isREquiredで必ず設定
}

export default App;
