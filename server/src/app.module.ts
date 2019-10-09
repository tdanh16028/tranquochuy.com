import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
