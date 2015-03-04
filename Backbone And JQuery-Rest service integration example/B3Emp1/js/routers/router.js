
(function ($){

    App.Router = Backbone.Router.extend(
        {

            routes:
            {
                '': 'showDefault'
            },

            initialize: function(){
                this.appView= new App.AppView();

            },

            showDefault: function(){
                this.appView.render();

            }

        });

    /*$(function(){

    });*/
})

(jQuery);




