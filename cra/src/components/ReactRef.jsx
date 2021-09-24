import React, {Component} from 'react';

class ReactRef extends Component {
    constructor(props){
        super(props);
        // 참조 객체 생성: DOM 요소에 엘리멘트를 지정하기 위한 ref
        this.textInput = React.createRef();
        // input#id 엘리멘트를 참조
    }
    JavaScriptFoucs(){
        //VJS로 DOM객체에 접근
        document.getElementById("id").style.backgroundColor = "lightblue";
        document.getElementById("id").focus();
    }
    RefFocus =(e)=>{
        //ref를 이용한 엘리멘트 접근
        console.log("REF:", this.textInput);
        console.log(this.textInput.current);
        //DOM노드를 얻기위해, current속성이용
        this.textInput.current.style.backgroundColor="lightgreen";
        this.textInput.current.focus();
    }
    render(){
        // console.log("REF:", this.textInput);
        return(
            <>
             <input id="id" type="text" />
             <input type="button" value="JS Focus"
               onClick={this.JavaScriptFoucs}/>
            <input type="button" value="Ref focus"
              onClick={this.RefFocus}/>
            </>
        )

    }
}

export default ReactRef;