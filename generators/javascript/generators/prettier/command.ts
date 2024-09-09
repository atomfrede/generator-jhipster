/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
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
import type { JHipsterCommandDefinition } from '../../../../lib/command/index.js';
import gitCommand from '../../../git/command.js';

const { monorepository } = gitCommand.configs!;

const command = {
  configs: {
    fromInit: {
      description: 'Generate prettier config using init defaults',
      cli: {
        type: Boolean,
        hide: true,
      },
      scope: 'generator',
    },
    prettierConfigFile: {
      description: 'Prettier configuration file',
      cli: {
        type: Boolean,
        hide: true,
      },
      configure: (gen: any) => {
        gen.prettierConfigFile = gen.fromInit || gen.monorepositoryRoot ? '.prettierrc.yml' : '.prettierrc';
      },
      scope: 'generator',
    },
    prettierTabWidth: {
      description: 'Default tab width for prettier',
      cli: {
        type: Number,
      },
      default: 2,
      scope: 'storage',
    },
    monorepository,
    monorepositoryRoot: {
      cli: {
        type: Boolean,
        hide: true,
      },
      scope: 'generator',
    },
  },
  import: [],
} as const satisfies JHipsterCommandDefinition;

export default command;
