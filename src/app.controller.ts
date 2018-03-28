import {Controller, Get, Post} from '@nestjs/common';
import * as data from './../data.json';

@Controller()
export class AppController {
    @Get('list')
    root(): any[] {
        return data as any;
    }

    @Post('notify')
    notify(msg: any): void {
        console.log('msg: ', msg);
    }
}
