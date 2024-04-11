// ./src/server/app.module.ts
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NODE_ENV } from '../shared/constants/env';

@Module({
  /* should pass a NEXT.js server instance
      as the argument to `forRootAsync` */
  // ./src/server/app.module.ts
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
      viewsDir: null,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
