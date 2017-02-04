﻿using System.ComponentModel.DataAnnotations.Schema;

namespace BrailleTranslator.Entities {
	public class Translation {
		public int Id { get; set; }
		public string Value { get; set; }
		public int ViewCount { get; set; }
	}
}
