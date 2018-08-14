using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
<<<<<<< HEAD
using Microsoft.AspNetCore.Identity;
=======
>>>>>>> 27be327f2460ac3890859853b58b2c6186f33945
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    public class Credentials
    {
<<<<<<< HEAD
        public string email { get; set; }
=======
        public string UserName { get; set; }
>>>>>>> 27be327f2460ac3890859853b58b2c6186f33945
        public string Password { get; set; }
    }
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
<<<<<<< HEAD
        readonly UserManager<IdentityUser> userManager;
        readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Credentials credentials)
        {
            var user = new IdentityUser() { UserName = credentials.email, Email = credentials.email };
            var result = await userManager.CreateAsync(user, credentials.Password);
            if (!result.Succeeded)
                return BadRequest(result.Errors);
            await signInManager.SignInAsync(user, isPersistent: false);
=======
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Credentials credentials)
        {
>>>>>>> 27be327f2460ac3890859853b58b2c6186f33945
            var jwt = new JwtSecurityToken();
            return Ok(new JwtSecurityTokenHandler().WriteToken(jwt));
        }
    }
}