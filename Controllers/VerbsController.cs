using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebSite.Models;

namespace WebSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerbsController : ControllerBase
    {
        private AppDbContext DbContext;

        public VerbsController(AppDbContext context)
        {
            DbContext = context;
        }

        [HttpPost]
        [Route("AddVerb")]
        public async Task<Object> AddVerb(VerbModel model)
        {
            var verb = new Verb
            {
                Name = model.Name,
                Translation = model.Translation,
                IndicativoPresenteP1 = model.IndicativoPresenteP1,
                IndicativoPresenteP2 = model.IndicativoPresenteP2,
                IndicativoPresenteP3 = model.IndicativoPresenteP3,
                IndicativoPresenteM1 = model.IndicativoPresenteM1,
                IndicativoPresenteM2 = model.IndicativoPresenteM2,
                IndicativoPresenteM3 = model.IndicativoPresenteM3
            };
            try
            {
                if (!(DbContext.Verbs.Any(x => x.Name == verb.Name)))
                {
                    DbContext.Verbs.Add(verb.Adapt<VerbModel>());
                    var result = DbContext.SaveChanges();
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}