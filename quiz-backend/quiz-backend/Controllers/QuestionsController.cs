using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quiz_backend.Models;
using Microsoft.EntityFrameworkCore;
namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }

        [HttpGet("{quizId}")]
        public IEnumerable<Question> Get([FromRoute]int quizId)
        {
            return context.Questions.Where(q => q.QuizId == quizId);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Question question)
        {
            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question);
        }
    }
}