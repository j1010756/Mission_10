
namespace BowlingAPI.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _bowlerContext;

        public EFBowlerRepository(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }

        // get bowler and team info
        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
