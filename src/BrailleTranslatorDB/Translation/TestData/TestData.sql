SET IDENTITY_INSERT [tra].[Translation] ON
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (1, N'{ "letters": ["011010", "100010", "010100"] }');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (2, N'{ "letters": ["010110", "100111", "110110"] }');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (3, N'{ "letters": ["010010", "110010", "011100"] }');
SET IDENTITY_INSERT [tra].[Translation] OFF 

INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (1, 1);

INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (1, 2);
INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (2, 2);

INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (1, 3);
INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (2, 3);
INSERT INTO [tra].[TranslationLanguages] ([LanguageId], [TranslationId]) VALUES (3, 3);