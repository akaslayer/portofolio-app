import React from 'react'
import styled from "styled-components";

interface divPage {
  contnetLeft: JSX.Element;
  contentRight: JSX.Element;
}

const TwoContentContainer = styled.section`
  display:flex;
  width:100%;
  justify-content:space-between;

  div:nth-child(2){
    flex-basis:70%
  }
  background-color:white
`


const TwoContent: React.FC<divPage> = ({ contnetLeft, contentRight }) => {
  return (
    <TwoContentContainer className='px-40 py-40 font-neue-montreal'>
      <div>{contnetLeft}</div>
      <div>{contentRight}</div>
    </TwoContentContainer >
  )
}

export default TwoContent