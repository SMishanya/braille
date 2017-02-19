using System.Collections.Generic;

namespace BrailleTranslator.Entities {
	public class Translation {
		public int Id { get; set; }
		public string Value { get; set; }
		public int ViewCount { get; set; }
		public int HashCode { get; set; }

		public virtual ICollection<TranslationLanguage> TranslationLanguages { get; set; }

		public override int GetHashCode() {
			unchecked {
				int hash = 23;
				foreach (char c in Value) {
					hash = hash * 31 + c;
				}
				return hash;
			}
		}
	}
}