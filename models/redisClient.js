const redisClient = require("redis");

class RedisClient {
    static getInstance() {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient();
        }
        return RedisClient.instance;
    }

    constructor() {
        this.client = redisClient.createClient("6379", "47.244.224.86");
        this.client.on("error", function (err) {
            console.log("Error " + err);
        });
    }
}

RedisClient.prototype.set = function (id, key, val) {
    let client = this.client;
    client.select(id, function () {
        client.set("key", "val", redisClient.print);
    })
};
RedisClient.prototype.get = function (id, key, val, next) {
    let client = this.client;
    client.select(id, function () {
        client.get("string key", next);
    })
};

//!todo redisClient
// client.hset("hash key", "hashtest 1", "some value", redisClient.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redisClient.print);
// client.hkeys("hash key", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });
module.exports = RedisClient;