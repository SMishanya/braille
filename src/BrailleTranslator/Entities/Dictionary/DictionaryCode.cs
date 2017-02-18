using System.Collections.Generic;

namespace BrailleTranslator.Entities {
	public class DictionaryCode {
		public int Id { get; set; }
		public string Value { get; set; }

		public virtual ICollection<Dictionary> Dictionaries { get; set; }
	}
}
