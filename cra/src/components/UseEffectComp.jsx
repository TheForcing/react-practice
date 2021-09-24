import { useState, useEffect } from "react";

function UseEffectComp() {
    const [count, setCount] = useState(0);
    
    // 랜더링 될떄마다 Effect 발생
    useEffect(()=>{
        console.log("렌더링 될떄마다 Effect");
    })
    //처음 렌더링 될때만 실행하는 Effect
    //두번째 인자를 빈 배열로 전달
    // useEffect(()=>{
    //     console.log("처음 렌더링될떄만 Effect");
    // },[])  //의존 하고 있는 상태 변수가 없다.
    
    //특정 상태 변수가 변경될 때 실행하는 Effect
    // useEffect(()=>{
    //     console.log("count 변수가 업데이트 Effect");
    //     console.log("변경된 count:",count);

    // }, [count]); //이 Effect는 count변수에 의존

    //컴포넌트가 Unmount, 업데이트 직전에 실행하는Effect
    // Clean up 함수를 return
    useEffect(()=>{
        console.log("useEffect: count:",count);
        // Clean up
        return ()=>{
            console.log("클린업 함수");
            console.log("count:", count);
        }
    }, []);

    //오직 언마운트 시점에서만 뒷정리 함수를 호출하고 싶을 때
    // 두 번째 인자 값으로 빈 배열을 넘기면 된다.
    return(
        <div>
            <h3>Effect 상태</h3>
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>증가</button>
        </div>
    )
}

export default UseEffectComp;