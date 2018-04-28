import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors());
    await app.listen(6677);
    console.log('App listen on port 6677');
}

bootstrap();
