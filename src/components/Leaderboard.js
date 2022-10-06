import useFetchLeaderBoard from "./useFetchLeaderboard";

function Leaderboard() {
  const leaderboard = useFetchLeaderBoard([]);

  console.log(leaderboard);
  return (
    <table>
      <tr>
        <th>Poke-ID</th>
        <th>Name</th>
        <th>Anzahl Siegee</th>
      </tr>
      {leaderboard &&
        leaderboard.map((entrie) => (
          <tr key={entrie._id}>
            <th>{entrie.id}</th>
            <th>{entrie.name}</th>
            <th>{entrie.wins}</th>
          </tr>
        ))}
    </table>
  );
}

export default Leaderboard;
