//https://codepen.io/FLCcrakers/pen/JZVeZE?editors=0111

//https://codepen.io/tinymce/pen/QjzgRW

import React, { useState } from "react";
// import ReactQuill from "react-quill";s
import * as Quill from 'quill'


const toolbarOptions = ["bold"];

const Editor =()=> {
    const [text, setText] = useState( "<div contenteditable='false'>Hector oscar Pacheco</div>")
 

const  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ]
  };

const  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];
 const handleProcedureContentChange = (content, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  
    return (
      <Quill
        theme="snow"
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleProcedureContentChange}
      >
        <div className="my-editing-area" />
      </Quill>
    );
  
}

export default Editor;
