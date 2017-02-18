using System.Collections.Generic;

namespace BrailleTranslator.ViewModels {
	public class TranslationItemVM {

		public int Id { get; set; }

		public List<int[]> Letters { get; set; }

		public int ViewCount { get; set; }

		public List<int> LanguageIds { get; set; }
	}
}
