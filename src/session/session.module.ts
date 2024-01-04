import { TypeOrmModule } from '@nestjs/typeorm';

import { Module, forwardRef } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

import { Session } from './session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
  ],
  exports: [
    SessionService
  ],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
