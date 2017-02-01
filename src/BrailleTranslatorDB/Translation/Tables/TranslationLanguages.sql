CREATE TABLE [tra].[TranslationLanguages]
(
	[LanguageId] INT NOT NULL,
	[TranslationId] INT NOT NULL, 
    CONSTRAINT [FK_TranslationLanguages_Language] FOREIGN KEY ([LanguageId]) REFERENCES [cmn].[Language]([Id]),
    CONSTRAINT [FK_TranslationLanguages_Translation] FOREIGN KEY ([TranslationId]) REFERENCES [tra].[Translation]([Id]) 
)
