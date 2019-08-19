using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSite.Models
{
    public class Verb
    {
        public Verb()
        {

        }

        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Translation { get; set; }

        [Required]
        public string IndicativoPresenteP1 { get; set; }

        [Required]
        public string IndicativoPresenteP2 { get; set; }

        [Required]
        public string IndicativoPresenteP3 { get; set; }

        [Required]
        public string IndicativoPresenteM1 { get; set; }

        [Required]
        public string IndicativoPresenteM2 { get; set; }

        [Required]
        public string IndicativoPresenteM3 { get; set; }
    }
}
