/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "intercom-device-id-lupk8zyo=ba6b5306-246e-455b-a8bc-c733f5b36b1f; sessionKey=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; __cf_bm=AvcMeiF7NDcPYWHLxmMYkBt.8DP4lujVeHhbh.PQOg8-1691842748-0-AaGvLKJbDjLKOccfBB5LIR6QsiiOs+LzJpKNnYu6nIvB+cRvQSTYl9IRHQtelnK6xoDHnCTazPRcWXMr8Fh4vYQ=; intercom-session-lupk8zyo=emQ2amRGZHBNb0x0OWFOT2I5ajVrNlRRN0c4ZnVIQ20yaEtsME9STkZ2dERYVzc3Wm1MM1JzcTRyRTZPR0RHMi0tQXBJYkZmUzdzeTN3VWxTVWFPMEgwdz09--fab38de1bf3a19bbcd568fca6decae2170b0d447",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "BufferSize": 8,
    "SystemInterval": 3,
    "LogMessages": false,
    "Settings": {
        "AllSamples": false,
        "ClearFlags": false,
        "NoSamples": false,
        "PassParams": false,
        "PreventImperson": true,
        "PromptExperiment": true,
        "RetryRegenerate": false,
        "RenewAlways": true,
        "StripAssistant": false,
        "StripHuman": false,
        "SystemExperiments": false
    },
    "ExampleChatPrefix": "[EXAMPLE CHATS]\n",
    "RealChatPrefix": "[CHAT BEGIN]\n",
    "PromptMain": "{{MAIN_AND_CHARACTER}}\n{{CHAT_EXAMPLE}}\n{{CHAT_LOG}}\n{{JAILBREAK}}",
    "PromptReminder": "{{MAIN_AND_CHARACTER}}\n{{JAILBREAK}}\n{{LATEST_USER}}",
    "PromptContinue": "{{JAILBREAK}}\n{{LATEST_USER}}"
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval, PromptMain, PromptReminder, PromptContinue
 * when `RenewAlways` is set to true (default), `Main` is always the one being used

 * when `RenewAlways` is set to false, `Main` is sent on conversation start
 * then only `Continue` is sent as long as no impersonation happened
 * `Simple` and `Reminder` alternate every `SystemInterval`
 * 
 * {{MAIN_AND_CHARACTER}}, {{CHAT_EXAMPLE}}, {{CHAT_LOG}}, {{JAILBREAK}}, {{LATEST_ASSISTANT}}, {{LATEST_USER}}

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md#anchor-30
 */