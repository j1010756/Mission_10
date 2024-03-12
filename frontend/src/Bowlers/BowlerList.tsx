import { useEffect, useState } from 'react';
import { Bowler } from '../Types/Bowler';

function BowlerList() {
  // set object with state and make initial state blank
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // make useEffect so we only pull data when needed
  useEffect(() => {
    const fetchBowlerData = async () => {
      // fetch info from api
      const rsp = await fetch('http://localhost:5243/bowler');

      // set variable to store data
      const b = await rsp.json();

      // set object state to json info
      setBowlerData(b);
    };

    // call function
    fetchBowlerData();

    // return empty array if no new data
  }, []);

  return (
    // make table to display data
    <>
      <div className="row">
        <h4 className="text-center">Bowling League Players</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// export component so it can be used in App.tsx
export default BowlerList;
