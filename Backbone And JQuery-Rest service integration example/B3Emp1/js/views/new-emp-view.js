(function($){

    window.App = window.App || {};
    window.App.NewEmpView = Backbone.View.extend(
        {
            events : {
              'keypress #new-name': 'saveOnEnter',
              'focusout #new-name': 'hideError'
            },

            initialize : function() {
                this.template = _.template($('#new-emp-template').html(), {});
                _.bindAll(this, 'render');
            },

            render : function() {
                console.log("render called");
                $(this.el).append(this.template);
                return this;
            },

            saveOnEnter : function(event){
                if(event.keyCode == 13){
                    var options = {validate:true};

                    if(this.collection.create({name:$('#new-name').val()},options)){
                        this.focus();
                        this.hideError();
                    }else{
                        this.showError(window.App.LastError);
                    }
                }
            },

            focus : function(){
                $('#new-name').val('').focus();
            },

            hideError : function(){
                $('#warning').hide();
            },

            showError : function(error){
                $('#warning').html(error).show();
            }
        }
    );

})(jQuery);