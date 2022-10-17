import React from 'react';
import { MdRemoveCircleOutline, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import classNames from 'classnames'; // 조건부 스타일링
import '../styles/TodoListItem.scss';

function TodoListItem({todo}) {
  // console.log(props);
  const {id, text, checked} = todo;
  return (
    <div className='TodoListItem'>
      <div className={classNames("Checkbox", {checked})}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove"><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem