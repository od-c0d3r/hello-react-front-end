import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../redux/message/messageSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const status = useSelector((state) => state.status);
  console.log(status);
  
  return (
    <>
      <button onClick={() => dispatch(fetchMessage())}>
        {status === 'pending' ? "Loading..": "Show message" }
      </button>
      <br />
      {message.message_content}
      <br />
    </>
  );
}

export default Greeting
