import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css'
import type { Votes, VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';



function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
	  neutral: 0,
	  bad: 0,
  })

  function handleVote(key: VoteType) {
    setVotes({
      ...votes,
      [key]: votes[key] + 1
    })
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 })
  }

  return (
 <div className={css.app}>
  <CafeInfo />
  <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
 </div>
  )
}

export default App;
