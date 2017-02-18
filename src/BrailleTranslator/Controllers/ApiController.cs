using AutoMapper;
using BrailleTranslator.Entities;
using BrailleTranslator.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BrailleTranslator.Controllers {
	public class ApiController : Controller {

		private readonly IMapper _mapper;
		private readonly ApplicationDbContext _context;

		public ApiController(ApplicationDbContext context, IMapper mapper) {
			_context = context;
			_mapper = mapper;
		}

		[HttpGet]
		[Route("/api/translations")]
		public JsonResult Translations() {
			var translations = _context.Translations.Include(t => t.TranslationLanguages).ToList();
			List<TranslationItemVM> translationsVM = new List<TranslationItemVM>();
			foreach(var a in translations) {
				translationsVM.Add(_mapper.Map<TranslationItemVM>(a));
			}
			return Json(translationsVM);
		}

		[HttpGet]
		[Route("/api/translation")]
		public JsonResult Translation(int id) {
			return Json(_context.Translations.Where(t => t.Id == id).First());
		}

		[HttpPost]
		[Route("/api/saveTranslation")]
		public JsonResult SaveTranslation([FromBody] TranslationItemVM body) {
			var translation = _mapper.Map<Translation>(body);
			translation.TranslationLanguages = new List<TranslationLanguage>();
			foreach(int language in body.LanguageIds) {
				translation.TranslationLanguages.Add(new TranslationLanguage {
					LanguageId = language
				});
			}
			_context.Set<Translation>().Add(translation);
			_context.SaveChanges();
			return Json(translation.Id);
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
			var tempList = _context.DictionaryCodes
				.Select(x => new { Key = x.Value, x.Dictionaries.First(a=>a.LanguageId == languageId).Value });
			tempList.ToList().ForEach(x => resultList.Add(x.Key, x.Value));
			return Json(resultList);
		}

	}
}