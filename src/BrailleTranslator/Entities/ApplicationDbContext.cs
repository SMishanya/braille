using Microsoft.EntityFrameworkCore;

namespace BrailleTranslator.Entities {
	public class ApplicationDbContext : DbContext {
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {

		}

		public ApplicationDbContext() {

		}

		protected override void OnModelCreating(ModelBuilder modelBuilder) {

			//Translation
			modelBuilder.Entity<Translation>()
				.ToTable("Translation", "tra")
				.HasMany(t => t.TranslationLanguages)
				.WithOne(tl => tl.Translation)
				.HasForeignKey(tl => tl.TranslationId);
			modelBuilder.Entity<TranslationLanguage>()
				.ToTable("TranslationLanguage", "tra");

			//Dictionary
			modelBuilder.Entity<DictionaryCode>().ToTable("DictionaryCode", "dict");
			modelBuilder.Entity<Dictionary>().ToTable("Dictionary", "dict");
			modelBuilder.Entity<Dictionary>()
					.HasOne(d => d.DictionaryCode)
					.WithMany(s => s.Dictionaries);
		}

		public DbSet<TranslationLanguage> TranslationLanguages { get; set; }
		public DbSet<Language> Languages { get; set; }
		public DbSet<Translation> Translations { get; set; }
		public DbSet<DictionaryCode> DictionaryCodes { get; set; }
		public DbSet<Dictionary> Dictionaries { get; set; }
	}
}
