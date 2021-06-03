import React from "react";
import styled from "styled-components";


const StyledErrorNotice = styled.div`

background: #fcf0f0;
    color: white;
    z-index: 50;
    border-radius: 2px;
    height: 48px;
    width: 60%;
    border-left: 5px solid #f50505;
    margin-bottom: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    .error-holder{
        width: 100%;
        color: red;
        height: 25px;
        white-space: nowrap;
        padding: 0 3px;
        margin: 0;
    }
`




const ErrorNotice = (props) => {
  const {children} = props
  console.log(props)
  return(
        <>
            {( typeof children === 'string' && children.length > 0) &&
                <StyledErrorNotice className= "regular settings labels">
                <p className="error-holder" >{children} </p>
                </StyledErrorNotice>
            }
        </>
    )
}

export default ErrorNotice;
