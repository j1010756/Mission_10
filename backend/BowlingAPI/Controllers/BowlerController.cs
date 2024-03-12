using BowlingAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace BowlingAPI.Controllers
{
    // make route only controller name
    [Route("[controller]")]
    [ApiController]

    // have class inherit from controller base
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }

        public IEnumerable<object> Get()
        {
            // get players from marlins and sharks
            var bowlerData = _bowlerRepository.Bowlers
                .Where(x => x.TeamId == 1 || x.TeamId == 2)
                .Select(bowler => new
                {
                    bowler.BowlerId,
                    bowler.BowlerLastName,
                    bowler.BowlerFirstName,
                    bowler.BowlerMiddleInit,
                    bowler.BowlerAddress,
                    bowler.BowlerCity,
                    bowler.BowlerState,
                    bowler.BowlerZip,
                    bowler.BowlerPhoneNumber,
                    bowler.TeamId,

                    // get team name from team table
                    TeamName = _bowlerRepository.Teams.FirstOrDefault(team => team.TeamId == bowler.TeamId)?.TeamName
                })
                .ToArray();

            return bowlerData;
        }


    }
}
