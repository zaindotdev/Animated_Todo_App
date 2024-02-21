import React from "react";
import { useDispatch } from "react-redux";
import { addDoc } from "../features/docSlice";
import { useState } from "react";
export default function Form() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    if (title !== "" && desc !== "")
      dispatch(addDoc({ text: title, desc: desc }));
    settitle("");
    setdesc("");
  };
  return (
    <>
      <div className="absolute top-10 right-10">
        <form
          onSubmit={addTask}
          className="flex text-zinc-100 items-center justify-start gap-2 flex-col"
        >
          <input
            className="bg-zinc-500 text-zinc-100 p-2 font-semibold text-xl rounded-md outline-none"
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="bg-zinc-500 p-2 font-semibold text-xl rounded-md outline-none"
            type="text"
            name="desc"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
          <button
            type="submit"
            className="bg-zinc-500 px-5 py-2 font-bold text-lg text-zinc-100 rounded shadow-md"
          >
            Add Docs
          </button>
        </form>
      </div>
    </>
  );
}
