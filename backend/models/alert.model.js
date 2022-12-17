const mongoose = require('mongoose');
const Notification = require('./notification.model');

const alertSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            default: 0,
        },
        store: {
            type: Number,
            default: 0,
        },
        price_move_below: {
            type: Number,
            default: 0,
        },
        price_move_above: {
            type: Number,
            default: 0,
        },
        stock_move_below: {
            type: Number,
            default: 0,
        },
        stock_move_above: {
            type: Number,
            default: 0,
        },
        store_move_below: {
            type: Number,
            default: 0,
        },
        store_move_above: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// add a method to the alert schema to check if the alert is triggered
alertSchema.pre('save', async function (next) {
    /* 
   use a middleware  if price is changed,
   check if price is below or above,
   the price_move_below or price_move_above,
   then create a notification
    */
    if (this.isModified('price')) {
        if (
            this.active &&
            this.price_move_below &&
            this.price_move_above &&
            (this.price <= this.price_move_below ||
                this.price >= this.price_move_above)
        ) {
            // create a notification
            const notification = await Notification.create({
                user: this.user,
                alert: this._id,
                message: `Price is ${this.price}`,
                url: `/product/${this.product._id}`,
            });

            // // send notification to user
            // const user = await User.findById(this.user);
            // const io = req.app.get('socketio');
            // io.to(user.socketId).emit('notification', notification);

            // // send notification to admin
            // const admin = await User.findOne({ role: 'admin' });
            // io.to(admin.socketId).emit('notification', notification);

            // // send notification to all users
            // io.emit('notification', notification);
        }
    }

    /* 
    if stock is changed, check if stock is below or above,
    the stock_move_below or stock_move_above,
    then create a notification
    */
    if (this.isModified('stock')) {
        if (
            this.active &&
            (this.stock <= this.stock_move_below ||
                this.stock >= this.stock_move_above)
        ) {
            // create a notification
            const notification = await Notification.create({
                user: this.user,
                alert: this._id,
                message: `Stock is ${this.stock}`,
                url: `/product/${this.product._id}`,
            });

            // // send notification to user
            // const user = await User.findById(this.user);
            // const io = req.app.get('socketio');
            // io.to(user.socketId).emit('notification', notification);
        }
    }

    /*
    if store is changed, check if store is below or above,
    the store_move_below or store_move_above,
    then create a notification
    */

    if (this.isModified('store')) {
        if (
            this.active &&
            (this.store <= this.store_move_below ||
                this.store >= this.store_move_above)
        ) {
            // create a notification
            const notification = await Notification.create({
                user: this.user,
                alert: this._id,
                message: `Store is ${this.store}`,
                url: `/product/${this.product._id}`,
            });

            // // send notification to user
            // const user = await User.findById(this.user);
            // const io = req.app.get('socketio');
            // io.to(user.socketId).emit('notification', notification);
        }
    }

    next();
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
