import { useState } from "react"

export default function Team (){
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const countAdd = team +1;
    setTeam(countAdd);
  }
  const removeAdd = () => {
    setTeam(team - 1)
  }

  const teamStyle = {
    border: '2px solid purple',
    margin: '15px', 
    padding: '15px',
    borderRadius: '10px'
  }

  return(
    <div style={teamStyle}>
      <h3>Plyaers: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={removeAdd}>Remove</button>
    </div>
  )
}