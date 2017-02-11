using BrailleTranslator.Entities;
using BrailleTranslator.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace BrailleTranslator.Controllers {
	public class ApiController : Controller {

		private ApplicationDbContext context;

		public ApiController(ApplicationDbContext context) {
			this.context = context;
		}

		[HttpGet]
		[Route("/api/translations")]
		public JsonResult Translations() {
			List<Translation> translations = new List<Translation>();
			translations = context.Translations.ToList();
			return Json(translations);
		}

		[HttpGet]
		[Route("/api/dictionary")]
		public JsonResult Dictionary(string language) {
			int languageId;
			switch (language) {
				case "uk":
					languageId = 2;
					break;
				case "ru":
					languageId = 3;
					break;
				default:
					languageId = 1;
				break;
			}

			Dictionary<string, string> resultList = new Dictionary<string, string>();
			var tempList = context.DictionaryCodes
				.Select(x => new { Key = x.Value, x.Dictionaries.First(a=>a.LanguageId == languageId).Value });
			tempList.ToList().ForEach(x => resultList.Add(x.Key, x.Value));
			return Json(resultList);
		}

	}
}