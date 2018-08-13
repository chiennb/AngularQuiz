using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    public class Credentials
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Credentials credentials)
        {
            var jwt = new JwtSecurityToken();
            return Ok(new JwtSecurityTokenHandler().WriteToken(jwt));
        }
    }
}