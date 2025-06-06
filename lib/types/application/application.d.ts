/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Source as BaseSource } from '../../../generators/base/types.js';
import type { BaseApplication, CommonClientServerApplication } from '../../../generators/base-application/types.js';
import type { ClientSourceType } from '../../../generators/client/types.js';
import type { LanguagesSource } from '../../../generators/languages/types.js';
import type { SpringBootSourceType } from '../../../generators/server/types.js';
import type { ExportApplicationPropertiesFromCommand } from '../../command/types.js';
import type { DockerSourceType } from '../../../generators/docker/types.ts';
import type { Entity } from './entity.js';

export type ApplicationType<E = Entity> = BaseApplication &
  CommonClientServerApplication<E> &
  ExportApplicationPropertiesFromCommand<typeof import('../../../generators/gradle/command.ts').default> &
  ExportApplicationPropertiesFromCommand<typeof import('../../../generators/server/command.ts').default> &
  ExportApplicationPropertiesFromCommand<typeof import('../../../generators/spring-boot/command.ts').default>;

export type BaseApplicationSource = BaseSource & SpringBootSourceType & ClientSourceType & LanguagesSource & DockerSourceType;
