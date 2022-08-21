var Channel = /** @class */ (function () {
    function Channel(channelName) {
        this.suscribers = [];
        this.lastVideoPosted = '';
        this.channelName = '';
        this.channelName = channelName;
    }
    Channel.prototype.suscribe = function (o) {
        this.suscribers.push(o);
    };
    Channel.prototype.unsuscribe = function (o) {
        {
            this.suscribers = this.suscribers.filter(function (e) { return e !== o; });
        }
    };
    Channel.prototype.notify = function () {
        var _this = this;
        this.suscribers.forEach(function (suscriber) {
            console.log("Se ha enviado la notificacion al suscriptor: ", suscriber.getName());
            suscriber.update(_this.channelName);
        });
    };
    Channel.prototype.addNewVideo = function (title) {
        this.lastVideoPosted = title;
        this.notify();
    };
    Channel.prototype.lastVideoTitle = function () {
        return this.lastVideoPosted;
    };
    Channel.prototype.getName = function () {
        return this.channelName;
    };
    return Channel;
}());
var Suscriber = /** @class */ (function () {
    function Suscriber(observable, name) {
        this.observable = observable;
        this.name = name;
    }
    Suscriber.prototype.update = function (channelName) {
        console.log("Hey ".concat(this.name, ", tu canal favorito ").concat(channelName, " ha subido un video y se titula: ").concat(this.observable.lastVideoTitle()));
    };
    Suscriber.prototype.getName = function () {
        return this.name;
    };
    return Suscriber;
}());
var channel = new Channel('tomihq');
var suscribers = [new Suscriber(channel, 'Tomas'), new Suscriber(channel, 'Gonzalo')];
suscribers.forEach(function (suscriber) {
    channel.suscribe(suscriber);
});
channel.addNewVideo('This is a test');
