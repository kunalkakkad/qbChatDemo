// var QBApp = {
//     appId: 48856,
//     authKey: 'j-VdGKXC6AucLQw',
//     authSecret: 'JcUa5b66MGuZJZj'
// };
var QBApp = {
    appId: 67197,
    authKey: 'tSC2xpqOpX6ZOwb',
    authSecret: '2m9CrU-Tpx6UCyd'
};

var config = {
    chatProtocol: {
        active: 2
    },
    streamManagement: {
        enable: true
    },
    debug: {
        mode: 1,
        file: null
    },
    stickerpipe: {
        elId: 'stickers_btn',
        apiKey: '847b82c49db21ecec88c510e377b452c',
        enableEmojiTab: false,
        enableHistoryTab: true,
        enableStoreTab: true,

        userId: null,

        priceB: '0.99 $',
        priceC: '1.99 $'
    }
};

var QBUser1 = {
        id: 40394516,
        name: 'Kunal',
        login: 'kunal1234',
        pass: 'kunal1234'
    },
    QBUser2 = {
        id: 40394642,
        name: 'Lakshmi',
        login: 'lakshmi1234',
        pass: 'lakshmi1234'
    };

// var QBUser1 = {
//         id: 20215823,
//         name: 'CordovaUser1',
//         login: 'CordovaUser1',
//         pass: 'CordovaUser1'
//     },
//     QBUser2 = {
//         id: 20215853,
//         name: 'CordovaUser2',
//         login: 'CordovaUser2',
//         pass: 'CordovaUser2'
//     };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);
