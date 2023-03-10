import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  providers: [MessagesService, MessagesRepository],
  controllers: [MessagesController],
})
export class MessagesModule {}
