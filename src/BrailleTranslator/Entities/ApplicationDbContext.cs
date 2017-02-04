using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BrailleTranslator.Entities {
	public class ApplicationDbContext : DbContext {
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {

		}

		public ApplicationDbContext() {

		}

		protected override void OnModelCreating(ModelBuilder modelBuilder) {
			modelBuilder.Entity<Translation>().ToTable("Translation", "tra");
			modelBuilder.Entity<Dictionary>().ToTable("Dictionary", "dict");
		}

		public DbSet<Translation> Translations { get; set; }
		public DbSet<Dictionary> Dictionaries { get; set; }
	}
}
