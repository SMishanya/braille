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


			Dictionary<string, DictionaryVM> list = new Dictionary<string, DictionaryVM>();
			list = context.Dictionaries.ToList()
				.Where(x => x.LanguageId == 2).Select(x => new DictionaryVM { Key = x.Value , Value = x.Value }).ToDictionary(x=>x.Key);

			return Json(list);
		}

	}
}