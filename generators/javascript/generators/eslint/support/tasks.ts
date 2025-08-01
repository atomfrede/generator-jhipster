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
import { asWritingTask } from '../../../../base-application/support/index.js';
import { clientRootTemplatesBlock } from '../../../../client/support/files.js';
import type { Application as JavascriptApplication, Entity as JavascriptEntity } from '../../../types.d.ts';

export const writeEslintClientRootConfigFile = asWritingTask<JavascriptEntity, JavascriptApplication<JavascriptEntity>>(
  async function writingEslintFile({ application }) {
    await this.writeFiles({
      blocks: [
        clientRootTemplatesBlock({
          templates: [{ sourceFile: 'eslint.config.js.jhi', destinationFile: ctx => `${ctx.eslintConfigFile}.jhi` }],
        }),
      ],
      context: application,
      rootTemplatesPath: this.fetchFromInstalledJHipster('javascript/generators/eslint/templates'),
    });
  },
);
