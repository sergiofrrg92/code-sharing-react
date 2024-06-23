import React, { useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { codeboxUtils } from "../utils/codebox-utils/codeboxUtils";

export default function CodeBox(props) {
  const [code, setCode] = useState("");
  const [editorProperties, setEditorProperties] = useState(codeboxUtils);

  function handleEditorChange(value) {
    setCode(value);
  }

  function handleLanguageSelection(evt) {
    setEditorProperties({
      ...editorProperties,
      selectedLanguage: evt.target.value,
    });
  }

  return (
    <div className="codebox">
      <div className="codebox__container">
        <Editor
          className="codebox__editor"
          defaultLanguage="javascript"
          height="60vh"
          width="80vh"
          onChange={handleEditorChange}
          language={editorProperties.selectedLanguage}
        />
        <div className="codebox__footer">
          <select
            name="codebox__language"
            value={editorProperties.selectedLanguage}
            onInput={handleLanguageSelection}
          >
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="java">Java</option>
            <option value="typescript">Typescript</option>
          </select>
          <button className="codebox__share">Share</button>
        </div>
      </div>
    </div>
  );
}
