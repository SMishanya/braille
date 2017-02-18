CREATE TABLE [tra].[TranslationLanguage]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[LanguageId] INT NOT NULL,
	[TranslationId] INT NOT NULL, 
    CONSTRAINT [FK_TranslationLanguage_Language] FOREIGN KEY ([LanguageId]) REFERENCES [cmn].[Language]([Id]),
    CONSTRAINT [FK_TranslationLanguage_Translation] FOREIGN KEY ([TranslationId]) REFERENCES [tra].[Translation]([Id]) 
)
