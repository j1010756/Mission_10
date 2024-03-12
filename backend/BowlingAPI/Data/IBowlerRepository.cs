namespace BowlingAPI.Data
{
    public interface IBowlerRepository
    {
        // get bowler and team info
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team>  Teams { get; }
    }
}
