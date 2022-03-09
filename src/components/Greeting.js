import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../state/message/messageSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  return (
    <>
      <div class="d-flex justify-content-center">
        <button onClick={() => dispatch(fetchMessage())}>Show message</button>
      </div>
      <br />
      {message.message_content}
    </>
  );
}

export default Greeting
