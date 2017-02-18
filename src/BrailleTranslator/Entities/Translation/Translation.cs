using System.Collections.Generic;

namespace BrailleTranslator.Entities {
	public class Translation {
		public int Id { get; set; }
		public string Value { get; set; }
		public int ViewCount { get; set; }

		public virtual ICollection<TranslationLanguage> TranslationLanguages { get; set; }
	}
}