CREATE TABLE [dict].[Dictionary]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [LanguageId] INT NOT NULL, 
    [DictionaryCodeId] INT NOT NULL, 
    [Value] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [FK_DictionaryCodes_Language] FOREIGN KEY ([LanguageId]) REFERENCES [cmn].[Language]([Id]),
    CONSTRAINT [FK_DictionaryCodes_Dictionary] FOREIGN KEY ([DictionaryCodeId]) REFERENCES [dict].[DictionaryCode]([Id]),
)
