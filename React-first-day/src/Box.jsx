import React from 'react';

function Box(props) {
  const clickMe = () => {
    alert("첫 리액트 결과입니다")
  } 
  return(
    <div className="box">
        Box{props.num}
      {props.name}
      <button onClick={clickMe}>클릭</button>
      </div>
  )
}

export default Box;