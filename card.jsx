import React from 'react'

const Card = ({name}) => {
  return (
    <>
    <div style={{ minHeight:'400px', minWidth:'300px', margin:'10px', backgroundColor:'skyblue', borderRadius:'10px', alignContent:'center'}}>
    <p style={{fontSize:'30px', fontWeight:'300', color:'white' }}>
        {name}
    </p>
    </div>
    </>
  )
}

export default Card
