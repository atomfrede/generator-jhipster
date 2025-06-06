/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type LanguagesGenerator from './generator.js';
import detectLanguage from './support/detect-language.js';
import { languagesAsChoices } from './support/languages.js';

export async function askI18n(this: LanguagesGenerator) {
  if (!this.askForMoreLanguages) return;
  const nativeLanguage = this.jhipsterConfig.nativeLanguage;
  const answers = await this.prompt(
    [
      {
        type: 'confirm',
        name: 'enableTranslation',
        message: 'Would you like to enable internationalization support?',
        default: true,
      },
      {
        type: 'list',
        name: 'nativeLanguage',
        message: 'Please choose the native language of the application',
        choices: () => languagesAsChoices([...this.supportedLanguages.values()]),
        default: () => (this.options.reproducible ? 'en' : detectLanguage()),
        store: true,
      },
    ],
    this.config,
  );
  if (nativeLanguage !== answers.nativeLanguage) {
    this.languagesToApply.push(answers.nativeLanguage);
  }
}

export async function askForLanguages(this: LanguagesGenerator, { control }) {
  if (!this.askForMoreLanguages) {
    return;
  }
  const currentLanguages = this.jhipsterConfig.languages ?? [];
  const answers = await this.prompt([
    {
      when: this.jhipsterConfigWithDefaults.enableTranslation,
      type: 'checkbox',
      name: 'languages',
      message: 'Please choose additional languages to install',
      choices: () => {
        const languageOptions = [...this.supportedLanguages.values()];
        const nativeLanguage = this.jhipsterConfigWithDefaults.nativeLanguage;
        const choices = languagesAsChoices(languageOptions.filter(l => l.languageTag !== nativeLanguage));
        const defaults = this.jhipsterConfigWithDefaults.languages ?? [];
        return [...choices.filter(({ value }) => defaults.includes(value)), ...choices.filter(({ value }) => !defaults.includes(value))];
      },
      default: () => this.jhipsterConfigWithDefaults.languages,
    },
  ]);
  if (answers.languages) {
    if (control.existingProject) {
      this.languagesToApply.push(...answers.languages.filter(newLang => !currentLanguages.includes(newLang)));
    } else {
      this.languagesToApply.push(...answers.languages);
    }
  }
}
