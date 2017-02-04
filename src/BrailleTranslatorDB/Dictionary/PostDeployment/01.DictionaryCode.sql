SET IDENTITY_INSERT [dict].[DictionaryCode] ON
	--Languages
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (1, 'Language > English');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (2, 'Language > Ukrainian');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (3, 'Language > Russian');

	--Translator page info
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (4, 'Translator > Title');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (5, 'Translator > About');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (6, 'Translator > Note');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (7, 'Translator > SelectLanguage');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (8, 'Translator > Add');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (9, 'Translator > CopyShareLink');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (10, 'Translator > Clear');

	--Translations list page
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (11, 'Translator > ViewCount');
	INSERT INTO [dict].[DictionaryCode] ([Id], [Value]) VALUES (12, 'Translator > SavedTranslations');

	--Translations detail page


SET IDENTITY_INSERT [dict].[DictionaryCode] OFF

