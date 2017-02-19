SET IDENTITY_INSERT [tra].[Translation] ON
	INSERT INTO [tra].[Translation] ([Id], [Value], [HashCode]) VALUES (1, N'[[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,1,0,1,0],[1,1,1,1,0,0],[1,0,0,1,1,0],[1,0,1,1,0,0],[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,0,0],[1,1,0,0,0,0]]', 1056433686);
	INSERT INTO [tra].[Translation] ([Id], [Value], [HashCode]) VALUES (2, N'[[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,1,0,1,0],[1,1,1,1,0,1],[1,0,0,1,1,0],[1,1,1,1,0,0],[1,0,0,1,1,0],[1,0,1,0,1,0],[1,1,0,1,1,1],[1,0,0,0,1,0]]', 881342427);
	INSERT INTO [tra].[Translation] ([Id], [Value], [HashCode]) VALUES (3, N'[[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,1,0,1,0],[1,1,1,1,0,0],[1,0,0,1,1,0],[1,1,1,1,0,0],[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,0,0],[1,0,0,0,1,0]]', -468090353);

SET IDENTITY_INSERT [tra].[Translation] OFF 

SET IDENTITY_INSERT [tra].[TranslationLanguage] ON
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (1, 1, 1);

INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (2, 2, 2);

INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (3, 3, 3);

SET IDENTITY_INSERT [tra].[TranslationLanguage] OFF
