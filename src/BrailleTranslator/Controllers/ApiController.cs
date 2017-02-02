using AspNetCoreAngular2.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BrailleTranslator.Controllers {
	public class ApiController : Controller {

		private ApplicationDbContext context;

		public ApiController(ApplicationDbContext context) {
			this.context = context;
		}

		[HttpGet]
		[Route("/api/translations")]
		public JsonResult Translations(string name) {

			DbSet<Translation> list = context.Set<Translation>();

			TranslationModel[] list1 = {
				new TranslationModel { id = 1, name = "{ letters: [010101], [000000], [111111] }"},
				new TranslationModel { id = 2, name = "{ letters: [011101], [100010], [110101] }" }
			};
			return Json(list1);
		}


		public class TranslationModel {
			public int id { get; set; }
			public string name { get; set; }
		}
	}
}