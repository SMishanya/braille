using System.Collections.Generic;

namespace BrailleTranslator.Entities {
	public class TranslationLanguage {
		public int Id { get; set; }
		public int LanguageId { get; set; }
		public int TranslationId { get; set; }

		public virtual Language Language { get; set; }
		public virtual Translation Translation { get; set; }
	}
}
