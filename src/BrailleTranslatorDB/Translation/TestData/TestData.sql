SET IDENTITY_INSERT [tra].[Translation] ON
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (1, N'[[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,1,0,1,0],[1,1,1,1,0,0],[1,0,0,1,1,0],[1,0,1,1,0,0],[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,0,0],[1,1,0,0,0,0]');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (2, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]]');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (3, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (4, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (5, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (6, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (7, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (8, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (9, N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]] ');
	INSERT INTO [tra].[Translation] ([Id], [Value]) VALUES (10,N'[[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]]');
SET IDENTITY_INSERT [tra].[Translation] OFF 

SET IDENTITY_INSERT [tra].[TranslationLanguage] ON
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (1, 1, 1);

INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (2, 1, 2);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (3, 2, 2);

INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (4, 1, 3);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (5, 2, 3);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (6, 3, 3);

INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (7, 1, 4);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (8, 1, 5);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (9, 1, 6);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (10, 1, 7);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (11, 1, 8);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (12, 1, 9);
INSERT INTO [tra].[TranslationLanguage] ([Id], [LanguageId], [TranslationId]) VALUES (13, 1, 10);
SET IDENTITY_INSERT [tra].[TranslationLanguage] OFF
