import React, { useState, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
})


interface Props{
	content:string,
	setContent:React.Dispatch<React.SetStateAction<string>>	
}
const Ckeditor:React.FC<Props> = ({content, setContent}) => {
	const editor = useRef(null);
  console.log(content);
  

	return (
    <>
		<JoditEditor
			value={content}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
<div>{content}</div>
</>
	)
}

export default Ckeditor