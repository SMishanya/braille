using AutoMapper;
using BrailleTranslator.ViewModels;
using Newtonsoft.Json;
using System.Linq;

namespace BrailleTranslator.Entities {
	public class MappingProfile : Profile {
		public MappingProfile() {
			CreateMap<Translation, TranslationItemVM>()
				.ForMember(dest => dest.LanguageIds, opt => opt.Ignore())
				.ForMember(dest => dest.Letters, opt => opt.MapFrom(src => JsonConvert.DeserializeObject(src.Value)))
				.ForMember(dest => dest.LanguageIds, opt => opt.MapFrom(src => src.TranslationLanguages.Select(x=>x.LanguageId)));

			CreateMap<TranslationItemVM, Translation>()
				.ForMember(dest => dest.Id, opt => opt.Ignore())
				.ForMember(dest => dest.Value, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Letters)))
				.ForMember(dest => dest.HashCode, opt => opt.MapFrom(src => src.GetHashCode()));
		}
	}
}
