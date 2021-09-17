class Welcome extends React.Component{
    //생성자
    constructor(props){
        super(props); //부모 생성자 호출

        //state: 객체 내부에서 정의되고 사용되는 데이터
        //  내부에서 변경 가능

        this.state ={
            color: "yellow",
        }
        console.log("Welcome props:", props);
        console.log("Welcome state:", this.state);
        console.log("Welcome 생성자 호출!");

    }
    // LifeCycle
    //Mount 단계 : rendering 직전
   /*
    componentWillMount(){
        console.log("LifeCycle: componentMount Calls" );
    }
    
    //마운트 단계 : renering 직후
    componentDidMount(){
        console.log("LifeCycle: componentMount Calls" );
    }
    */
   //New Mounting 라이프 사이클: construtor -> getEerivedStateFromProps
   //-> render->componentdidMount
   static getDerivedStateFromProps(nextProps, prevState){
       //prop에 받아온 값을 state에 넣어주고 싶을 때 호출
       console.log("New LifeCycle: getDerivedStateFromProps calls");
       console.log(nextProps, prevState);

       if ( nextProps.color !== prevState.color &&
           nextProps.color !== undefined){
               //새로운 Props을 state에 반영
               console.log("color state에 반영");
           return { color: nextProps.color}; //변경되 state리턴

        }
        //변경 사항이 없을떄
        return null;
   }
    componentWillUnmount(){
        console.log("LifeCycle: componentWillUnmount Calls" );
    }
    
    //Mount 단계: componentWillMount-> render-. componentDidMount
    //UnMOuNT단계 : componentWillUnmounte
    
    //Old updating 라이프 사이클:
    // componentWillRecieveProps -> componentWillupdate->componentDidUpdate
    /*
    componentWillReceiveProps(){
        console.log("LifeCycle: componentWillReceiveProps call");
    }
    componentWillUpdate() {
        console.log("LIfeCycle: componentWillupdate call");
    }
    componentDidUpdate(){
        console.log("LifeCycle: componentDidUpdate call")
    }
    */

    // New Updating 라이프 싸이클
    // getDerivedStateFromProps-> shouldComponentUpdate->render->
    // getSnapshotBeforeUpdate -> componentDidupdate
    shouldComponentUpdate(nextProps, nextState){
        //컴포넌트를 다시 랜더링 해야 할지 결정하는 단계
        console.log("New LifeCycle: shouldComponentUpdate calls");
        console.log(nextProps);
        console.log(nextState);
        return false; //리턴 값이 true면 다시 랜더링 
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        //컴포넌트 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환
        // -> dlrkqtmds componentUpdate에서 받아올 수 있다<
        console.log("NewLifeCycle: getSnapshotBeforeUpdate calls");
        console.log(prevProps);
        console.log(prevState);
        
        return null; // 반환된 값은 componentdidUpdate에서 받아올수있다.
    }
    componentDidUpdate(prevProps, prevState){
        // snapshot: getSnapshotBeforeUpdate에서 리턴한 값
         console.log("NewLifeCycle: componentDidupdadte calls");
         if(snapshot){
             console.log("업데이트 되기 전 snapshot:", snapshot);
         }
         console.log(prevProps);
         console.log(prevState);

    }

    render() {
        //JSX를 리턴
        console.log("render props:", this.props)
        console.log("LifeCycle: render")

        //컴포넌트에 style 부여
        // style 속성에 객체 전달
        const style = {
            color: this.state.color,
            backgroundColor: "black"
        }
        return (
            <div>
               <h3 style={style}>{ this.props.message }</h3>
               {this.props.children}
            </div>

        )
    }
}