import React, {FC, useState} from 'react';
import axios from 'axios';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const [message, setMessage] = useState("")

  async function fetchRemoteMessage() {
    const response = await axios.get<string>('http://localhost:8080/')
    setMessage(response.data);
  }

  async function deleteRemoteMessage() {
    await axios.delete<string>('http://localhost:8080/')
  }

  return <div className={'Hello'}>
    <h1>Hello React</h1>
    <button onClick={() => fetchRemoteMessage()}>Fetch remote message {message}</button>
    <hr/>
    <button onClick={() => deleteRemoteMessage()}>Delete remote message</button>
  </div>;
}
