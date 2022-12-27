import React, { useRef, useEffect } from "react";

const CodeRefFocus = () => {
  const focusInputRef = useRef(null);

  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
  });
  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="user">
            <input type="text" name="user" id="user" ref={focusInputRef}placeholder='user' />
          </label>
          <label htmlFor="pass">
            <input type="password" name="pass" id="pass" placeholder='password'/>
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default CodeRefFocus;
