using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSite.Models
{
    public class VerbModel
    {
        [Key]
        public int Id { get; set; }
        public string Verb { get; set; }
        public string Translation { get; set; }
        public string IndicativoPresenteP1 { get; set; }
        public string IndicativoPresenteP2 { get; set; }
        public string IndicativoPresenteP3 { get; set; }
        public string IndicativoPresenteM1 { get; set; }
        public string IndicativoPresenteM2 { get; set; }
        public string IndicativoPresenteM3 { get; set; }
    }
}
