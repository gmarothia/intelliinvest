(function($){

    window.App = window.App ||  {};

    window.App.Employee = Backbone.Model.extend({

        validate: function(attributes){
            console.log('validation called!!!');
            var mergedAttr = _.extend(_.clone(this.attributes), attributes);
            console.log("Name is:::: " + mergedAttr.name);
            //console.log("Name is::: " + attributes);
            if(!mergedAttr.name || mergedAttr.name.trim() == ''){
                console.log('Inside If loop');
                var error = 'Name cannot be blank';
                window.App.LastError = error;
                return error;
            }
        }
    });



})(jQuery);