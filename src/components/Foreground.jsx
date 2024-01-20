import { useRef, useState } from "react";
import Card from "./Card";
import Form from "./Form";
function Foreground() {
  const ref = useRef();
  const [openClose, setOpenClose] = useState("Open Form");
  const [toggle, setToggle] = useState(false);

  const handleForm = () => {
    setToggle((prevToggle) => !prevToggle);
    setOpenClose(toggle ? "Open Form" : "Close Form");
  };
  return (
    <>
      <div
        ref={ref}
        className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-start z-10 gap-10 p-10"
      >
        <button
          onClick={handleForm}
          className="bg-zinc-500 absolute top-10 left-10 px-5 py-2 font-bold text-xl text-zinc-100 rounded-md shadow-inner"
          type="button"
        >
          {openClose}
        </button>
        {toggle ? <Form /> : ""}
        <Card reference={ref} />
      </div>
    </>
  );
}

export default Foreground;
