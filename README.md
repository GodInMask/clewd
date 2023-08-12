<div align="center">
<a href="https://gitgud.io/ahsk/clewd/">
<h1>Clewd</h1>
  <img
    height="120"
    width="120"
    alt="Clewd"
    title="Clewd"
    src="https://gitgud.io/ahsk/clewd/-/raw/master/media/logo.png"
    align="left"
  />

doom & coom
</a>
<br>

Warning: Some accounts are getting _hard-censored_ by the **rats**, you might notice it

<br>
<br>
<hr>
<a href="https://gitgud.io/ahsk/clewd/-/archive/master/clewd-master.zip">
   <img src="https://gitgud.io/ahsk/clewd/-/raw/master/media/program.png">
</a>
<h2><a href="https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md">CHANGELOG</a></h2>
</div>

## Requirements

nodejs>=20.4.*

## Defaults

### SettingName: (DEFAULT)/opt1/opt2...

 - `AllSamples`: (false)/true
    * mutually exclusive with `NoSamples`
    * true converts every message except the last two to "sample dialogues"
    * you're "H" and the AI is "A"
    * whatever the AI replies with is kept (only outgoing)
    * [see this](https://docs.anthropic.com/claude/docs/prompt-troubleshooting-checklist#the-prompt-is-formatted-correctly) for more information
    - Human->H
    - Assistant->A

 - `ClearFlags`: (false)/true
    * possibly snake-oil

 - `NoSamples`: (false)/true
    * mutually exclusive with `AllSamples`
    * true converts all "sample dialogues" to real dialogue
    * you're "Human" and the AI is "Assistant"
    * whatever the AI replies with is kept (only outgoing)
    * [see this](https://docs.anthropic.com/claude/docs/prompt-troubleshooting-checklist#the-prompt-is-formatted-correctly) for more information
    - H->Human
    - A->Assistant

 - `PassParams`: (false)/true
    * true will send the temperature you set on your frontend
    * only values under <=1
    * this could get your account banned
    * if clewd stops working, set to false

 - `PreventImperson`: (false)/true
    * true trims the bot reply immediately if he says "Human:", "Assistant:", "H:" or "A:"
    * making it so it doesn't hallucinate speaking as you __(chance of missing some spicy things)__

 - `PromptExperiment`: (true)/false
    * true is an alternative way to send your prompt to the AI
    * experiment before setting to false

 - `RenewAlways`: (true)/false
    * true is the default pre-3.0 behavior
    * false is basically a better version of the old `RecycleChats`

 - `RetryRegenerate`: (false)/true
    * true uses the AI's own retry mechanism when you regenerate on your frontend
    * instead of a new conversation
    * experiment with it

 - `StripAssistant`: (false)/true
    * true strips the "Assistant:" prefix from the last assistant message

 - `StripHuman`: (false)/true
    * true strips the "Human:" prefix from the last human message

 - `SystemExperiments`: (true)/false
    * only has any effect when `RenewAlways` is false
    * true alternates between Reminder and Continue prompts
    * false only uses Reminder



## Examples

**safe setup**
> **PreventImperson**: false (higher chance of spicy stuff)

> **RenewAlways**: true

---

**experimental setup**
> **PromptExperiment**: true

> **SystemExperiments**: true

> **RetryRegenerate**: true

> **StripAssistant**: true (add prefill to jailbreak in this case)

> **PreventImperson**: true

> **RenewAlways**: false

## Downloads

> ### [Download latest version](https://gitgud.io/ahsk/clewd/-/archive/master/clewd-master.zip)

> ### [Download 2.7](https://gitgud.io/ahsk/clewd/-/archive/2.7/clewd-2.7.zip)

> ### [Download 1.6](https://gitgud.io/ahsk/clewd/-/archive/1.6/clewd-1.6.zip)