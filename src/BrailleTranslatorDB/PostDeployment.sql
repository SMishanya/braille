﻿/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

:r .\Common\PostDeployment\01.Language.sql
:r .\Dictionary\PostDeployment\01.DictionaryCode.sql
:r .\Dictionary\PostDeployment\02.Dictionary.sql
:r .\Translation\TestData\TestData.sql