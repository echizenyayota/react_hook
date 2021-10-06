import React, { useState } from "react";

export default function App() {
  const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 });

  const voteKinoko = () => {
    setVote({ ...vote, kinoko: vote.kinoko + 1 });
  };

  const voteTakenoko = () => {
    setVote({ ...vote, takenoko: vote.takenoko + 1 });
  };

  return (
    <>
      <p>きのこ : {vote.kinoko}</p>
      <p>たけのこ : {vote.takenoko}</p>
      <button onClick={voteKinoko}>きのこ</button>
      <button onClick={voteTakenoko}>たけのこ</button>
    </>
  );
}
