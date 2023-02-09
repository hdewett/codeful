import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App(props) {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [editorValue, setEditorValue] = useState("");

  return (
    <>
      <Editor
        className="w-screen"
        apiKey="tlmdigq0ng9fhdtdoh1dg4x2yvlpol8cyfebn0gse6eyf7x0"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        onEditorChange={(newValue, editor) => {
          props.updateEntry("entry", newValue);
        }}
        init={{
          height: 500,
          menubar: false,
          selector: 'textarea',
          plugins: ['codesample',
          "advlist autolink lists link image",
          "charmap print preview anchor help",
          "searchreplace visualblocks code",
          "insertdatetime media table paste wordcount"
        ],
          codesample_languages: [
            { text: 'HTML/XML', value: 'markup' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'CSS', value: 'css' },
            { text: 'PHP', value: 'php' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Python', value: 'python' },
            { text: 'Java', value: 'java' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' }
          ],
            toolbar: "codesample bold italic | alignleft aligncenter alignright | undo redo "
        }}
      />
      <button onClick={log}>Log Editor</button>
    </>
  );
}