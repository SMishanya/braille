using Newtonsoft.Json;
using System.Collections.Generic;

namespace BrailleTranslator.ViewModels {
	public class TranslationItemVM {

		public int Id { get; set; }

		public List<int[]> Letters { get; set; }

		public int ViewCount { get; set; }

		public List<int> LanguageIds { get; set; }

		public override int GetHashCode() {
			unchecked {
				int hash = 23;
				foreach (char c in JsonConvert.SerializeObject(Letters)) {
					hash = hash * 31 + c;
				}
				return hash;
			}
		}
	}
}
