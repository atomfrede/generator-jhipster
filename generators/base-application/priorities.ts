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

import type { Priority } from 'yeoman-generator';
import { PRIORITY_NAMES as PRIORITY_NAMES_BASE, QUEUES as QUEUES_BASE, QUEUE_PREFIX } from '../base/priorities.js';
import { BOOTSTRAP_APPLICATION } from '../base-simple-application/priorities.js';

const { DEFAULT, TRANSFORM, MULTISTEP_TRANSFORM } = PRIORITY_NAMES_BASE;

const CONFIGURING_EACH_ENTITY = 'configuringEachEntity';
const CONFIGURING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${CONFIGURING_EACH_ENTITY}`;

const LOADING_ENTITIES = 'loadingEntities';
const LOADING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${LOADING_ENTITIES}`;

const PREPARING_EACH_ENTITY = 'preparingEachEntity';
const PREPARING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY}`;

const PREPARING_EACH_ENTITY_FIELD = 'preparingEachEntityField';
const PREPARING_EACH_ENTITY_FIELD_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY_FIELD}`;

const PREPARING_EACH_ENTITY_RELATIONSHIP = 'preparingEachEntityRelationship';
const PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE = `${QUEUE_PREFIX}${PREPARING_EACH_ENTITY_RELATIONSHIP}`;

const POST_PREPARING_EACH_ENTITY = 'postPreparingEachEntity';
const POST_PREPARING_EACH_ENTITY_QUEUE = `${QUEUE_PREFIX}${POST_PREPARING_EACH_ENTITY}`;

const WRITING_ENTITIES = 'writingEntities';
const WRITING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${WRITING_ENTITIES}`;

const POST_WRITING_ENTITIES = 'postWritingEntities';
const POST_WRITING_ENTITIES_QUEUE = `${QUEUE_PREFIX}${POST_WRITING_ENTITIES}`;

const LOADING_TRANSLATIONS = 'loadingTranslations';
const LOADING_TRANSLATIONS_QUEUE = `${QUEUE_PREFIX}${LOADING_TRANSLATIONS}`;

export const CUSTOM_PRIORITIES = (
  [
    {
      priorityName: CONFIGURING_EACH_ENTITY,
      queueName: CONFIGURING_EACH_ENTITY_QUEUE,
      before: LOADING_ENTITIES,
      skip: true,
    },
    {
      priorityName: LOADING_ENTITIES,
      queueName: LOADING_ENTITIES_QUEUE,
      before: PREPARING_EACH_ENTITY,
      skip: true,
    },
    {
      priorityName: PREPARING_EACH_ENTITY,
      queueName: PREPARING_EACH_ENTITY_QUEUE,
      before: PREPARING_EACH_ENTITY_FIELD,
      skip: true,
    },
    {
      priorityName: PREPARING_EACH_ENTITY_FIELD,
      queueName: PREPARING_EACH_ENTITY_FIELD_QUEUE,
      before: PREPARING_EACH_ENTITY_RELATIONSHIP,
      skip: true,
    },
    {
      priorityName: PREPARING_EACH_ENTITY_RELATIONSHIP,
      queueName: PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,
      before: POST_PREPARING_EACH_ENTITY,
      skip: true,
    },
    {
      priorityName: POST_PREPARING_EACH_ENTITY,
      queueName: POST_PREPARING_EACH_ENTITY_QUEUE,
      before: DEFAULT,
      skip: true,
    },
    {
      priorityName: WRITING_ENTITIES,
      queueName: WRITING_ENTITIES_QUEUE,
      before: MULTISTEP_TRANSFORM,
      skip: true,
    },
    {
      priorityName: POST_WRITING_ENTITIES,
      queueName: POST_WRITING_ENTITIES_QUEUE,
      before: LOADING_TRANSLATIONS,
      skip: true,
    },
    {
      priorityName: LOADING_TRANSLATIONS,
      queueName: LOADING_TRANSLATIONS_QUEUE,
      before: TRANSFORM,
      skip: true,
    },
  ] satisfies Priority[]
).reverse();

const ENTITY_QUEUES = {
  CONFIGURING_EACH_ENTITY_QUEUE,
  LOADING_ENTITIES_QUEUE,
  PREPARING_EACH_ENTITY_QUEUE,
  PREPARING_EACH_ENTITY_FIELD_QUEUE,
  PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,
  POST_PREPARING_EACH_ENTITY_QUEUE,
  WRITING_ENTITIES_QUEUE,
  POST_WRITING_ENTITIES_QUEUE,
  LOADING_TRANSLATIONS_QUEUE,
};

export const ENTITY_PRIORITY_NAMES = {
  CONFIGURING_EACH_ENTITY,
  LOADING_ENTITIES,
  PREPARING_EACH_ENTITY,
  PREPARING_EACH_ENTITY_FIELD,
  PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY,
  WRITING_ENTITIES,
  POST_WRITING_ENTITIES,
} as const;

export const PRIORITY_NAMES = {
  ...PRIORITY_NAMES_BASE,
  ...ENTITY_PRIORITY_NAMES,
} as const;

export const QUEUES = {
  ...QUEUES_BASE,
  BOOTSTRAP_APPLICATION,
  ...ENTITY_QUEUES,
};

export const PRIORITY_NAMES_LIST = [
  PRIORITY_NAMES.INITIALIZING,
  PRIORITY_NAMES.PROMPTING,
  PRIORITY_NAMES.CONFIGURING,
  PRIORITY_NAMES.COMPOSING,
  PRIORITY_NAMES.COMPOSING_COMPONENT,
  BOOTSTRAP_APPLICATION,
  PRIORITY_NAMES.LOADING,
  PRIORITY_NAMES.PREPARING,
  CONFIGURING_EACH_ENTITY,
  LOADING_ENTITIES,
  PREPARING_EACH_ENTITY,
  PREPARING_EACH_ENTITY_FIELD,
  PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY,
  DEFAULT,
  PRIORITY_NAMES.WRITING,
  WRITING_ENTITIES,
  PRIORITY_NAMES.POST_WRITING,
  POST_WRITING_ENTITIES,
  LOADING_TRANSLATIONS,
  PRIORITY_NAMES_BASE.INSTALL,
  PRIORITY_NAMES_BASE.POST_INSTALL,
  PRIORITY_NAMES_BASE.END,
];
