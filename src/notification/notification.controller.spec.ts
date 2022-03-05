import {Test, TestingModule} from '@nestjs/testing';
import {NotificationController} from './notification.controller';
import {NotificationService} from './notification.service';
import {CreateNotificationDto} from "./CreateNotificationDto";
import {SubjectDto} from "./SubjectDto";

describe('NotificationController', () => {
  let notificationController: NotificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [NotificationService],
    }).compile();

    notificationController = app.get<NotificationController>(NotificationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificationController.getHello()).toBe('Hello World!');
    });

    it('Post /api/notifications should trigger notification', () => {
      let subject:SubjectDto = new SubjectDto("Amri","Hidayat","NestJS");
      let createNotification:CreateNotificationDto = new CreateNotificationDto(subject,"happy-birthday");
      expect(notificationController.create(createNotification)).toBe("email sent");
    })
  });


});
