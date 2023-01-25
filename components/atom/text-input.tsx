import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  handleClick?: () => void;
}

const TextInput = ({ handleClick, children, ...props }: Props) => {
  return (
    <div className="flex w-full max-w-md">
      <input className="h-16 w-full px-6" type="text" {...props} />
      {handleClick ? (
        <button
          className="h-16 py-4 px-6 bg-black text-white"
          onClick={handleClick}
        >
          {children}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextInput;
