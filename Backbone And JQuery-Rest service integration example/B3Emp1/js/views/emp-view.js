(function ($) {

    window.App = window.App || {};
    window.App.EmpView = Backbone.View.extend(
        {
            tagName: 'li',
            className: 'list-item',
            events: {
                'click a.del-emp-link': 'delEmp',
                'click a.edit-emp-link': 'showTextField',
                'keypress input.edit-emp-input': 'updateEmpOnEnter',
                'focusout input.edit-emp-input': 'hideTextField'
            },
            initialize: function () {
                this.template = _.template($('#emp-rec-template').html());
                _.bindAll(this, 'render');
                this.listenTo(this.model, 'invalid', function () {
                    alert('Oops! ' + this.model.validationError);
                })
                this.model.bind('change', this.render);
            },

            showTextField: function (event) {
                event.preventDefault();
                $('input.edit-emp-input', this.el).css('display', 'inline').focus();

            },

            hideTextField: function (event) {
                +
                    event.preventDefault();
                $('input.edit-emp-input', this.el).css('display', 'none');
            },

            updateEmpOnEnter: function (event) {
                if (event.keyCode == 13) {

                    event.preventDefault();
                    this.model.save(
                        {
                            name: $('input.edit-emp-input', this.el).val()
                        }/*,
                         {
                         error: function (model, response) {
                         console.log("Validation response: " + response);
                         }
                         }*/
                    );
                    console.log("Error is " + this.model.validationError);
                }
            },
            render: function () {
                //console.log("render called");
                $(this.el).empty().append(this.template(this.model.toJSON()));
                $('input.edit-emp-input', this.el).css('display', 'none');
                return this;
            },

            delEmp: function (event) {
                event.preventDefault();
                this.model.destroy();
            }

        }
    );

})(jQuery);