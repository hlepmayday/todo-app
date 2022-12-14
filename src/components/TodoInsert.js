import React, { useCallback, useState } from 'react';
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert() {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return (
    <form className='TodoInsert'>
      <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
      <button type='submit'> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert