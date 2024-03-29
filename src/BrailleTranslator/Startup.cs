﻿using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using BrailleTranslator.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using AutoMapper;

namespace BrailleTranslator {
	public class Startup {

		public Startup(IHostingEnvironment env) {
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		public void ConfigureServices(IServiceCollection services) {
			services.AddMvc()
				.AddMvcOptions(options => {
					options.CacheProfiles.Add("NoCache", new CacheProfile {
						NoStore = true,
						Duration = 0
					});
				});
			services.AddDbContext<ApplicationDbContext>(
				options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
			);
			services.AddAutoMapper();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
			loggerFactory.AddConsole();

			if (env.IsDevelopment()) {
				app.UseDeveloperExceptionPage();
			}

			app.Use(async (context, next) => {
				await next();

				if (context.Response.StatusCode == 404 &&
					!Path.HasExtension(context.Request.Path.Value) &&
					!context.Request.Path.Value.StartsWith("/node_modules/") &&
					!context.Request.Path.Value.StartsWith("/api/")) {
					context.Request.Path = "/index.html";
					await next();
				}
			});

			if (string.IsNullOrWhiteSpace(env.WebRootPath)) {
				env.WebRootPath = Directory.GetCurrentDirectory();
			}

			string libPath = Path.GetFullPath(Path.Combine(env.WebRootPath, @"..\node_modules\"));
			app.UseStaticFiles(new StaticFileOptions {
				FileProvider = new PhysicalFileProvider(libPath),
				RequestPath = new PathString("/node_modules")
			});

			app.UseStaticFiles(new StaticFileOptions {
#if DEBUG
				OnPrepareResponse = (context) => {
					// Disable caching of all static files.
					context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
					context.Context.Response.Headers["Pragma"] = "no-cache";
					context.Context.Response.Headers["Expires"] = "-1";
				}
#endif
			});

			app.UseMvc();
		}
	}
}
