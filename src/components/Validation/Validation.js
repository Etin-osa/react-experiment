import React from 'react';


const Validation = (props) => {

  let cand = props.length;
  let lengthCheck = 'Text long enough'
  let styles = {
    'margin': '2rem'
  }

  if (cand <= 25) {
    if (cand === 0) {
      lengthCheck =  `You haven't written any text`
    } else {
      lengthCheck = 'Text too short!!'
    }
  }

  return (
    <h4 style={styles}>{lengthCheck}</h4>
  )
}

export default Validation;