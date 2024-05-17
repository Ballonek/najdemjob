importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

let firebaseConfig = {
    apiKey: "AIzaSyAETjXoXSYxO8VFlz7KhTcrAGO2O8sWlI0",
    projectId: "notifee-7",
    messagingSenderId: "318003660263",
    appId: "1:318003660263:web:dcea2009840b4aed1fe942",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging().setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title,
        Object.assign({data: payload.data}, payload.data));
});

self.addEventListener('notificationclick', function (event) {
    const action = event.notification.data.click_action;
    event.notification.close();
    event.waitUntil(clients.openWindow(action));
});
