(function($){

    window.App = window.App || {};
    window.App.EmpsView = Backbone.View.extend(
        {
            initialize : function() {
                this.template = _.template($('#emps-template').html(), {});
                _.bindAll(this, 'render');
                this.collection.bind('add', this.render);
                this.collection.bind('change', this.render);
                this.collection.bind('destroy', this.render);
            },

            render : function() {
                //console.log("render called");
                $(this.el).empty().append(this.template);

                this.collection.each(

                    function(emp){
                        var empView = new App.EmpView({model:emp});
                        $('ul#emps-list').append(empView.render().el);
                    }

                )

                return this;
            }

        }
    );

})(jQuery);