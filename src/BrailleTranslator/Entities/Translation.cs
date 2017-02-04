using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace BrailleTranslator.Entities
{
	public class Translation {
		public int Id { get; set; }
		public string Value { get; set; }
		public int ViewCount { get; set; }
	}
}
