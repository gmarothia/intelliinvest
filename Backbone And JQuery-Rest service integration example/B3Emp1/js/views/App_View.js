/**
 * Created by test9 on 12/9/2014.
 */
(function($){
    window.App = window.App || {};
    window.App.AppView=Backbone.View.extend({
        initialize:function(){
            console.log("in app view initialize method");
            _.bindAll(this, 'render');
            this.collection = App.emps;

            this.empsView = new App.EmpsView({ el: $('#employees'), collection: this.collection});


            this.newEmpView = new App.NewEmpView({ el: $('#n-emp'), collection: this.collection});
        },

        render:function(){

            this.empsView.render();
            this.newEmpView.render();

        }
    });

    $(function(){
        console.log("in init method");
        App.emps = new App.Employees();
        App.emps.fetch(
            {
                success: function() {
                    console.log("success fetching called");
                    App.router = new App.Router();
                    Backbone.history.start();
                }
                ,
                failure:function(){
                    console.log("in failure case");
                }
            }
        );
    })

})(jQuery)