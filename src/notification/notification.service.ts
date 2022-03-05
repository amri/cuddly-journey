import { Injectable } from '@nestjs/common';
import {CreateNotificationDto} from "./CreateNotificationDto";

@Injectable()
export class NotificationService {
    getHello(): string {
        return 'Hello World!';
    }

    create(createNotification: CreateNotificationDto) {
        //get template from mongodb
        return "ok";
    }
}
