import React from "react";

const InputBox = () => {
  return (
    <div className="input-box">
      <form>
        Enter your text here:{" "}
        <input
          onchange={() => {}}
          onkeypress={this.onchange()}
          onpaste={this.onchange()}
          oninput={this.onchange()}
        />
      </form>
    </div>
  );
};

export default InputBox;
