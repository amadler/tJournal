"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TradeController_1 = require("controllers/TradeController");
class Routes {
    constructor() {
        this.tradeController = new TradeController_1.TradeController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('comments')
            .get(this.tradeController.getComments)
            .post(this.tradeController.addNewComment);
        app.route('comments:commentId')
            .get(this.tradeController.getComment)
            .put(this.tradeController.updateComment)
            .delete(this.tradeController.deleteComment);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map