const WidgetController = require('../controllers/widgets.controller');

module.exports = (app) => {
    // Index route to get all widgets
    app.get('/api/widgets',WidgetController.index);

    // Create route to create a widget
    app.post('/api/widgets/create',WidgetController.create);
}