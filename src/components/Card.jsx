/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeDoc } from "../features/docSlice";
import { useEffect } from "react";

function Card({ reference }) {
  const dispatch = useDispatch();
  const docs = useSelector((state) => state.docs);

  useEffect(() => {
    JSON.parse(localStorage.getItem("docs"));
  }, []);

  useEffect(() => {
    localStorage.setItem("docs", JSON.stringify(docs));
  }, [docs]);

  return (
    <>
      {docs.map((prev) => (
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.1 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 200 }}
          dragElastic={0.2}
          className="h-80 w-64 bg-zinc-600 rounded-[20px] p-5 text-zinc-100 relative z-50 border-2 border-gray-100"
          key={prev.id}
        >
          <FaRegFileAlt />
          <div key={prev.id}>
            <h1 className="w-full mt-5 text-2xl bg-inherit font-bold text-zinc-300">
              {prev.text}
            </h1>
            <p className="w-full mt-5 text-sm text-justify bg-inherit font-light text-zinc-300">
              {prev.desc}
            </p>
            <button
              onClick={() => dispatch(removeDoc(prev.id))}
              className="text-xl absolute bottom-4 left-[45%]"
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Card;
