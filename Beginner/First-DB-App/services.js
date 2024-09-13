class NotificationService {
    static showNotification(content) {
        let notificationContainer = document.getElementById("notification-panel");
        let notification = document.createElement("p");
        notification.textContent = content;

        notificationContainer.appendChild(notification);
    };
};

class LogService {
    static showLog(content) {
        let logContainer = document.getElementById("log-panel");
        let log = document.createElement("p");
        log.textContent = content;
        
        logContainer.appendChild(log);
    };
};

class QueryService {
    static showQuery(content) {
        let queryContainer = document.getElementById("query-panel");
        let query = document.createElement("p");
        query.textContent = content;

        queryContainer.appendChild(query);
    };
};