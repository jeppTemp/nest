import {Body, Controller, Get, Post} from '@nestjs/common';
import * as data from './../data.json';

interface Message {
    text: string;
    user: string;
}

@Controller()
export class AppController {

    private messages: Message[] = [];

    @Get('userList')
    getUserList(): any[] {
        return data as any;
    }

    @Get('messages')
    getMessages(): Message[] {
        return this.messages;
    }

    @Post('message')
    postNotify(@Body() message: Message): Message[] {
        console.log('message: ', message);
        this.messages.push(message);
        return this.messages;
    }
}
