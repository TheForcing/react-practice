import React from "react";
import PropTypes from 'prop-types';

// function Item(props){ //매개변수로 props를 전달
//     console.log("PROPS:", props);
function Item({name, checked}) {// 구조 분해 할당, props에서 name 필드 분해    
 /*return(
        <h3>My Item: {props.name}</h3>
    )
}
*/
//조건부 랜더링 1. 삼항 연산자 이용
// checked가 true면 앞에 * 붙이자

//   return (
//     <h3>  
//     { checked ? <b>*</b>: null}
//       My Item: {name}</h3>
//   )
//조건부 랜더링 2. 논리 연산자 이용
  return(
      <h3>
        { checked && <b>*</b>}
        My Item: {name}
      </h3>
  )

  }
  //props를 검사하기 (타입검사, 기본값 설정)
  Item.prototype= {
      name: PropTypes.string.isRequired, // name Prop: string 필수정보
      checked: PropTypes.bool.isRequired // checked: bool, 필수정보

  }

  Item.defaultProps= {
      name: "Unnamed",
      checked: true
  }
//내보내기
export default Item;