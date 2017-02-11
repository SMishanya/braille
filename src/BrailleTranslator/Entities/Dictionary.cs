using System.ComponentModel.DataAnnotations.Schema;

namespace BrailleTranslator.Entities {
	public class Dictionary {
		public int Id { get; set; }
		public int DictionaryCodeId { get; set; }
		public int LanguageId { get; set; }
		public string Value { get; set; }

		public virtual DictionaryCode DictionaryCode { get; set; }
	}
}
