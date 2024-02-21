import { useRef, useState } from "react";
import Card from "./Card";
import Form from "./Form";
import { IoMdAdd, IoMdClose } from "react-icons/io";
function Foreground() {
  const ref = useRef();
  const [openClose, setOpenClose] = useState(<IoMdAdd />);
  const [toggle, setToggle] = useState(false);

  const handleForm = () => {
    setToggle((prevToggle) => !prevToggle);
    setOpenClose(toggle ? <IoMdAdd /> : <IoMdClose />);
  };
  return (
    <>
      <div
        ref={ref}
        className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-start z-10 gap-10 p-10"
      >
        <button
          onClick={handleForm}
          className="bg-zinc-500 absolute bottom-10 left-10 p-2  font-bold text-3xl text-zinc-100 rounded-full shadow-inner"
          type="button"
        >
          {openClose}
        </button>
        {toggle ? <Form /> : ""}
        <div className="flex flex-wrap">
          <Card reference={ref} />
        </div>
      </div>
    </>
  );
}

export default Foreground;
