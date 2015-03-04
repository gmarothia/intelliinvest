

(function($){

    window.App = window.App ||  {};

    window.App.Employees = Backbone.Collection.extend({

        model : App.Employee,
        url : 'rest/employees'


    });








})(jQuery);



