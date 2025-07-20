import { AuthMockApi } from "app/mock-api/common/auth/api";
import { NavigationMockApi } from "app/mock-api/common/navigation/api";
import { NotificationsMockApi } from "app/mock-api/common/notifications/api";
import { SearchMockApi } from "app/mock-api/common/search/api";
import { UserMockApi } from "app/mock-api/common/user/api";
import { AnalyticsMockApi } from "app/mock-api/dashboards/analytics/api";
import { FileManagerMockApi } from "app/mock-api/dashboards/file-manager/api";
import { HelpCenterMockApi } from "app/mock-api/dashboards/help-center/api";
import { HomeMockApi } from "app/mock-api/dashboards/home/api";
import { MailboxMockApi } from "app/mock-api/dashboards/mailbox/api";
import { NotesMockApi } from "app/mock-api/dashboards/notes/api";
import { PostsMockApi } from "app/mock-api/dashboards/posts/api";
import { TasksMockApi } from "app/mock-api/dashboards/tasks/api";

export const mockApiServices = [
    NavigationMockApi,
    TasksMockApi,
    NotesMockApi,
    FileManagerMockApi,
    MailboxMockApi,
    AnalyticsMockApi,
    UserMockApi,
    SearchMockApi,
    HomeMockApi,
    NotificationsMockApi,
    AuthMockApi,
    PostsMockApi,
    HelpCenterMockApi
];
