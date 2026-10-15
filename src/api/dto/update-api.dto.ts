import { PartialType } from '@nestjs/mapped-types';
import { CreateApiDto } from './create-api.dto.js';

export class UpdateApiDto extends PartialType(CreateApiDto) {}
