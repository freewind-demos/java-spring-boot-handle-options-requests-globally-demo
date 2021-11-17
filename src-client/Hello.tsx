import React, {FC, useState} from 'react';
import axios from 'axios';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const [getMessage, setGetMessage] = useState("")
  const [deleteMessage, setDeleteMessage] = useState("");

  async function fetchRemoteMessage() {
    const response = await axios.get<string>('http://localhost:8080/')
    setGetMessage(response.data);
  }

  async function deleteRemoteMessage() {
    const response = await axios.delete<string>('http://localhost:8080/')
    setDeleteMessage(response.data);
  }

  return <div className={'Hello'}>
    <h1>Hello React</h1>
    <button onClick={() => fetchRemoteMessage()}>Fetch remote message {getMessage}</button>
    <hr/>
    <button onClick={() => deleteRemoteMessage()}>Delete remote message {deleteMessage}</button>
  </div>;
}
