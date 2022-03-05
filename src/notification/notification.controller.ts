import {Body, Controller, Get, Post} from '@nestjs/common';
import {NotificationService} from "./notification.service";
import {CreateNotificationDto} from "./CreateNotificationDto";

@Controller("api/notifications")
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Get()
    getHello(): string {
        return this.notificationService.getHello();
    }

    @Post()
    create(@Body() createNotification:CreateNotificationDto){
        return this.notificationService.create(createNotification);
    }
}