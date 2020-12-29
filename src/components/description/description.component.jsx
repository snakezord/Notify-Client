import React from 'react'
import { DescriptionContainer, DescriptionContent } from "./description.styles";


const Description = ({ description, name, email}) => {  
  return  description ? (
    <DescriptionContainer name={name} email={email} >
      <DescriptionContent>
        {description}
      </DescriptionContent>
      {
        name ? 
        (
        <DescriptionContent style={{color: '#ced4da'}}>
          {name}
        </DescriptionContent>
        ) : null
      }
      {
        email ? 
        (
        <DescriptionContent style={{color: '#ced4da'}}>
          {email}
        </DescriptionContent>
        ) : null
      }
    </DescriptionContainer>) : null
}

export default Description
