import React, { useEffect, useState } from 'react';


function Info() {
    const[name, setName] = useState('');
    const[nickname, setNickname]= useState('');

    const onChangeName = e=> {
        setName(e.target.value);
    }
    const onChangeNickName = e =>{
        setNickname(e.target.value);
    }

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다");
        console.log({name,nickname});
    },[name,nickname]);
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <div><b>이름:</b>{name}</div>
                <div><b>닉네임:</b>{nickname}</div>
            </div>
        </div>
    );
};

//export default Info;