import React, { useState } from "react";
import { useParams } from "react-router";
import { redirect, useNavigate } from "react-router-dom";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { codeboxUtils } from "../utils/codebox-utils/codeboxUtils";

export default function CodeBox() {
  const params = useParams();
  const codeHash = params.code;

  const [code, setCode] = useState(codeHash ? decodeHashFromURL() : "");
  const [editorProperties, setEditorProperties] = useState(codeboxUtils);
  const navigate = useNavigate();

  function handleEditorChange(value) {
    setCode(value);
  }

  function handleLanguageSelection(evt) {
    setEditorProperties({
      ...editorProperties,
      selectedLanguage: evt.target.value,
    });
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  }

  function generateHashFromCode(code) {
    return btoa(encodeURIComponent(code));
  }

  function decodeHashFromURL() {
    const params = new URLSearchParams(window.location.search);
    const codeHash = params.get("code");
    if (codeHash) {
      return decodeURIComponent(atob(codeHash));
    }
    console.log("error decoding");
    return ""; // Default or error handling
  }

  function generateShareableLink(code) {
    const hash = generateHashFromCode(code);
    // return `http://localhost:3000?code=${hash}`;
    return hash;
  }

  function handleShareClick() {
    const link = generateShareableLink(code);
    navigate("?code=" + link);
    // navigator.clipboard.writeText(link).then(
    //   () => {
    //     alert(`Shareable link: ${link} copied to clipboard!`);
    //   },
    //   (err) => {
    //     console.error("Could not copy link to clipboard: ", err);
    //   }
    // );
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
          value={code}
        />
        <div className="codebox__footer">
          <div className="codebox__left-footer">
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
            <button className="codebox__copy" onClick={handleCopyToClipboard}>
              Copy to clipboard
            </button>
          </div>

          <button className="codebox__share" onClick={handleShareClick}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
