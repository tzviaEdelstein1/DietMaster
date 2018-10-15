(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $('.navbar').removeClass('d-none');
    })
  
  })(jQuery); // End of use strict
  
  ;/*!
   * Start Bootstrap - Agency v5.0.2 (https://startbootstrap.com/template-overviews/agency)
   * Copyright 2013-2018 Start Bootstrap
   * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
   */
  
  !function(o){"use strict";o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=o(this.hash);if((a=a.length?a:o("[name="+this.hash.slice(1)+"]")).length)return o("html, body").animate({scrollTop:a.offset().top-54},1e3,"easeInOutExpo"),!1}}),o(".js-scroll-trigger").click(function(){o(".navbar-collapse").collapse("hide")}),o("body").scrollspy({target:"#mainNav",offset:56});var a=function(){100<o("#mainNav").offset().top?o("#mainNav").addClass("navbar-shrink"):o("#mainNav").removeClass("navbar-shrink")};a(),o(window).scroll(a),o(".portfolio-modal").on("show.bs.modal",function(a){o(".navbar").addClass("d-none")}),o(".portfolio-modal").on("hidden.bs.modal",function(a){o(".navbar").removeClass("d-none")})}(jQuery);
  ;$(function() {
  
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }
        $this = $("#sendMessageButton");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        $.ajax({
          url: "././mail/contact_me.php",
          type: "POST",
          data: {
            name: name,
            phone: phone,
            email: email,
            message: message
          },
          cache: false,
          success: function() {
            // Success message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success')
              .append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
          },
          error: function() {
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
            $('#success > .alert-danger').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
          },
          complete: function() {
            setTimeout(function() {
              $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);
          }
        });
      },
      filter: function() {
        return $(this).is(":visible");
      },
    });
  
    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });
  
  /*When clicking on Full hide fail/success boxes */
  $('#name').focus(function() {
    $('#success').html('');
  });
  
  ;/*!
   * Start Bootstrap - Agency v5.0.2 (https://startbootstrap.com/template-overviews/agency)
   * Copyright 2013-2018 Start Bootstrap
   * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
   */
  
  $(function(){$("#contactForm input,#contactForm textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(t,e,s){},submitSuccess:function(t,e){e.preventDefault();var s=$("input#name").val(),a=$("input#email").val(),n=$("input#phone").val(),c=$("textarea#message").val(),i=s;0<=i.indexOf(" ")&&(i=s.split(" ").slice(0,-1).join(" ")),$this=$("#sendMessageButton"),$this.prop("disabled",!0),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:s,phone:n,email:a,message:c},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append($("<strong>").text("Sorry "+i+", it seems that my mail server is not responding. Please try again later!")),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")},complete:function(){setTimeout(function(){$this.prop("disabled",!1)},1e3)}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(t){t.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});
  ;/* jqBootstrapValidation
   * A plugin for automating validation on Twitter Bootstrap formatted forms.
   *
   * v1.3.6
   *
   * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
   *
   * http://ReactiveRaven.github.com/jqBootstrapValidation/
   */
  
  (function($) {
  
    var createdElements = [];
  
    var defaults = {
      options: {
        prependExistingHelpBlock: false,
        sniffHtml: true, // sniff for 'required', 'maxlength', etc
        preventSubmit: true, // stop the form submit event from firing if validation fails
        submitError: false, // function called if there is an error when trying to submit
        submitSuccess: false, // function called just before a successful submit event is sent to the server
        semanticallyStrict: false, // set to true to tidy up generated HTML output
        autoAdd: {
          helpBlocks: true
        },
        filter: function() {
          // return $(this).is(":visible"); // only validate elements you can see
          return true; // validate everything
        }
      },
      methods: {
        init: function(options) {
  
          var settings = $.extend(true, {}, defaults);
  
          settings.options = $.extend(true, settings.options, options);
  
          var $siblingElements = this;
  
          var uniqueForms = $.unique(
            $siblingElements.map(function() {
              return $(this).parents("form")[0];
            }).toArray()
          );
  
          $(uniqueForms).bind("submit", function(e) {
            var $form = $(this);
            var warningsFound = 0;
            var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
            $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
  
            $inputs.each(function(i, el) {
              var $this = $(el),
                $controlGroup = $this.parents(".form-group").first();
              if (
                $controlGroup.hasClass("warning")
              ) {
                $controlGroup.removeClass("warning").addClass("error");
                warningsFound++;
              }
            });
  
            $inputs.trigger("validationLostFocus.validation");
  
            if (warningsFound) {
              if (settings.options.preventSubmit) {
                e.preventDefault();
              }
              $form.addClass("error");
              if ($.isFunction(settings.options.submitError)) {
                settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
              }
            } else {
              $form.removeClass("error");
              if ($.isFunction(settings.options.submitSuccess)) {
                settings.options.submitSuccess($form, e);
              }
            }
          });
  
          return this.each(function() {
  
            // Get references to everything we're interested in
            var $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(),
              $form = $this.parents("form").first(),
              validatorNames = [];
  
            // create message container if not exists
            if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.find('.controls').append($helpBlock);
              createdElements.push($helpBlock[0]);
            }
  
            // =============================================================
            //                                     SNIFF HTML FOR VALIDATORS
            // =============================================================
  
            // *snort sniff snuffle*
  
            if (settings.options.sniffHtml) {
              var message = "";
              // ---------------------------------------------------------
              //                                                   PATTERN
              // ---------------------------------------------------------
              if ($this.attr("pattern") !== undefined) {
                message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
                if ($this.data("validationPatternMessage")) {
                  message = $this.data("validationPatternMessage");
                }
                $this.data("validationPatternMessage", message);
                $this.data("validationPatternRegex", $this.attr("pattern"));
              }
              // ---------------------------------------------------------
              //                                                       MAX
              // ---------------------------------------------------------
              if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
                var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
                message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
                if ($this.data("validationMaxMessage")) {
                  message = $this.data("validationMaxMessage");
                }
                $this.data("validationMaxMessage", message);
                $this.data("validationMaxMax", max);
              }
              // ---------------------------------------------------------
              //                                                       MIN
              // ---------------------------------------------------------
              if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
                var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
                message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
                if ($this.data("validationMinMessage")) {
                  message = $this.data("validationMinMessage");
                }
                $this.data("validationMinMessage", message);
                $this.data("validationMinMin", min);
              }
              // ---------------------------------------------------------
              //                                                 MAXLENGTH
              // ---------------------------------------------------------
              if ($this.attr("maxlength") !== undefined) {
                message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
                if ($this.data("validationMaxlengthMessage")) {
                  message = $this.data("validationMaxlengthMessage");
                }
                $this.data("validationMaxlengthMessage", message);
                $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
              }
              // ---------------------------------------------------------
              //                                                 MINLENGTH
              // ---------------------------------------------------------
              if ($this.attr("minlength") !== undefined) {
                message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
                if ($this.data("validationMinlengthMessage")) {
                  message = $this.data("validationMinlengthMessage");
                }
                $this.data("validationMinlengthMessage", message);
                $this.data("validationMinlengthMinlength", $this.attr("minlength"));
              }
              // ---------------------------------------------------------
              //                                                  REQUIRED
              // ---------------------------------------------------------
              if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
                message = settings.builtInValidators.required.message;
                if ($this.data("validationRequiredMessage")) {
                  message = $this.data("validationRequiredMessage");
                }
                $this.data("validationRequiredMessage", message);
              }
              // ---------------------------------------------------------
              //                                                    NUMBER
              // ---------------------------------------------------------
              if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
                message = settings.builtInValidators.number.message;
                if ($this.data("validationNumberMessage")) {
                  message = $this.data("validationNumberMessage");
                }
                $this.data("validationNumberMessage", message);
              }
              // ---------------------------------------------------------
              //                                                     EMAIL
              // ---------------------------------------------------------
              if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
                message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
                if ($this.data("validationValidemailMessage")) {
                  message = $this.data("validationValidemailMessage");
                } else if ($this.data("validationEmailMessage")) {
                  message = $this.data("validationEmailMessage");
                }
                $this.data("validationValidemailMessage", message);
              }
              // ---------------------------------------------------------
              //                                                MINCHECKED
              // ---------------------------------------------------------
              if ($this.attr("minchecked") !== undefined) {
                message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
                if ($this.data("validationMincheckedMessage")) {
                  message = $this.data("validationMincheckedMessage");
                }
                $this.data("validationMincheckedMessage", message);
                $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
              }
              // ---------------------------------------------------------
              //                                                MAXCHECKED
              // ---------------------------------------------------------
              if ($this.attr("maxchecked") !== undefined) {
                message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
                if ($this.data("validationMaxcheckedMessage")) {
                  message = $this.data("validationMaxcheckedMessage");
                }
                $this.data("validationMaxcheckedMessage", message);
                $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
              }
            }
  
            // =============================================================
            //                                       COLLECT VALIDATOR NAMES
            // =============================================================
  
            // Get named validators
            if ($this.data("validation") !== undefined) {
              validatorNames = $this.data("validation").split(",");
            }
  
            // Get extra ones defined on the element's data attributes
            $.each($this.data(), function(i, el) {
              var parts = i.replace(/([A-Z])/g, ",$1").split(",");
              if (parts[0] === "validation" && parts[1]) {
                validatorNames.push(parts[1]);
              }
            });
  
            // =============================================================
            //                                     NORMALISE VALIDATOR NAMES
            // =============================================================
  
            var validatorNamesToInspect = validatorNames;
            var newValidatorNamesToInspect = [];
  
            do // repeatedly expand 'shortcut' validators into their real validators
            {
              // Uppercase only the first letter of each name
              $.each(validatorNames, function(i, el) {
                validatorNames[i] = formatValidatorName(el);
              });
  
              // Remove duplicate validator names
              validatorNames = $.unique(validatorNames);
  
              // Pull out the new validator names from each shortcut
              newValidatorNamesToInspect = [];
              $.each(validatorNamesToInspect, function(i, el) {
                if ($this.data("validation" + el + "Shortcut") !== undefined) {
                  // Are these custom validators?
                  // Pull them out!
                  $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                    newValidatorNamesToInspect.push(el2);
                  });
                } else if (settings.builtInValidators[el.toLowerCase()]) {
                  // Is this a recognised built-in?
                  // Pull it out!
                  var validator = settings.builtInValidators[el.toLowerCase()];
                  if (validator.type.toLowerCase() === "shortcut") {
                    $.each(validator.shortcut.split(","), function(i, el) {
                      el = formatValidatorName(el);
                      newValidatorNamesToInspect.push(el);
                      validatorNames.push(el);
                    });
                  }
                }
              });
  
              validatorNamesToInspect = newValidatorNamesToInspect;
  
            } while (validatorNamesToInspect.length > 0)
  
            // =============================================================
            //                                       SET UP VALIDATOR ARRAYS
            // =============================================================
  
            var validators = {};
  
            $.each(validatorNames, function(i, el) {
              // Set up the 'override' message
              var message = $this.data("validation" + el + "Message");
              var hasOverrideMessage = (message !== undefined);
              var foundValidator = false;
              message =
                (
                  message ?
                  message :
                  "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
                );
  
              $.each(
                settings.validatorTypes,
                function(validatorType, validatorTemplate) {
                  if (validators[validatorType] === undefined) {
                    validators[validatorType] = [];
                  }
                  if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                    validators[validatorType].push(
                      $.extend(
                        true, {
                          name: formatValidatorName(validatorTemplate.name),
                          message: message
                        },
                        validatorTemplate.init($this, el)
                      )
                    );
                    foundValidator = true;
                  }
                }
              );
  
              if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {
  
                var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
                if (hasOverrideMessage) {
                  validator.message = message;
                }
                var validatorType = validator.type.toLowerCase();
  
                if (validatorType === "shortcut") {
                  foundValidator = true;
                } else {
                  $.each(
                    settings.validatorTypes,
                    function(validatorTemplateType, validatorTemplate) {
                      if (validators[validatorTemplateType] === undefined) {
                        validators[validatorTemplateType] = [];
                      }
                      if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                        $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                        validators[validatorType].push(
                          $.extend(
                            validator,
                            validatorTemplate.init($this, el)
                          )
                        );
                        foundValidator = true;
                      }
                    }
                  );
                }
              }
  
              if (!foundValidator) {
                $.error("Cannot find validation info for '" + el + "'");
              }
            });
  
            // =============================================================
            //                                         STORE FALLBACK VALUES
            // =============================================================
  
            $helpBlock.data(
              "original-contents",
              (
                $helpBlock.data("original-contents") ?
                $helpBlock.data("original-contents") :
                $helpBlock.html()
              )
            );
  
            $helpBlock.data(
              "original-role",
              (
                $helpBlock.data("original-role") ?
                $helpBlock.data("original-role") :
                $helpBlock.attr("role")
              )
            );
  
            $controlGroup.data(
              "original-classes",
              (
                $controlGroup.data("original-clases") ?
                $controlGroup.data("original-classes") :
                $controlGroup.attr("class")
              )
            );
  
            $this.data(
              "original-aria-invalid",
              (
                $this.data("original-aria-invalid") ?
                $this.data("original-aria-invalid") :
                $this.attr("aria-invalid")
              )
            );
  
            // =============================================================
            //                                                    VALIDATION
            // =============================================================
  
            $this.bind(
              "validation.validation",
              function(event, params) {
  
                var value = getValue($this);
  
                // Get a list of the errors to apply
                var errorsFound = [];
  
                $.each(validators, function(validatorType, validatorTypeArray) {
                  if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
                    $.each(validatorTypeArray, function(i, validator) {
                      if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                        errorsFound.push(validator.message);
                      }
                    });
                  }
                });
  
                return errorsFound;
              }
            );
  
            $this.bind(
              "getValidators.validation",
              function() {
                return validators;
              }
            );
  
            // =============================================================
            //                                             WATCH FOR CHANGES
            // =============================================================
            $this.bind(
              "submit.validation",
              function() {
                return $this.triggerHandler("change.validation", {
                  submitting: true
                });
              }
            );
            $this.bind(
              [
                "keyup",
                "focus",
                "blur",
                "click",
                "keydown",
                "keypress",
                "change"
              ].join(".validation ") + ".validation",
              function(e, params) {
  
                var value = getValue($this);
  
                var errorsFound = [];
  
                $controlGroup.find("input,textarea,select").each(function(i, el) {
                  var oldCount = errorsFound.length;
                  $.each($(el).triggerHandler("validation.validation", params), function(j, message) {
                    errorsFound.push(message);
                  });
                  if (errorsFound.length > oldCount) {
                    $(el).attr("aria-invalid", "true");
                  } else {
                    var original = $this.data("original-aria-invalid");
                    $(el).attr("aria-invalid", (original !== undefined ? original : false));
                  }
                });
  
                $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");
  
                errorsFound = $.unique(errorsFound.sort());
  
                // Were there any errors?
                if (errorsFound.length) {
                  // Better flag it up as a warning.
                  $controlGroup.removeClass("success error").addClass("warning");
  
                  // How many errors did we find?
                  if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                    // Only one? Being strict? Just output it.
                    $helpBlock.html(errorsFound[0] +
                      (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
                  } else {
                    // Multiple? Being sloppy? Glue them together into an UL.
                    $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                      (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
                  }
                } else {
                  $controlGroup.removeClass("warning error success");
                  if (value.length > 0) {
                    $controlGroup.addClass("success");
                  }
                  $helpBlock.html($helpBlock.data("original-contents"));
                }
  
                if (e.type === "blur") {
                  $controlGroup.removeClass("success");
                }
              }
            );
            $this.bind("validationLostFocus.validation", function() {
              $controlGroup.removeClass("success");
            });
          });
        },
        destroy: function() {
  
          return this.each(
            function() {
  
              var
                $this = $(this),
                $controlGroup = $this.parents(".form-group").first(),
                $helpBlock = $controlGroup.find(".help-block").first();
  
              // remove our events
              $this.unbind('.validation'); // events are namespaced.
              // reset help text
              $helpBlock.html($helpBlock.data("original-contents"));
              // reset classes
              $controlGroup.attr("class", $controlGroup.data("original-classes"));
              // reset aria
              $this.attr("aria-invalid", $this.data("original-aria-invalid"));
              // reset role
              $helpBlock.attr("role", $this.data("original-role"));
              // remove all elements we created
              if (createdElements.indexOf($helpBlock[0]) > -1) {
                $helpBlock.remove();
              }
  
            }
          );
  
        },
        collectErrors: function(includeEmpty) {
  
          var errorMessages = {};
          this.each(function(i, el) {
            var $el = $(el);
            var name = $el.attr("name");
            var errors = $el.triggerHandler("validation.validation", {
              includeEmpty: true
            });
            errorMessages[name] = $.extend(true, errors, errorMessages[name]);
          });
  
          $.each(errorMessages, function(i, el) {
            if (el.length === 0) {
              delete errorMessages[i];
            }
          });
  
          return errorMessages;
  
        },
        hasErrors: function() {
  
          var errorMessages = [];
  
          this.each(function(i, el) {
            errorMessages = errorMessages.concat(
              $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {
                submitting: true
              }) : []
            );
          });
  
          return (errorMessages.length > 0);
        },
        override: function(newDefaults) {
          defaults = $.extend(true, defaults, newDefaults);
        }
      },
      validatorTypes: {
        callback: {
          name: "callback",
          init: function($this, name) {
            return {
              validatorName: name,
              callback: $this.data("validation" + name + "Callback"),
              lastValue: $this.val(),
              lastValid: true,
              lastFinished: true
            };
          },
          validate: function($this, value, validator) {
            if (validator.lastValue === value && validator.lastFinished) {
              return !validator.lastValid;
            }
  
            if (validator.lastFinished === true) {
              validator.lastValue = value;
              validator.lastValid = true;
              validator.lastFinished = false;
  
              var rrjqbvValidator = validator;
              var rrjqbvThis = $this;
              executeFunctionByName(
                validator.callback,
                window,
                $this,
                value,
                function(data) {
                  if (rrjqbvValidator.lastValue === data.value) {
                    rrjqbvValidator.lastValid = data.valid;
                    if (data.message) {
                      rrjqbvValidator.message = data.message;
                    }
                    rrjqbvValidator.lastFinished = true;
                    rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                    // Timeout is set to avoid problems with the events being considered 'already fired'
                    setTimeout(function() {
                      rrjqbvThis.trigger("change.validation");
                    }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                  }
                }
              );
            }
  
            return false;
  
          }
        },
        ajax: {
          name: "ajax",
          init: function($this, name) {
            return {
              validatorName: name,
              url: $this.data("validation" + name + "Ajax"),
              lastValue: $this.val(),
              lastValid: true,
              lastFinished: true
            };
          },
          validate: function($this, value, validator) {
            if ("" + validator.lastValue === "" + value && validator.lastFinished === true) {
              return validator.lastValid === false;
            }
  
            if (validator.lastFinished === true) {
              validator.lastValue = value;
              validator.lastValid = true;
              validator.lastFinished = false;
              $.ajax({
                url: validator.url,
                data: "value=" + value + "&field=" + $this.attr("name"),
                dataType: "json",
                success: function(data) {
                  if ("" + validator.lastValue === "" + data.value) {
                    validator.lastValid = !!(data.valid);
                    if (data.message) {
                      validator.message = data.message;
                    }
                    validator.lastFinished = true;
                    $this.data("validation" + validator.validatorName + "Message", validator.message);
                    // Timeout is set to avoid problems with the events being considered 'already fired'
                    setTimeout(function() {
                      $this.trigger("change.validation");
                    }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                  }
                },
                failure: function() {
                  validator.lastValid = true;
                  validator.message = "ajax call failed";
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function() {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              });
            }
  
            return false;
  
          }
        },
        regex: {
          name: "regex",
          init: function($this, name) {
            return {
              regex: regexFromString($this.data("validation" + name + "Regex"))
            };
          },
          validate: function($this, value, validator) {
            return (!validator.regex.test(value) && !validator.negative) ||
              (validator.regex.test(value) && validator.negative);
          }
        },
        required: {
          name: "required",
          init: function($this, name) {
            return {};
          },
          validate: function($this, value, validator) {
            return !!(value.length === 0 && !validator.negative) ||
              !!(value.length > 0 && validator.negative);
          },
          blockSubmit: true
        },
        match: {
          name: "match",
          init: function($this, name) {
            var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
            element.bind("validation.validation", function() {
              $this.trigger("change.validation", {
                submitting: true
              });
            });
            return {
              "element": element
            };
          },
          validate: function($this, value, validator) {
            return (value !== validator.element.val() && !validator.negative) ||
              (value === validator.element.val() && validator.negative);
          },
          blockSubmit: true
        },
        max: {
          name: "max",
          init: function($this, name) {
            return {
              max: $this.data("validation" + name + "Max")
            };
          },
          validate: function($this, value, validator) {
            return (parseFloat(value, 10) > parseFloat(validator.max, 10) && !validator.negative) ||
              (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
          }
        },
        min: {
          name: "min",
          init: function($this, name) {
            return {
              min: $this.data("validation" + name + "Min")
            };
          },
          validate: function($this, value, validator) {
            return (parseFloat(value) < parseFloat(validator.min) && !validator.negative) ||
              (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
          }
        },
        maxlength: {
          name: "maxlength",
          init: function($this, name) {
            return {
              maxlength: $this.data("validation" + name + "Maxlength")
            };
          },
          validate: function($this, value, validator) {
            return ((value.length > validator.maxlength) && !validator.negative) ||
              ((value.length <= validator.maxlength) && validator.negative);
          }
        },
        minlength: {
          name: "minlength",
          init: function($this, name) {
            return {
              minlength: $this.data("validation" + name + "Minlength")
            };
          },
          validate: function($this, value, validator) {
            return ((value.length < validator.minlength) && !validator.negative) ||
              ((value.length >= validator.minlength) && validator.negative);
          }
        },
        maxchecked: {
          name: "maxchecked",
          init: function($this, name) {
            var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
            elements.bind("click.validation", function() {
              $this.trigger("change.validation", {
                includeEmpty: true
              });
            });
            return {
              maxchecked: $this.data("validation" + name + "Maxchecked"),
              elements: elements
            };
          },
          validate: function($this, value, validator) {
            return (validator.elements.filter(":checked").length > validator.maxchecked && !validator.negative) ||
              (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
          },
          blockSubmit: true
        },
        minchecked: {
          name: "minchecked",
          init: function($this, name) {
            var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
            elements.bind("click.validation", function() {
              $this.trigger("change.validation", {
                includeEmpty: true
              });
            });
            return {
              minchecked: $this.data("validation" + name + "Minchecked"),
              elements: elements
            };
          },
          validate: function($this, value, validator) {
            return (validator.elements.filter(":checked").length < validator.minchecked && !validator.negative) ||
              (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
          },
          blockSubmit: true
        }
      },
      builtInValidators: {
        email: {
          name: "Email",
          type: "shortcut",
          shortcut: "validemail"
        },
        validemail: {
          name: "Validemail",
          type: "regex",
          regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
          message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
        },
        passwordagain: {
          name: "Passwordagain",
          type: "match",
          match: "password",
          message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
        },
        positive: {
          name: "Positive",
          type: "shortcut",
          shortcut: "number,positivenumber"
        },
        negative: {
          name: "Negative",
          type: "shortcut",
          shortcut: "number,negativenumber"
        },
        number: {
          name: "Number",
          type: "regex",
          regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
          message: "Must be a number<!-- data-validator-number-message to override -->"
        },
        integer: {
          name: "Integer",
          type: "regex",
          regex: "[+-]?\\\d+",
          message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
        },
        positivenumber: {
          name: "Positivenumber",
          type: "min",
          min: 0,
          message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
        },
        negativenumber: {
          name: "Negativenumber",
          type: "max",
          max: 0,
          message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
        },
        required: {
          name: "Required",
          type: "required",
          message: "This is required<!-- data-validator-required-message to override -->"
        },
        checkone: {
          name: "Checkone",
          type: "minchecked",
          minchecked: 1,
          message: "Check at least one option<!-- data-validation-checkone-message to override -->"
        }
      }
    };
  
    var formatValidatorName = function(name) {
      return name
        .toLowerCase()
        .replace(
          /(^|\s)([a-z])/g,
          function(m, p1, p2) {
            return p1 + p2.toUpperCase();
          }
        );
    };
  
    var getValue = function($this) {
      // Extract the value we're talking about
      var value = $this.val();
      var type = $this.attr("type");
      if (type === "checkbox") {
        value = ($this.is(":checked") ? value : "");
      }
      if (type === "radio") {
        value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
      }
      return value;
    };
  
    function regexFromString(inputstring) {
      return new RegExp("^" + inputstring + "$");
    }
  
    /**
     * Thanks to Jason Bunting via StackOverflow.com
     *
     * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
     * Short link: http://tinyurl.com/executeFunctionByName
     **/
    function executeFunctionByName(functionName, context /*, args*/ ) {
      var args = Array.prototype.slice.call(arguments).splice(2);
      var namespaces = functionName.split(".");
      var func = namespaces.pop();
      for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
      }
      return context[func].apply(this, args);
    }
  
    $.fn.jqBootstrapValidation = function(method) {
  
      if (defaults.methods[method]) {
        return defaults.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return defaults.methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.jqBootstrapValidation');
        return null;
      }
  
    };
  
    $.jqBootstrapValidation = function(options) {
      $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
    };
  
  })(jQuery);
  
  ;/*!
   * Start Bootstrap - Agency v5.0.2 (https://startbootstrap.com/template-overviews/agency)
   * Copyright 2013-2018 Start Bootstrap
   * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
   */
  
  !function(m){var u=[],t={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(a){var v=m.extend(!0,{},t);v.options=m.extend(!0,v.options,a);var e=m.unique(this.map(function(){return m(this).parents("form")[0]}).toArray());return m(e).bind("submit",function(a){var e=m(this),i=0,t=e.find("input,textarea,select").not("[type=submit],[type=image]").filter(v.options.filter);t.trigger("submit.validation").trigger("validationLostFocus.validation"),t.each(function(a,e){var t=m(e).parents(".form-group").first();t.hasClass("warning")&&(t.removeClass("warning").addClass("error"),i++)}),t.trigger("validationLostFocus.validation"),i?(v.options.preventSubmit&&a.preventDefault(),e.addClass("error"),m.isFunction(v.options.submitError)&&v.options.submitError(e,a,t.jqBootstrapValidation("collectErrors",!0))):(e.removeClass("error"),m.isFunction(v.options.submitSuccess)&&v.options.submitSuccess(e,a))}),this.each(function(){var l=m(this),t=l.parents(".form-group").first(),i=t.find(".help-block").first(),r=l.parents("form").first(),n=[];if(!i.length&&v.options.autoAdd&&v.options.autoAdd.helpBlocks&&(i=m('<div class="help-block" />'),t.find(".controls").append(i),u.push(i[0])),v.options.sniffHtml){var a="";if(void 0!==l.attr("pattern")&&(a="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",l.data("validationPatternMessage")&&(a=l.data("validationPatternMessage")),l.data("validationPatternMessage",a),l.data("validationPatternRegex",l.attr("pattern"))),void 0!==l.attr("max")||void 0!==l.attr("aria-valuemax")){var e=void 0!==l.attr("max")?l.attr("max"):l.attr("aria-valuemax");a="Too high: Maximum of '"+e+"'\x3c!-- data-validation-max-message to override --\x3e",l.data("validationMaxMessage")&&(a=l.data("validationMaxMessage")),l.data("validationMaxMessage",a),l.data("validationMaxMax",e)}if(void 0!==l.attr("min")||void 0!==l.attr("aria-valuemin")){var o=void 0!==l.attr("min")?l.attr("min"):l.attr("aria-valuemin");a="Too low: Minimum of '"+o+"'\x3c!-- data-validation-min-message to override --\x3e",l.data("validationMinMessage")&&(a=l.data("validationMinMessage")),l.data("validationMinMessage",a),l.data("validationMinMin",o)}void 0!==l.attr("maxlength")&&(a="Too long: Maximum of '"+l.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",l.data("validationMaxlengthMessage")&&(a=l.data("validationMaxlengthMessage")),l.data("validationMaxlengthMessage",a),l.data("validationMaxlengthMaxlength",l.attr("maxlength"))),void 0!==l.attr("minlength")&&(a="Too short: Minimum of '"+l.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",l.data("validationMinlengthMessage")&&(a=l.data("validationMinlengthMessage")),l.data("validationMinlengthMessage",a),l.data("validationMinlengthMinlength",l.attr("minlength"))),void 0===l.attr("required")&&void 0===l.attr("aria-required")||(a=v.builtInValidators.required.message,l.data("validationRequiredMessage")&&(a=l.data("validationRequiredMessage")),l.data("validationRequiredMessage",a)),void 0!==l.attr("type")&&"number"===l.attr("type").toLowerCase()&&(a=v.builtInValidators.number.message,l.data("validationNumberMessage")&&(a=l.data("validationNumberMessage")),l.data("validationNumberMessage",a)),void 0!==l.attr("type")&&"email"===l.attr("type").toLowerCase()&&(a="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",l.data("validationValidemailMessage")?a=l.data("validationValidemailMessage"):l.data("validationEmailMessage")&&(a=l.data("validationEmailMessage")),l.data("validationValidemailMessage",a)),void 0!==l.attr("minchecked")&&(a="Not enough options checked; Minimum of '"+l.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",l.data("validationMincheckedMessage")&&(a=l.data("validationMincheckedMessage")),l.data("validationMincheckedMessage",a),l.data("validationMincheckedMinchecked",l.attr("minchecked"))),void 0!==l.attr("maxchecked")&&(a="Too many options checked; Maximum of '"+l.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",l.data("validationMaxcheckedMessage")&&(a=l.data("validationMaxcheckedMessage")),l.data("validationMaxcheckedMessage",a),l.data("validationMaxcheckedMaxchecked",l.attr("maxchecked")))}void 0!==l.data("validation")&&(n=l.data("validation").split(",")),m.each(l.data(),function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&n.push(t[1])});for(var s=n,d=[];m.each(n,function(a,e){n[a]=g(e)}),n=m.unique(n),d=[],m.each(s,function(a,e){if(void 0!==l.data("validation"+e+"Shortcut"))m.each(l.data("validation"+e+"Shortcut").split(","),function(a,e){d.push(e)});else if(v.builtInValidators[e.toLowerCase()]){var t=v.builtInValidators[e.toLowerCase()];"shortcut"===t.type.toLowerCase()&&m.each(t.shortcut.split(","),function(a,e){e=g(e),d.push(e),n.push(e)})}}),0<(s=d).length;);var c={};m.each(n,function(a,t){var i=l.data("validation"+t+"Message"),e=void 0!==i,n=!1;if(i=i||"'"+t+"' validation failed \x3c!-- Add attribute 'data-validation-"+t.toLowerCase()+"-message' to input to change this message --\x3e",m.each(v.validatorTypes,function(a,e){void 0===c[a]&&(c[a]=[]),n||void 0===l.data("validation"+t+g(e.name))||(c[a].push(m.extend(!0,{name:g(e.name),message:i},e.init(l,t))),n=!0)}),!n&&v.builtInValidators[t.toLowerCase()]){var o=m.extend(!0,{},v.builtInValidators[t.toLowerCase()]);e&&(o.message=i);var r=o.type.toLowerCase();"shortcut"===r?n=!0:m.each(v.validatorTypes,function(a,e){void 0===c[a]&&(c[a]=[]),n||r!==a.toLowerCase()||(l.data("validation"+t+g(e.name),o[e.name.toLowerCase()]),c[r].push(m.extend(o,e.init(l,t))),n=!0)})}n||m.error("Cannot find validation info for '"+t+"'")}),i.data("original-contents",i.data("original-contents")?i.data("original-contents"):i.html()),i.data("original-role",i.data("original-role")?i.data("original-role"):i.attr("role")),t.data("original-classes",t.data("original-clases")?t.data("original-classes"):t.attr("class")),l.data("original-aria-invalid",l.data("original-aria-invalid")?l.data("original-aria-invalid"):l.attr("aria-invalid")),l.bind("validation.validation",function(a,e){var i=h(l),n=[];return m.each(c,function(t,a){(i||i.length||e&&e.includeEmpty||v.validatorTypes[t].blockSubmit&&e&&e.submitting)&&m.each(a,function(a,e){v.validatorTypes[t].validate(l,i,e)&&n.push(e.message)})}),n}),l.bind("getValidators.validation",function(){return c}),l.bind("submit.validation",function(){return l.triggerHandler("change.validation",{submitting:!0})}),l.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(a,n){var e=h(l),o=[];t.find("input,textarea,select").each(function(a,e){var t=o.length;if(m.each(m(e).triggerHandler("validation.validation",n),function(a,e){o.push(e)}),o.length>t)m(e).attr("aria-invalid","true");else{var i=l.data("original-aria-invalid");m(e).attr("aria-invalid",void 0!==i&&i)}}),r.find("input,select,textarea").not(l).not('[name="'+l.attr("name")+'"]').trigger("validationLostFocus.validation"),(o=m.unique(o.sort())).length?(t.removeClass("success error").addClass("warning"),v.options.semanticallyStrict&&1===o.length?i.html(o[0]+(v.options.prependExistingHelpBlock?i.data("original-contents"):"")):i.html('<ul role="alert"><li>'+o.join("</li><li>")+"</li></ul>"+(v.options.prependExistingHelpBlock?i.data("original-contents"):""))):(t.removeClass("warning error success"),0<e.length&&t.addClass("success"),i.html(i.data("original-contents"))),"blur"===a.type&&t.removeClass("success")}),l.bind("validationLostFocus.validation",function(){t.removeClass("success")})})},destroy:function(){return this.each(function(){var a=m(this),e=a.parents(".form-group").first(),t=e.find(".help-block").first();a.unbind(".validation"),t.html(t.data("original-contents")),e.attr("class",e.data("original-classes")),a.attr("aria-invalid",a.data("original-aria-invalid")),t.attr("role",a.data("original-role")),-1<u.indexOf(t[0])&&t.remove()})},collectErrors:function(a){var o={};return this.each(function(a,e){var t=m(e),i=t.attr("name"),n=t.triggerHandler("validation.validation",{includeEmpty:!0});o[i]=m.extend(!0,n,o[i])}),m.each(o,function(a,e){0===e.length&&delete o[a]}),o},hasErrors:function(){var t=[];return this.each(function(a,e){t=t.concat(m(e).triggerHandler("getValidators.validation")?m(e).triggerHandler("validation.validation",{submitting:!0}):[])}),0<t.length},override:function(a){t=m.extend(!0,t,a)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,t){if(t.lastValue===e&&t.lastFinished)return!t.lastValid;if(!0===t.lastFinished){t.lastValue=e,t.lastValid=!0,t.lastFinished=!1;var i=t,n=a;!function(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),o=0;o<i.length;o++)e=e[i[o]];e[n].apply(this,t)}(t.callback,window,a,e,function(a){i.lastValue===a.value&&(i.lastValid=a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,n.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){n.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(e,a,t){return""+t.lastValue==""+a&&!0===t.lastFinished?!1===t.lastValid:(!0===t.lastFinished&&(t.lastValue=a,t.lastValid=!0,t.lastFinished=!1,m.ajax({url:t.url,data:"value="+a+"&field="+e.attr("name"),dataType:"json",success:function(a){""+t.lastValue==""+a.value&&(t.lastValid=!!a.valid,a.message&&(t.message=a.message),t.lastFinished=!0,e.data("validation"+t.validatorName+"Message",t.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){t.lastValid=!0,t.message="ajax call failed",t.lastFinished=!0,e.data("validation"+t.validatorName+"Message",t.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,e){return{regex:(t=a.data("validation"+e+"Regex"),new RegExp("^"+t+"$"))};var t},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(0<e.length&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},g=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,e,t){return e+t.toUpperCase()})},h=function(a){var e=a.val(),t=a.attr("type");return"checkbox"===t&&(e=a.is(":checked")?e:""),"radio"===t&&(e=0<m('input[name="'+a.attr("name")+'"]:checked').length?e:""),e};m.fn.jqBootstrapValidation=function(a){return t.methods[a]?t.methods[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?(m.error("Method "+a+" does not exist on jQuery.jqBootstrapValidation"),null):t.methods.init.apply(this,arguments)},m.jqBootstrapValidation=function(a){m(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);
  ;/*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  ( function( global, factory ) {
  
      "use strict";
  
      if ( typeof module === "object" && typeof module.exports === "object" ) {
  
          // For CommonJS and CommonJS-like environments where a proper `window`
          // is present, execute the factory and get jQuery.
          // For environments that do not have a `window` with a `document`
          // (such as Node.js), expose a factory as module.exports.
          // This accentuates the need for the creation of a real `window`.
          // e.g. var jQuery = require("jquery")(window);
          // See ticket #14549 for more info.
          module.exports = global.document ?
              factory( global, true ) :
              function( w ) {
                  if ( !w.document ) {
                      throw new Error( "jQuery requires a window with a document" );
                  }
                  return factory( w );
              };
      } else {
          factory( global );
      }
  
  // Pass this if window is not defined yet
  } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
  
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";
  
  var arr = [];
  
  var document = window.document;
  
  var getProto = Object.getPrototypeOf;
  
  var slice = arr.slice;
  
  var concat = arr.concat;
  
  var push = arr.push;
  
  var indexOf = arr.indexOf;
  
  var class2type = {};
  
  var toString = class2type.toString;
  
  var hasOwn = class2type.hasOwnProperty;
  
  var fnToString = hasOwn.toString;
  
  var ObjectFunctionString = fnToString.call( Object );
  
  var support = {};
  
  var isFunction = function isFunction( obj ) {
  
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
  
  
  var isWindow = function isWindow( obj ) {
          return obj != null && obj === obj.window;
      };
  
  
  
  
      var preservedScriptAttributes = {
          type: true,
          src: true,
          noModule: true
      };
  
      function DOMEval( code, doc, node ) {
          doc = doc || document;
  
          var i,
              script = doc.createElement( "script" );
  
          script.text = code;
          if ( node ) {
              for ( i in preservedScriptAttributes ) {
                  if ( node[ i ] ) {
                      script[ i ] = node[ i ];
                  }
              }
          }
          doc.head.appendChild( script ).parentNode.removeChild( script );
      }
  
  
  function toType( obj ) {
      if ( obj == null ) {
          return obj + "";
      }
  
      // Support: Android <=2.3 only (functionish RegExp)
      return typeof obj === "object" || typeof obj === "function" ?
          class2type[ toString.call( obj ) ] || "object" :
          typeof obj;
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module
  
  
  
  var
      version = "3.3.1",
  
      // Define a local copy of jQuery
      jQuery = function( selector, context ) {
  
          // The jQuery object is actually just the init constructor 'enhanced'
          // Need init if jQuery is called (just allow error to be thrown if not included)
          return new jQuery.fn.init( selector, context );
      },
  
      // Support: Android <=4.0 only
      // Make sure we trim BOM and NBSP
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  
  jQuery.fn = jQuery.prototype = {
  
      // The current version of jQuery being used
      jquery: version,
  
      constructor: jQuery,
  
      // The default length of a jQuery object is 0
      length: 0,
  
      toArray: function() {
          return slice.call( this );
      },
  
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function( num ) {
  
          // Return all the elements in a clean array
          if ( num == null ) {
              return slice.call( this );
          }
  
          // Return just the one element from the set
          return num < 0 ? this[ num + this.length ] : this[ num ];
      },
  
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function( elems ) {
  
          // Build a new jQuery matched element set
          var ret = jQuery.merge( this.constructor(), elems );
  
          // Add the old object onto the stack (as a reference)
          ret.prevObject = this;
  
          // Return the newly-formed element set
          return ret;
      },
  
      // Execute a callback for every element in the matched set.
      each: function( callback ) {
          return jQuery.each( this, callback );
      },
  
      map: function( callback ) {
          return this.pushStack( jQuery.map( this, function( elem, i ) {
              return callback.call( elem, i, elem );
          } ) );
      },
  
      slice: function() {
          return this.pushStack( slice.apply( this, arguments ) );
      },
  
      first: function() {
          return this.eq( 0 );
      },
  
      last: function() {
          return this.eq( -1 );
      },
  
      eq: function( i ) {
          var len = this.length,
              j = +i + ( i < 0 ? len : 0 );
          return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
      },
  
      end: function() {
          return this.prevObject || this.constructor();
      },
  
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: push,
      sort: arr.sort,
      splice: arr.splice
  };
  
  jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone,
          target = arguments[ 0 ] || {},
          i = 1,
          length = arguments.length,
          deep = false;
  
      // Handle a deep copy situation
      if ( typeof target === "boolean" ) {
          deep = target;
  
          // Skip the boolean and the target
          target = arguments[ i ] || {};
          i++;
      }
  
      // Handle case when target is a string or something (possible in deep copy)
      if ( typeof target !== "object" && !isFunction( target ) ) {
          target = {};
      }
  
      // Extend jQuery itself if only one argument is passed
      if ( i === length ) {
          target = this;
          i--;
      }
  
      for ( ; i < length; i++ ) {
  
          // Only deal with non-null/undefined values
          if ( ( options = arguments[ i ] ) != null ) {
  
              // Extend the base object
              for ( name in options ) {
                  src = target[ name ];
                  copy = options[ name ];
  
                  // Prevent never-ending loop
                  if ( target === copy ) {
                      continue;
                  }
  
                  // Recurse if we're merging plain objects or arrays
                  if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                      ( copyIsArray = Array.isArray( copy ) ) ) ) {
  
                      if ( copyIsArray ) {
                          copyIsArray = false;
                          clone = src && Array.isArray( src ) ? src : [];
  
                      } else {
                          clone = src && jQuery.isPlainObject( src ) ? src : {};
                      }
  
                      // Never move original objects, clone them
                      target[ name ] = jQuery.extend( deep, clone, copy );
  
                  // Don't bring in undefined values
                  } else if ( copy !== undefined ) {
                      target[ name ] = copy;
                  }
              }
          }
      }
  
      // Return the modified object
      return target;
  };
  
  jQuery.extend( {
  
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
  
      // Assume jQuery is ready without the ready module
      isReady: true,
  
      error: function( msg ) {
          throw new Error( msg );
      },
  
      noop: function() {},
  
      isPlainObject: function( obj ) {
          var proto, Ctor;
  
          // Detect obvious negatives
          // Use toString instead of jQuery.type to catch host objects
          if ( !obj || toString.call( obj ) !== "[object Object]" ) {
              return false;
          }
  
          proto = getProto( obj );
  
          // Objects with no prototype (e.g., `Object.create( null )`) are plain
          if ( !proto ) {
              return true;
          }
  
          // Objects with prototype are plain iff they were constructed by a global Object function
          Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
          return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
      },
  
      isEmptyObject: function( obj ) {
  
          /* eslint-disable no-unused-vars */
          // See https://github.com/eslint/eslint/issues/6125
          var name;
  
          for ( name in obj ) {
              return false;
          }
          return true;
      },
  
      // Evaluates a script in a global context
      globalEval: function( code ) {
          DOMEval( code );
      },
  
      each: function( obj, callback ) {
          var length, i = 0;
  
          if ( isArrayLike( obj ) ) {
              length = obj.length;
              for ( ; i < length; i++ ) {
                  if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                      break;
                  }
              }
          } else {
              for ( i in obj ) {
                  if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                      break;
                  }
              }
          }
  
          return obj;
      },
  
      // Support: Android <=4.0 only
      trim: function( text ) {
          return text == null ?
              "" :
              ( text + "" ).replace( rtrim, "" );
      },
  
      // results is for internal usage only
      makeArray: function( arr, results ) {
          var ret = results || [];
  
          if ( arr != null ) {
              if ( isArrayLike( Object( arr ) ) ) {
                  jQuery.merge( ret,
                      typeof arr === "string" ?
                      [ arr ] : arr
                  );
              } else {
                  push.call( ret, arr );
              }
          }
  
          return ret;
      },
  
      inArray: function( elem, arr, i ) {
          return arr == null ? -1 : indexOf.call( arr, elem, i );
      },
  
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function( first, second ) {
          var len = +second.length,
              j = 0,
              i = first.length;
  
          for ( ; j < len; j++ ) {
              first[ i++ ] = second[ j ];
          }
  
          first.length = i;
  
          return first;
      },
  
      grep: function( elems, callback, invert ) {
          var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert;
  
          // Go through the array, only saving the items
          // that pass the validator function
          for ( ; i < length; i++ ) {
              callbackInverse = !callback( elems[ i ], i );
              if ( callbackInverse !== callbackExpect ) {
                  matches.push( elems[ i ] );
              }
          }
  
          return matches;
      },
  
      // arg is for internal usage only
      map: function( elems, callback, arg ) {
          var length, value,
              i = 0,
              ret = [];
  
          // Go through the array, translating each of the items to their new values
          if ( isArrayLike( elems ) ) {
              length = elems.length;
              for ( ; i < length; i++ ) {
                  value = callback( elems[ i ], i, arg );
  
                  if ( value != null ) {
                      ret.push( value );
                  }
              }
  
          // Go through every key on the object,
          } else {
              for ( i in elems ) {
                  value = callback( elems[ i ], i, arg );
  
                  if ( value != null ) {
                      ret.push( value );
                  }
              }
          }
  
          // Flatten any nested arrays
          return concat.apply( [], ret );
      },
  
      // A global GUID counter for objects
      guid: 1,
  
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: support
  } );
  
  if ( typeof Symbol === "function" ) {
      jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
  }
  
  // Populate the class2type map
  jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
  function( i, name ) {
      class2type[ "[object " + name + "]" ] = name.toLowerCase();
  } );
  
  function isArrayLike( obj ) {
  
      // Support: real iOS 8.2 only (not reproducible in simulator)
      // `in` check used to prevent JIT error (gh-2145)
      // hasOwn isn't used here due to false negatives
      // regarding Nodelist length in IE
      var length = !!obj && "length" in obj && obj.length,
          type = toType( obj );
  
      if ( isFunction( obj ) || isWindow( obj ) ) {
          return false;
      }
  
      return type === "array" || length === 0 ||
          typeof length === "number" && length > 0 && ( length - 1 ) in obj;
  }
  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
  (function( window ) {
  
  var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
  
      // Local document vars
      setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
  
      // Instance-specific data
      expando = "sizzle" + 1 * new Date(),
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      sortOrder = function( a, b ) {
          if ( a === b ) {
              hasDuplicate = true;
          }
          return 0;
      },
  
      // Instance methods
      hasOwn = ({}).hasOwnProperty,
      arr = [],
      pop = arr.pop,
      push_native = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
      // https://jsperf.com/thor-indexof-vs-for/5
      indexOf = function( list, elem ) {
          var i = 0,
              len = list.length;
          for ( ; i < len; i++ ) {
              if ( list[i] === elem ) {
                  return i;
              }
          }
          return -1;
      },
  
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  
      // Regular expressions
  
      // http://www.w3.org/TR/css3-selectors/#whitespace
      whitespace = "[\\x20\\t\\r\\n\\f]",
  
      // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
      identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
  
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
          // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace +
          // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
          "*\\]",
  
      pseudos = ":(" + identifier + ")(?:\\((" +
          // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
          // 1. quoted (capture 3; capture 4 or capture 5)
          "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
          // 2. simple (capture 6)
          "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
          // 3. anything else (capture 2)
          ".*" +
          ")\\)|)",
  
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
      rwhitespace = new RegExp( whitespace + "+", "g" ),
      rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
  
      rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
      rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
  
      rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
  
      rpseudo = new RegExp( pseudos ),
      ridentifier = new RegExp( "^" + identifier + "$" ),
  
      matchExpr = {
          "ID": new RegExp( "^#(" + identifier + ")" ),
          "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
          "TAG": new RegExp( "^(" + identifier + "|[*])" ),
          "ATTR": new RegExp( "^" + attributes ),
          "PSEUDO": new RegExp( "^" + pseudos ),
          "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
              "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
              "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
          "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
      },
  
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
  
      rnative = /^[^{]+\{\s*\[native \w/,
  
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
  
      rsibling = /[+~]/,
  
      // CSS escapes
      // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
      runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
      funescape = function( _, escaped, escapedWhitespace ) {
          var high = "0x" + escaped - 0x10000;
          // NaN means non-codepoint
          // Support: Firefox<24
          // Workaround erroneous numeric interpretation of +"0x"
          return high !== high || escapedWhitespace ?
              escaped :
              high < 0 ?
                  // BMP codepoint
                  String.fromCharCode( high + 0x10000 ) :
                  // Supplemental Plane codepoint (surrogate pair)
                  String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
      },
  
      // CSS string/identifier serialization
      // https://drafts.csswg.org/cssom/#common-serializing-idioms
      rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function( ch, asCodePoint ) {
          if ( asCodePoint ) {
  
              // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
              if ( ch === "\0" ) {
                  return "\uFFFD";
              }
  
              // Control characters and (dependent upon position) numbers get escaped as code points
              return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
          }
  
          // Other potentially-special ASCII characters get backslash-escaped
          return "\\" + ch;
      },
  
      // Used for iframes
      // See setDocument()
      // Removing the function wrapper causes a "Permission Denied"
      // error in IE
      unloadHandler = function() {
          setDocument();
      },
  
      disabledAncestor = addCombinator(
          function( elem ) {
              return elem.disabled === true && ("form" in elem || "label" in elem);
          },
          { dir: "parentNode", next: "legend" }
      );
  
  // Optimize for push.apply( _, NodeList )
  try {
      push.apply(
          (arr = slice.call( preferredDoc.childNodes )),
          preferredDoc.childNodes
      );
      // Support: Android<4.0
      // Detect silently failing push.apply
      arr[ preferredDoc.childNodes.length ].nodeType;
  } catch ( e ) {
      push = { apply: arr.length ?
  
          // Leverage slice if possible
          function( target, els ) {
              push_native.apply( target, slice.call(els) );
          } :
  
          // Support: IE<9
          // Otherwise append directly
          function( target, els ) {
              var j = target.length,
                  i = 0;
              // Can't trust NodeList.length
              while ( (target[j++] = els[i++]) ) {}
              target.length = j - 1;
          }
      };
  }
  
  function Sizzle( selector, context, results, seed ) {
      var m, i, elem, nid, match, groups, newSelector,
          newContext = context && context.ownerDocument,
  
          // nodeType defaults to 9, since context defaults to document
          nodeType = context ? context.nodeType : 9;
  
      results = results || [];
  
      // Return early from calls with invalid selector or context
      if ( typeof selector !== "string" || !selector ||
          nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
  
          return results;
      }
  
      // Try to shortcut find operations (as opposed to filters) in HTML documents
      if ( !seed ) {
  
          if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
              setDocument( context );
          }
          context = context || document;
  
          if ( documentIsHTML ) {
  
              // If the selector is sufficiently simple, try using a "get*By*" DOM method
              // (excepting DocumentFragment context, where the methods don't exist)
              if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
  
                  // ID selector
                  if ( (m = match[1]) ) {
  
                      // Document context
                      if ( nodeType === 9 ) {
                          if ( (elem = context.getElementById( m )) ) {
  
                              // Support: IE, Opera, Webkit
                              // TODO: identify versions
                              // getElementById can match elements by name instead of ID
                              if ( elem.id === m ) {
                                  results.push( elem );
                                  return results;
                              }
                          } else {
                              return results;
                          }
  
                      // Element context
                      } else {
  
                          // Support: IE, Opera, Webkit
                          // TODO: identify versions
                          // getElementById can match elements by name instead of ID
                          if ( newContext && (elem = newContext.getElementById( m )) &&
                              contains( context, elem ) &&
                              elem.id === m ) {
  
                              results.push( elem );
                              return results;
                          }
                      }
  
                  // Type selector
                  } else if ( match[2] ) {
                      push.apply( results, context.getElementsByTagName( selector ) );
                      return results;
  
                  // Class selector
                  } else if ( (m = match[3]) && support.getElementsByClassName &&
                      context.getElementsByClassName ) {
  
                      push.apply( results, context.getElementsByClassName( m ) );
                      return results;
                  }
              }
  
              // Take advantage of querySelectorAll
              if ( support.qsa &&
                  !compilerCache[ selector + " " ] &&
                  (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
  
                  if ( nodeType !== 1 ) {
                      newContext = context;
                      newSelector = selector;
  
                  // qSA looks outside Element context, which is not what we want
                  // Thanks to Andrew Dupont for this workaround technique
                  // Support: IE <=8
                  // Exclude object elements
                  } else if ( context.nodeName.toLowerCase() !== "object" ) {
  
                      // Capture the context ID, setting it first if necessary
                      if ( (nid = context.getAttribute( "id" )) ) {
                          nid = nid.replace( rcssescape, fcssescape );
                      } else {
                          context.setAttribute( "id", (nid = expando) );
                      }
  
                      // Prefix every selector in the list
                      groups = tokenize( selector );
                      i = groups.length;
                      while ( i-- ) {
                          groups[i] = "#" + nid + " " + toSelector( groups[i] );
                      }
                      newSelector = groups.join( "," );
  
                      // Expand context for sibling selectors
                      newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                          context;
                  }
  
                  if ( newSelector ) {
                      try {
                          push.apply( results,
                              newContext.querySelectorAll( newSelector )
                          );
                          return results;
                      } catch ( qsaError ) {
                      } finally {
                          if ( nid === expando ) {
                              context.removeAttribute( "id" );
                          }
                      }
                  }
              }
          }
      }
  
      // All others
      return select( selector.replace( rtrim, "$1" ), context, results, seed );
  }
  
  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
  function createCache() {
      var keys = [];
  
      function cache( key, value ) {
          // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
          if ( keys.push( key + " " ) > Expr.cacheLength ) {
              // Only keep the most recent entries
              delete cache[ keys.shift() ];
          }
          return (cache[ key + " " ] = value);
      }
      return cache;
  }
  
  /**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
  function markFunction( fn ) {
      fn[ expando ] = true;
      return fn;
  }
  
  /**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
  function assert( fn ) {
      var el = document.createElement("fieldset");
  
      try {
          return !!fn( el );
      } catch (e) {
          return false;
      } finally {
          // Remove from its parent by default
          if ( el.parentNode ) {
              el.parentNode.removeChild( el );
          }
          // release memory in IE
          el = null;
      }
  }
  
  /**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
  function addHandle( attrs, handler ) {
      var arr = attrs.split("|"),
          i = arr.length;
  
      while ( i-- ) {
          Expr.attrHandle[ arr[i] ] = handler;
      }
  }
  
  /**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
  function siblingCheck( a, b ) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
              a.sourceIndex - b.sourceIndex;
  
      // Use IE sourceIndex if available on both nodes
      if ( diff ) {
          return diff;
      }
  
      // Check if b follows a
      if ( cur ) {
          while ( (cur = cur.nextSibling) ) {
              if ( cur === b ) {
                  return -1;
              }
          }
      }
  
      return a ? 1 : -1;
  }
  
  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
  function createInputPseudo( type ) {
      return function( elem ) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
      };
  }
  
  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
  function createButtonPseudo( type ) {
      return function( elem ) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
      };
  }
  
  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
  function createDisabledPseudo( disabled ) {
  
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function( elem ) {
  
          // Only certain elements can match :enabled or :disabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
          if ( "form" in elem ) {
  
              // Check for inherited disabledness on relevant non-disabled elements:
              // * listed form-associated elements in a disabled fieldset
              //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
              // * option elements in a disabled optgroup
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
              // All such elements have a "form" property.
              if ( elem.parentNode && elem.disabled === false ) {
  
                  // Option elements defer to a parent optgroup if present
                  if ( "label" in elem ) {
                      if ( "label" in elem.parentNode ) {
                          return elem.parentNode.disabled === disabled;
                      } else {
                          return elem.disabled === disabled;
                      }
                  }
  
                  // Support: IE 6 - 11
                  // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                  return elem.isDisabled === disabled ||
  
                      // Where there is no isDisabled, check manually
                      /* jshint -W018 */
                      elem.isDisabled !== !disabled &&
                          disabledAncestor( elem ) === disabled;
              }
  
              return elem.disabled === disabled;
  
          // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
          } else if ( "label" in elem ) {
              return elem.disabled === disabled;
          }
  
          // Remaining elements are neither :enabled nor :disabled
          return false;
      };
  }
  
  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
  function createPositionalPseudo( fn ) {
      return markFunction(function( argument ) {
          argument = +argument;
          return markFunction(function( seed, matches ) {
              var j,
                  matchIndexes = fn( [], seed.length, argument ),
                  i = matchIndexes.length;
  
              // Match elements found at the specified indexes
              while ( i-- ) {
                  if ( seed[ (j = matchIndexes[i]) ] ) {
                      seed[j] = !(matches[j] = seed[j]);
                  }
              }
          });
      });
  }
  
  /**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
  function testContext( context ) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
  }
  
  // Expose support vars for convenience
  support = Sizzle.support = {};
  
  /**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
  isXML = Sizzle.isXML = function( elem ) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
  };
  
  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
  setDocument = Sizzle.setDocument = function( node ) {
      var hasCompare, subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc;
  
      // Return early if doc is invalid or already selected
      if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
          return document;
      }
  
      // Update global variables
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML( document );
  
      // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      if ( preferredDoc !== document &&
          (subWindow = document.defaultView) && subWindow.top !== subWindow ) {
  
          // Support: IE 11, Edge
          if ( subWindow.addEventListener ) {
              subWindow.addEventListener( "unload", unloadHandler, false );
  
          // Support: IE 9 - 10 only
          } else if ( subWindow.attachEvent ) {
              subWindow.attachEvent( "onunload", unloadHandler );
          }
      }
  
      /* Attributes
      ---------------------------------------------------------------------- */
  
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)
      support.attributes = assert(function( el ) {
          el.className = "i";
          return !el.getAttribute("className");
      });
  
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
  
      // Check if getElementsByTagName("*") returns only elements
      support.getElementsByTagName = assert(function( el ) {
          el.appendChild( document.createComment("") );
          return !el.getElementsByTagName("*").length;
      });
  
      // Support: IE<9
      support.getElementsByClassName = rnative.test( document.getElementsByClassName );
  
      // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test
      support.getById = assert(function( el ) {
          docElem.appendChild( el ).id = expando;
          return !document.getElementsByName || !document.getElementsByName( expando ).length;
      });
  
      // ID filter and find
      if ( support.getById ) {
          Expr.filter["ID"] = function( id ) {
              var attrId = id.replace( runescape, funescape );
              return function( elem ) {
                  return elem.getAttribute("id") === attrId;
              };
          };
          Expr.find["ID"] = function( id, context ) {
              if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                  var elem = context.getElementById( id );
                  return elem ? [ elem ] : [];
              }
          };
      } else {
          Expr.filter["ID"] =  function( id ) {
              var attrId = id.replace( runescape, funescape );
              return function( elem ) {
                  var node = typeof elem.getAttributeNode !== "undefined" &&
                      elem.getAttributeNode("id");
                  return node && node.value === attrId;
              };
          };
  
          // Support: IE 6 - 7 only
          // getElementById is not reliable as a find shortcut
          Expr.find["ID"] = function( id, context ) {
              if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                  var node, i, elems,
                      elem = context.getElementById( id );
  
                  if ( elem ) {
  
                      // Verify the id attribute
                      node = elem.getAttributeNode("id");
                      if ( node && node.value === id ) {
                          return [ elem ];
                      }
  
                      // Fall back on getElementsByName
                      elems = context.getElementsByName( id );
                      i = 0;
                      while ( (elem = elems[i++]) ) {
                          node = elem.getAttributeNode("id");
                          if ( node && node.value === id ) {
                              return [ elem ];
                          }
                      }
                  }
  
                  return [];
              }
          };
      }
  
      // Tag
      Expr.find["TAG"] = support.getElementsByTagName ?
          function( tag, context ) {
              if ( typeof context.getElementsByTagName !== "undefined" ) {
                  return context.getElementsByTagName( tag );
  
              // DocumentFragment nodes don't have gEBTN
              } else if ( support.qsa ) {
                  return context.querySelectorAll( tag );
              }
          } :
  
          function( tag, context ) {
              var elem,
                  tmp = [],
                  i = 0,
                  // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                  results = context.getElementsByTagName( tag );
  
              // Filter out possible comments
              if ( tag === "*" ) {
                  while ( (elem = results[i++]) ) {
                      if ( elem.nodeType === 1 ) {
                          tmp.push( elem );
                      }
                  }
  
                  return tmp;
              }
              return results;
          };
  
      // Class
      Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
          if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
              return context.getElementsByClassName( className );
          }
      };
  
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
  
      // QSA and matchesSelector support
  
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      rbuggyMatches = [];
  
      // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378
      rbuggyQSA = [];
  
      if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
          // Build QSA regex
          // Regex strategy adopted from Diego Perini
          assert(function( el ) {
              // Select is set to empty string on purpose
              // This is to test IE's treatment of not explicitly
              // setting a boolean content attribute,
              // since its presence should be enough
              // https://bugs.jquery.com/ticket/12359
              docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                  "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                  "<option selected=''></option></select>";
  
              // Support: IE8, Opera 11-12.16
              // Nothing should be selected when empty strings follow ^= or $= or *=
              // The test attribute must be unknown in Opera but "safe" for WinRT
              // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
              if ( el.querySelectorAll("[msallowcapture^='']").length ) {
                  rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
              }
  
              // Support: IE8
              // Boolean attributes and "value" are not treated correctly
              if ( !el.querySelectorAll("[selected]").length ) {
                  rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
              }
  
              // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
              if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                  rbuggyQSA.push("~=");
              }
  
              // Webkit/Opera - :checked should return selected option elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              // IE8 throws error here and will not see later tests
              if ( !el.querySelectorAll(":checked").length ) {
                  rbuggyQSA.push(":checked");
              }
  
              // Support: Safari 8+, iOS 8+
              // https://bugs.webkit.org/show_bug.cgi?id=136851
              // In-page `selector#id sibling-combinator selector` fails
              if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                  rbuggyQSA.push(".#.+[+~]");
              }
          });
  
          assert(function( el ) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" +
                  "<select disabled='disabled'><option/></select>";
  
              // Support: Windows 8 Native Apps
              // The type and name attributes are restricted during .innerHTML assignment
              var input = document.createElement("input");
              input.setAttribute( "type", "hidden" );
              el.appendChild( input ).setAttribute( "name", "D" );
  
              // Support: IE8
              // Enforce case-sensitivity of name attribute
              if ( el.querySelectorAll("[name=d]").length ) {
                  rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
              }
  
              // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
              // IE8 throws error here and will not see later tests
              if ( el.querySelectorAll(":enabled").length !== 2 ) {
                  rbuggyQSA.push( ":enabled", ":disabled" );
              }
  
              // Support: IE9-11+
              // IE's :disabled selector does not pick up the children of disabled fieldsets
              docElem.appendChild( el ).disabled = true;
              if ( el.querySelectorAll(":disabled").length !== 2 ) {
                  rbuggyQSA.push( ":enabled", ":disabled" );
              }
  
              // Opera 10-11 does not throw on post-comma invalid pseudos
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
          });
      }
  
      if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
          docElem.webkitMatchesSelector ||
          docElem.mozMatchesSelector ||
          docElem.oMatchesSelector ||
          docElem.msMatchesSelector) )) ) {
  
          assert(function( el ) {
              // Check to see if it's possible to do matchesSelector
              // on a disconnected node (IE 9)
              support.disconnectedMatch = matches.call( el, "*" );
  
              // This should fail with an exception
              // Gecko does not error, returns false instead
              matches.call( el, "[s!='']:x" );
              rbuggyMatches.push( "!=", pseudos );
          });
      }
  
      rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
      rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
  
      /* Contains
      ---------------------------------------------------------------------- */
      hasCompare = rnative.test( docElem.compareDocumentPosition );
  
      // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself
      contains = hasCompare || rnative.test( docElem.contains ) ?
          function( a, b ) {
              var adown = a.nodeType === 9 ? a.documentElement : a,
                  bup = b && b.parentNode;
              return a === bup || !!( bup && bup.nodeType === 1 && (
                  adown.contains ?
                      adown.contains( bup ) :
                      a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
              ));
          } :
          function( a, b ) {
              if ( b ) {
                  while ( (b = b.parentNode) ) {
                      if ( b === a ) {
                          return true;
                      }
                  }
              }
              return false;
          };
  
      /* Sorting
      ---------------------------------------------------------------------- */
  
      // Document order sorting
      sortOrder = hasCompare ?
      function( a, b ) {
  
          // Flag for duplicate removal
          if ( a === b ) {
              hasDuplicate = true;
              return 0;
          }
  
          // Sort on method existence if only one input has compareDocumentPosition
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if ( compare ) {
              return compare;
          }
  
          // Calculate position if both inputs belong to the same document
          compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
              a.compareDocumentPosition( b ) :
  
              // Otherwise we know they are disconnected
              1;
  
          // Disconnected nodes
          if ( compare & 1 ||
              (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
  
              // Choose the first element that is related to our preferred document
              if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
                  return -1;
              }
              if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
                  return 1;
              }
  
              // Maintain original order
              return sortInput ?
                  ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                  0;
          }
  
          return compare & 4 ? -1 : 1;
      } :
      function( a, b ) {
          // Exit early if the nodes are identical
          if ( a === b ) {
              hasDuplicate = true;
              return 0;
          }
  
          var cur,
              i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [ a ],
              bp = [ b ];
  
          // Parentless nodes are either documents or disconnected
          if ( !aup || !bup ) {
              return a === document ? -1 :
                  b === document ? 1 :
                  aup ? -1 :
                  bup ? 1 :
                  sortInput ?
                  ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                  0;
  
          // If the nodes are siblings, we can do a quick check
          } else if ( aup === bup ) {
              return siblingCheck( a, b );
          }
  
          // Otherwise we need full lists of their ancestors for comparison
          cur = a;
          while ( (cur = cur.parentNode) ) {
              ap.unshift( cur );
          }
          cur = b;
          while ( (cur = cur.parentNode) ) {
              bp.unshift( cur );
          }
  
          // Walk down the tree looking for a discrepancy
          while ( ap[i] === bp[i] ) {
              i++;
          }
  
          return i ?
              // Do a sibling check if the nodes have a common ancestor
              siblingCheck( ap[i], bp[i] ) :
  
              // Otherwise nodes in our document sort first
              ap[i] === preferredDoc ? -1 :
              bp[i] === preferredDoc ? 1 :
              0;
      };
  
      return document;
  };
  
  Sizzle.matches = function( expr, elements ) {
      return Sizzle( expr, null, null, elements );
  };
  
  Sizzle.matchesSelector = function( elem, expr ) {
      // Set document vars if needed
      if ( ( elem.ownerDocument || elem ) !== document ) {
          setDocument( elem );
      }
  
      // Make sure that attribute selectors are quoted
      expr = expr.replace( rattributeQuotes, "='$1']" );
  
      if ( support.matchesSelector && documentIsHTML &&
          !compilerCache[ expr + " " ] &&
          ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
          ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
  
          try {
              var ret = matches.call( elem, expr );
  
              // IE 9's matchesSelector returns false on disconnected nodes
              if ( ret || support.disconnectedMatch ||
                      // As well, disconnected nodes are said to be in a document
                      // fragment in IE 9
                      elem.document && elem.document.nodeType !== 11 ) {
                  return ret;
              }
          } catch (e) {}
      }
  
      return Sizzle( expr, document, null, [ elem ] ).length > 0;
  };
  
  Sizzle.contains = function( context, elem ) {
      // Set document vars if needed
      if ( ( context.ownerDocument || context ) !== document ) {
          setDocument( context );
      }
      return contains( context, elem );
  };
  
  Sizzle.attr = function( elem, name ) {
      // Set document vars if needed
      if ( ( elem.ownerDocument || elem ) !== document ) {
          setDocument( elem );
      }
  
      var fn = Expr.attrHandle[ name.toLowerCase() ],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
          val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
              fn( elem, name, !documentIsHTML ) :
              undefined;
  
      return val !== undefined ?
          val :
          support.attributes || !documentIsHTML ?
              elem.getAttribute( name ) :
              (val = elem.getAttributeNode(name)) && val.specified ?
                  val.value :
                  null;
  };
  
  Sizzle.escape = function( sel ) {
      return (sel + "").replace( rcssescape, fcssescape );
  };
  
  Sizzle.error = function( msg ) {
      throw new Error( "Syntax error, unrecognized expression: " + msg );
  };
  
  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
  Sizzle.uniqueSort = function( results ) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
  
      // Unless we *know* we can detect duplicates, assume their presence
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice( 0 );
      results.sort( sortOrder );
  
      if ( hasDuplicate ) {
          while ( (elem = results[i++]) ) {
              if ( elem === results[ i ] ) {
                  j = duplicates.push( i );
              }
          }
          while ( j-- ) {
              results.splice( duplicates[ j ], 1 );
          }
      }
  
      // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225
      sortInput = null;
  
      return results;
  };
  
  /**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
  getText = Sizzle.getText = function( elem ) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
  
      if ( !nodeType ) {
          // If no nodeType, this is expected to be an array
          while ( (node = elem[i++]) ) {
              // Do not traverse comment nodes
              ret += getText( node );
          }
      } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
          // Use textContent for elements
          // innerText usage removed for consistency of new lines (jQuery #11153)
          if ( typeof elem.textContent === "string" ) {
              return elem.textContent;
          } else {
              // Traverse its children
              for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                  ret += getText( elem );
              }
          }
      } else if ( nodeType === 3 || nodeType === 4 ) {
          return elem.nodeValue;
      }
      // Do not include comment or processing instruction nodes
  
      return ret;
  };
  
  Expr = Sizzle.selectors = {
  
      // Can be adjusted by the user
      cacheLength: 50,
  
      createPseudo: markFunction,
  
      match: matchExpr,
  
      attrHandle: {},
  
      find: {},
  
      relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
      },
  
      preFilter: {
          "ATTR": function( match ) {
              match[1] = match[1].replace( runescape, funescape );
  
              // Move the given value to match[3] whether quoted or unquoted
              match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
  
              if ( match[2] === "~=" ) {
                  match[3] = " " + match[3] + " ";
              }
  
              return match.slice( 0, 4 );
          },
  
          "CHILD": function( match ) {
              /* matches from matchExpr["CHILD"]
                  1 type (only|nth|...)
                  2 what (child|of-type)
                  3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                  4 xn-component of xn+y argument ([+-]?\d*n|)
                  5 sign of xn-component
                  6 x of xn-component
                  7 sign of y-component
                  8 y of y-component
              */
              match[1] = match[1].toLowerCase();
  
              if ( match[1].slice( 0, 3 ) === "nth" ) {
                  // nth-* requires argument
                  if ( !match[3] ) {
                      Sizzle.error( match[0] );
                  }
  
                  // numeric x and y parameters for Expr.filter.CHILD
                  // remember that false/true cast respectively to 0/1
                  match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                  match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
  
              // other types prohibit arguments
              } else if ( match[3] ) {
                  Sizzle.error( match[0] );
              }
  
              return match;
          },
  
          "PSEUDO": function( match ) {
              var excess,
                  unquoted = !match[6] && match[2];
  
              if ( matchExpr["CHILD"].test( match[0] ) ) {
                  return null;
              }
  
              // Accept quoted arguments as-is
              if ( match[3] ) {
                  match[2] = match[4] || match[5] || "";
  
              // Strip excess characters from unquoted arguments
              } else if ( unquoted && rpseudo.test( unquoted ) &&
                  // Get excess from tokenize (recursively)
                  (excess = tokenize( unquoted, true )) &&
                  // advance to the next closing parenthesis
                  (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
  
                  // excess is a negative index
                  match[0] = match[0].slice( 0, excess );
                  match[2] = unquoted.slice( 0, excess );
              }
  
              // Return only captures needed by the pseudo filter method (type and argument)
              return match.slice( 0, 3 );
          }
      },
  
      filter: {
  
          "TAG": function( nodeNameSelector ) {
              var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
              return nodeNameSelector === "*" ?
                  function() { return true; } :
                  function( elem ) {
                      return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                  };
          },
  
          "CLASS": function( className ) {
              var pattern = classCache[ className + " " ];
  
              return pattern ||
                  (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                  classCache( className, function( elem ) {
                      return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
                  });
          },
  
          "ATTR": function( name, operator, check ) {
              return function( elem ) {
                  var result = Sizzle.attr( elem, name );
  
                  if ( result == null ) {
                      return operator === "!=";
                  }
                  if ( !operator ) {
                      return true;
                  }
  
                  result += "";
  
                  return operator === "=" ? result === check :
                      operator === "!=" ? result !== check :
                      operator === "^=" ? check && result.indexOf( check ) === 0 :
                      operator === "*=" ? check && result.indexOf( check ) > -1 :
                      operator === "$=" ? check && result.slice( -check.length ) === check :
                      operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                      operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                      false;
              };
          },
  
          "CHILD": function( type, what, argument, first, last ) {
              var simple = type.slice( 0, 3 ) !== "nth",
                  forward = type.slice( -4 ) !== "last",
                  ofType = what === "of-type";
  
              return first === 1 && last === 0 ?
  
                  // Shortcut for :nth-*(n)
                  function( elem ) {
                      return !!elem.parentNode;
                  } :
  
                  function( elem, context, xml ) {
                      var cache, uniqueCache, outerCache, node, nodeIndex, start,
                          dir = simple !== forward ? "nextSibling" : "previousSibling",
                          parent = elem.parentNode,
                          name = ofType && elem.nodeName.toLowerCase(),
                          useCache = !xml && !ofType,
                          diff = false;
  
                      if ( parent ) {
  
                          // :(first|last|only)-(child|of-type)
                          if ( simple ) {
                              while ( dir ) {
                                  node = elem;
                                  while ( (node = node[ dir ]) ) {
                                      if ( ofType ?
                                          node.nodeName.toLowerCase() === name :
                                          node.nodeType === 1 ) {
  
                                          return false;
                                      }
                                  }
                                  // Reverse direction for :only-* (if we haven't yet done so)
                                  start = dir = type === "only" && !start && "nextSibling";
                              }
                              return true;
                          }
  
                          start = [ forward ? parent.firstChild : parent.lastChild ];
  
                          // non-xml :nth-child(...) stores cache data on `parent`
                          if ( forward && useCache ) {
  
                              // Seek `elem` from a previously-cached index
  
                              // ...in a gzip-friendly way
                              node = parent;
                              outerCache = node[ expando ] || (node[ expando ] = {});
  
                              // Support: IE <9 only
                              // Defend against cloned attroperties (jQuery gh-1709)
                              uniqueCache = outerCache[ node.uniqueID ] ||
                                  (outerCache[ node.uniqueID ] = {});
  
                              cache = uniqueCache[ type ] || [];
                              nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                              diff = nodeIndex && cache[ 2 ];
                              node = nodeIndex && parent.childNodes[ nodeIndex ];
  
                              while ( (node = ++nodeIndex && node && node[ dir ] ||
  
                                  // Fallback to seeking `elem` from the start
                                  (diff = nodeIndex = 0) || start.pop()) ) {
  
                                  // When found, cache indexes on `parent` and break
                                  if ( node.nodeType === 1 && ++diff && node === elem ) {
                                      uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                      break;
                                  }
                              }
  
                          } else {
                              // Use previously-cached element index if available
                              if ( useCache ) {
                                  // ...in a gzip-friendly way
                                  node = elem;
                                  outerCache = node[ expando ] || (node[ expando ] = {});
  
                                  // Support: IE <9 only
                                  // Defend against cloned attroperties (jQuery gh-1709)
                                  uniqueCache = outerCache[ node.uniqueID ] ||
                                      (outerCache[ node.uniqueID ] = {});
  
                                  cache = uniqueCache[ type ] || [];
                                  nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                  diff = nodeIndex;
                              }
  
                              // xml :nth-child(...)
                              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                              if ( diff === false ) {
                                  // Use the same loop as above to seek `elem` from the start
                                  while ( (node = ++nodeIndex && node && node[ dir ] ||
                                      (diff = nodeIndex = 0) || start.pop()) ) {
  
                                      if ( ( ofType ?
                                          node.nodeName.toLowerCase() === name :
                                          node.nodeType === 1 ) &&
                                          ++diff ) {
  
                                          // Cache the index of each encountered element
                                          if ( useCache ) {
                                              outerCache = node[ expando ] || (node[ expando ] = {});
  
                                              // Support: IE <9 only
                                              // Defend against cloned attroperties (jQuery gh-1709)
                                              uniqueCache = outerCache[ node.uniqueID ] ||
                                                  (outerCache[ node.uniqueID ] = {});
  
                                              uniqueCache[ type ] = [ dirruns, diff ];
                                          }
  
                                          if ( node === elem ) {
                                              break;
                                          }
                                      }
                                  }
                              }
                          }
  
                          // Incorporate the offset, then check against cycle size
                          diff -= last;
                          return diff === first || ( diff % first === 0 && diff / first >= 0 );
                      }
                  };
          },
  
          "PSEUDO": function( pseudo, argument ) {
              // pseudo-class names are case-insensitive
              // http://www.w3.org/TR/selectors/#pseudo-classes
              // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
              // Remember that setFilters inherits from pseudos
              var args,
                  fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                      Sizzle.error( "unsupported pseudo: " + pseudo );
  
              // The user may use createPseudo to indicate that
              // arguments are needed to create the filter function
              // just as Sizzle does
              if ( fn[ expando ] ) {
                  return fn( argument );
              }
  
              // But maintain support for old signatures
              if ( fn.length > 1 ) {
                  args = [ pseudo, pseudo, "", argument ];
                  return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                      markFunction(function( seed, matches ) {
                          var idx,
                              matched = fn( seed, argument ),
                              i = matched.length;
                          while ( i-- ) {
                              idx = indexOf( seed, matched[i] );
                              seed[ idx ] = !( matches[ idx ] = matched[i] );
                          }
                      }) :
                      function( elem ) {
                          return fn( elem, 0, args );
                      };
              }
  
              return fn;
          }
      },
  
      pseudos: {
          // Potentially complex pseudos
          "not": markFunction(function( selector ) {
              // Trim the selector passed to compile
              // to avoid treating leading and trailing
              // spaces as combinators
              var input = [],
                  results = [],
                  matcher = compile( selector.replace( rtrim, "$1" ) );
  
              return matcher[ expando ] ?
                  markFunction(function( seed, matches, context, xml ) {
                      var elem,
                          unmatched = matcher( seed, null, xml, [] ),
                          i = seed.length;
  
                      // Match elements unmatched by `matcher`
                      while ( i-- ) {
                          if ( (elem = unmatched[i]) ) {
                              seed[i] = !(matches[i] = elem);
                          }
                      }
                  }) :
                  function( elem, context, xml ) {
                      input[0] = elem;
                      matcher( input, null, xml, results );
                      // Don't keep the element (issue #299)
                      input[0] = null;
                      return !results.pop();
                  };
          }),
  
          "has": markFunction(function( selector ) {
              return function( elem ) {
                  return Sizzle( selector, elem ).length > 0;
              };
          }),
  
          "contains": markFunction(function( text ) {
              text = text.replace( runescape, funescape );
              return function( elem ) {
                  return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
              };
          }),
  
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // http://www.w3.org/TR/selectors/#lang-pseudo
          "lang": markFunction( function( lang ) {
              // lang value must be a valid identifier
              if ( !ridentifier.test(lang || "") ) {
                  Sizzle.error( "unsupported lang: " + lang );
              }
              lang = lang.replace( runescape, funescape ).toLowerCase();
              return function( elem ) {
                  var elemLang;
                  do {
                      if ( (elemLang = documentIsHTML ?
                          elem.lang :
                          elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
  
                          elemLang = elemLang.toLowerCase();
                          return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                      }
                  } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                  return false;
              };
          }),
  
          // Miscellaneous
          "target": function( elem ) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice( 1 ) === elem.id;
          },
  
          "root": function( elem ) {
              return elem === docElem;
          },
  
          "focus": function( elem ) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
  
          // Boolean properties
          "enabled": createDisabledPseudo( false ),
          "disabled": createDisabledPseudo( true ),
  
          "checked": function( elem ) {
              // In CSS3, :checked should return both checked and selected elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              var nodeName = elem.nodeName.toLowerCase();
              return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
          },
  
          "selected": function( elem ) {
              // Accessing this property makes selected-by-default
              // options in Safari work properly
              if ( elem.parentNode ) {
                  elem.parentNode.selectedIndex;
              }
  
              return elem.selected === true;
          },
  
          // Contents
          "empty": function( elem ) {
              // http://www.w3.org/TR/selectors/#empty-pseudo
              // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
              //   but not by others (comment: 8; processing instruction: 7; etc.)
              // nodeType < 6 works because attributes (2) do not appear as children
              for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                  if ( elem.nodeType < 6 ) {
                      return false;
                  }
              }
              return true;
          },
  
          "parent": function( elem ) {
              return !Expr.pseudos["empty"]( elem );
          },
  
          // Element/input types
          "header": function( elem ) {
              return rheader.test( elem.nodeName );
          },
  
          "input": function( elem ) {
              return rinputs.test( elem.nodeName );
          },
  
          "button": function( elem ) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
          },
  
          "text": function( elem ) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" &&
                  elem.type === "text" &&
  
                  // Support: IE<8
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
          },
  
          // Position-in-collection
          "first": createPositionalPseudo(function() {
              return [ 0 ];
          }),
  
          "last": createPositionalPseudo(function( matchIndexes, length ) {
              return [ length - 1 ];
          }),
  
          "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
              return [ argument < 0 ? argument + length : argument ];
          }),
  
          "even": createPositionalPseudo(function( matchIndexes, length ) {
              var i = 0;
              for ( ; i < length; i += 2 ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "odd": createPositionalPseudo(function( matchIndexes, length ) {
              var i = 1;
              for ( ; i < length; i += 2 ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
              var i = argument < 0 ? argument + length : argument;
              for ( ; --i >= 0; ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
              var i = argument < 0 ? argument + length : argument;
              for ( ; ++i < length; ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          })
      }
  };
  
  Expr.pseudos["nth"] = Expr.pseudos["eq"];
  
  // Add button/input type pseudos
  for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
      Expr.pseudos[ i ] = createInputPseudo( i );
  }
  for ( i in { submit: true, reset: true } ) {
      Expr.pseudos[ i ] = createButtonPseudo( i );
  }
  
  // Easy API for creating new setFilters
  function setFilters() {}
  setFilters.prototype = Expr.filters = Expr.pseudos;
  Expr.setFilters = new setFilters();
  
  tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
      var matched, match, tokens, type,
          soFar, groups, preFilters,
          cached = tokenCache[ selector + " " ];
  
      if ( cached ) {
          return parseOnly ? 0 : cached.slice( 0 );
      }
  
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
  
      while ( soFar ) {
  
          // Comma and first run
          if ( !matched || (match = rcomma.exec( soFar )) ) {
              if ( match ) {
                  // Don't consume trailing commas as valid
                  soFar = soFar.slice( match[0].length ) || soFar;
              }
              groups.push( (tokens = []) );
          }
  
          matched = false;
  
          // Combinators
          if ( (match = rcombinators.exec( soFar )) ) {
              matched = match.shift();
              tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace( rtrim, " " )
              });
              soFar = soFar.slice( matched.length );
          }
  
          // Filters
          for ( type in Expr.filter ) {
              if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                  (match = preFilters[ type ]( match ))) ) {
                  matched = match.shift();
                  tokens.push({
                      value: matched,
                      type: type,
                      matches: match
                  });
                  soFar = soFar.slice( matched.length );
              }
          }
  
          if ( !matched ) {
              break;
          }
      }
  
      // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens
      return parseOnly ?
          soFar.length :
          soFar ?
              Sizzle.error( selector ) :
              // Cache the tokens
              tokenCache( selector, groups ).slice( 0 );
  };
  
  function toSelector( tokens ) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for ( ; i < len; i++ ) {
          selector += tokens[i].value;
      }
      return selector;
  }
  
  function addCombinator( matcher, combinator, base ) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
  
      return combinator.first ?
          // Check against closest ancestor/preceding element
          function( elem, context, xml ) {
              while ( (elem = elem[ dir ]) ) {
                  if ( elem.nodeType === 1 || checkNonElements ) {
                      return matcher( elem, context, xml );
                  }
              }
              return false;
          } :
  
          // Check against all ancestor/preceding elements
          function( elem, context, xml ) {
              var oldCache, uniqueCache, outerCache,
                  newCache = [ dirruns, doneName ];
  
              // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
              if ( xml ) {
                  while ( (elem = elem[ dir ]) ) {
                      if ( elem.nodeType === 1 || checkNonElements ) {
                          if ( matcher( elem, context, xml ) ) {
                              return true;
                          }
                      }
                  }
              } else {
                  while ( (elem = elem[ dir ]) ) {
                      if ( elem.nodeType === 1 || checkNonElements ) {
                          outerCache = elem[ expando ] || (elem[ expando ] = {});
  
                          // Support: IE <9 only
                          // Defend against cloned attroperties (jQuery gh-1709)
                          uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
  
                          if ( skip && skip === elem.nodeName.toLowerCase() ) {
                              elem = elem[ dir ] || elem;
                          } else if ( (oldCache = uniqueCache[ key ]) &&
                              oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
  
                              // Assign to newCache so results back-propagate to previous elements
                              return (newCache[ 2 ] = oldCache[ 2 ]);
                          } else {
                              // Reuse newcache so results back-propagate to previous elements
                              uniqueCache[ key ] = newCache;
  
                              // A match means we're done; a fail means we have to keep checking
                              if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                                  return true;
                              }
                          }
                      }
                  }
              }
              return false;
          };
  }
  
  function elementMatcher( matchers ) {
      return matchers.length > 1 ?
          function( elem, context, xml ) {
              var i = matchers.length;
              while ( i-- ) {
                  if ( !matchers[i]( elem, context, xml ) ) {
                      return false;
                  }
              }
              return true;
          } :
          matchers[0];
  }
  
  function multipleContexts( selector, contexts, results ) {
      var i = 0,
          len = contexts.length;
      for ( ; i < len; i++ ) {
          Sizzle( selector, contexts[i], results );
      }
      return results;
  }
  
  function condense( unmatched, map, filter, context, xml ) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
  
      for ( ; i < len; i++ ) {
          if ( (elem = unmatched[i]) ) {
              if ( !filter || filter( elem, context, xml ) ) {
                  newUnmatched.push( elem );
                  if ( mapped ) {
                      map.push( i );
                  }
              }
          }
      }
  
      return newUnmatched;
  }
  
  function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
      if ( postFilter && !postFilter[ expando ] ) {
          postFilter = setMatcher( postFilter );
      }
      if ( postFinder && !postFinder[ expando ] ) {
          postFinder = setMatcher( postFinder, postSelector );
      }
      return markFunction(function( seed, results, context, xml ) {
          var temp, i, elem,
              preMap = [],
              postMap = [],
              preexisting = results.length,
  
              // Get initial elements from seed or context
              elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
  
              // Prefilter to get matcher input, preserving a map for seed-results synchronization
              matcherIn = preFilter && ( seed || !selector ) ?
                  condense( elems, preMap, preFilter, context, xml ) :
                  elems,
  
              matcherOut = matcher ?
                  // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                  postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
  
                      // ...intermediate processing is necessary
                      [] :
  
                      // ...otherwise use results directly
                      results :
                  matcherIn;
  
          // Find primary matches
          if ( matcher ) {
              matcher( matcherIn, matcherOut, context, xml );
          }
  
          // Apply postFilter
          if ( postFilter ) {
              temp = condense( matcherOut, postMap );
              postFilter( temp, [], context, xml );
  
              // Un-match failing elements by moving them back to matcherIn
              i = temp.length;
              while ( i-- ) {
                  if ( (elem = temp[i]) ) {
                      matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                  }
              }
          }
  
          if ( seed ) {
              if ( postFinder || preFilter ) {
                  if ( postFinder ) {
                      // Get the final matcherOut by condensing this intermediate into postFinder contexts
                      temp = [];
                      i = matcherOut.length;
                      while ( i-- ) {
                          if ( (elem = matcherOut[i]) ) {
                              // Restore matcherIn since elem is not yet a final match
                              temp.push( (matcherIn[i] = elem) );
                          }
                      }
                      postFinder( null, (matcherOut = []), temp, xml );
                  }
  
                  // Move matched elements from seed to results to keep them synchronized
                  i = matcherOut.length;
                  while ( i-- ) {
                      if ( (elem = matcherOut[i]) &&
                          (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
  
                          seed[temp] = !(results[temp] = elem);
                      }
                  }
              }
  
          // Add elements to results, through postFinder if defined
          } else {
              matcherOut = condense(
                  matcherOut === results ?
                      matcherOut.splice( preexisting, matcherOut.length ) :
                      matcherOut
              );
              if ( postFinder ) {
                  postFinder( null, results, matcherOut, xml );
              } else {
                  push.apply( results, matcherOut );
              }
          }
      });
  }
  
  function matcherFromTokens( tokens ) {
      var checkContext, matcher, j,
          len = tokens.length,
          leadingRelative = Expr.relative[ tokens[0].type ],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
  
          // The foundational matcher ensures that elements are reachable from top-level context(s)
          matchContext = addCombinator( function( elem ) {
              return elem === checkContext;
          }, implicitRelative, true ),
          matchAnyContext = addCombinator( function( elem ) {
              return indexOf( checkContext, elem ) > -1;
          }, implicitRelative, true ),
          matchers = [ function( elem, context, xml ) {
              var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                  (checkContext = context).nodeType ?
                      matchContext( elem, context, xml ) :
                      matchAnyContext( elem, context, xml ) );
              // Avoid hanging onto element (issue #299)
              checkContext = null;
              return ret;
          } ];
  
      for ( ; i < len; i++ ) {
          if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
              matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
          } else {
              matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
  
              // Return special upon seeing a positional matcher
              if ( matcher[ expando ] ) {
                  // Find the next relative operator (if any) for proper handling
                  j = ++i;
                  for ( ; j < len; j++ ) {
                      if ( Expr.relative[ tokens[j].type ] ) {
                          break;
                      }
                  }
                  return setMatcher(
                      i > 1 && elementMatcher( matchers ),
                      i > 1 && toSelector(
                          // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                          tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                      ).replace( rtrim, "$1" ),
                      matcher,
                      i < j && matcherFromTokens( tokens.slice( i, j ) ),
                      j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                      j < len && toSelector( tokens )
                  );
              }
              matchers.push( matcher );
          }
      }
  
      return elementMatcher( matchers );
  }
  
  function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function( seed, context, xml, results, outermost ) {
              var elem, j, matcher,
                  matchedCount = 0,
                  i = "0",
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  // We must always have either seed elements or outermost context
                  elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                  // Use integer dirruns iff this is the outermost matcher
                  dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                  len = elems.length;
  
              if ( outermost ) {
                  outermostContext = context === document || context || outermost;
              }
  
              // Add elements passing elementMatchers directly to results
              // Support: IE<9, Safari
              // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
              for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
                  if ( byElement && elem ) {
                      j = 0;
                      if ( !context && elem.ownerDocument !== document ) {
                          setDocument( elem );
                          xml = !documentIsHTML;
                      }
                      while ( (matcher = elementMatchers[j++]) ) {
                          if ( matcher( elem, context || document, xml) ) {
                              results.push( elem );
                              break;
                          }
                      }
                      if ( outermost ) {
                          dirruns = dirrunsUnique;
                      }
                  }
  
                  // Track unmatched elements for set filters
                  if ( bySet ) {
                      // They will have gone through all possible matchers
                      if ( (elem = !matcher && elem) ) {
                          matchedCount--;
                      }
  
                      // Lengthen the array for every element, matched or not
                      if ( seed ) {
                          unmatched.push( elem );
                      }
                  }
              }
  
              // `i` is now the count of elements visited above, and adding it to `matchedCount`
              // makes the latter nonnegative.
              matchedCount += i;
  
              // Apply set filters to unmatched elements
              // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
              // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
              // no element matchers and no seed.
              // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
              // case, which will result in a "00" `matchedCount` that differs from `i` but is also
              // numerically zero.
              if ( bySet && i !== matchedCount ) {
                  j = 0;
                  while ( (matcher = setMatchers[j++]) ) {
                      matcher( unmatched, setMatched, context, xml );
                  }
  
                  if ( seed ) {
                      // Reintegrate element matches to eliminate the need for sorting
                      if ( matchedCount > 0 ) {
                          while ( i-- ) {
                              if ( !(unmatched[i] || setMatched[i]) ) {
                                  setMatched[i] = pop.call( results );
                              }
                          }
                      }
  
                      // Discard index placeholder values to get only actual matches
                      setMatched = condense( setMatched );
                  }
  
                  // Add matches to results
                  push.apply( results, setMatched );
  
                  // Seedless set matches succeeding multiple successful matchers stipulate sorting
                  if ( outermost && !seed && setMatched.length > 0 &&
                      ( matchedCount + setMatchers.length ) > 1 ) {
  
                      Sizzle.uniqueSort( results );
                  }
              }
  
              // Override manipulation of globals by nested matchers
              if ( outermost ) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
              }
  
              return unmatched;
          };
  
      return bySet ?
          markFunction( superMatcher ) :
          superMatcher;
  }
  
  compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[ selector + " " ];
  
      if ( !cached ) {
          // Generate a function of recursive functions that can be used to check each element
          if ( !match ) {
              match = tokenize( selector );
          }
          i = match.length;
          while ( i-- ) {
              cached = matcherFromTokens( match[i] );
              if ( cached[ expando ] ) {
                  setMatchers.push( cached );
              } else {
                  elementMatchers.push( cached );
              }
          }
  
          // Cache the compiled function
          cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  
          // Save selector and tokenization
          cached.selector = selector;
      }
      return cached;
  };
  
  /**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
  select = Sizzle.select = function( selector, context, results, seed ) {
      var i, tokens, token, type, find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize( (selector = compiled.selector || selector) );
  
      results = results || [];
  
      // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)
      if ( match.length === 1 ) {
  
          // Reduce context if the leading compound selector is an ID
          tokens = match[0] = match[0].slice( 0 );
          if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                  context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
  
              context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
              if ( !context ) {
                  return results;
  
              // Precompiled matchers will still verify ancestry, so step up a level
              } else if ( compiled ) {
                  context = context.parentNode;
              }
  
              selector = selector.slice( tokens.shift().value.length );
          }
  
          // Fetch a seed set for right-to-left matching
          i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
          while ( i-- ) {
              token = tokens[i];
  
              // Abort if we hit a combinator
              if ( Expr.relative[ (type = token.type) ] ) {
                  break;
              }
              if ( (find = Expr.find[ type ]) ) {
                  // Search, expanding context for leading sibling combinators
                  if ( (seed = find(
                      token.matches[0].replace( runescape, funescape ),
                      rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                  )) ) {
  
                      // If seed is empty or no tokens remain, we can return early
                      tokens.splice( i, 1 );
                      selector = seed.length && toSelector( tokens );
                      if ( !selector ) {
                          push.apply( results, seed );
                          return results;
                      }
  
                      break;
                  }
              }
          }
      }
  
      // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above
      ( compiled || compile( selector, match ) )(
          seed,
          context,
          !documentIsHTML,
          results,
          !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
      );
      return results;
  };
  
  // One-time assignments
  
  // Sort stability
  support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
  
  // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function
  support.detectDuplicates = !!hasDuplicate;
  
  // Initialize against the default document
  setDocument();
  
  // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*
  support.sortDetached = assert(function( el ) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
  });
  
  // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if ( !assert(function( el ) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#" ;
  }) ) {
      addHandle( "type|href|height|width", function( elem, name, isXML ) {
          if ( !isXML ) {
              return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
          }
      });
  }
  
  // Support: IE<9
  // Use defaultValue in place of getAttribute("value")
  if ( !support.attributes || !assert(function( el ) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute( "value", "" );
      return el.firstChild.getAttribute( "value" ) === "";
  }) ) {
      addHandle( "value", function( elem, name, isXML ) {
          if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
              return elem.defaultValue;
          }
      });
  }
  
  // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies
  if ( !assert(function( el ) {
      return el.getAttribute("disabled") == null;
  }) ) {
      addHandle( booleans, function( elem, name, isXML ) {
          var val;
          if ( !isXML ) {
              return elem[ name ] === true ? name.toLowerCase() :
                      (val = elem.getAttributeNode( name )) && val.specified ?
                      val.value :
                  null;
          }
      });
  }
  
  return Sizzle;
  
  })( window );
  
  
  
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  
  // Deprecated
  jQuery.expr[ ":" ] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  
  
  
  
  var dir = function( elem, dir, until ) {
      var matched = [],
          truncate = until !== undefined;
  
      while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
          if ( elem.nodeType === 1 ) {
              if ( truncate && jQuery( elem ).is( until ) ) {
                  break;
              }
              matched.push( elem );
          }
      }
      return matched;
  };
  
  
  var siblings = function( n, elem ) {
      var matched = [];
  
      for ( ; n; n = n.nextSibling ) {
          if ( n.nodeType === 1 && n !== elem ) {
              matched.push( n );
          }
      }
  
      return matched;
  };
  
  
  var rneedsContext = jQuery.expr.match.needsContext;
  
  
  
  function nodeName( elem, name ) {
  
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  
  };
  var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
  
  
  
  // Implement the identical functionality for filter and not
  function winnow( elements, qualifier, not ) {
      if ( isFunction( qualifier ) ) {
          return jQuery.grep( elements, function( elem, i ) {
              return !!qualifier.call( elem, i, elem ) !== not;
          } );
      }
  
      // Single element
      if ( qualifier.nodeType ) {
          return jQuery.grep( elements, function( elem ) {
              return ( elem === qualifier ) !== not;
          } );
      }
  
      // Arraylike of elements (jQuery, arguments, Array)
      if ( typeof qualifier !== "string" ) {
          return jQuery.grep( elements, function( elem ) {
              return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
          } );
      }
  
      // Filtered directly for both simple and complex selectors
      return jQuery.filter( qualifier, elements, not );
  }
  
  jQuery.filter = function( expr, elems, not ) {
      var elem = elems[ 0 ];
  
      if ( not ) {
          expr = ":not(" + expr + ")";
      }
  
      if ( elems.length === 1 && elem.nodeType === 1 ) {
          return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
      }
  
      return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
          return elem.nodeType === 1;
      } ) );
  };
  
  jQuery.fn.extend( {
      find: function( selector ) {
          var i, ret,
              len = this.length,
              self = this;
  
          if ( typeof selector !== "string" ) {
              return this.pushStack( jQuery( selector ).filter( function() {
                  for ( i = 0; i < len; i++ ) {
                      if ( jQuery.contains( self[ i ], this ) ) {
                          return true;
                      }
                  }
              } ) );
          }
  
          ret = this.pushStack( [] );
  
          for ( i = 0; i < len; i++ ) {
              jQuery.find( selector, self[ i ], ret );
          }
  
          return len > 1 ? jQuery.uniqueSort( ret ) : ret;
      },
      filter: function( selector ) {
          return this.pushStack( winnow( this, selector || [], false ) );
      },
      not: function( selector ) {
          return this.pushStack( winnow( this, selector || [], true ) );
      },
      is: function( selector ) {
          return !!winnow(
              this,
  
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test( selector ) ?
                  jQuery( selector ) :
                  selector || [],
              false
          ).length;
      }
  } );
  
  
  // Initialize a jQuery object
  
  
  // A central reference to the root jQuery(document)
  var rootjQuery,
  
      // A simple way to check for HTML strings
      // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
      // Strict HTML recognition (#11290: must start with <)
      // Shortcut simple #id case for speed
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  
      init = jQuery.fn.init = function( selector, context, root ) {
          var match, elem;
  
          // HANDLE: $(""), $(null), $(undefined), $(false)
          if ( !selector ) {
              return this;
          }
  
          // Method init() accepts an alternate rootjQuery
          // so migrate can support jQuery.sub (gh-2101)
          root = root || rootjQuery;
  
          // Handle HTML strings
          if ( typeof selector === "string" ) {
              if ( selector[ 0 ] === "<" &&
                  selector[ selector.length - 1 ] === ">" &&
                  selector.length >= 3 ) {
  
                  // Assume that strings that start and end with <> are HTML and skip the regex check
                  match = [ null, selector, null ];
  
              } else {
                  match = rquickExpr.exec( selector );
              }
  
              // Match html or make sure no context is specified for #id
              if ( match && ( match[ 1 ] || !context ) ) {
  
                  // HANDLE: $(html) -> $(array)
                  if ( match[ 1 ] ) {
                      context = context instanceof jQuery ? context[ 0 ] : context;
  
                      // Option to run scripts is true for back-compat
                      // Intentionally let the error be thrown if parseHTML is not present
                      jQuery.merge( this, jQuery.parseHTML(
                          match[ 1 ],
                          context && context.nodeType ? context.ownerDocument || context : document,
                          true
                      ) );
  
                      // HANDLE: $(html, props)
                      if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                          for ( match in context ) {
  
                              // Properties of context are called as methods if possible
                              if ( isFunction( this[ match ] ) ) {
                                  this[ match ]( context[ match ] );
  
                              // ...and otherwise set as attributes
                              } else {
                                  this.attr( match, context[ match ] );
                              }
                          }
                      }
  
                      return this;
  
                  // HANDLE: $(#id)
                  } else {
                      elem = document.getElementById( match[ 2 ] );
  
                      if ( elem ) {
  
                          // Inject the element directly into the jQuery object
                          this[ 0 ] = elem;
                          this.length = 1;
                      }
                      return this;
                  }
  
              // HANDLE: $(expr, $(...))
              } else if ( !context || context.jquery ) {
                  return ( context || root ).find( selector );
  
              // HANDLE: $(expr, context)
              // (which is just equivalent to: $(context).find(expr)
              } else {
                  return this.constructor( context ).find( selector );
              }
  
          // HANDLE: $(DOMElement)
          } else if ( selector.nodeType ) {
              this[ 0 ] = selector;
              this.length = 1;
              return this;
  
          // HANDLE: $(function)
          // Shortcut for document ready
          } else if ( isFunction( selector ) ) {
              return root.ready !== undefined ?
                  root.ready( selector ) :
  
                  // Execute immediately if ready is not present
                  selector( jQuery );
          }
  
          return jQuery.makeArray( selector, this );
      };
  
  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;
  
  // Initialize central reference
  rootjQuery = jQuery( document );
  
  
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
  
      // Methods guaranteed to produce a unique set when starting from a unique set
      guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
      };
  
  jQuery.fn.extend( {
      has: function( target ) {
          var targets = jQuery( target, this ),
              l = targets.length;
  
          return this.filter( function() {
              var i = 0;
              for ( ; i < l; i++ ) {
                  if ( jQuery.contains( this, targets[ i ] ) ) {
                      return true;
                  }
              }
          } );
      },
  
      closest: function( selectors, context ) {
          var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== "string" && jQuery( selectors );
  
          // Positional selectors never match, since there's no _selection_ context
          if ( !rneedsContext.test( selectors ) ) {
              for ( ; i < l; i++ ) {
                  for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
  
                      // Always skip document fragments
                      if ( cur.nodeType < 11 && ( targets ?
                          targets.index( cur ) > -1 :
  
                          // Don't pass non-elements to Sizzle
                          cur.nodeType === 1 &&
                              jQuery.find.matchesSelector( cur, selectors ) ) ) {
  
                          matched.push( cur );
                          break;
                      }
                  }
              }
          }
  
          return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
      },
  
      // Determine the position of an element within the set
      index: function( elem ) {
  
          // No argument, return index in parent
          if ( !elem ) {
              return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
          }
  
          // Index in selector
          if ( typeof elem === "string" ) {
              return indexOf.call( jQuery( elem ), this[ 0 ] );
          }
  
          // Locate the position of the desired element
          return indexOf.call( this,
  
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[ 0 ] : elem
          );
      },
  
      add: function( selector, context ) {
          return this.pushStack(
              jQuery.uniqueSort(
                  jQuery.merge( this.get(), jQuery( selector, context ) )
              )
          );
      },
  
      addBack: function( selector ) {
          return this.add( selector == null ?
              this.prevObject : this.prevObject.filter( selector )
          );
      }
  } );
  
  function sibling( cur, dir ) {
      while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
      return cur;
  }
  
  jQuery.each( {
      parent: function( elem ) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function( elem ) {
          return dir( elem, "parentNode" );
      },
      parentsUntil: function( elem, i, until ) {
          return dir( elem, "parentNode", until );
      },
      next: function( elem ) {
          return sibling( elem, "nextSibling" );
      },
      prev: function( elem ) {
          return sibling( elem, "previousSibling" );
      },
      nextAll: function( elem ) {
          return dir( elem, "nextSibling" );
      },
      prevAll: function( elem ) {
          return dir( elem, "previousSibling" );
      },
      nextUntil: function( elem, i, until ) {
          return dir( elem, "nextSibling", until );
      },
      prevUntil: function( elem, i, until ) {
          return dir( elem, "previousSibling", until );
      },
      siblings: function( elem ) {
          return siblings( ( elem.parentNode || {} ).firstChild, elem );
      },
      children: function( elem ) {
          return siblings( elem.firstChild );
      },
      contents: function( elem ) {
          if ( nodeName( elem, "iframe" ) ) {
              return elem.contentDocument;
          }
  
          // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
          // Treat the template element as a regular one in browsers that
          // don't support it.
          if ( nodeName( elem, "template" ) ) {
              elem = elem.content || elem;
          }
  
          return jQuery.merge( [], elem.childNodes );
      }
  }, function( name, fn ) {
      jQuery.fn[ name ] = function( until, selector ) {
          var matched = jQuery.map( this, fn, until );
  
          if ( name.slice( -5 ) !== "Until" ) {
              selector = until;
          }
  
          if ( selector && typeof selector === "string" ) {
              matched = jQuery.filter( selector, matched );
          }
  
          if ( this.length > 1 ) {
  
              // Remove duplicates
              if ( !guaranteedUnique[ name ] ) {
                  jQuery.uniqueSort( matched );
              }
  
              // Reverse order for parents* and prev-derivatives
              if ( rparentsprev.test( name ) ) {
                  matched.reverse();
              }
          }
  
          return this.pushStack( matched );
      };
  } );
  var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
  
  
  
  // Convert String-formatted options into Object-formatted ones
  function createOptions( options ) {
      var object = {};
      jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
          object[ flag ] = true;
      } );
      return object;
  }
  
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
  jQuery.Callbacks = function( options ) {
  
      // Convert options from String-formatted to Object-formatted if needed
      // (we check in cache first)
      options = typeof options === "string" ?
          createOptions( options ) :
          jQuery.extend( {}, options );
  
      var // Flag to know if list is currently firing
          firing,
  
          // Last fire value for non-forgettable lists
          memory,
  
          // Flag to know if list was already fired
          fired,
  
          // Flag to prevent firing
          locked,
  
          // Actual callback list
          list = [],
  
          // Queue of execution data for repeatable lists
          queue = [],
  
          // Index of currently firing callback (modified by add/remove as needed)
          firingIndex = -1,
  
          // Fire callbacks
          fire = function() {
  
              // Enforce single-firing
              locked = locked || options.once;
  
              // Execute callbacks for all pending executions,
              // respecting firingIndex overrides and runtime changes
              fired = firing = true;
              for ( ; queue.length; firingIndex = -1 ) {
                  memory = queue.shift();
                  while ( ++firingIndex < list.length ) {
  
                      // Run callback and check for early termination
                      if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                          options.stopOnFalse ) {
  
                          // Jump to end and forget the data so .add doesn't re-fire
                          firingIndex = list.length;
                          memory = false;
                      }
                  }
              }
  
              // Forget the data if we're done with it
              if ( !options.memory ) {
                  memory = false;
              }
  
              firing = false;
  
              // Clean up if we're done firing for good
              if ( locked ) {
  
                  // Keep an empty list if we have data for future add calls
                  if ( memory ) {
                      list = [];
  
                  // Otherwise, this object is spent
                  } else {
                      list = "";
                  }
              }
          },
  
          // Actual Callbacks object
          self = {
  
              // Add a callback or a collection of callbacks to the list
              add: function() {
                  if ( list ) {
  
                      // If we have memory from a past run, we should fire after adding
                      if ( memory && !firing ) {
                          firingIndex = list.length - 1;
                          queue.push( memory );
                      }
  
                      ( function add( args ) {
                          jQuery.each( args, function( _, arg ) {
                              if ( isFunction( arg ) ) {
                                  if ( !options.unique || !self.has( arg ) ) {
                                      list.push( arg );
                                  }
                              } else if ( arg && arg.length && toType( arg ) !== "string" ) {
  
                                  // Inspect recursively
                                  add( arg );
                              }
                          } );
                      } )( arguments );
  
                      if ( memory && !firing ) {
                          fire();
                      }
                  }
                  return this;
              },
  
              // Remove a callback from the list
              remove: function() {
                  jQuery.each( arguments, function( _, arg ) {
                      var index;
                      while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                          list.splice( index, 1 );
  
                          // Handle firing indexes
                          if ( index <= firingIndex ) {
                              firingIndex--;
                          }
                      }
                  } );
                  return this;
              },
  
              // Check if a given callback is in the list.
              // If no argument is given, return whether or not list has callbacks attached.
              has: function( fn ) {
                  return fn ?
                      jQuery.inArray( fn, list ) > -1 :
                      list.length > 0;
              },
  
              // Remove all callbacks from the list
              empty: function() {
                  if ( list ) {
                      list = [];
                  }
                  return this;
              },
  
              // Disable .fire and .add
              // Abort any current/pending executions
              // Clear all callbacks and values
              disable: function() {
                  locked = queue = [];
                  list = memory = "";
                  return this;
              },
              disabled: function() {
                  return !list;
              },
  
              // Disable .fire
              // Also disable .add unless we have memory (since it would have no effect)
              // Abort any pending executions
              lock: function() {
                  locked = queue = [];
                  if ( !memory && !firing ) {
                      list = memory = "";
                  }
                  return this;
              },
              locked: function() {
                  return !!locked;
              },
  
              // Call all callbacks with the given context and arguments
              fireWith: function( context, args ) {
                  if ( !locked ) {
                      args = args || [];
                      args = [ context, args.slice ? args.slice() : args ];
                      queue.push( args );
                      if ( !firing ) {
                          fire();
                      }
                  }
                  return this;
              },
  
              // Call all the callbacks with the given arguments
              fire: function() {
                  self.fireWith( this, arguments );
                  return this;
              },
  
              // To know if the callbacks have already been called at least once
              fired: function() {
                  return !!fired;
              }
          };
  
      return self;
  };
  
  
  function Identity( v ) {
      return v;
  }
  function Thrower( ex ) {
      throw ex;
  }
  
  function adoptValue( value, resolve, reject, noValue ) {
      var method;
  
      try {
  
          // Check for promise aspect first to privilege synchronous behavior
          if ( value && isFunction( ( method = value.promise ) ) ) {
              method.call( value ).done( resolve ).fail( reject );
  
          // Other thenables
          } else if ( value && isFunction( ( method = value.then ) ) ) {
              method.call( value, resolve, reject );
  
          // Other non-thenables
          } else {
  
              // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
              // * false: [ value ].slice( 0 ) => resolve( value )
              // * true: [ value ].slice( 1 ) => resolve()
              resolve.apply( undefined, [ value ].slice( noValue ) );
          }
  
      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
      } catch ( value ) {
  
          // Support: Android 4.0 only
          // Strict mode functions invoked without .call/.apply get global-object context
          reject.apply( undefined, [ value ] );
      }
  }
  
  jQuery.extend( {
  
      Deferred: function( func ) {
          var tuples = [
  
                  // action, add listener, callbacks,
                  // ... .then handlers, argument index, [final state]
                  [ "notify", "progress", jQuery.Callbacks( "memory" ),
                      jQuery.Callbacks( "memory" ), 2 ],
                  [ "resolve", "done", jQuery.Callbacks( "once memory" ),
                      jQuery.Callbacks( "once memory" ), 0, "resolved" ],
                  [ "reject", "fail", jQuery.Callbacks( "once memory" ),
                      jQuery.Callbacks( "once memory" ), 1, "rejected" ]
              ],
              state = "pending",
              promise = {
                  state: function() {
                      return state;
                  },
                  always: function() {
                      deferred.done( arguments ).fail( arguments );
                      return this;
                  },
                  "catch": function( fn ) {
                      return promise.then( null, fn );
                  },
  
                  // Keep pipe for back-compat
                  pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                      var fns = arguments;
  
                      return jQuery.Deferred( function( newDefer ) {
                          jQuery.each( tuples, function( i, tuple ) {
  
                              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                              var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
  
                              // deferred.progress(function() { bind to newDefer or newDefer.notify })
                              // deferred.done(function() { bind to newDefer or newDefer.resolve })
                              // deferred.fail(function() { bind to newDefer or newDefer.reject })
                              deferred[ tuple[ 1 ] ]( function() {
                                  var returned = fn && fn.apply( this, arguments );
                                  if ( returned && isFunction( returned.promise ) ) {
                                      returned.promise()
                                          .progress( newDefer.notify )
                                          .done( newDefer.resolve )
                                          .fail( newDefer.reject );
                                  } else {
                                      newDefer[ tuple[ 0 ] + "With" ](
                                          this,
                                          fn ? [ returned ] : arguments
                                      );
                                  }
                              } );
                          } );
                          fns = null;
                      } ).promise();
                  },
                  then: function( onFulfilled, onRejected, onProgress ) {
                      var maxDepth = 0;
                      function resolve( depth, deferred, handler, special ) {
                          return function() {
                              var that = this,
                                  args = arguments,
                                  mightThrow = function() {
                                      var returned, then;
  
                                      // Support: Promises/A+ section 2.3.3.3.3
                                      // https://promisesaplus.com/#point-59
                                      // Ignore double-resolution attempts
                                      if ( depth < maxDepth ) {
                                          return;
                                      }
  
                                      returned = handler.apply( that, args );
  
                                      // Support: Promises/A+ section 2.3.1
                                      // https://promisesaplus.com/#point-48
                                      if ( returned === deferred.promise() ) {
                                          throw new TypeError( "Thenable self-resolution" );
                                      }
  
                                      // Support: Promises/A+ sections 2.3.3.1, 3.5
                                      // https://promisesaplus.com/#point-54
                                      // https://promisesaplus.com/#point-75
                                      // Retrieve `then` only once
                                      then = returned &&
  
                                          // Support: Promises/A+ section 2.3.4
                                          // https://promisesaplus.com/#point-64
                                          // Only check objects and functions for thenability
                                          ( typeof returned === "object" ||
                                              typeof returned === "function" ) &&
                                          returned.then;
  
                                      // Handle a returned thenable
                                      if ( isFunction( then ) ) {
  
                                          // Special processors (notify) just wait for resolution
                                          if ( special ) {
                                              then.call(
                                                  returned,
                                                  resolve( maxDepth, deferred, Identity, special ),
                                                  resolve( maxDepth, deferred, Thrower, special )
                                              );
  
                                          // Normal processors (resolve) also hook into progress
                                          } else {
  
                                              // ...and disregard older resolution values
                                              maxDepth++;
  
                                              then.call(
                                                  returned,
                                                  resolve( maxDepth, deferred, Identity, special ),
                                                  resolve( maxDepth, deferred, Thrower, special ),
                                                  resolve( maxDepth, deferred, Identity,
                                                      deferred.notifyWith )
                                              );
                                          }
  
                                      // Handle all other returned values
                                      } else {
  
                                          // Only substitute handlers pass on context
                                          // and multiple values (non-spec behavior)
                                          if ( handler !== Identity ) {
                                              that = undefined;
                                              args = [ returned ];
                                          }
  
                                          // Process the value(s)
                                          // Default process is resolve
                                          ( special || deferred.resolveWith )( that, args );
                                      }
                                  },
  
                                  // Only normal processors (resolve) catch and reject exceptions
                                  process = special ?
                                      mightThrow :
                                      function() {
                                          try {
                                              mightThrow();
                                          } catch ( e ) {
  
                                              if ( jQuery.Deferred.exceptionHook ) {
                                                  jQuery.Deferred.exceptionHook( e,
                                                      process.stackTrace );
                                              }
  
                                              // Support: Promises/A+ section 2.3.3.3.4.1
                                              // https://promisesaplus.com/#point-61
                                              // Ignore post-resolution exceptions
                                              if ( depth + 1 >= maxDepth ) {
  
                                                  // Only substitute handlers pass on context
                                                  // and multiple values (non-spec behavior)
                                                  if ( handler !== Thrower ) {
                                                      that = undefined;
                                                      args = [ e ];
                                                  }
  
                                                  deferred.rejectWith( that, args );
                                              }
                                          }
                                      };
  
                              // Support: Promises/A+ section 2.3.3.3.1
                              // https://promisesaplus.com/#point-57
                              // Re-resolve promises immediately to dodge false rejection from
                              // subsequent errors
                              if ( depth ) {
                                  process();
                              } else {
  
                                  // Call an optional hook to record the stack, in case of exception
                                  // since it's otherwise lost when execution goes async
                                  if ( jQuery.Deferred.getStackHook ) {
                                      process.stackTrace = jQuery.Deferred.getStackHook();
                                  }
                                  window.setTimeout( process );
                              }
                          };
                      }
  
                      return jQuery.Deferred( function( newDefer ) {
  
                          // progress_handlers.add( ... )
                          tuples[ 0 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onProgress ) ?
                                      onProgress :
                                      Identity,
                                  newDefer.notifyWith
                              )
                          );
  
                          // fulfilled_handlers.add( ... )
                          tuples[ 1 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onFulfilled ) ?
                                      onFulfilled :
                                      Identity
                              )
                          );
  
                          // rejected_handlers.add( ... )
                          tuples[ 2 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onRejected ) ?
                                      onRejected :
                                      Thrower
                              )
                          );
                      } ).promise();
                  },
  
                  // Get a promise for this deferred
                  // If obj is provided, the promise aspect is added to the object
                  promise: function( obj ) {
                      return obj != null ? jQuery.extend( obj, promise ) : promise;
                  }
              },
              deferred = {};
  
          // Add list-specific methods
          jQuery.each( tuples, function( i, tuple ) {
              var list = tuple[ 2 ],
                  stateString = tuple[ 5 ];
  
              // promise.progress = list.add
              // promise.done = list.add
              // promise.fail = list.add
              promise[ tuple[ 1 ] ] = list.add;
  
              // Handle state
              if ( stateString ) {
                  list.add(
                      function() {
  
                          // state = "resolved" (i.e., fulfilled)
                          // state = "rejected"
                          state = stateString;
                      },
  
                      // rejected_callbacks.disable
                      // fulfilled_callbacks.disable
                      tuples[ 3 - i ][ 2 ].disable,
  
                      // rejected_handlers.disable
                      // fulfilled_handlers.disable
                      tuples[ 3 - i ][ 3 ].disable,
  
                      // progress_callbacks.lock
                      tuples[ 0 ][ 2 ].lock,
  
                      // progress_handlers.lock
                      tuples[ 0 ][ 3 ].lock
                  );
              }
  
              // progress_handlers.fire
              // fulfilled_handlers.fire
              // rejected_handlers.fire
              list.add( tuple[ 3 ].fire );
  
              // deferred.notify = function() { deferred.notifyWith(...) }
              // deferred.resolve = function() { deferred.resolveWith(...) }
              // deferred.reject = function() { deferred.rejectWith(...) }
              deferred[ tuple[ 0 ] ] = function() {
                  deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
                  return this;
              };
  
              // deferred.notifyWith = list.fireWith
              // deferred.resolveWith = list.fireWith
              // deferred.rejectWith = list.fireWith
              deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
          } );
  
          // Make the deferred a promise
          promise.promise( deferred );
  
          // Call given func if any
          if ( func ) {
              func.call( deferred, deferred );
          }
  
          // All done!
          return deferred;
      },
  
      // Deferred helper
      when: function( singleValue ) {
          var
  
              // count of uncompleted subordinates
              remaining = arguments.length,
  
              // count of unprocessed arguments
              i = remaining,
  
              // subordinate fulfillment data
              resolveContexts = Array( i ),
              resolveValues = slice.call( arguments ),
  
              // the master Deferred
              master = jQuery.Deferred(),
  
              // subordinate callback factory
              updateFunc = function( i ) {
                  return function( value ) {
                      resolveContexts[ i ] = this;
                      resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                      if ( !( --remaining ) ) {
                          master.resolveWith( resolveContexts, resolveValues );
                      }
                  };
              };
  
          // Single- and empty arguments are adopted like Promise.resolve
          if ( remaining <= 1 ) {
              adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
                  !remaining );
  
              // Use .then() to unwrap secondary thenables (cf. gh-3000)
              if ( master.state() === "pending" ||
                  isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
  
                  return master.then();
              }
          }
  
          // Multiple arguments are aggregated like Promise.all array elements
          while ( i-- ) {
              adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
          }
  
          return master.promise();
      }
  } );
  
  
  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  
  jQuery.Deferred.exceptionHook = function( error, stack ) {
  
      // Support: IE 8 - 9 only
      // Console exists when dev tools are open, which can happen at any time
      if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
          window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
      }
  };
  
  
  
  
  jQuery.readyException = function( error ) {
      window.setTimeout( function() {
          throw error;
      } );
  };
  
  
  
  
  // The deferred used on DOM ready
  var readyList = jQuery.Deferred();
  
  jQuery.fn.ready = function( fn ) {
  
      readyList
          .then( fn )
  
          // Wrap jQuery.readyException in a function so that the lookup
          // happens at the time of error handling instead of callback
          // registration.
          .catch( function( error ) {
              jQuery.readyException( error );
          } );
  
      return this;
  };
  
  jQuery.extend( {
  
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
  
      // A counter to track how many items to wait for before
      // the ready event fires. See #6781
      readyWait: 1,
  
      // Handle when the DOM is ready
      ready: function( wait ) {
  
          // Abort if there are pending holds or we're already ready
          if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
              return;
          }
  
          // Remember that the DOM is ready
          jQuery.isReady = true;
  
          // If a normal DOM Ready event fired, decrement, and wait if need be
          if ( wait !== true && --jQuery.readyWait > 0 ) {
              return;
          }
  
          // If there are functions bound, to execute
          readyList.resolveWith( document, [ jQuery ] );
      }
  } );
  
  jQuery.ready.then = readyList.then;
  
  // The ready event handler and self cleanup method
  function completed() {
      document.removeEventListener( "DOMContentLoaded", completed );
      window.removeEventListener( "load", completed );
      jQuery.ready();
  }
  
  // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if ( document.readyState === "complete" ||
      ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
  
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      window.setTimeout( jQuery.ready );
  
  } else {
  
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", completed );
  
      // A fallback to window.onload, that will always work
      window.addEventListener( "load", completed );
  }
  
  
  
  
  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
      var i = 0,
          len = elems.length,
          bulk = key == null;
  
      // Sets many values
      if ( toType( key ) === "object" ) {
          chainable = true;
          for ( i in key ) {
              access( elems, fn, i, key[ i ], true, emptyGet, raw );
          }
  
      // Sets one value
      } else if ( value !== undefined ) {
          chainable = true;
  
          if ( !isFunction( value ) ) {
              raw = true;
          }
  
          if ( bulk ) {
  
              // Bulk operations run against the entire set
              if ( raw ) {
                  fn.call( elems, value );
                  fn = null;
  
              // ...except when executing function values
              } else {
                  bulk = fn;
                  fn = function( elem, key, value ) {
                      return bulk.call( jQuery( elem ), value );
                  };
              }
          }
  
          if ( fn ) {
              for ( ; i < len; i++ ) {
                  fn(
                      elems[ i ], key, raw ?
                      value :
                      value.call( elems[ i ], i, fn( elems[ i ], key ) )
                  );
              }
          }
      }
  
      if ( chainable ) {
          return elems;
      }
  
      // Gets
      if ( bulk ) {
          return fn.call( elems );
      }
  
      return len ? fn( elems[ 0 ], key ) : emptyGet;
  };
  
  
  // Matches dashed string for camelizing
  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g;
  
  // Used by camelCase as callback to replace()
  function fcamelCase( all, letter ) {
      return letter.toUpperCase();
  }
  
  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)
  function camelCase( string ) {
      return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  }
  var acceptData = function( owner ) {
  
      // Accepts only:
      //  - Node
      //    - Node.ELEMENT_NODE
      //    - Node.DOCUMENT_NODE
      //  - Object
      //    - Any
      return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
  };
  
  
  
  
  function Data() {
      this.expando = jQuery.expando + Data.uid++;
  }
  
  Data.uid = 1;
  
  Data.prototype = {
  
      cache: function( owner ) {
  
          // Check if the owner object already has a cache
          var value = owner[ this.expando ];
  
          // If not, create one
          if ( !value ) {
              value = {};
  
              // We can accept data for non-element nodes in modern browsers,
              // but we should not, see #8335.
              // Always return an empty object.
              if ( acceptData( owner ) ) {
  
                  // If it is a node unlikely to be stringify-ed or looped over
                  // use plain assignment
                  if ( owner.nodeType ) {
                      owner[ this.expando ] = value;
  
                  // Otherwise secure it in a non-enumerable property
                  // configurable must be true to allow the property to be
                  // deleted when data is removed
                  } else {
                      Object.defineProperty( owner, this.expando, {
                          value: value,
                          configurable: true
                      } );
                  }
              }
          }
  
          return value;
      },
      set: function( owner, data, value ) {
          var prop,
              cache = this.cache( owner );
  
          // Handle: [ owner, key, value ] args
          // Always use camelCase key (gh-2257)
          if ( typeof data === "string" ) {
              cache[ camelCase( data ) ] = value;
  
          // Handle: [ owner, { properties } ] args
          } else {
  
              // Copy the properties one-by-one to the cache object
              for ( prop in data ) {
                  cache[ camelCase( prop ) ] = data[ prop ];
              }
          }
          return cache;
      },
      get: function( owner, key ) {
          return key === undefined ?
              this.cache( owner ) :
  
              // Always use camelCase key (gh-2257)
              owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
      },
      access: function( owner, key, value ) {
  
          // In cases where either:
          //
          //   1. No key was specified
          //   2. A string key was specified, but no value provided
          //
          // Take the "read" path and allow the get method to determine
          // which value to return, respectively either:
          //
          //   1. The entire cache object
          //   2. The data stored at the key
          //
          if ( key === undefined ||
                  ( ( key && typeof key === "string" ) && value === undefined ) ) {
  
              return this.get( owner, key );
          }
  
          // When the key is not a string, or both a key and value
          // are specified, set or extend (existing objects) with either:
          //
          //   1. An object of properties
          //   2. A key and value
          //
          this.set( owner, key, value );
  
          // Since the "set" path can have two possible entry points
          // return the expected data based on which path was taken[*]
          return value !== undefined ? value : key;
      },
      remove: function( owner, key ) {
          var i,
              cache = owner[ this.expando ];
  
          if ( cache === undefined ) {
              return;
          }
  
          if ( key !== undefined ) {
  
              // Support array or space separated string of keys
              if ( Array.isArray( key ) ) {
  
                  // If key is an array of keys...
                  // We always set camelCase keys, so remove that.
                  key = key.map( camelCase );
              } else {
                  key = camelCase( key );
  
                  // If a key with the spaces exists, use it.
                  // Otherwise, create an array by matching non-whitespace
                  key = key in cache ?
                      [ key ] :
                      ( key.match( rnothtmlwhite ) || [] );
              }
  
              i = key.length;
  
              while ( i-- ) {
                  delete cache[ key[ i ] ];
              }
          }
  
          // Remove the expando if there's no more data
          if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
  
              // Support: Chrome <=35 - 45
              // Webkit & Blink performance suffers when deleting properties
              // from DOM nodes, so set to undefined instead
              // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
              if ( owner.nodeType ) {
                  owner[ this.expando ] = undefined;
              } else {
                  delete owner[ this.expando ];
              }
          }
      },
      hasData: function( owner ) {
          var cache = owner[ this.expando ];
          return cache !== undefined && !jQuery.isEmptyObject( cache );
      }
  };
  var dataPriv = new Data();
  
  var dataUser = new Data();
  
  
  
  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
  
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  
  function getData( data ) {
      if ( data === "true" ) {
          return true;
      }
  
      if ( data === "false" ) {
          return false;
      }
  
      if ( data === "null" ) {
          return null;
      }
  
      // Only convert to a number if it doesn't change the string
      if ( data === +data + "" ) {
          return +data;
      }
  
      if ( rbrace.test( data ) ) {
          return JSON.parse( data );
      }
  
      return data;
  }
  
  function dataAttr( elem, key, data ) {
      var name;
  
      // If nothing was found internally, try to fetch any
      // data from the HTML5 data-* attribute
      if ( data === undefined && elem.nodeType === 1 ) {
          name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
          data = elem.getAttribute( name );
  
          if ( typeof data === "string" ) {
              try {
                  data = getData( data );
              } catch ( e ) {}
  
              // Make sure we set the data so it isn't changed later
              dataUser.set( elem, key, data );
          } else {
              data = undefined;
          }
      }
      return data;
  }
  
  jQuery.extend( {
      hasData: function( elem ) {
          return dataUser.hasData( elem ) || dataPriv.hasData( elem );
      },
  
      data: function( elem, name, data ) {
          return dataUser.access( elem, name, data );
      },
  
      removeData: function( elem, name ) {
          dataUser.remove( elem, name );
      },
  
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function( elem, name, data ) {
          return dataPriv.access( elem, name, data );
      },
  
      _removeData: function( elem, name ) {
          dataPriv.remove( elem, name );
      }
  } );
  
  jQuery.fn.extend( {
      data: function( key, value ) {
          var i, name, data,
              elem = this[ 0 ],
              attrs = elem && elem.attributes;
  
          // Gets all values
          if ( key === undefined ) {
              if ( this.length ) {
                  data = dataUser.get( elem );
  
                  if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
                      i = attrs.length;
                      while ( i-- ) {
  
                          // Support: IE 11 only
                          // The attrs elements can be null (#14894)
                          if ( attrs[ i ] ) {
                              name = attrs[ i ].name;
                              if ( name.indexOf( "data-" ) === 0 ) {
                                  name = camelCase( name.slice( 5 ) );
                                  dataAttr( elem, name, data[ name ] );
                              }
                          }
                      }
                      dataPriv.set( elem, "hasDataAttrs", true );
                  }
              }
  
              return data;
          }
  
          // Sets multiple values
          if ( typeof key === "object" ) {
              return this.each( function() {
                  dataUser.set( this, key );
              } );
          }
  
          return access( this, function( value ) {
              var data;
  
              // The calling jQuery object (element matches) is not empty
              // (and therefore has an element appears at this[ 0 ]) and the
              // `value` parameter was not undefined. An empty jQuery object
              // will result in `undefined` for elem = this[ 0 ] which will
              // throw an exception if an attempt to read a data cache is made.
              if ( elem && value === undefined ) {
  
                  // Attempt to get data from the cache
                  // The key will always be camelCased in Data
                  data = dataUser.get( elem, key );
                  if ( data !== undefined ) {
                      return data;
                  }
  
                  // Attempt to "discover" the data in
                  // HTML5 custom data-* attrs
                  data = dataAttr( elem, key );
                  if ( data !== undefined ) {
                      return data;
                  }
  
                  // We tried really hard, but the data doesn't exist.
                  return;
              }
  
              // Set the data...
              this.each( function() {
  
                  // We always store the camelCased key
                  dataUser.set( this, key, value );
              } );
          }, null, value, arguments.length > 1, null, true );
      },
  
      removeData: function( key ) {
          return this.each( function() {
              dataUser.remove( this, key );
          } );
      }
  } );
  
  
  jQuery.extend( {
      queue: function( elem, type, data ) {
          var queue;
  
          if ( elem ) {
              type = ( type || "fx" ) + "queue";
              queue = dataPriv.get( elem, type );
  
              // Speed up dequeue by getting out quickly if this is just a lookup
              if ( data ) {
                  if ( !queue || Array.isArray( data ) ) {
                      queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
                  } else {
                      queue.push( data );
                  }
              }
              return queue || [];
          }
      },
  
      dequeue: function( elem, type ) {
          type = type || "fx";
  
          var queue = jQuery.queue( elem, type ),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks( elem, type ),
              next = function() {
                  jQuery.dequeue( elem, type );
              };
  
          // If the fx queue is dequeued, always remove the progress sentinel
          if ( fn === "inprogress" ) {
              fn = queue.shift();
              startLength--;
          }
  
          if ( fn ) {
  
              // Add a progress sentinel to prevent the fx queue from being
              // automatically dequeued
              if ( type === "fx" ) {
                  queue.unshift( "inprogress" );
              }
  
              // Clear up the last queue stop function
              delete hooks.stop;
              fn.call( elem, next, hooks );
          }
  
          if ( !startLength && hooks ) {
              hooks.empty.fire();
          }
      },
  
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function( elem, type ) {
          var key = type + "queueHooks";
          return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
              empty: jQuery.Callbacks( "once memory" ).add( function() {
                  dataPriv.remove( elem, [ type + "queue", key ] );
              } )
          } );
      }
  } );
  
  jQuery.fn.extend( {
      queue: function( type, data ) {
          var setter = 2;
  
          if ( typeof type !== "string" ) {
              data = type;
              type = "fx";
              setter--;
          }
  
          if ( arguments.length < setter ) {
              return jQuery.queue( this[ 0 ], type );
          }
  
          return data === undefined ?
              this :
              this.each( function() {
                  var queue = jQuery.queue( this, type, data );
  
                  // Ensure a hooks for this queue
                  jQuery._queueHooks( this, type );
  
                  if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                      jQuery.dequeue( this, type );
                  }
              } );
      },
      dequeue: function( type ) {
          return this.each( function() {
              jQuery.dequeue( this, type );
          } );
      },
      clearQueue: function( type ) {
          return this.queue( type || "fx", [] );
      },
  
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function( type, obj ) {
          var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function() {
                  if ( !( --count ) ) {
                      defer.resolveWith( elements, [ elements ] );
                  }
              };
  
          if ( typeof type !== "string" ) {
              obj = type;
              type = undefined;
          }
          type = type || "fx";
  
          while ( i-- ) {
              tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
              if ( tmp && tmp.empty ) {
                  count++;
                  tmp.empty.add( resolve );
              }
          }
          resolve();
          return defer.promise( obj );
      }
  } );
  var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
  
  var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
  
  
  var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
  
  var isHiddenWithinTree = function( elem, el ) {
  
          // isHiddenWithinTree might be called from jQuery#filter function;
          // in that case, element will be second argument
          elem = el || elem;
  
          // Inline style trumps all
          return elem.style.display === "none" ||
              elem.style.display === "" &&
  
              // Otherwise, check computed style
              // Support: Firefox <=43 - 45
              // Disconnected elements can have computed display: none, so first confirm that elem is
              // in the document.
              jQuery.contains( elem.ownerDocument, elem ) &&
  
              jQuery.css( elem, "display" ) === "none";
      };
  
  var swap = function( elem, options, callback, args ) {
      var ret, name,
          old = {};
  
      // Remember the old values, and insert the new ones
      for ( name in options ) {
          old[ name ] = elem.style[ name ];
          elem.style[ name ] = options[ name ];
      }
  
      ret = callback.apply( elem, args || [] );
  
      // Revert the old values
      for ( name in options ) {
          elem.style[ name ] = old[ name ];
      }
  
      return ret;
  };
  
  
  
  
  function adjustCSS( elem, prop, valueParts, tween ) {
      var adjusted, scale,
          maxIterations = 20,
          currentValue = tween ?
              function() {
                  return tween.cur();
              } :
              function() {
                  return jQuery.css( elem, prop, "" );
              },
          initial = currentValue(),
          unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
  
          // Starting value computation is required for potential unit mismatches
          initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
              rcssNum.exec( jQuery.css( elem, prop ) );
  
      if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
  
          // Support: Firefox <=54
          // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
          initial = initial / 2;
  
          // Trust units reported by jQuery.css
          unit = unit || initialInUnit[ 3 ];
  
          // Iteratively approximate from a nonzero starting point
          initialInUnit = +initial || 1;
  
          while ( maxIterations-- ) {
  
              // Evaluate and update our best guess (doubling guesses that zero out).
              // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
              jQuery.style( elem, prop, initialInUnit + unit );
              if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
                  maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
  
          }
  
          initialInUnit = initialInUnit * 2;
          jQuery.style( elem, prop, initialInUnit + unit );
  
          // Make sure we update the tween properties later on
          valueParts = valueParts || [];
      }
  
      if ( valueParts ) {
          initialInUnit = +initialInUnit || +initial || 0;
  
          // Apply relative offset (+=/-=) if specified
          adjusted = valueParts[ 1 ] ?
              initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
              +valueParts[ 2 ];
          if ( tween ) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
          }
      }
      return adjusted;
  }
  
  
  var defaultDisplayMap = {};
  
  function getDefaultDisplay( elem ) {
      var temp,
          doc = elem.ownerDocument,
          nodeName = elem.nodeName,
          display = defaultDisplayMap[ nodeName ];
  
      if ( display ) {
          return display;
      }
  
      temp = doc.body.appendChild( doc.createElement( nodeName ) );
      display = jQuery.css( temp, "display" );
  
      temp.parentNode.removeChild( temp );
  
      if ( display === "none" ) {
          display = "block";
      }
      defaultDisplayMap[ nodeName ] = display;
  
      return display;
  }
  
  function showHide( elements, show ) {
      var display, elem,
          values = [],
          index = 0,
          length = elements.length;
  
      // Determine new display value for elements that need to change
      for ( ; index < length; index++ ) {
          elem = elements[ index ];
          if ( !elem.style ) {
              continue;
          }
  
          display = elem.style.display;
          if ( show ) {
  
              // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
              // check is required in this first loop unless we have a nonempty display value (either
              // inline or about-to-be-restored)
              if ( display === "none" ) {
                  values[ index ] = dataPriv.get( elem, "display" ) || null;
                  if ( !values[ index ] ) {
                      elem.style.display = "";
                  }
              }
              if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                  values[ index ] = getDefaultDisplay( elem );
              }
          } else {
              if ( display !== "none" ) {
                  values[ index ] = "none";
  
                  // Remember what we're overwriting
                  dataPriv.set( elem, "display", display );
              }
          }
      }
  
      // Set the display of the elements in a second loop to avoid constant reflow
      for ( index = 0; index < length; index++ ) {
          if ( values[ index ] != null ) {
              elements[ index ].style.display = values[ index ];
          }
      }
  
      return elements;
  }
  
  jQuery.fn.extend( {
      show: function() {
          return showHide( this, true );
      },
      hide: function() {
          return showHide( this );
      },
      toggle: function( state ) {
          if ( typeof state === "boolean" ) {
              return state ? this.show() : this.hide();
          }
  
          return this.each( function() {
              if ( isHiddenWithinTree( this ) ) {
                  jQuery( this ).show();
              } else {
                  jQuery( this ).hide();
              }
          } );
      }
  } );
  var rcheckableType = ( /^(?:checkbox|radio)$/i );
  
  var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
  
  var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );
  
  
  
  // We have to close these tags to support XHTML (#13200)
  var wrapMap = {
  
      // Support: IE <=9 only
      option: [ 1, "<select multiple='multiple'>", "</select>" ],
  
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [ 1, "<table>", "</table>" ],
      col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
      tr: [ 2, "<table><tbody>", "</tbody></table>" ],
      td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  
      _default: [ 0, "", "" ]
  };
  
  // Support: IE <=9 only
  wrapMap.optgroup = wrapMap.option;
  
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  
  
  function getAll( context, tag ) {
  
      // Support: IE <=9 - 11 only
      // Use typeof to avoid zero-argument method invocation on host objects (#15151)
      var ret;
  
      if ( typeof context.getElementsByTagName !== "undefined" ) {
          ret = context.getElementsByTagName( tag || "*" );
  
      } else if ( typeof context.querySelectorAll !== "undefined" ) {
          ret = context.querySelectorAll( tag || "*" );
  
      } else {
          ret = [];
      }
  
      if ( tag === undefined || tag && nodeName( context, tag ) ) {
          return jQuery.merge( [ context ], ret );
      }
  
      return ret;
  }
  
  
  // Mark scripts as having already been evaluated
  function setGlobalEval( elems, refElements ) {
      var i = 0,
          l = elems.length;
  
      for ( ; i < l; i++ ) {
          dataPriv.set(
              elems[ i ],
              "globalEval",
              !refElements || dataPriv.get( refElements[ i ], "globalEval" )
          );
      }
  }
  
  
  var rhtml = /<|&#?\w+;/;
  
  function buildFragment( elems, context, scripts, selection, ignored ) {
      var elem, tmp, tag, wrap, contains, j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;
  
      for ( ; i < l; i++ ) {
          elem = elems[ i ];
  
          if ( elem || elem === 0 ) {
  
              // Add nodes directly
              if ( toType( elem ) === "object" ) {
  
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
  
              // Convert non-html into a text node
              } else if ( !rhtml.test( elem ) ) {
                  nodes.push( context.createTextNode( elem ) );
  
              // Convert html into DOM nodes
              } else {
                  tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
  
                  // Deserialize a standard representation
                  tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                  wrap = wrapMap[ tag ] || wrapMap._default;
                  tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
  
                  // Descend through wrappers to the right content
                  j = wrap[ 0 ];
                  while ( j-- ) {
                      tmp = tmp.lastChild;
                  }
  
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge( nodes, tmp.childNodes );
  
                  // Remember the top-level container
                  tmp = fragment.firstChild;
  
                  // Ensure the created nodes are orphaned (#12392)
                  tmp.textContent = "";
              }
          }
      }
  
      // Remove wrapper from fragment
      fragment.textContent = "";
  
      i = 0;
      while ( ( elem = nodes[ i++ ] ) ) {
  
          // Skip elements already in the context collection (trac-4087)
          if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
              if ( ignored ) {
                  ignored.push( elem );
              }
              continue;
          }
  
          contains = jQuery.contains( elem.ownerDocument, elem );
  
          // Append to fragment
          tmp = getAll( fragment.appendChild( elem ), "script" );
  
          // Preserve script evaluation history
          if ( contains ) {
              setGlobalEval( tmp );
          }
  
          // Capture executables
          if ( scripts ) {
              j = 0;
              while ( ( elem = tmp[ j++ ] ) ) {
                  if ( rscriptType.test( elem.type || "" ) ) {
                      scripts.push( elem );
                  }
              }
          }
      }
  
      return fragment;
  }
  
  
  ( function() {
      var fragment = document.createDocumentFragment(),
          div = fragment.appendChild( document.createElement( "div" ) ),
          input = document.createElement( "input" );
  
      // Support: Android 4.0 - 4.3 only
      // Check state lost if the name is set (#11217)
      // Support: Windows Web Apps (WWA)
      // `name` and `type` must use .setAttribute for WWA (#14901)
      input.setAttribute( "type", "radio" );
      input.setAttribute( "checked", "checked" );
      input.setAttribute( "name", "t" );
  
      div.appendChild( input );
  
      // Support: Android <=4.1 only
      // Older WebKit doesn't clone checked state correctly in fragments
      support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
  
      // Support: IE <=11 only
      // Make sure textarea (and checkbox) defaultValue is properly cloned
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
  } )();
  var documentElement = document.documentElement;
  
  
  
  var
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  
  function returnTrue() {
      return true;
  }
  
  function returnFalse() {
      return false;
  }
  
  // Support: IE <=9 only
  // See #13393 for more info
  function safeActiveElement() {
      try {
          return document.activeElement;
      } catch ( err ) { }
  }
  
  function on( elem, types, selector, data, fn, one ) {
      var origFn, type;
  
      // Types can be a map of types/handlers
      if ( typeof types === "object" ) {
  
          // ( types-Object, selector, data )
          if ( typeof selector !== "string" ) {
  
              // ( types-Object, data )
              data = data || selector;
              selector = undefined;
          }
          for ( type in types ) {
              on( elem, type, selector, data, types[ type ], one );
          }
          return elem;
      }
  
      if ( data == null && fn == null ) {
  
          // ( types, fn )
          fn = selector;
          data = selector = undefined;
      } else if ( fn == null ) {
          if ( typeof selector === "string" ) {
  
              // ( types, selector, fn )
              fn = data;
              data = undefined;
          } else {
  
              // ( types, data, fn )
              fn = data;
              data = selector;
              selector = undefined;
          }
      }
      if ( fn === false ) {
          fn = returnFalse;
      } else if ( !fn ) {
          return elem;
      }
  
      if ( one === 1 ) {
          origFn = fn;
          fn = function( event ) {
  
              // Can use an empty set, since event contains the info
              jQuery().off( event );
              return origFn.apply( this, arguments );
          };
  
          // Use same guid so caller can remove using origFn
          fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
      }
      return elem.each( function() {
          jQuery.event.add( this, types, fn, data, selector );
      } );
  }
  
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {
  
      global: {},
  
      add: function( elem, types, handler, data, selector ) {
  
          var handleObjIn, eventHandle, tmp,
              events, t, handleObj,
              special, handlers, type, namespaces, origType,
              elemData = dataPriv.get( elem );
  
          // Don't attach events to noData or text/comment nodes (but allow plain objects)
          if ( !elemData ) {
              return;
          }
  
          // Caller can pass in an object of custom data in lieu of the handler
          if ( handler.handler ) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
          }
  
          // Ensure that invalid selectors throw exceptions at attach time
          // Evaluate against documentElement in case elem is a non-element node (e.g., document)
          if ( selector ) {
              jQuery.find.matchesSelector( documentElement, selector );
          }
  
          // Make sure that the handler has a unique ID, used to find/remove it later
          if ( !handler.guid ) {
              handler.guid = jQuery.guid++;
          }
  
          // Init the element's event structure and main handler, if this is the first
          if ( !( events = elemData.events ) ) {
              events = elemData.events = {};
          }
          if ( !( eventHandle = elemData.handle ) ) {
              eventHandle = elemData.handle = function( e ) {
  
                  // Discard the second event of a jQuery.event.trigger() and
                  // when an event is called after a page has unloaded
                  return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                      jQuery.event.dispatch.apply( elem, arguments ) : undefined;
              };
          }
  
          // Handle multiple events separated by a space
          types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
          t = types.length;
          while ( t-- ) {
              tmp = rtypenamespace.exec( types[ t ] ) || [];
              type = origType = tmp[ 1 ];
              namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
  
              // There *must* be a type, no attaching namespace-only handlers
              if ( !type ) {
                  continue;
              }
  
              // If event changes its type, use the special event handlers for the changed type
              special = jQuery.event.special[ type ] || {};
  
              // If selector defined, determine special event api type, otherwise given type
              type = ( selector ? special.delegateType : special.bindType ) || type;
  
              // Update special based on newly reset type
              special = jQuery.event.special[ type ] || {};
  
              // handleObj is passed to all event handlers
              handleObj = jQuery.extend( {
                  type: type,
                  origType: origType,
                  data: data,
                  handler: handler,
                  guid: handler.guid,
                  selector: selector,
                  needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                  namespace: namespaces.join( "." )
              }, handleObjIn );
  
              // Init the event handler queue if we're the first
              if ( !( handlers = events[ type ] ) ) {
                  handlers = events[ type ] = [];
                  handlers.delegateCount = 0;
  
                  // Only use addEventListener if the special events handler returns false
                  if ( !special.setup ||
                      special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
  
                      if ( elem.addEventListener ) {
                          elem.addEventListener( type, eventHandle );
                      }
                  }
              }
  
              if ( special.add ) {
                  special.add.call( elem, handleObj );
  
                  if ( !handleObj.handler.guid ) {
                      handleObj.handler.guid = handler.guid;
                  }
              }
  
              // Add to the element's handler list, delegates in front
              if ( selector ) {
                  handlers.splice( handlers.delegateCount++, 0, handleObj );
              } else {
                  handlers.push( handleObj );
              }
  
              // Keep track of which events have ever been used, for event optimization
              jQuery.event.global[ type ] = true;
          }
  
      },
  
      // Detach an event or set of events from an element
      remove: function( elem, types, handler, selector, mappedTypes ) {
  
          var j, origCount, tmp,
              events, t, handleObj,
              special, handlers, type, namespaces, origType,
              elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
  
          if ( !elemData || !( events = elemData.events ) ) {
              return;
          }
  
          // Once for each type.namespace in types; type may be omitted
          types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
          t = types.length;
          while ( t-- ) {
              tmp = rtypenamespace.exec( types[ t ] ) || [];
              type = origType = tmp[ 1 ];
              namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
  
              // Unbind all events (on this namespace, if provided) for the element
              if ( !type ) {
                  for ( type in events ) {
                      jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                  }
                  continue;
              }
  
              special = jQuery.event.special[ type ] || {};
              type = ( selector ? special.delegateType : special.bindType ) || type;
              handlers = events[ type ] || [];
              tmp = tmp[ 2 ] &&
                  new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
  
              // Remove matching events
              origCount = j = handlers.length;
              while ( j-- ) {
                  handleObj = handlers[ j ];
  
                  if ( ( mappedTypes || origType === handleObj.origType ) &&
                      ( !handler || handler.guid === handleObj.guid ) &&
                      ( !tmp || tmp.test( handleObj.namespace ) ) &&
                      ( !selector || selector === handleObj.selector ||
                          selector === "**" && handleObj.selector ) ) {
                      handlers.splice( j, 1 );
  
                      if ( handleObj.selector ) {
                          handlers.delegateCount--;
                      }
                      if ( special.remove ) {
                          special.remove.call( elem, handleObj );
                      }
                  }
              }
  
              // Remove generic event handler if we removed something and no more handlers exist
              // (avoids potential for endless recursion during removal of special event handlers)
              if ( origCount && !handlers.length ) {
                  if ( !special.teardown ||
                      special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
  
                      jQuery.removeEvent( elem, type, elemData.handle );
                  }
  
                  delete events[ type ];
              }
          }
  
          // Remove data and the expando if it's no longer used
          if ( jQuery.isEmptyObject( events ) ) {
              dataPriv.remove( elem, "handle events" );
          }
      },
  
      dispatch: function( nativeEvent ) {
  
          // Make a writable jQuery.Event from the native event object
          var event = jQuery.event.fix( nativeEvent );
  
          var i, j, ret, matched, handleObj, handlerQueue,
              args = new Array( arguments.length ),
              handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
              special = jQuery.event.special[ event.type ] || {};
  
          // Use the fix-ed jQuery.Event rather than the (read-only) native event
          args[ 0 ] = event;
  
          for ( i = 1; i < arguments.length; i++ ) {
              args[ i ] = arguments[ i ];
          }
  
          event.delegateTarget = this;
  
          // Call the preDispatch hook for the mapped type, and let it bail if desired
          if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
              return;
          }
  
          // Determine handlers
          handlerQueue = jQuery.event.handlers.call( this, event, handlers );
  
          // Run delegates first; they may want to stop propagation beneath us
          i = 0;
          while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
              event.currentTarget = matched.elem;
  
              j = 0;
              while ( ( handleObj = matched.handlers[ j++ ] ) &&
                  !event.isImmediatePropagationStopped() ) {
  
                  // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                  // a subset or equal to those in the bound event (both can have no namespace).
                  if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
  
                      event.handleObj = handleObj;
                      event.data = handleObj.data;
  
                      ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                          handleObj.handler ).apply( matched.elem, args );
  
                      if ( ret !== undefined ) {
                          if ( ( event.result = ret ) === false ) {
                              event.preventDefault();
                              event.stopPropagation();
                          }
                      }
                  }
              }
          }
  
          // Call the postDispatch hook for the mapped type
          if ( special.postDispatch ) {
              special.postDispatch.call( this, event );
          }
  
          return event.result;
      },
  
      handlers: function( event, handlers ) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors,
              handlerQueue = [],
              delegateCount = handlers.delegateCount,
              cur = event.target;
  
          // Find delegate handlers
          if ( delegateCount &&
  
              // Support: IE <=9
              // Black-hole SVG <use> instance trees (trac-13180)
              cur.nodeType &&
  
              // Support: Firefox <=42
              // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
              // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
              // Support: IE 11 only
              // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
              !( event.type === "click" && event.button >= 1 ) ) {
  
              for ( ; cur !== this; cur = cur.parentNode || this ) {
  
                  // Don't check non-elements (#13208)
                  // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                  if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
                      matchedHandlers = [];
                      matchedSelectors = {};
                      for ( i = 0; i < delegateCount; i++ ) {
                          handleObj = handlers[ i ];
  
                          // Don't conflict with Object.prototype properties (#13203)
                          sel = handleObj.selector + " ";
  
                          if ( matchedSelectors[ sel ] === undefined ) {
                              matchedSelectors[ sel ] = handleObj.needsContext ?
                                  jQuery( sel, this ).index( cur ) > -1 :
                                  jQuery.find( sel, this, null, [ cur ] ).length;
                          }
                          if ( matchedSelectors[ sel ] ) {
                              matchedHandlers.push( handleObj );
                          }
                      }
                      if ( matchedHandlers.length ) {
                          handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
                      }
                  }
              }
          }
  
          // Add the remaining (directly-bound) handlers
          cur = this;
          if ( delegateCount < handlers.length ) {
              handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
          }
  
          return handlerQueue;
      },
  
      addProp: function( name, hook ) {
          Object.defineProperty( jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
  
              get: isFunction( hook ) ?
                  function() {
                      if ( this.originalEvent ) {
                              return hook( this.originalEvent );
                      }
                  } :
                  function() {
                      if ( this.originalEvent ) {
                              return this.originalEvent[ name ];
                      }
                  },
  
              set: function( value ) {
                  Object.defineProperty( this, name, {
                      enumerable: true,
                      configurable: true,
                      writable: true,
                      value: value
                  } );
              }
          } );
      },
  
      fix: function( originalEvent ) {
          return originalEvent[ jQuery.expando ] ?
              originalEvent :
              new jQuery.Event( originalEvent );
      },
  
      special: {
          load: {
  
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
          },
          focus: {
  
              // Fire native event if possible so blur/focus sequence is correct
              trigger: function() {
                  if ( this !== safeActiveElement() && this.focus ) {
                      this.focus();
                      return false;
                  }
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if ( this === safeActiveElement() && this.blur ) {
                      this.blur();
                      return false;
                  }
              },
              delegateType: "focusout"
          },
          click: {
  
              // For checkbox, fire native event so checked state will be right
              trigger: function() {
                  if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
                      this.click();
                      return false;
                  }
              },
  
              // For cross-browser consistency, don't fire native .click() on links
              _default: function( event ) {
                  return nodeName( event.target, "a" );
              }
          },
  
          beforeunload: {
              postDispatch: function( event ) {
  
                  // Support: Firefox 20+
                  // Firefox doesn't alert if the returnValue field is not set.
                  if ( event.result !== undefined && event.originalEvent ) {
                      event.originalEvent.returnValue = event.result;
                  }
              }
          }
      }
  };
  
  jQuery.removeEvent = function( elem, type, handle ) {
  
      // This "if" is needed for plain objects
      if ( elem.removeEventListener ) {
          elem.removeEventListener( type, handle );
      }
  };
  
  jQuery.Event = function( src, props ) {
  
      // Allow instantiation without the 'new' keyword
      if ( !( this instanceof jQuery.Event ) ) {
          return new jQuery.Event( src, props );
      }
  
      // Event object
      if ( src && src.type ) {
          this.originalEvent = src;
          this.type = src.type;
  
          // Events bubbling up the document may have been marked as prevented
          // by a handler lower down the tree; reflect the correct value.
          this.isDefaultPrevented = src.defaultPrevented ||
                  src.defaultPrevented === undefined &&
  
                  // Support: Android <=2.3 only
                  src.returnValue === false ?
              returnTrue :
              returnFalse;
  
          // Create target properties
          // Support: Safari <=6 - 7 only
          // Target should not be a text node (#504, #13143)
          this.target = ( src.target && src.target.nodeType === 3 ) ?
              src.target.parentNode :
              src.target;
  
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
  
      // Event type
      } else {
          this.type = src;
      }
  
      // Put explicitly provided properties onto the event object
      if ( props ) {
          jQuery.extend( this, props );
      }
  
      // Create a timestamp if incoming event doesn't have one
      this.timeStamp = src && src.timeStamp || Date.now();
  
      // Mark it as fixed
      this[ jQuery.expando ] = true;
  };
  
  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
  
      preventDefault: function() {
          var e = this.originalEvent;
  
          this.isDefaultPrevented = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.preventDefault();
          }
      },
      stopPropagation: function() {
          var e = this.originalEvent;
  
          this.isPropagationStopped = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.stopPropagation();
          }
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
  
          this.isImmediatePropagationStopped = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.stopImmediatePropagation();
          }
  
          this.stopPropagation();
      }
  };
  
  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each( {
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
  
      which: function( event ) {
          var button = event.button;
  
          // Add which for key events
          if ( event.which == null && rkeyEvent.test( event.type ) ) {
              return event.charCode != null ? event.charCode : event.keyCode;
          }
  
          // Add which for click: 1 === left; 2 === middle; 3 === right
          if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
              if ( button & 1 ) {
                  return 1;
              }
  
              if ( button & 2 ) {
                  return 3;
              }
  
              if ( button & 4 ) {
                  return 2;
              }
  
              return 0;
          }
  
          return event.which;
      }
  }, jQuery.event.addProp );
  
  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each( {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function( orig, fix ) {
      jQuery.event.special[ orig ] = {
          delegateType: fix,
          bindType: fix,
  
          handle: function( event ) {
              var ret,
                  target = this,
                  related = event.relatedTarget,
                  handleObj = event.handleObj;
  
              // For mouseenter/leave call the handler if related is outside the target.
              // NB: No relatedTarget if the mouse left/entered the browser window
              if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
                  event.type = handleObj.origType;
                  ret = handleObj.handler.apply( this, arguments );
                  event.type = fix;
              }
              return ret;
          }
      };
  } );
  
  jQuery.fn.extend( {
  
      on: function( types, selector, data, fn ) {
          return on( this, types, selector, data, fn );
      },
      one: function( types, selector, data, fn ) {
          return on( this, types, selector, data, fn, 1 );
      },
      off: function( types, selector, fn ) {
          var handleObj, type;
          if ( types && types.preventDefault && types.handleObj ) {
  
              // ( event )  dispatched jQuery.Event
              handleObj = types.handleObj;
              jQuery( types.delegateTarget ).off(
                  handleObj.namespace ?
                      handleObj.origType + "." + handleObj.namespace :
                      handleObj.origType,
                  handleObj.selector,
                  handleObj.handler
              );
              return this;
          }
          if ( typeof types === "object" ) {
  
              // ( types-object [, selector] )
              for ( type in types ) {
                  this.off( type, selector, types[ type ] );
              }
              return this;
          }
          if ( selector === false || typeof selector === "function" ) {
  
              // ( types [, fn] )
              fn = selector;
              selector = undefined;
          }
          if ( fn === false ) {
              fn = returnFalse;
          }
          return this.each( function() {
              jQuery.event.remove( this, types, fn, selector );
          } );
      }
  } );
  
  
  var
  
      /* eslint-disable max-len */
  
      // See https://github.com/eslint/eslint/issues/3229
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  
      /* eslint-enable */
  
      // Support: IE <=10 - 11, Edge 12 - 13 only
      // In IE/Edge using regex groups here causes severe slowdowns.
      // See https://connect.microsoft.com/IE/feedback/details/1736512/
      rnoInnerhtml = /<script|<style|<link/i,
  
      // checked="checked" or checked
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  
  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget( elem, content ) {
      if ( nodeName( elem, "table" ) &&
          nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
  
          return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
      }
  
      return elem;
  }
  
  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript( elem ) {
      elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
      return elem;
  }
  function restoreScript( elem ) {
      if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
          elem.type = elem.type.slice( 5 );
      } else {
          elem.removeAttribute( "type" );
      }
  
      return elem;
  }
  
  function cloneCopyEvent( src, dest ) {
      var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
  
      if ( dest.nodeType !== 1 ) {
          return;
      }
  
      // 1. Copy private data: events, handlers, etc.
      if ( dataPriv.hasData( src ) ) {
          pdataOld = dataPriv.access( src );
          pdataCur = dataPriv.set( dest, pdataOld );
          events = pdataOld.events;
  
          if ( events ) {
              delete pdataCur.handle;
              pdataCur.events = {};
  
              for ( type in events ) {
                  for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                      jQuery.event.add( dest, type, events[ type ][ i ] );
                  }
              }
          }
      }
  
      // 2. Copy user data
      if ( dataUser.hasData( src ) ) {
          udataOld = dataUser.access( src );
          udataCur = jQuery.extend( {}, udataOld );
  
          dataUser.set( dest, udataCur );
      }
  }
  
  // Fix IE bugs, see support tests
  function fixInput( src, dest ) {
      var nodeName = dest.nodeName.toLowerCase();
  
      // Fails to persist the checked state of a cloned checkbox or radio button.
      if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
          dest.checked = src.checked;
  
      // Fails to return the selected option to the default selected state when cloning options
      } else if ( nodeName === "input" || nodeName === "textarea" ) {
          dest.defaultValue = src.defaultValue;
      }
  }
  
  function domManip( collection, args, callback, ignored ) {
  
      // Flatten any nested arrays
      args = concat.apply( [], args );
  
      var fragment, first, scripts, hasScripts, node, doc,
          i = 0,
          l = collection.length,
          iNoClone = l - 1,
          value = args[ 0 ],
          valueIsFunction = isFunction( value );
  
      // We can't cloneNode fragments that contain checked, in WebKit
      if ( valueIsFunction ||
              ( l > 1 && typeof value === "string" &&
                  !support.checkClone && rchecked.test( value ) ) ) {
          return collection.each( function( index ) {
              var self = collection.eq( index );
              if ( valueIsFunction ) {
                  args[ 0 ] = value.call( this, index, self.html() );
              }
              domManip( self, args, callback, ignored );
          } );
      }
  
      if ( l ) {
          fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
          first = fragment.firstChild;
  
          if ( fragment.childNodes.length === 1 ) {
              fragment = first;
          }
  
          // Require either new content or an interest in ignored elements to invoke the callback
          if ( first || ignored ) {
              scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
              hasScripts = scripts.length;
  
              // Use the original fragment for the last item
              // instead of the first because it can end up
              // being emptied incorrectly in certain situations (#8070).
              for ( ; i < l; i++ ) {
                  node = fragment;
  
                  if ( i !== iNoClone ) {
                      node = jQuery.clone( node, true, true );
  
                      // Keep references to cloned scripts for later restoration
                      if ( hasScripts ) {
  
                          // Support: Android <=4.0 only, PhantomJS 1 only
                          // push.apply(_, arraylike) throws on ancient WebKit
                          jQuery.merge( scripts, getAll( node, "script" ) );
                      }
                  }
  
                  callback.call( collection[ i ], node, i );
              }
  
              if ( hasScripts ) {
                  doc = scripts[ scripts.length - 1 ].ownerDocument;
  
                  // Reenable scripts
                  jQuery.map( scripts, restoreScript );
  
                  // Evaluate executable scripts on first document insertion
                  for ( i = 0; i < hasScripts; i++ ) {
                      node = scripts[ i ];
                      if ( rscriptType.test( node.type || "" ) &&
                          !dataPriv.access( node, "globalEval" ) &&
                          jQuery.contains( doc, node ) ) {
  
                          if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {
  
                              // Optional AJAX dependency, but won't run scripts if not present
                              if ( jQuery._evalUrl ) {
                                  jQuery._evalUrl( node.src );
                              }
                          } else {
                              DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
                          }
                      }
                  }
              }
          }
      }
  
      return collection;
  }
  
  function remove( elem, selector, keepData ) {
      var node,
          nodes = selector ? jQuery.filter( selector, elem ) : elem,
          i = 0;
  
      for ( ; ( node = nodes[ i ] ) != null; i++ ) {
          if ( !keepData && node.nodeType === 1 ) {
              jQuery.cleanData( getAll( node ) );
          }
  
          if ( node.parentNode ) {
              if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
                  setGlobalEval( getAll( node, "script" ) );
              }
              node.parentNode.removeChild( node );
          }
      }
  
      return elem;
  }
  
  jQuery.extend( {
      htmlPrefilter: function( html ) {
          return html.replace( rxhtmlTag, "<$1></$2>" );
      },
  
      clone: function( elem, dataAndEvents, deepDataAndEvents ) {
          var i, l, srcElements, destElements,
              clone = elem.cloneNode( true ),
              inPage = jQuery.contains( elem.ownerDocument, elem );
  
          // Fix IE cloning issues
          if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
                  !jQuery.isXMLDoc( elem ) ) {
  
              // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
              destElements = getAll( clone );
              srcElements = getAll( elem );
  
              for ( i = 0, l = srcElements.length; i < l; i++ ) {
                  fixInput( srcElements[ i ], destElements[ i ] );
              }
          }
  
          // Copy the events from the original to the clone
          if ( dataAndEvents ) {
              if ( deepDataAndEvents ) {
                  srcElements = srcElements || getAll( elem );
                  destElements = destElements || getAll( clone );
  
                  for ( i = 0, l = srcElements.length; i < l; i++ ) {
                      cloneCopyEvent( srcElements[ i ], destElements[ i ] );
                  }
              } else {
                  cloneCopyEvent( elem, clone );
              }
          }
  
          // Preserve script evaluation history
          destElements = getAll( clone, "script" );
          if ( destElements.length > 0 ) {
              setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
          }
  
          // Return the cloned set
          return clone;
      },
  
      cleanData: function( elems ) {
          var data, elem, type,
              special = jQuery.event.special,
              i = 0;
  
          for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
              if ( acceptData( elem ) ) {
                  if ( ( data = elem[ dataPriv.expando ] ) ) {
                      if ( data.events ) {
                          for ( type in data.events ) {
                              if ( special[ type ] ) {
                                  jQuery.event.remove( elem, type );
  
                              // This is a shortcut to avoid jQuery.event.remove's overhead
                              } else {
                                  jQuery.removeEvent( elem, type, data.handle );
                              }
                          }
                      }
  
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[ dataPriv.expando ] = undefined;
                  }
                  if ( elem[ dataUser.expando ] ) {
  
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[ dataUser.expando ] = undefined;
                  }
              }
          }
      }
  } );
  
  jQuery.fn.extend( {
      detach: function( selector ) {
          return remove( this, selector, true );
      },
  
      remove: function( selector ) {
          return remove( this, selector );
      },
  
      text: function( value ) {
          return access( this, function( value ) {
              return value === undefined ?
                  jQuery.text( this ) :
                  this.empty().each( function() {
                      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                          this.textContent = value;
                      }
                  } );
          }, null, value, arguments.length );
      },
  
      append: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                  var target = manipulationTarget( this, elem );
                  target.appendChild( elem );
              }
          } );
      },
  
      prepend: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                  var target = manipulationTarget( this, elem );
                  target.insertBefore( elem, target.firstChild );
              }
          } );
      },
  
      before: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.parentNode ) {
                  this.parentNode.insertBefore( elem, this );
              }
          } );
      },
  
      after: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.parentNode ) {
                  this.parentNode.insertBefore( elem, this.nextSibling );
              }
          } );
      },
  
      empty: function() {
          var elem,
              i = 0;
  
          for ( ; ( elem = this[ i ] ) != null; i++ ) {
              if ( elem.nodeType === 1 ) {
  
                  // Prevent memory leaks
                  jQuery.cleanData( getAll( elem, false ) );
  
                  // Remove any remaining nodes
                  elem.textContent = "";
              }
          }
  
          return this;
      },
  
      clone: function( dataAndEvents, deepDataAndEvents ) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
  
          return this.map( function() {
              return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
          } );
      },
  
      html: function( value ) {
          return access( this, function( value ) {
              var elem = this[ 0 ] || {},
                  i = 0,
                  l = this.length;
  
              if ( value === undefined && elem.nodeType === 1 ) {
                  return elem.innerHTML;
              }
  
              // See if we can take a shortcut and just use innerHTML
              if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                  !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
  
                  value = jQuery.htmlPrefilter( value );
  
                  try {
                      for ( ; i < l; i++ ) {
                          elem = this[ i ] || {};
  
                          // Remove element nodes and prevent memory leaks
                          if ( elem.nodeType === 1 ) {
                              jQuery.cleanData( getAll( elem, false ) );
                              elem.innerHTML = value;
                          }
                      }
  
                      elem = 0;
  
                  // If using innerHTML throws an exception, use the fallback method
                  } catch ( e ) {}
              }
  
              if ( elem ) {
                  this.empty().append( value );
              }
          }, null, value, arguments.length );
      },
  
      replaceWith: function() {
          var ignored = [];
  
          // Make the changes, replacing each non-ignored context element with the new content
          return domManip( this, arguments, function( elem ) {
              var parent = this.parentNode;
  
              if ( jQuery.inArray( this, ignored ) < 0 ) {
                  jQuery.cleanData( getAll( this ) );
                  if ( parent ) {
                      parent.replaceChild( elem, this );
                  }
              }
  
          // Force callback invocation
          }, ignored );
      }
  } );
  
  jQuery.each( {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function( name, original ) {
      jQuery.fn[ name ] = function( selector ) {
          var elems,
              ret = [],
              insert = jQuery( selector ),
              last = insert.length - 1,
              i = 0;
  
          for ( ; i <= last; i++ ) {
              elems = i === last ? this : this.clone( true );
              jQuery( insert[ i ] )[ original ]( elems );
  
              // Support: Android <=4.0 only, PhantomJS 1 only
              // .get() because push.apply(_, arraylike) throws on ancient WebKit
              push.apply( ret, elems.get() );
          }
  
          return this.pushStack( ret );
      };
  } );
  var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
  
  var getStyles = function( elem ) {
  
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
          var view = elem.ownerDocument.defaultView;
  
          if ( !view || !view.opener ) {
              view = window;
          }
  
          return view.getComputedStyle( elem );
      };
  
  var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );
  
  
  
  ( function() {
  
      // Executing both pixelPosition & boxSizingReliable tests require only one layout
      // so they're executed at the same time to save the second computation.
      function computeStyleTests() {
  
          // This is a singleton, we need to execute it only once
          if ( !div ) {
              return;
          }
  
          container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
              "margin-top:1px;padding:0;border:0";
          div.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
              "margin:auto;border:1px;padding:1px;" +
              "width:60%;top:1%";
          documentElement.appendChild( container ).appendChild( div );
  
          var divStyle = window.getComputedStyle( div );
          pixelPositionVal = divStyle.top !== "1%";
  
          // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
          reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;
  
          // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
          // Some styles come back with percentage values, even though they shouldn't
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;
  
          // Support: IE 9 - 11 only
          // Detect misreporting of content dimensions for box-sizing:border-box elements
          boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;
  
          // Support: IE 9 only
          // Detect overflow:scroll screwiness (gh-3699)
          div.style.position = "absolute";
          scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
  
          documentElement.removeChild( container );
  
          // Nullify the div so it wouldn't be stored in the memory and
          // it will also be a sign that checks already performed
          div = null;
      }
  
      function roundPixelMeasures( measure ) {
          return Math.round( parseFloat( measure ) );
      }
  
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
          reliableMarginLeftVal,
          container = document.createElement( "div" ),
          div = document.createElement( "div" );
  
      // Finish early in limited (non-browser) environments
      if ( !div.style ) {
          return;
      }
  
      // Support: IE <=9 - 11 only
      // Style of cloned element affects source element cloned (#8908)
      div.style.backgroundClip = "content-box";
      div.cloneNode( true ).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
  
      jQuery.extend( support, {
          boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
          },
          pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
          },
          reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
          }
      } );
  } )();
  
  
  function curCSS( elem, name, computed ) {
      var width, minWidth, maxWidth, ret,
  
          // Support: Firefox 51+
          // Retrieving style before computed somehow
          // fixes an issue with getting wrong values
          // on detached elements
          style = elem.style;
  
      computed = computed || getStyles( elem );
  
      // getPropertyValue is needed for:
      //   .css('filter') (IE 9 only, #12537)
      //   .css('--customProperty) (#3144)
      if ( computed ) {
          ret = computed.getPropertyValue( name ) || computed[ name ];
  
          if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
              ret = jQuery.style( elem, name );
          }
  
          // A tribute to the "awesome hack by Dean Edwards"
          // Android Browser returns percentage for some values,
          // but width seems to be reliably pixels.
          // This is against the CSSOM draft spec:
          // https://drafts.csswg.org/cssom/#resolved-values
          if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {
  
              // Remember the original values
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
  
              // Put in the new values to get a computed value out
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
  
              // Revert the changed values
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
          }
      }
  
      return ret !== undefined ?
  
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + "" :
          ret;
  }
  
  
  function addGetHookIf( conditionFn, hookFn ) {
  
      // Define the hook, we'll check on the first run if it's really needed.
      return {
          get: function() {
              if ( conditionFn() ) {
  
                  // Hook not needed (or it's not possible to use it due
                  // to missing dependency), remove it.
                  delete this.get;
                  return;
              }
  
              // Hook needed; redefine it so that the support test is not executed again.
              return ( this.get = hookFn ).apply( this, arguments );
          }
      };
  }
  
  
  var
  
      // Swappable if display is none or starts with table
      // except "table", "table-cell", or "table-caption"
      // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = { position: "absolute", visibility: "hidden", display: "block" },
      cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
      },
  
      cssPrefixes = [ "Webkit", "Moz", "ms" ],
      emptyStyle = document.createElement( "div" ).style;
  
  // Return a css property mapped to a potentially vendor prefixed property
  function vendorPropName( name ) {
  
      // Shortcut for names that are not vendor prefixed
      if ( name in emptyStyle ) {
          return name;
      }
  
      // Check for vendor prefixed names
      var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
          i = cssPrefixes.length;
  
      while ( i-- ) {
          name = cssPrefixes[ i ] + capName;
          if ( name in emptyStyle ) {
              return name;
          }
      }
  }
  
  // Return a property mapped along what jQuery.cssProps suggests or to
  // a vendor prefixed property.
  function finalPropName( name ) {
      var ret = jQuery.cssProps[ name ];
      if ( !ret ) {
          ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
      }
      return ret;
  }
  
  function setPositiveNumber( elem, value, subtract ) {
  
      // Any relative (+/-) values have already been
      // normalized at this point
      var matches = rcssNum.exec( value );
      return matches ?
  
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
          value;
  }
  
  function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
      var i = dimension === "width" ? 1 : 0,
          extra = 0,
          delta = 0;
  
      // Adjustment may not be necessary
      if ( box === ( isBorderBox ? "border" : "content" ) ) {
          return 0;
      }
  
      for ( ; i < 4; i += 2 ) {
  
          // Both box models exclude margin
          if ( box === "margin" ) {
              delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
          }
  
          // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
          if ( !isBorderBox ) {
  
              // Add padding
              delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
  
              // For "border" or "margin", add border
              if ( box !== "padding" ) {
                  delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
  
              // But still keep track of it otherwise
              } else {
                  extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
              }
  
          // If we get here with a border-box (content + padding + border), we're seeking "content" or
          // "padding" or "margin"
          } else {
  
              // For "content", subtract padding
              if ( box === "content" ) {
                  delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
              }
  
              // For "content" or "padding", subtract border
              if ( box !== "margin" ) {
                  delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
              }
          }
      }
  
      // Account for positive content-box scroll gutter when requested by providing computedVal
      if ( !isBorderBox && computedVal >= 0 ) {
  
          // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
          // Assuming integer scroll gutter, subtract the rest and round down
          delta += Math.max( 0, Math.ceil(
              elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
              computedVal -
              delta -
              extra -
              0.5
          ) );
      }
  
      return delta;
  }
  
  function getWidthOrHeight( elem, dimension, extra ) {
  
      // Start with computed style
      var styles = getStyles( elem ),
          val = curCSS( elem, dimension, styles ),
          isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          valueIsBorderBox = isBorderBox;
  
      // Support: Firefox <=54
      // Return a confounding non-pixel value or feign ignorance, as appropriate.
      if ( rnumnonpx.test( val ) ) {
          if ( !extra ) {
              return val;
          }
          val = "auto";
      }
  
      // Check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style
      valueIsBorderBox = valueIsBorderBox &&
          ( support.boxSizingReliable() || val === elem.style[ dimension ] );
  
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      if ( val === "auto" ||
          !parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {
  
          val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];
  
          // offsetWidth/offsetHeight provide border-box values
          valueIsBorderBox = true;
      }
  
      // Normalize "" and auto
      val = parseFloat( val ) || 0;
  
      // Adjust for the element's box model
      return ( val +
          boxModelAdjustment(
              elem,
              dimension,
              extra || ( isBorderBox ? "border" : "content" ),
              valueIsBorderBox,
              styles,
  
              // Provide the current computed size to request scroll gutter calculation (gh-3589)
              val
          )
      ) + "px";
  }
  
  jQuery.extend( {
  
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
          opacity: {
              get: function( elem, computed ) {
                  if ( computed ) {
  
                      // We should always get a number back from opacity
                      var ret = curCSS( elem, "opacity" );
                      return ret === "" ? "1" : ret;
                  }
              }
          }
      },
  
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
      },
  
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
  
      // Get and set the style property on a DOM Node
      style: function( elem, name, value, extra ) {
  
          // Don't set styles on text and comment nodes
          if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
              return;
          }
  
          // Make sure that we're working with the right name
          var ret, type, hooks,
              origName = camelCase( name ),
              isCustomProp = rcustomProp.test( name ),
              style = elem.style;
  
          // Make sure that we're working with the right name. We don't
          // want to query the value if it is a CSS custom property
          // since they are user-defined.
          if ( !isCustomProp ) {
              name = finalPropName( origName );
          }
  
          // Gets hook for the prefixed version, then unprefixed version
          hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
  
          // Check if we're setting a value
          if ( value !== undefined ) {
              type = typeof value;
  
              // Convert "+=" or "-=" to relative numbers (#7345)
              if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
                  value = adjustCSS( elem, name, ret );
  
                  // Fixes bug #9237
                  type = "number";
              }
  
              // Make sure that null and NaN values aren't set (#7116)
              if ( value == null || value !== value ) {
                  return;
              }
  
              // If a number was passed in, add the unit (except for certain CSS properties)
              if ( type === "number" ) {
                  value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
              }
  
              // background-* props affect original clone's values
              if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
                  style[ name ] = "inherit";
              }
  
              // If a hook was provided, use that value, otherwise just set the specified value
              if ( !hooks || !( "set" in hooks ) ||
                  ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
  
                  if ( isCustomProp ) {
                      style.setProperty( name, value );
                  } else {
                      style[ name ] = value;
                  }
              }
  
          } else {
  
              // If a hook was provided get the non-computed value from there
              if ( hooks && "get" in hooks &&
                  ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
  
                  return ret;
              }
  
              // Otherwise just get the value from the style object
              return style[ name ];
          }
      },
  
      css: function( elem, name, extra, styles ) {
          var val, num, hooks,
              origName = camelCase( name ),
              isCustomProp = rcustomProp.test( name );
  
          // Make sure that we're working with the right name. We don't
          // want to modify the value if it is a CSS custom property
          // since they are user-defined.
          if ( !isCustomProp ) {
              name = finalPropName( origName );
          }
  
          // Try prefixed name followed by the unprefixed name
          hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
  
          // If a hook was provided get the computed value from there
          if ( hooks && "get" in hooks ) {
              val = hooks.get( elem, true, extra );
          }
  
          // Otherwise, if a way to get the computed value exists, use that
          if ( val === undefined ) {
              val = curCSS( elem, name, styles );
          }
  
          // Convert "normal" to computed value
          if ( val === "normal" && name in cssNormalTransform ) {
              val = cssNormalTransform[ name ];
          }
  
          // Make numeric if forced or a qualifier was provided and val looks numeric
          if ( extra === "" || extra ) {
              num = parseFloat( val );
              return extra === true || isFinite( num ) ? num || 0 : val;
          }
  
          return val;
      }
  } );
  
  jQuery.each( [ "height", "width" ], function( i, dimension ) {
      jQuery.cssHooks[ dimension ] = {
          get: function( elem, computed, extra ) {
              if ( computed ) {
  
                  // Certain elements can have dimension info if we invisibly show them
                  // but it must have a current display style that would benefit
                  return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
  
                      // Support: Safari 8+
                      // Table columns in Safari have non-zero offsetWidth & zero
                      // getBoundingClientRect().width unless display is changed.
                      // Support: IE <=11 only
                      // Running getBoundingClientRect on a disconnected node
                      // in IE throws an error.
                      ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
                          swap( elem, cssShow, function() {
                              return getWidthOrHeight( elem, dimension, extra );
                          } ) :
                          getWidthOrHeight( elem, dimension, extra );
              }
          },
  
          set: function( elem, value, extra ) {
              var matches,
                  styles = getStyles( elem ),
                  isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                  subtract = extra && boxModelAdjustment(
                      elem,
                      dimension,
                      extra,
                      isBorderBox,
                      styles
                  );
  
              // Account for unreliable border-box dimensions by comparing offset* to computed and
              // faking a content-box to get border and padding (gh-3699)
              if ( isBorderBox && support.scrollboxSize() === styles.position ) {
                  subtract -= Math.ceil(
                      elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
                      parseFloat( styles[ dimension ] ) -
                      boxModelAdjustment( elem, dimension, "border", false, styles ) -
                      0.5
                  );
              }
  
              // Convert to pixels if value adjustment is needed
              if ( subtract && ( matches = rcssNum.exec( value ) ) &&
                  ( matches[ 3 ] || "px" ) !== "px" ) {
  
                  elem.style[ dimension ] = value;
                  value = jQuery.css( elem, dimension );
              }
  
              return setPositiveNumber( elem, value, subtract );
          }
      };
  } );
  
  jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
      function( elem, computed ) {
          if ( computed ) {
              return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
                  elem.getBoundingClientRect().left -
                      swap( elem, { marginLeft: 0 }, function() {
                          return elem.getBoundingClientRect().left;
                      } )
                  ) + "px";
          }
      }
  );
  
  // These hooks are used by animate to expand properties
  jQuery.each( {
      margin: "",
      padding: "",
      border: "Width"
  }, function( prefix, suffix ) {
      jQuery.cssHooks[ prefix + suffix ] = {
          expand: function( value ) {
              var i = 0,
                  expanded = {},
  
                  // Assumes a single number if not a string
                  parts = typeof value === "string" ? value.split( " " ) : [ value ];
  
              for ( ; i < 4; i++ ) {
                  expanded[ prefix + cssExpand[ i ] + suffix ] =
                      parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
              }
  
              return expanded;
          }
      };
  
      if ( prefix !== "margin" ) {
          jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
      }
  } );
  
  jQuery.fn.extend( {
      css: function( name, value ) {
          return access( this, function( elem, name, value ) {
              var styles, len,
                  map = {},
                  i = 0;
  
              if ( Array.isArray( name ) ) {
                  styles = getStyles( elem );
                  len = name.length;
  
                  for ( ; i < len; i++ ) {
                      map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                  }
  
                  return map;
              }
  
              return value !== undefined ?
                  jQuery.style( elem, name, value ) :
                  jQuery.css( elem, name );
          }, name, value, arguments.length > 1 );
      }
  } );
  
  
  function Tween( elem, options, prop, end, easing ) {
      return new Tween.prototype.init( elem, options, prop, end, easing );
  }
  jQuery.Tween = Tween;
  
  Tween.prototype = {
      constructor: Tween,
      init: function( elem, options, prop, end, easing, unit ) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
      },
      cur: function() {
          var hooks = Tween.propHooks[ this.prop ];
  
          return hooks && hooks.get ?
              hooks.get( this ) :
              Tween.propHooks._default.get( this );
      },
      run: function( percent ) {
          var eased,
              hooks = Tween.propHooks[ this.prop ];
  
          if ( this.options.duration ) {
              this.pos = eased = jQuery.easing[ this.easing ](
                  percent, this.options.duration * percent, 0, 1, this.options.duration
              );
          } else {
              this.pos = eased = percent;
          }
          this.now = ( this.end - this.start ) * eased + this.start;
  
          if ( this.options.step ) {
              this.options.step.call( this.elem, this.now, this );
          }
  
          if ( hooks && hooks.set ) {
              hooks.set( this );
          } else {
              Tween.propHooks._default.set( this );
          }
          return this;
      }
  };
  
  Tween.prototype.init.prototype = Tween.prototype;
  
  Tween.propHooks = {
      _default: {
          get: function( tween ) {
              var result;
  
              // Use a property on the element directly when it is not a DOM element,
              // or when there is no matching style property that exists.
              if ( tween.elem.nodeType !== 1 ||
                  tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
                  return tween.elem[ tween.prop ];
              }
  
              // Passing an empty string as a 3rd parameter to .css will automatically
              // attempt a parseFloat and fallback to a string if the parse fails.
              // Simple values such as "10px" are parsed to Float;
              // complex values such as "rotate(1rad)" are returned as-is.
              result = jQuery.css( tween.elem, tween.prop, "" );
  
              // Empty strings, null, undefined and "auto" are converted to 0.
              return !result || result === "auto" ? 0 : result;
          },
          set: function( tween ) {
  
              // Use step hook for back compat.
              // Use cssHook if its there.
              // Use .style if available and use plain properties where available.
              if ( jQuery.fx.step[ tween.prop ] ) {
                  jQuery.fx.step[ tween.prop ]( tween );
              } else if ( tween.elem.nodeType === 1 &&
                  ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
                      jQuery.cssHooks[ tween.prop ] ) ) {
                  jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
              } else {
                  tween.elem[ tween.prop ] = tween.now;
              }
          }
      }
  };
  
  // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function( tween ) {
          if ( tween.elem.nodeType && tween.elem.parentNode ) {
              tween.elem[ tween.prop ] = tween.now;
          }
      }
  };
  
  jQuery.easing = {
      linear: function( p ) {
          return p;
      },
      swing: function( p ) {
          return 0.5 - Math.cos( p * Math.PI ) / 2;
      },
      _default: "swing"
  };
  
  jQuery.fx = Tween.prototype.init;
  
  // Back compat <1.8 extension point
  jQuery.fx.step = {};
  
  
  
  
  var
      fxNow, inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  
  function schedule() {
      if ( inProgress ) {
          if ( document.hidden === false && window.requestAnimationFrame ) {
              window.requestAnimationFrame( schedule );
          } else {
              window.setTimeout( schedule, jQuery.fx.interval );
          }
  
          jQuery.fx.tick();
      }
  }
  
  // Animations created synchronously will run synchronously
  function createFxNow() {
      window.setTimeout( function() {
          fxNow = undefined;
      } );
      return ( fxNow = Date.now() );
  }
  
  // Generate parameters to create a standard animation
  function genFx( type, includeWidth ) {
      var which,
          i = 0,
          attrs = { height: type };
  
      // If we include width, step value is 1 to do all cssExpand values,
      // otherwise step value is 2 to skip over Left and Right
      includeWidth = includeWidth ? 1 : 0;
      for ( ; i < 4; i += 2 - includeWidth ) {
          which = cssExpand[ i ];
          attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
      }
  
      if ( includeWidth ) {
          attrs.opacity = attrs.width = type;
      }
  
      return attrs;
  }
  
  function createTween( value, prop, animation ) {
      var tween,
          collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
          index = 0,
          length = collection.length;
      for ( ; index < length; index++ ) {
          if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
  
              // We're done with this property
              return tween;
          }
      }
  }
  
  function defaultPrefilter( elem, props, opts ) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
          isBox = "width" in props || "height" in props,
          anim = this,
          orig = {},
          style = elem.style,
          hidden = elem.nodeType && isHiddenWithinTree( elem ),
          dataShow = dataPriv.get( elem, "fxshow" );
  
      // Queue-skipping animations hijack the fx hooks
      if ( !opts.queue ) {
          hooks = jQuery._queueHooks( elem, "fx" );
          if ( hooks.unqueued == null ) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                  if ( !hooks.unqueued ) {
                      oldfire();
                  }
              };
          }
          hooks.unqueued++;
  
          anim.always( function() {
  
              // Ensure the complete handler is called before this completes
              anim.always( function() {
                  hooks.unqueued--;
                  if ( !jQuery.queue( elem, "fx" ).length ) {
                      hooks.empty.fire();
                  }
              } );
          } );
      }
  
      // Detect show/hide animations
      for ( prop in props ) {
          value = props[ prop ];
          if ( rfxtypes.test( value ) ) {
              delete props[ prop ];
              toggle = toggle || value === "toggle";
              if ( value === ( hidden ? "hide" : "show" ) ) {
  
                  // Pretend to be hidden if this is a "show" and
                  // there is still data from a stopped show/hide
                  if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                      hidden = true;
  
                  // Ignore all other no-op show/hide data
                  } else {
                      continue;
                  }
              }
              orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
          }
      }
  
      // Bail out if this is a no-op like .hide().hide()
      propTween = !jQuery.isEmptyObject( props );
      if ( !propTween && jQuery.isEmptyObject( orig ) ) {
          return;
      }
  
      // Restrict "overflow" and "display" styles during box animations
      if ( isBox && elem.nodeType === 1 ) {
  
          // Support: IE <=9 - 11, Edge 12 - 15
          // Record all 3 overflow attributes because IE does not infer the shorthand
          // from identically-valued overflowX and overflowY and Edge just mirrors
          // the overflowX value there.
          opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
  
          // Identify a display type, preferring old show/hide data over the CSS cascade
          restoreDisplay = dataShow && dataShow.display;
          if ( restoreDisplay == null ) {
              restoreDisplay = dataPriv.get( elem, "display" );
          }
          display = jQuery.css( elem, "display" );
          if ( display === "none" ) {
              if ( restoreDisplay ) {
                  display = restoreDisplay;
              } else {
  
                  // Get nonempty value(s) by temporarily forcing visibility
                  showHide( [ elem ], true );
                  restoreDisplay = elem.style.display || restoreDisplay;
                  display = jQuery.css( elem, "display" );
                  showHide( [ elem ] );
              }
          }
  
          // Animate inline elements as inline-block
          if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
              if ( jQuery.css( elem, "float" ) === "none" ) {
  
                  // Restore the original display value at the end of pure show/hide animations
                  if ( !propTween ) {
                      anim.done( function() {
                          style.display = restoreDisplay;
                      } );
                      if ( restoreDisplay == null ) {
                          display = style.display;
                          restoreDisplay = display === "none" ? "" : display;
                      }
                  }
                  style.display = "inline-block";
              }
          }
      }
  
      if ( opts.overflow ) {
          style.overflow = "hidden";
          anim.always( function() {
              style.overflow = opts.overflow[ 0 ];
              style.overflowX = opts.overflow[ 1 ];
              style.overflowY = opts.overflow[ 2 ];
          } );
      }
  
      // Implement show/hide animations
      propTween = false;
      for ( prop in orig ) {
  
          // General show/hide setup for this element animation
          if ( !propTween ) {
              if ( dataShow ) {
                  if ( "hidden" in dataShow ) {
                      hidden = dataShow.hidden;
                  }
              } else {
                  dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
              }
  
              // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
              if ( toggle ) {
                  dataShow.hidden = !hidden;
              }
  
              // Show elements before animating them
              if ( hidden ) {
                  showHide( [ elem ], true );
              }
  
              /* eslint-disable no-loop-func */
  
              anim.done( function() {
  
              /* eslint-enable no-loop-func */
  
                  // The final step of a "hide" animation is actually hiding the element
                  if ( !hidden ) {
                      showHide( [ elem ] );
                  }
                  dataPriv.remove( elem, "fxshow" );
                  for ( prop in orig ) {
                      jQuery.style( elem, prop, orig[ prop ] );
                  }
              } );
          }
  
          // Per-property setup
          propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
          if ( !( prop in dataShow ) ) {
              dataShow[ prop ] = propTween.start;
              if ( hidden ) {
                  propTween.end = propTween.start;
                  propTween.start = 0;
              }
          }
      }
  }
  
  function propFilter( props, specialEasing ) {
      var index, name, easing, value, hooks;
  
      // camelCase, specialEasing and expand cssHook pass
      for ( index in props ) {
          name = camelCase( index );
          easing = specialEasing[ name ];
          value = props[ index ];
          if ( Array.isArray( value ) ) {
              easing = value[ 1 ];
              value = props[ index ] = value[ 0 ];
          }
  
          if ( index !== name ) {
              props[ name ] = value;
              delete props[ index ];
          }
  
          hooks = jQuery.cssHooks[ name ];
          if ( hooks && "expand" in hooks ) {
              value = hooks.expand( value );
              delete props[ name ];
  
              // Not quite $.extend, this won't overwrite existing keys.
              // Reusing 'index' because we have the correct "name"
              for ( index in value ) {
                  if ( !( index in props ) ) {
                      props[ index ] = value[ index ];
                      specialEasing[ index ] = easing;
                  }
              }
          } else {
              specialEasing[ name ] = easing;
          }
      }
  }
  
  function Animation( elem, properties, options ) {
      var result,
          stopped,
          index = 0,
          length = Animation.prefilters.length,
          deferred = jQuery.Deferred().always( function() {
  
              // Don't match elem in the :animated selector
              delete tick.elem;
          } ),
          tick = function() {
              if ( stopped ) {
                  return false;
              }
              var currentTime = fxNow || createFxNow(),
                  remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
  
                  // Support: Android 2.3 only
                  // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                  temp = remaining / animation.duration || 0,
                  percent = 1 - temp,
                  index = 0,
                  length = animation.tweens.length;
  
              for ( ; index < length; index++ ) {
                  animation.tweens[ index ].run( percent );
              }
  
              deferred.notifyWith( elem, [ animation, percent, remaining ] );
  
              // If there's more to do, yield
              if ( percent < 1 && length ) {
                  return remaining;
              }
  
              // If this was an empty animation, synthesize a final progress notification
              if ( !length ) {
                  deferred.notifyWith( elem, [ animation, 1, 0 ] );
              }
  
              // Resolve the animation and report its conclusion
              deferred.resolveWith( elem, [ animation ] );
              return false;
          },
          animation = deferred.promise( {
              elem: elem,
              props: jQuery.extend( {}, properties ),
              opts: jQuery.extend( true, {
                  specialEasing: {},
                  easing: jQuery.easing._default
              }, options ),
              originalProperties: properties,
              originalOptions: options,
              startTime: fxNow || createFxNow(),
              duration: options.duration,
              tweens: [],
              createTween: function( prop, end ) {
                  var tween = jQuery.Tween( elem, animation.opts, prop, end,
                          animation.opts.specialEasing[ prop ] || animation.opts.easing );
                  animation.tweens.push( tween );
                  return tween;
              },
              stop: function( gotoEnd ) {
                  var index = 0,
  
                      // If we are going to the end, we want to run all the tweens
                      // otherwise we skip this part
                      length = gotoEnd ? animation.tweens.length : 0;
                  if ( stopped ) {
                      return this;
                  }
                  stopped = true;
                  for ( ; index < length; index++ ) {
                      animation.tweens[ index ].run( 1 );
                  }
  
                  // Resolve when we played the last frame; otherwise, reject
                  if ( gotoEnd ) {
                      deferred.notifyWith( elem, [ animation, 1, 0 ] );
                      deferred.resolveWith( elem, [ animation, gotoEnd ] );
                  } else {
                      deferred.rejectWith( elem, [ animation, gotoEnd ] );
                  }
                  return this;
              }
          } ),
          props = animation.props;
  
      propFilter( props, animation.opts.specialEasing );
  
      for ( ; index < length; index++ ) {
          result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
          if ( result ) {
              if ( isFunction( result.stop ) ) {
                  jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
                      result.stop.bind( result );
              }
              return result;
          }
      }
  
      jQuery.map( props, createTween, animation );
  
      if ( isFunction( animation.opts.start ) ) {
          animation.opts.start.call( elem, animation );
      }
  
      // Attach callbacks from options
      animation
          .progress( animation.opts.progress )
          .done( animation.opts.done, animation.opts.complete )
          .fail( animation.opts.fail )
          .always( animation.opts.always );
  
      jQuery.fx.timer(
          jQuery.extend( tick, {
              elem: elem,
              anim: animation,
              queue: animation.opts.queue
          } )
      );
  
      return animation;
  }
  
  jQuery.Animation = jQuery.extend( Animation, {
  
      tweeners: {
          "*": [ function( prop, value ) {
              var tween = this.createTween( prop, value );
              adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
              return tween;
          } ]
      },
  
      tweener: function( props, callback ) {
          if ( isFunction( props ) ) {
              callback = props;
              props = [ "*" ];
          } else {
              props = props.match( rnothtmlwhite );
          }
  
          var prop,
              index = 0,
              length = props.length;
  
          for ( ; index < length; index++ ) {
              prop = props[ index ];
              Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
              Animation.tweeners[ prop ].unshift( callback );
          }
      },
  
      prefilters: [ defaultPrefilter ],
  
      prefilter: function( callback, prepend ) {
          if ( prepend ) {
              Animation.prefilters.unshift( callback );
          } else {
              Animation.prefilters.push( callback );
          }
      }
  } );
  
  jQuery.speed = function( speed, easing, fn ) {
      var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
          complete: fn || !fn && easing ||
              isFunction( speed ) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction( easing ) && easing
      };
  
      // Go to the end state if fx are off
      if ( jQuery.fx.off ) {
          opt.duration = 0;
  
      } else {
          if ( typeof opt.duration !== "number" ) {
              if ( opt.duration in jQuery.fx.speeds ) {
                  opt.duration = jQuery.fx.speeds[ opt.duration ];
  
              } else {
                  opt.duration = jQuery.fx.speeds._default;
              }
          }
      }
  
      // Normalize opt.queue - true/undefined/null -> "fx"
      if ( opt.queue == null || opt.queue === true ) {
          opt.queue = "fx";
      }
  
      // Queueing
      opt.old = opt.complete;
  
      opt.complete = function() {
          if ( isFunction( opt.old ) ) {
              opt.old.call( this );
          }
  
          if ( opt.queue ) {
              jQuery.dequeue( this, opt.queue );
          }
      };
  
      return opt;
  };
  
  jQuery.fn.extend( {
      fadeTo: function( speed, to, easing, callback ) {
  
          // Show any hidden elements after setting opacity to 0
          return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
  
              // Animate to the value specified
              .end().animate( { opacity: to }, speed, easing, callback );
      },
      animate: function( prop, speed, easing, callback ) {
          var empty = jQuery.isEmptyObject( prop ),
              optall = jQuery.speed( speed, easing, callback ),
              doAnimation = function() {
  
                  // Operate on a copy of prop so per-property easing won't be lost
                  var anim = Animation( this, jQuery.extend( {}, prop ), optall );
  
                  // Empty animations, or finishing resolves immediately
                  if ( empty || dataPriv.get( this, "finish" ) ) {
                      anim.stop( true );
                  }
              };
              doAnimation.finish = doAnimation;
  
          return empty || optall.queue === false ?
              this.each( doAnimation ) :
              this.queue( optall.queue, doAnimation );
      },
      stop: function( type, clearQueue, gotoEnd ) {
          var stopQueue = function( hooks ) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop( gotoEnd );
          };
  
          if ( typeof type !== "string" ) {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = undefined;
          }
          if ( clearQueue && type !== false ) {
              this.queue( type || "fx", [] );
          }
  
          return this.each( function() {
              var dequeue = true,
                  index = type != null && type + "queueHooks",
                  timers = jQuery.timers,
                  data = dataPriv.get( this );
  
              if ( index ) {
                  if ( data[ index ] && data[ index ].stop ) {
                      stopQueue( data[ index ] );
                  }
              } else {
                  for ( index in data ) {
                      if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                          stopQueue( data[ index ] );
                      }
                  }
              }
  
              for ( index = timers.length; index--; ) {
                  if ( timers[ index ].elem === this &&
                      ( type == null || timers[ index ].queue === type ) ) {
  
                      timers[ index ].anim.stop( gotoEnd );
                      dequeue = false;
                      timers.splice( index, 1 );
                  }
              }
  
              // Start the next in the queue if the last step wasn't forced.
              // Timers currently will call their complete callbacks, which
              // will dequeue but only if they were gotoEnd.
              if ( dequeue || !gotoEnd ) {
                  jQuery.dequeue( this, type );
              }
          } );
      },
      finish: function( type ) {
          if ( type !== false ) {
              type = type || "fx";
          }
          return this.each( function() {
              var index,
                  data = dataPriv.get( this ),
                  queue = data[ type + "queue" ],
                  hooks = data[ type + "queueHooks" ],
                  timers = jQuery.timers,
                  length = queue ? queue.length : 0;
  
              // Enable finishing flag on private data
              data.finish = true;
  
              // Empty the queue first
              jQuery.queue( this, type, [] );
  
              if ( hooks && hooks.stop ) {
                  hooks.stop.call( this, true );
              }
  
              // Look for any active animations, and finish them
              for ( index = timers.length; index--; ) {
                  if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                      timers[ index ].anim.stop( true );
                      timers.splice( index, 1 );
                  }
              }
  
              // Look for any animations in the old queue and finish them
              for ( index = 0; index < length; index++ ) {
                  if ( queue[ index ] && queue[ index ].finish ) {
                      queue[ index ].finish.call( this );
                  }
              }
  
              // Turn off finishing flag
              delete data.finish;
          } );
      }
  } );
  
  jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
      var cssFn = jQuery.fn[ name ];
      jQuery.fn[ name ] = function( speed, easing, callback ) {
          return speed == null || typeof speed === "boolean" ?
              cssFn.apply( this, arguments ) :
              this.animate( genFx( name, true ), speed, easing, callback );
      };
  } );
  
  // Generate shortcuts for custom animations
  jQuery.each( {
      slideDown: genFx( "show" ),
      slideUp: genFx( "hide" ),
      slideToggle: genFx( "toggle" ),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
  }, function( name, props ) {
      jQuery.fn[ name ] = function( speed, easing, callback ) {
          return this.animate( props, speed, easing, callback );
      };
  } );
  
  jQuery.timers = [];
  jQuery.fx.tick = function() {
      var timer,
          i = 0,
          timers = jQuery.timers;
  
      fxNow = Date.now();
  
      for ( ; i < timers.length; i++ ) {
          timer = timers[ i ];
  
          // Run the timer and safely remove it when done (allowing for external removal)
          if ( !timer() && timers[ i ] === timer ) {
              timers.splice( i--, 1 );
          }
      }
  
      if ( !timers.length ) {
          jQuery.fx.stop();
      }
      fxNow = undefined;
  };
  
  jQuery.fx.timer = function( timer ) {
      jQuery.timers.push( timer );
      jQuery.fx.start();
  };
  
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
      if ( inProgress ) {
          return;
      }
  
      inProgress = true;
      schedule();
  };
  
  jQuery.fx.stop = function() {
      inProgress = null;
  };
  
  jQuery.fx.speeds = {
      slow: 600,
      fast: 200,
  
      // Default speed
      _default: 400
  };
  
  
  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function( time, type ) {
      time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
      type = type || "fx";
  
      return this.queue( type, function( next, hooks ) {
          var timeout = window.setTimeout( next, time );
          hooks.stop = function() {
              window.clearTimeout( timeout );
          };
      } );
  };
  
  
  ( function() {
      var input = document.createElement( "input" ),
          select = document.createElement( "select" ),
          opt = select.appendChild( document.createElement( "option" ) );
  
      input.type = "checkbox";
  
      // Support: Android <=4.3 only
      // Default value for a checkbox should be "on"
      support.checkOn = input.value !== "";
  
      // Support: IE <=11 only
      // Must access selectedIndex to make default options select
      support.optSelected = opt.selected;
  
      // Support: IE <=11 only
      // An input loses its value after becoming a radio
      input = document.createElement( "input" );
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
  } )();
  
  
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  
  jQuery.fn.extend( {
      attr: function( name, value ) {
          return access( this, jQuery.attr, name, value, arguments.length > 1 );
      },
  
      removeAttr: function( name ) {
          return this.each( function() {
              jQuery.removeAttr( this, name );
          } );
      }
  } );
  
  jQuery.extend( {
      attr: function( elem, name, value ) {
          var ret, hooks,
              nType = elem.nodeType;
  
          // Don't get/set attributes on text, comment and attribute nodes
          if ( nType === 3 || nType === 8 || nType === 2 ) {
              return;
          }
  
          // Fallback to prop when attributes are not supported
          if ( typeof elem.getAttribute === "undefined" ) {
              return jQuery.prop( elem, name, value );
          }
  
          // Attribute hooks are determined by the lowercase version
          // Grab necessary hook if one is defined
          if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
              hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
                  ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
          }
  
          if ( value !== undefined ) {
              if ( value === null ) {
                  jQuery.removeAttr( elem, name );
                  return;
              }
  
              if ( hooks && "set" in hooks &&
                  ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                  return ret;
              }
  
              elem.setAttribute( name, value + "" );
              return value;
          }
  
          if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
              return ret;
          }
  
          ret = jQuery.find.attr( elem, name );
  
          // Non-existent attributes return null, we normalize to undefined
          return ret == null ? undefined : ret;
      },
  
      attrHooks: {
          type: {
              set: function( elem, value ) {
                  if ( !support.radioValue && value === "radio" &&
                      nodeName( elem, "input" ) ) {
                      var val = elem.value;
                      elem.setAttribute( "type", value );
                      if ( val ) {
                          elem.value = val;
                      }
                      return value;
                  }
              }
          }
      },
  
      removeAttr: function( elem, value ) {
          var name,
              i = 0,
  
              // Attribute names can contain non-HTML whitespace characters
              // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
              attrNames = value && value.match( rnothtmlwhite );
  
          if ( attrNames && elem.nodeType === 1 ) {
              while ( ( name = attrNames[ i++ ] ) ) {
                  elem.removeAttribute( name );
              }
          }
      }
  } );
  
  // Hooks for boolean attributes
  boolHook = {
      set: function( elem, value, name ) {
          if ( value === false ) {
  
              // Remove boolean attributes when set to false
              jQuery.removeAttr( elem, name );
          } else {
              elem.setAttribute( name, name );
          }
          return name;
      }
  };
  
  jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
      var getter = attrHandle[ name ] || jQuery.find.attr;
  
      attrHandle[ name ] = function( elem, name, isXML ) {
          var ret, handle,
              lowercaseName = name.toLowerCase();
  
          if ( !isXML ) {
  
              // Avoid an infinite loop by temporarily removing this function from the getter
              handle = attrHandle[ lowercaseName ];
              attrHandle[ lowercaseName ] = ret;
              ret = getter( elem, name, isXML ) != null ?
                  lowercaseName :
                  null;
              attrHandle[ lowercaseName ] = handle;
          }
          return ret;
      };
  } );
  
  
  
  
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  
  jQuery.fn.extend( {
      prop: function( name, value ) {
          return access( this, jQuery.prop, name, value, arguments.length > 1 );
      },
  
      removeProp: function( name ) {
          return this.each( function() {
              delete this[ jQuery.propFix[ name ] || name ];
          } );
      }
  } );
  
  jQuery.extend( {
      prop: function( elem, name, value ) {
          var ret, hooks,
              nType = elem.nodeType;
  
          // Don't get/set properties on text, comment and attribute nodes
          if ( nType === 3 || nType === 8 || nType === 2 ) {
              return;
          }
  
          if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
  
              // Fix name and attach hooks
              name = jQuery.propFix[ name ] || name;
              hooks = jQuery.propHooks[ name ];
          }
  
          if ( value !== undefined ) {
              if ( hooks && "set" in hooks &&
                  ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                  return ret;
              }
  
              return ( elem[ name ] = value );
          }
  
          if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
              return ret;
          }
  
          return elem[ name ];
      },
  
      propHooks: {
          tabIndex: {
              get: function( elem ) {
  
                  // Support: IE <=9 - 11 only
                  // elem.tabIndex doesn't always return the
                  // correct value when it hasn't been explicitly set
                  // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                  // Use proper attribute retrieval(#12072)
                  var tabindex = jQuery.find.attr( elem, "tabindex" );
  
                  if ( tabindex ) {
                      return parseInt( tabindex, 10 );
                  }
  
                  if (
                      rfocusable.test( elem.nodeName ) ||
                      rclickable.test( elem.nodeName ) &&
                      elem.href
                  ) {
                      return 0;
                  }
  
                  return -1;
              }
          }
      },
  
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  } );
  
  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if ( !support.optSelected ) {
      jQuery.propHooks.selected = {
          get: function( elem ) {
  
              /* eslint no-unused-expressions: "off" */
  
              var parent = elem.parentNode;
              if ( parent && parent.parentNode ) {
                  parent.parentNode.selectedIndex;
              }
              return null;
          },
          set: function( elem ) {
  
              /* eslint no-unused-expressions: "off" */
  
              var parent = elem.parentNode;
              if ( parent ) {
                  parent.selectedIndex;
  
                  if ( parent.parentNode ) {
                      parent.parentNode.selectedIndex;
                  }
              }
          }
      };
  }
  
  jQuery.each( [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
  ], function() {
      jQuery.propFix[ this.toLowerCase() ] = this;
  } );
  
  
  
  
      // Strip and collapse whitespace according to HTML spec
      // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
      function stripAndCollapse( value ) {
          var tokens = value.match( rnothtmlwhite ) || [];
          return tokens.join( " " );
      }
  
  
  function getClass( elem ) {
      return elem.getAttribute && elem.getAttribute( "class" ) || "";
  }
  
  function classesToArray( value ) {
      if ( Array.isArray( value ) ) {
          return value;
      }
      if ( typeof value === "string" ) {
          return value.match( rnothtmlwhite ) || [];
      }
      return [];
  }
  
  jQuery.fn.extend( {
      addClass: function( value ) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
              i = 0;
  
          if ( isFunction( value ) ) {
              return this.each( function( j ) {
                  jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
              } );
          }
  
          classes = classesToArray( value );
  
          if ( classes.length ) {
              while ( ( elem = this[ i++ ] ) ) {
                  curValue = getClass( elem );
                  cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
  
                  if ( cur ) {
                      j = 0;
                      while ( ( clazz = classes[ j++ ] ) ) {
                          if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                              cur += clazz + " ";
                          }
                      }
  
                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse( cur );
                      if ( curValue !== finalValue ) {
                          elem.setAttribute( "class", finalValue );
                      }
                  }
              }
          }
  
          return this;
      },
  
      removeClass: function( value ) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
              i = 0;
  
          if ( isFunction( value ) ) {
              return this.each( function( j ) {
                  jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
              } );
          }
  
          if ( !arguments.length ) {
              return this.attr( "class", "" );
          }
  
          classes = classesToArray( value );
  
          if ( classes.length ) {
              while ( ( elem = this[ i++ ] ) ) {
                  curValue = getClass( elem );
  
                  // This expression is here for better compressibility (see addClass)
                  cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
  
                  if ( cur ) {
                      j = 0;
                      while ( ( clazz = classes[ j++ ] ) ) {
  
                          // Remove *all* instances
                          while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                              cur = cur.replace( " " + clazz + " ", " " );
                          }
                      }
  
                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse( cur );
                      if ( curValue !== finalValue ) {
                          elem.setAttribute( "class", finalValue );
                      }
                  }
              }
          }
  
          return this;
      },
  
      toggleClass: function( value, stateVal ) {
          var type = typeof value,
              isValidValue = type === "string" || Array.isArray( value );
  
          if ( typeof stateVal === "boolean" && isValidValue ) {
              return stateVal ? this.addClass( value ) : this.removeClass( value );
          }
  
          if ( isFunction( value ) ) {
              return this.each( function( i ) {
                  jQuery( this ).toggleClass(
                      value.call( this, i, getClass( this ), stateVal ),
                      stateVal
                  );
              } );
          }
  
          return this.each( function() {
              var className, i, self, classNames;
  
              if ( isValidValue ) {
  
                  // Toggle individual class names
                  i = 0;
                  self = jQuery( this );
                  classNames = classesToArray( value );
  
                  while ( ( className = classNames[ i++ ] ) ) {
  
                      // Check each className given, space separated list
                      if ( self.hasClass( className ) ) {
                          self.removeClass( className );
                      } else {
                          self.addClass( className );
                      }
                  }
  
              // Toggle whole class name
              } else if ( value === undefined || type === "boolean" ) {
                  className = getClass( this );
                  if ( className ) {
  
                      // Store className if set
                      dataPriv.set( this, "__className__", className );
                  }
  
                  // If the element has a class name or if we're passed `false`,
                  // then remove the whole classname (if there was one, the above saved it).
                  // Otherwise bring back whatever was previously saved (if anything),
                  // falling back to the empty string if nothing was stored.
                  if ( this.setAttribute ) {
                      this.setAttribute( "class",
                          className || value === false ?
                          "" :
                          dataPriv.get( this, "__className__" ) || ""
                      );
                  }
              }
          } );
      },
  
      hasClass: function( selector ) {
          var className, elem,
              i = 0;
  
          className = " " + selector + " ";
          while ( ( elem = this[ i++ ] ) ) {
              if ( elem.nodeType === 1 &&
                  ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
                      return true;
              }
          }
  
          return false;
      }
  } );
  
  
  
  
  var rreturn = /\r/g;
  
  jQuery.fn.extend( {
      val: function( value ) {
          var hooks, ret, valueIsFunction,
              elem = this[ 0 ];
  
          if ( !arguments.length ) {
              if ( elem ) {
                  hooks = jQuery.valHooks[ elem.type ] ||
                      jQuery.valHooks[ elem.nodeName.toLowerCase() ];
  
                  if ( hooks &&
                      "get" in hooks &&
                      ( ret = hooks.get( elem, "value" ) ) !== undefined
                  ) {
                      return ret;
                  }
  
                  ret = elem.value;
  
                  // Handle most common string cases
                  if ( typeof ret === "string" ) {
                      return ret.replace( rreturn, "" );
                  }
  
                  // Handle cases where value is null/undef or number
                  return ret == null ? "" : ret;
              }
  
              return;
          }
  
          valueIsFunction = isFunction( value );
  
          return this.each( function( i ) {
              var val;
  
              if ( this.nodeType !== 1 ) {
                  return;
              }
  
              if ( valueIsFunction ) {
                  val = value.call( this, i, jQuery( this ).val() );
              } else {
                  val = value;
              }
  
              // Treat null/undefined as ""; convert numbers to string
              if ( val == null ) {
                  val = "";
  
              } else if ( typeof val === "number" ) {
                  val += "";
  
              } else if ( Array.isArray( val ) ) {
                  val = jQuery.map( val, function( value ) {
                      return value == null ? "" : value + "";
                  } );
              }
  
              hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
  
              // If set returns undefined, fall back to normal setting
              if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
                  this.value = val;
              }
          } );
      }
  } );
  
  jQuery.extend( {
      valHooks: {
          option: {
              get: function( elem ) {
  
                  var val = jQuery.find.attr( elem, "value" );
                  return val != null ?
                      val :
  
                      // Support: IE <=10 - 11 only
                      // option.text throws exceptions (#14686, #14858)
                      // Strip and collapse whitespace
                      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                      stripAndCollapse( jQuery.text( elem ) );
              }
          },
          select: {
              get: function( elem ) {
                  var value, option, i,
                      options = elem.options,
                      index = elem.selectedIndex,
                      one = elem.type === "select-one",
                      values = one ? null : [],
                      max = one ? index + 1 : options.length;
  
                  if ( index < 0 ) {
                      i = max;
  
                  } else {
                      i = one ? index : 0;
                  }
  
                  // Loop through all the selected options
                  for ( ; i < max; i++ ) {
                      option = options[ i ];
  
                      // Support: IE <=9 only
                      // IE8-9 doesn't update selected after form reset (#2551)
                      if ( ( option.selected || i === index ) &&
  
                              // Don't return options that are disabled or in a disabled optgroup
                              !option.disabled &&
                              ( !option.parentNode.disabled ||
                                  !nodeName( option.parentNode, "optgroup" ) ) ) {
  
                          // Get the specific value for the option
                          value = jQuery( option ).val();
  
                          // We don't need an array for one selects
                          if ( one ) {
                              return value;
                          }
  
                          // Multi-Selects return an array
                          values.push( value );
                      }
                  }
  
                  return values;
              },
  
              set: function( elem, value ) {
                  var optionSet, option,
                      options = elem.options,
                      values = jQuery.makeArray( value ),
                      i = options.length;
  
                  while ( i-- ) {
                      option = options[ i ];
  
                      /* eslint-disable no-cond-assign */
  
                      if ( option.selected =
                          jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
                      ) {
                          optionSet = true;
                      }
  
                      /* eslint-enable no-cond-assign */
                  }
  
                  // Force browsers to behave consistently when non-matching value is set
                  if ( !optionSet ) {
                      elem.selectedIndex = -1;
                  }
                  return values;
              }
          }
      }
  } );
  
  // Radios and checkboxes getter/setter
  jQuery.each( [ "radio", "checkbox" ], function() {
      jQuery.valHooks[ this ] = {
          set: function( elem, value ) {
              if ( Array.isArray( value ) ) {
                  return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
              }
          }
      };
      if ( !support.checkOn ) {
          jQuery.valHooks[ this ].get = function( elem ) {
              return elem.getAttribute( "value" ) === null ? "on" : elem.value;
          };
      }
  } );
  
  
  
  
  // Return jQuery for attributes-only inclusion
  
  
  support.focusin = "onfocusin" in window;
  
  
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function( e ) {
          e.stopPropagation();
      };
  
  jQuery.extend( jQuery.event, {
  
      trigger: function( event, data, elem, onlyHandlers ) {
  
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
              eventPath = [ elem || document ],
              type = hasOwn.call( event, "type" ) ? event.type : event,
              namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
  
          cur = lastElement = tmp = elem = elem || document;
  
          // Don't do events on text and comment nodes
          if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
              return;
          }
  
          // focus/blur morphs to focusin/out; ensure we're not firing them right now
          if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
              return;
          }
  
          if ( type.indexOf( "." ) > -1 ) {
  
              // Namespaced trigger; create a regexp to match event type in handle()
              namespaces = type.split( "." );
              type = namespaces.shift();
              namespaces.sort();
          }
          ontype = type.indexOf( ":" ) < 0 && "on" + type;
  
          // Caller can pass in a jQuery.Event object, Object, or just an event type string
          event = event[ jQuery.expando ] ?
              event :
              new jQuery.Event( type, typeof event === "object" && event );
  
          // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join( "." );
          event.rnamespace = event.namespace ?
              new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
              null;
  
          // Clean up the event in case it is being reused
          event.result = undefined;
          if ( !event.target ) {
              event.target = elem;
          }
  
          // Clone any incoming data and prepend the event, creating the handler arg list
          data = data == null ?
              [ event ] :
              jQuery.makeArray( data, [ event ] );
  
          // Allow special events to draw outside the lines
          special = jQuery.event.special[ type ] || {};
          if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
              return;
          }
  
          // Determine event propagation path in advance, per W3C events spec (#9951)
          // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
          if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {
  
              bubbleType = special.delegateType || type;
              if ( !rfocusMorph.test( bubbleType + type ) ) {
                  cur = cur.parentNode;
              }
              for ( ; cur; cur = cur.parentNode ) {
                  eventPath.push( cur );
                  tmp = cur;
              }
  
              // Only add window if we got to document (e.g., not plain obj or detached DOM)
              if ( tmp === ( elem.ownerDocument || document ) ) {
                  eventPath.push( tmp.defaultView || tmp.parentWindow || window );
              }
          }
  
          // Fire handlers on the event path
          i = 0;
          while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
              lastElement = cur;
              event.type = i > 1 ?
                  bubbleType :
                  special.bindType || type;
  
              // jQuery handler
              handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
                  dataPriv.get( cur, "handle" );
              if ( handle ) {
                  handle.apply( cur, data );
              }
  
              // Native handler
              handle = ontype && cur[ ontype ];
              if ( handle && handle.apply && acceptData( cur ) ) {
                  event.result = handle.apply( cur, data );
                  if ( event.result === false ) {
                      event.preventDefault();
                  }
              }
          }
          event.type = type;
  
          // If nobody prevented the default action, do it now
          if ( !onlyHandlers && !event.isDefaultPrevented() ) {
  
              if ( ( !special._default ||
                  special._default.apply( eventPath.pop(), data ) === false ) &&
                  acceptData( elem ) ) {
  
                  // Call a native DOM method on the target with the same name as the event.
                  // Don't do default actions on window, that's where global variables be (#6170)
                  if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {
  
                      // Don't re-trigger an onFOO event when we call its FOO() method
                      tmp = elem[ ontype ];
  
                      if ( tmp ) {
                          elem[ ontype ] = null;
                      }
  
                      // Prevent re-triggering of the same event, since we already bubbled it above
                      jQuery.event.triggered = type;
  
                      if ( event.isPropagationStopped() ) {
                          lastElement.addEventListener( type, stopPropagationCallback );
                      }
  
                      elem[ type ]();
  
                      if ( event.isPropagationStopped() ) {
                          lastElement.removeEventListener( type, stopPropagationCallback );
                      }
  
                      jQuery.event.triggered = undefined;
  
                      if ( tmp ) {
                          elem[ ontype ] = tmp;
                      }
                  }
              }
          }
  
          return event.result;
      },
  
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function( type, elem, event ) {
          var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                  type: type,
                  isSimulated: true
              }
          );
  
          jQuery.event.trigger( e, null, elem );
      }
  
  } );
  
  jQuery.fn.extend( {
  
      trigger: function( type, data ) {
          return this.each( function() {
              jQuery.event.trigger( type, data, this );
          } );
      },
      triggerHandler: function( type, data ) {
          var elem = this[ 0 ];
          if ( elem ) {
              return jQuery.event.trigger( type, data, elem, true );
          }
      }
  } );
  
  
  // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
  if ( !support.focusin ) {
      jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
  
          // Attach a single capturing handler on the document while someone wants focusin/focusout
          var handler = function( event ) {
              jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
          };
  
          jQuery.event.special[ fix ] = {
              setup: function() {
                  var doc = this.ownerDocument || this,
                      attaches = dataPriv.access( doc, fix );
  
                  if ( !attaches ) {
                      doc.addEventListener( orig, handler, true );
                  }
                  dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
              },
              teardown: function() {
                  var doc = this.ownerDocument || this,
                      attaches = dataPriv.access( doc, fix ) - 1;
  
                  if ( !attaches ) {
                      doc.removeEventListener( orig, handler, true );
                      dataPriv.remove( doc, fix );
  
                  } else {
                      dataPriv.access( doc, fix, attaches );
                  }
              }
          };
      } );
  }
  var location = window.location;
  
  var nonce = Date.now();
  
  var rquery = ( /\?/ );
  
  
  
  // Cross-browser xml parsing
  jQuery.parseXML = function( data ) {
      var xml;
      if ( !data || typeof data !== "string" ) {
          return null;
      }
  
      // Support: IE 9 - 11 only
      // IE throws on parseFromString with invalid input.
      try {
          xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
      } catch ( e ) {
          xml = undefined;
      }
  
      if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
          jQuery.error( "Invalid XML: " + data );
      }
      return xml;
  };
  
  
  var
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  
  function buildParams( prefix, obj, traditional, add ) {
      var name;
  
      if ( Array.isArray( obj ) ) {
  
          // Serialize array item.
          jQuery.each( obj, function( i, v ) {
              if ( traditional || rbracket.test( prefix ) ) {
  
                  // Treat each array item as a scalar.
                  add( prefix, v );
  
              } else {
  
                  // Item is non-scalar (array or object), encode its numeric index.
                  buildParams(
                      prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                      v,
                      traditional,
                      add
                  );
              }
          } );
  
      } else if ( !traditional && toType( obj ) === "object" ) {
  
          // Serialize object item.
          for ( name in obj ) {
              buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
          }
  
      } else {
  
          // Serialize scalar item.
          add( prefix, obj );
      }
  }
  
  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function( a, traditional ) {
      var prefix,
          s = [],
          add = function( key, valueOrFunction ) {
  
              // If value is a function, invoke it and use its return value
              var value = isFunction( valueOrFunction ) ?
                  valueOrFunction() :
                  valueOrFunction;
  
              s[ s.length ] = encodeURIComponent( key ) + "=" +
                  encodeURIComponent( value == null ? "" : value );
          };
  
      // If an array was passed in, assume that it is an array of form elements.
      if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
  
          // Serialize the form elements
          jQuery.each( a, function() {
              add( this.name, this.value );
          } );
  
      } else {
  
          // If traditional, encode the "old" way (the way 1.3.2 or older
          // did it), otherwise encode params recursively.
          for ( prefix in a ) {
              buildParams( prefix, a[ prefix ], traditional, add );
          }
      }
  
      // Return the resulting serialization
      return s.join( "&" );
  };
  
  jQuery.fn.extend( {
      serialize: function() {
          return jQuery.param( this.serializeArray() );
      },
      serializeArray: function() {
          return this.map( function() {
  
              // Can add propHook for "elements" to filter or add form elements
              var elements = jQuery.prop( this, "elements" );
              return elements ? jQuery.makeArray( elements ) : this;
          } )
          .filter( function() {
              var type = this.type;
  
              // Use .is( ":disabled" ) so that fieldset[disabled] works
              return this.name && !jQuery( this ).is( ":disabled" ) &&
                  rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                  ( this.checked || !rcheckableType.test( type ) );
          } )
          .map( function( i, elem ) {
              var val = jQuery( this ).val();
  
              if ( val == null ) {
                  return null;
              }
  
              if ( Array.isArray( val ) ) {
                  return jQuery.map( val, function( val ) {
                      return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                  } );
              }
  
              return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          } ).get();
      }
  } );
  
  
  var
      r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
  
      // #7653, #8125, #8152: local protocol detection
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
  
      /* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
      prefilters = {},
  
      /* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
      transports = {},
  
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
      allTypes = "*/".concat( "*" ),
  
      // Anchor tag for parsing the document origin
      originAnchor = document.createElement( "a" );
      originAnchor.href = location.href;
  
  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports( structure ) {
  
      // dataTypeExpression is optional and defaults to "*"
      return function( dataTypeExpression, func ) {
  
          if ( typeof dataTypeExpression !== "string" ) {
              func = dataTypeExpression;
              dataTypeExpression = "*";
          }
  
          var dataType,
              i = 0,
              dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
  
          if ( isFunction( func ) ) {
  
              // For each dataType in the dataTypeExpression
              while ( ( dataType = dataTypes[ i++ ] ) ) {
  
                  // Prepend if requested
                  if ( dataType[ 0 ] === "+" ) {
                      dataType = dataType.slice( 1 ) || "*";
                      ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
  
                  // Otherwise append
                  } else {
                      ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
                  }
              }
          }
      };
  }
  
  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
  
      var inspected = {},
          seekingTransport = ( structure === transports );
  
      function inspect( dataType ) {
          var selected;
          inspected[ dataType ] = true;
          jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
              var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
              if ( typeof dataTypeOrTransport === "string" &&
                  !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
  
                  options.dataTypes.unshift( dataTypeOrTransport );
                  inspect( dataTypeOrTransport );
                  return false;
              } else if ( seekingTransport ) {
                  return !( selected = dataTypeOrTransport );
              }
          } );
          return selected;
      }
  
      return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
  }
  
  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
  function ajaxExtend( target, src ) {
      var key, deep,
          flatOptions = jQuery.ajaxSettings.flatOptions || {};
  
      for ( key in src ) {
          if ( src[ key ] !== undefined ) {
              ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
          }
      }
      if ( deep ) {
          jQuery.extend( true, target, deep );
      }
  
      return target;
  }
  
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
  function ajaxHandleResponses( s, jqXHR, responses ) {
  
      var ct, type, finalDataType, firstDataType,
          contents = s.contents,
          dataTypes = s.dataTypes;
  
      // Remove auto dataType and get content-type in the process
      while ( dataTypes[ 0 ] === "*" ) {
          dataTypes.shift();
          if ( ct === undefined ) {
              ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
          }
      }
  
      // Check if we're dealing with a known content-type
      if ( ct ) {
          for ( type in contents ) {
              if ( contents[ type ] && contents[ type ].test( ct ) ) {
                  dataTypes.unshift( type );
                  break;
              }
          }
      }
  
      // Check to see if we have a response for the expected dataType
      if ( dataTypes[ 0 ] in responses ) {
          finalDataType = dataTypes[ 0 ];
      } else {
  
          // Try convertible dataTypes
          for ( type in responses ) {
              if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
                  finalDataType = type;
                  break;
              }
              if ( !firstDataType ) {
                  firstDataType = type;
              }
          }
  
          // Or just use first one
          finalDataType = finalDataType || firstDataType;
      }
  
      // If we found a dataType
      // We add the dataType to the list if needed
      // and return the corresponding response
      if ( finalDataType ) {
          if ( finalDataType !== dataTypes[ 0 ] ) {
              dataTypes.unshift( finalDataType );
          }
          return responses[ finalDataType ];
      }
  }
  
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
  function ajaxConvert( s, response, jqXHR, isSuccess ) {
      var conv2, current, conv, tmp, prev,
          converters = {},
  
          // Work with a copy of dataTypes in case we need to modify it for conversion
          dataTypes = s.dataTypes.slice();
  
      // Create converters map with lowercased keys
      if ( dataTypes[ 1 ] ) {
          for ( conv in s.converters ) {
              converters[ conv.toLowerCase() ] = s.converters[ conv ];
          }
      }
  
      current = dataTypes.shift();
  
      // Convert to each sequential dataType
      while ( current ) {
  
          if ( s.responseFields[ current ] ) {
              jqXHR[ s.responseFields[ current ] ] = response;
          }
  
          // Apply the dataFilter if provided
          if ( !prev && isSuccess && s.dataFilter ) {
              response = s.dataFilter( response, s.dataType );
          }
  
          prev = current;
          current = dataTypes.shift();
  
          if ( current ) {
  
              // There's only work to do if current dataType is non-auto
              if ( current === "*" ) {
  
                  current = prev;
  
              // Convert response if prev dataType is non-auto and differs from current
              } else if ( prev !== "*" && prev !== current ) {
  
                  // Seek a direct converter
                  conv = converters[ prev + " " + current ] || converters[ "* " + current ];
  
                  // If none found, seek a pair
                  if ( !conv ) {
                      for ( conv2 in converters ) {
  
                          // If conv2 outputs current
                          tmp = conv2.split( " " );
                          if ( tmp[ 1 ] === current ) {
  
                              // If prev can be converted to accepted input
                              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                  converters[ "* " + tmp[ 0 ] ];
                              if ( conv ) {
  
                                  // Condense equivalence converters
                                  if ( conv === true ) {
                                      conv = converters[ conv2 ];
  
                                  // Otherwise, insert the intermediate dataType
                                  } else if ( converters[ conv2 ] !== true ) {
                                      current = tmp[ 0 ];
                                      dataTypes.unshift( tmp[ 1 ] );
                                  }
                                  break;
                              }
                          }
                      }
                  }
  
                  // Apply converter (if not an equivalence)
                  if ( conv !== true ) {
  
                      // Unless errors are allowed to bubble, catch and return them
                      if ( conv && s.throws ) {
                          response = conv( response );
                      } else {
                          try {
                              response = conv( response );
                          } catch ( e ) {
                              return {
                                  state: "parsererror",
                                  error: conv ? e : "No conversion from " + prev + " to " + current
                              };
                          }
                      }
                  }
              }
          }
      }
  
      return { state: "success", data: response };
  }
  
  jQuery.extend( {
  
      // Counter for holding the number of active queries
      active: 0,
  
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
  
      ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test( location.protocol ),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
  
          accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
  
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
  
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
  
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
  
              // Convert anything to text
              "* text": String,
  
              // Text to html (true = no transformation)
              "text html": true,
  
              // Evaluate text as a json expression
              "text json": JSON.parse,
  
              // Parse text as xml
              "text xml": jQuery.parseXML
          },
  
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
              url: true,
              context: true
          }
      },
  
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function( target, settings ) {
          return settings ?
  
              // Building a settings object
              ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
  
              // Extending ajaxSettings
              ajaxExtend( jQuery.ajaxSettings, target );
      },
  
      ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
      ajaxTransport: addToPrefiltersOrTransports( transports ),
  
      // Main method
      ajax: function( url, options ) {
  
          // If url is an object, simulate pre-1.5 signature
          if ( typeof url === "object" ) {
              options = url;
              url = undefined;
          }
  
          // Force options to be an object
          options = options || {};
  
          var transport,
  
              // URL without anti-cache param
              cacheURL,
  
              // Response headers
              responseHeadersString,
              responseHeaders,
  
              // timeout handle
              timeoutTimer,
  
              // Url cleanup var
              urlAnchor,
  
              // Request state (becomes false upon send and true upon completion)
              completed,
  
              // To know if global events are to be dispatched
              fireGlobals,
  
              // Loop variable
              i,
  
              // uncached part of the url
              uncached,
  
              // Create the final options object
              s = jQuery.ajaxSetup( {}, options ),
  
              // Callbacks context
              callbackContext = s.context || s,
  
              // Context for global events is callbackContext if it is a DOM node or jQuery collection
              globalEventContext = s.context &&
                  ( callbackContext.nodeType || callbackContext.jquery ) ?
                      jQuery( callbackContext ) :
                      jQuery.event,
  
              // Deferreds
              deferred = jQuery.Deferred(),
              completeDeferred = jQuery.Callbacks( "once memory" ),
  
              // Status-dependent callbacks
              statusCode = s.statusCode || {},
  
              // Headers (they are sent all at once)
              requestHeaders = {},
              requestHeadersNames = {},
  
              // Default abort message
              strAbort = "canceled",
  
              // Fake xhr
              jqXHR = {
                  readyState: 0,
  
                  // Builds headers hashtable if needed
                  getResponseHeader: function( key ) {
                      var match;
                      if ( completed ) {
                          if ( !responseHeaders ) {
                              responseHeaders = {};
                              while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                  responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
                              }
                          }
                          match = responseHeaders[ key.toLowerCase() ];
                      }
                      return match == null ? null : match;
                  },
  
                  // Raw string
                  getAllResponseHeaders: function() {
                      return completed ? responseHeadersString : null;
                  },
  
                  // Caches the header
                  setRequestHeader: function( name, value ) {
                      if ( completed == null ) {
                          name = requestHeadersNames[ name.toLowerCase() ] =
                              requestHeadersNames[ name.toLowerCase() ] || name;
                          requestHeaders[ name ] = value;
                      }
                      return this;
                  },
  
                  // Overrides response content-type header
                  overrideMimeType: function( type ) {
                      if ( completed == null ) {
                          s.mimeType = type;
                      }
                      return this;
                  },
  
                  // Status-dependent callbacks
                  statusCode: function( map ) {
                      var code;
                      if ( map ) {
                          if ( completed ) {
  
                              // Execute the appropriate callbacks
                              jqXHR.always( map[ jqXHR.status ] );
                          } else {
  
                              // Lazy-add the new callbacks in a way that preserves old ones
                              for ( code in map ) {
                                  statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                              }
                          }
                      }
                      return this;
                  },
  
                  // Cancel the request
                  abort: function( statusText ) {
                      var finalText = statusText || strAbort;
                      if ( transport ) {
                          transport.abort( finalText );
                      }
                      done( 0, finalText );
                      return this;
                  }
              };
  
          // Attach deferreds
          deferred.promise( jqXHR );
  
          // Add protocol if not provided (prefilters might expect it)
          // Handle falsy url in the settings object (#10093: consistency with old signature)
          // We also use the url parameter if available
          s.url = ( ( url || s.url || location.href ) + "" )
              .replace( rprotocol, location.protocol + "//" );
  
          // Alias method option to type as per ticket #12004
          s.type = options.method || options.type || s.method || s.type;
  
          // Extract dataTypes list
          s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
  
          // A cross-domain request is in order when the origin doesn't match the current origin.
          if ( s.crossDomain == null ) {
              urlAnchor = document.createElement( "a" );
  
              // Support: IE <=8 - 11, Edge 12 - 15
              // IE throws exception on accessing the href property if url is malformed,
              // e.g. http://example.com:80x/
              try {
                  urlAnchor.href = s.url;
  
                  // Support: IE <=8 - 11 only
                  // Anchor's host property isn't correctly set when s.url is relative
                  urlAnchor.href = urlAnchor.href;
                  s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                      urlAnchor.protocol + "//" + urlAnchor.host;
              } catch ( e ) {
  
                  // If there is an error parsing the URL, assume it is crossDomain,
                  // it can be rejected by the transport if it is invalid
                  s.crossDomain = true;
              }
          }
  
          // Convert data if not already a string
          if ( s.data && s.processData && typeof s.data !== "string" ) {
              s.data = jQuery.param( s.data, s.traditional );
          }
  
          // Apply prefilters
          inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
  
          // If request was aborted inside a prefilter, stop there
          if ( completed ) {
              return jqXHR;
          }
  
          // We can fire global events as of now if asked to
          // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
          fireGlobals = jQuery.event && s.global;
  
          // Watch for a new set of requests
          if ( fireGlobals && jQuery.active++ === 0 ) {
              jQuery.event.trigger( "ajaxStart" );
          }
  
          // Uppercase the type
          s.type = s.type.toUpperCase();
  
          // Determine if request has content
          s.hasContent = !rnoContent.test( s.type );
  
          // Save the URL in case we're toying with the If-Modified-Since
          // and/or If-None-Match header later on
          // Remove hash to simplify url manipulation
          cacheURL = s.url.replace( rhash, "" );
  
          // More options handling for requests with no content
          if ( !s.hasContent ) {
  
              // Remember the hash so we can put it back
              uncached = s.url.slice( cacheURL.length );
  
              // If data is available and should be processed, append data to url
              if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
                  cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
  
                  // #9682: remove data so that it's not used in an eventual retry
                  delete s.data;
              }
  
              // Add or update anti-cache param if needed
              if ( s.cache === false ) {
                  cacheURL = cacheURL.replace( rantiCache, "$1" );
                  uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
              }
  
              // Put hash and anti-cache on the URL that will be requested (gh-1732)
              s.url = cacheURL + uncached;
  
          // Change '%20' to '+' if this is encoded form body content (gh-2658)
          } else if ( s.data && s.processData &&
              ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
              s.data = s.data.replace( r20, "+" );
          }
  
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if ( s.ifModified ) {
              if ( jQuery.lastModified[ cacheURL ] ) {
                  jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
              }
              if ( jQuery.etag[ cacheURL ] ) {
                  jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
              }
          }
  
          // Set the correct header, if data is being sent
          if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
              jqXHR.setRequestHeader( "Content-Type", s.contentType );
          }
  
          // Set the Accepts header for the server, depending on the dataType
          jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
                  s.accepts[ s.dataTypes[ 0 ] ] +
                      ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                  s.accepts[ "*" ]
          );
  
          // Check for headers option
          for ( i in s.headers ) {
              jqXHR.setRequestHeader( i, s.headers[ i ] );
          }
  
          // Allow custom headers/mimetypes and early abort
          if ( s.beforeSend &&
              ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
  
              // Abort if not done already and return
              return jqXHR.abort();
          }
  
          // Aborting is no longer a cancellation
          strAbort = "abort";
  
          // Install callbacks on deferreds
          completeDeferred.add( s.complete );
          jqXHR.done( s.success );
          jqXHR.fail( s.error );
  
          // Get transport
          transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
  
          // If no transport, we auto-abort
          if ( !transport ) {
              done( -1, "No Transport" );
          } else {
              jqXHR.readyState = 1;
  
              // Send global event
              if ( fireGlobals ) {
                  globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
              }
  
              // If request was aborted inside ajaxSend, stop there
              if ( completed ) {
                  return jqXHR;
              }
  
              // Timeout
              if ( s.async && s.timeout > 0 ) {
                  timeoutTimer = window.setTimeout( function() {
                      jqXHR.abort( "timeout" );
                  }, s.timeout );
              }
  
              try {
                  completed = false;
                  transport.send( requestHeaders, done );
              } catch ( e ) {
  
                  // Rethrow post-completion exceptions
                  if ( completed ) {
                      throw e;
                  }
  
                  // Propagate others as results
                  done( -1, e );
              }
          }
  
          // Callback for when everything is done
          function done( status, nativeStatusText, responses, headers ) {
              var isSuccess, success, error, response, modified,
                  statusText = nativeStatusText;
  
              // Ignore repeat invocations
              if ( completed ) {
                  return;
              }
  
              completed = true;
  
              // Clear timeout if it exists
              if ( timeoutTimer ) {
                  window.clearTimeout( timeoutTimer );
              }
  
              // Dereference transport for early garbage collection
              // (no matter how long the jqXHR object will be used)
              transport = undefined;
  
              // Cache response headers
              responseHeadersString = headers || "";
  
              // Set readyState
              jqXHR.readyState = status > 0 ? 4 : 0;
  
              // Determine if successful
              isSuccess = status >= 200 && status < 300 || status === 304;
  
              // Get response data
              if ( responses ) {
                  response = ajaxHandleResponses( s, jqXHR, responses );
              }
  
              // Convert no matter what (that way responseXXX fields are always set)
              response = ajaxConvert( s, response, jqXHR, isSuccess );
  
              // If successful, handle type chaining
              if ( isSuccess ) {
  
                  // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                  if ( s.ifModified ) {
                      modified = jqXHR.getResponseHeader( "Last-Modified" );
                      if ( modified ) {
                          jQuery.lastModified[ cacheURL ] = modified;
                      }
                      modified = jqXHR.getResponseHeader( "etag" );
                      if ( modified ) {
                          jQuery.etag[ cacheURL ] = modified;
                      }
                  }
  
                  // if no content
                  if ( status === 204 || s.type === "HEAD" ) {
                      statusText = "nocontent";
  
                  // if not modified
                  } else if ( status === 304 ) {
                      statusText = "notmodified";
  
                  // If we have data, let's convert it
                  } else {
                      statusText = response.state;
                      success = response.data;
                      error = response.error;
                      isSuccess = !error;
                  }
              } else {
  
                  // Extract error from statusText and normalize for non-aborts
                  error = statusText;
                  if ( status || !statusText ) {
                      statusText = "error";
                      if ( status < 0 ) {
                          status = 0;
                      }
                  }
              }
  
              // Set data for the fake xhr object
              jqXHR.status = status;
              jqXHR.statusText = ( nativeStatusText || statusText ) + "";
  
              // Success/Error
              if ( isSuccess ) {
                  deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
              } else {
                  deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
              }
  
              // Status-dependent callbacks
              jqXHR.statusCode( statusCode );
              statusCode = undefined;
  
              if ( fireGlobals ) {
                  globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                      [ jqXHR, s, isSuccess ? success : error ] );
              }
  
              // Complete
              completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
  
              if ( fireGlobals ) {
                  globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
  
                  // Handle the global AJAX counter
                  if ( !( --jQuery.active ) ) {
                      jQuery.event.trigger( "ajaxStop" );
                  }
              }
          }
  
          return jqXHR;
      },
  
      getJSON: function( url, data, callback ) {
          return jQuery.get( url, data, callback, "json" );
      },
  
      getScript: function( url, callback ) {
          return jQuery.get( url, undefined, callback, "script" );
      }
  } );
  
  jQuery.each( [ "get", "post" ], function( i, method ) {
      jQuery[ method ] = function( url, data, callback, type ) {
  
          // Shift arguments if data argument was omitted
          if ( isFunction( data ) ) {
              type = type || callback;
              callback = data;
              data = undefined;
          }
  
          // The url can be an options object (which then must have .url)
          return jQuery.ajax( jQuery.extend( {
              url: url,
              type: method,
              dataType: type,
              data: data,
              success: callback
          }, jQuery.isPlainObject( url ) && url ) );
      };
  } );
  
  
  jQuery._evalUrl = function( url ) {
      return jQuery.ajax( {
          url: url,
  
          // Make this explicit, since user can override this through ajaxSetup (#11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          "throws": true
      } );
  };
  
  
  jQuery.fn.extend( {
      wrapAll: function( html ) {
          var wrap;
  
          if ( this[ 0 ] ) {
              if ( isFunction( html ) ) {
                  html = html.call( this[ 0 ] );
              }
  
              // The elements to wrap the target around
              wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
  
              if ( this[ 0 ].parentNode ) {
                  wrap.insertBefore( this[ 0 ] );
              }
  
              wrap.map( function() {
                  var elem = this;
  
                  while ( elem.firstElementChild ) {
                      elem = elem.firstElementChild;
                  }
  
                  return elem;
              } ).append( this );
          }
  
          return this;
      },
  
      wrapInner: function( html ) {
          if ( isFunction( html ) ) {
              return this.each( function( i ) {
                  jQuery( this ).wrapInner( html.call( this, i ) );
              } );
          }
  
          return this.each( function() {
              var self = jQuery( this ),
                  contents = self.contents();
  
              if ( contents.length ) {
                  contents.wrapAll( html );
  
              } else {
                  self.append( html );
              }
          } );
      },
  
      wrap: function( html ) {
          var htmlIsFunction = isFunction( html );
  
          return this.each( function( i ) {
              jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
          } );
      },
  
      unwrap: function( selector ) {
          this.parent( selector ).not( "body" ).each( function() {
              jQuery( this ).replaceWith( this.childNodes );
          } );
          return this;
      }
  } );
  
  
  jQuery.expr.pseudos.hidden = function( elem ) {
      return !jQuery.expr.pseudos.visible( elem );
  };
  jQuery.expr.pseudos.visible = function( elem ) {
      return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
  };
  
  
  
  
  jQuery.ajaxSettings.xhr = function() {
      try {
          return new window.XMLHttpRequest();
      } catch ( e ) {}
  };
  
  var xhrSuccessStatus = {
  
          // File protocol always yields status code 0, assume 200
          0: 200,
  
          // Support: IE <=9 only
          // #1450: sometimes IE returns 1223 when it should be 204
          1223: 204
      },
      xhrSupported = jQuery.ajaxSettings.xhr();
  
  support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
  support.ajax = xhrSupported = !!xhrSupported;
  
  jQuery.ajaxTransport( function( options ) {
      var callback, errorCallback;
  
      // Cross domain only allowed if supported through XMLHttpRequest
      if ( support.cors || xhrSupported && !options.crossDomain ) {
          return {
              send: function( headers, complete ) {
                  var i,
                      xhr = options.xhr();
  
                  xhr.open(
                      options.type,
                      options.url,
                      options.async,
                      options.username,
                      options.password
                  );
  
                  // Apply custom fields if provided
                  if ( options.xhrFields ) {
                      for ( i in options.xhrFields ) {
                          xhr[ i ] = options.xhrFields[ i ];
                      }
                  }
  
                  // Override mime type if needed
                  if ( options.mimeType && xhr.overrideMimeType ) {
                      xhr.overrideMimeType( options.mimeType );
                  }
  
                  // X-Requested-With header
                  // For cross-domain requests, seeing as conditions for a preflight are
                  // akin to a jigsaw puzzle, we simply never set it to be sure.
                  // (it can always be set on a per-request basis or even using ajaxSetup)
                  // For same-domain requests, won't change header if already provided.
                  if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
                      headers[ "X-Requested-With" ] = "XMLHttpRequest";
                  }
  
                  // Set headers
                  for ( i in headers ) {
                      xhr.setRequestHeader( i, headers[ i ] );
                  }
  
                  // Callback
                  callback = function( type ) {
                      return function() {
                          if ( callback ) {
                              callback = errorCallback = xhr.onload =
                                  xhr.onerror = xhr.onabort = xhr.ontimeout =
                                      xhr.onreadystatechange = null;
  
                              if ( type === "abort" ) {
                                  xhr.abort();
                              } else if ( type === "error" ) {
  
                                  // Support: IE <=9 only
                                  // On a manual native abort, IE9 throws
                                  // errors on any property access that is not readyState
                                  if ( typeof xhr.status !== "number" ) {
                                      complete( 0, "error" );
                                  } else {
                                      complete(
  
                                          // File: protocol always yields status 0; see #8605, #14207
                                          xhr.status,
                                          xhr.statusText
                                      );
                                  }
                              } else {
                                  complete(
                                      xhrSuccessStatus[ xhr.status ] || xhr.status,
                                      xhr.statusText,
  
                                      // Support: IE <=9 only
                                      // IE9 has no XHR2 but throws on binary (trac-11426)
                                      // For XHR2 non-text, let the caller handle it (gh-2498)
                                      ( xhr.responseType || "text" ) !== "text"  ||
                                      typeof xhr.responseText !== "string" ?
                                          { binary: xhr.response } :
                                          { text: xhr.responseText },
                                      xhr.getAllResponseHeaders()
                                  );
                              }
                          }
                      };
                  };
  
                  // Listen to events
                  xhr.onload = callback();
                  errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );
  
                  // Support: IE 9 only
                  // Use onreadystatechange to replace onabort
                  // to handle uncaught aborts
                  if ( xhr.onabort !== undefined ) {
                      xhr.onabort = errorCallback;
                  } else {
                      xhr.onreadystatechange = function() {
  
                          // Check readyState before timeout as it changes
                          if ( xhr.readyState === 4 ) {
  
                              // Allow onerror to be called first,
                              // but that will not handle a native abort
                              // Also, save errorCallback to a variable
                              // as xhr.onerror cannot be accessed
                              window.setTimeout( function() {
                                  if ( callback ) {
                                      errorCallback();
                                  }
                              } );
                          }
                      };
                  }
  
                  // Create the abort callback
                  callback = callback( "abort" );
  
                  try {
  
                      // Do send the request (this may raise an exception)
                      xhr.send( options.hasContent && options.data || null );
                  } catch ( e ) {
  
                      // #14683: Only rethrow if this hasn't been notified as an error yet
                      if ( callback ) {
                          throw e;
                      }
                  }
              },
  
              abort: function() {
                  if ( callback ) {
                      callback();
                  }
              }
          };
      }
  } );
  
  
  
  
  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
  jQuery.ajaxPrefilter( function( s ) {
      if ( s.crossDomain ) {
          s.contents.script = false;
      }
  } );
  
  // Install script dataType
  jQuery.ajaxSetup( {
      accepts: {
          script: "text/javascript, application/javascript, " +
              "application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function( text ) {
              jQuery.globalEval( text );
              return text;
          }
      }
  } );
  
  // Handle cache's special case and crossDomain
  jQuery.ajaxPrefilter( "script", function( s ) {
      if ( s.cache === undefined ) {
          s.cache = false;
      }
      if ( s.crossDomain ) {
          s.type = "GET";
      }
  } );
  
  // Bind script tag hack transport
  jQuery.ajaxTransport( "script", function( s ) {
  
      // This transport only deals with cross domain requests
      if ( s.crossDomain ) {
          var script, callback;
          return {
              send: function( _, complete ) {
                  script = jQuery( "<script>" ).prop( {
                      charset: s.scriptCharset,
                      src: s.url
                  } ).on(
                      "load error",
                      callback = function( evt ) {
                          script.remove();
                          callback = null;
                          if ( evt ) {
                              complete( evt.type === "error" ? 404 : 200, evt.type );
                          }
                      }
                  );
  
                  // Use native DOM manipulation to avoid our domManip AJAX trickery
                  document.head.appendChild( script[ 0 ] );
              },
              abort: function() {
                  if ( callback ) {
                      callback();
                  }
              }
          };
      }
  } );
  
  
  
  
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  
  // Default jsonp settings
  jQuery.ajaxSetup( {
      jsonp: "callback",
      jsonpCallback: function() {
          var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
          this[ callback ] = true;
          return callback;
      }
  } );
  
  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
  
      var callbackName, overwritten, responseContainer,
          jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
              "url" :
              typeof s.data === "string" &&
                  ( s.contentType || "" )
                      .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
                  rjsonp.test( s.data ) && "data"
          );
  
      // Handle iff the expected data type is "jsonp" or we have a parameter to set
      if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
  
          // Get callback name, remembering preexisting value associated with it
          callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
              s.jsonpCallback() :
              s.jsonpCallback;
  
          // Insert callback into url or form data
          if ( jsonProp ) {
              s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
          } else if ( s.jsonp !== false ) {
              s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
          }
  
          // Use data converter to retrieve json after script execution
          s.converters[ "script json" ] = function() {
              if ( !responseContainer ) {
                  jQuery.error( callbackName + " was not called" );
              }
              return responseContainer[ 0 ];
          };
  
          // Force json dataType
          s.dataTypes[ 0 ] = "json";
  
          // Install callback
          overwritten = window[ callbackName ];
          window[ callbackName ] = function() {
              responseContainer = arguments;
          };
  
          // Clean-up function (fires after converters)
          jqXHR.always( function() {
  
              // If previous value didn't exist - remove it
              if ( overwritten === undefined ) {
                  jQuery( window ).removeProp( callbackName );
  
              // Otherwise restore preexisting value
              } else {
                  window[ callbackName ] = overwritten;
              }
  
              // Save back as free
              if ( s[ callbackName ] ) {
  
                  // Make sure that re-using the options doesn't screw things around
                  s.jsonpCallback = originalSettings.jsonpCallback;
  
                  // Save the callback name for future use
                  oldCallbacks.push( callbackName );
              }
  
              // Call if it was a function and we have a response
              if ( responseContainer && isFunction( overwritten ) ) {
                  overwritten( responseContainer[ 0 ] );
              }
  
              responseContainer = overwritten = undefined;
          } );
  
          // Delegate to script
          return "script";
      }
  } );
  
  
  
  
  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = ( function() {
      var body = document.implementation.createHTMLDocument( "" ).body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
  } )();
  
  
  // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function( data, context, keepScripts ) {
      if ( typeof data !== "string" ) {
          return [];
      }
      if ( typeof context === "boolean" ) {
          keepScripts = context;
          context = false;
      }
  
      var base, parsed, scripts;
  
      if ( !context ) {
  
          // Stop scripts or inline event handlers from being executed immediately
          // by using document.implementation
          if ( support.createHTMLDocument ) {
              context = document.implementation.createHTMLDocument( "" );
  
              // Set the base href for the created document
              // so any parsed elements with URLs
              // are based on the document's URL (gh-2965)
              base = context.createElement( "base" );
              base.href = document.location.href;
              context.head.appendChild( base );
          } else {
              context = document;
          }
      }
  
      parsed = rsingleTag.exec( data );
      scripts = !keepScripts && [];
  
      // Single tag
      if ( parsed ) {
          return [ context.createElement( parsed[ 1 ] ) ];
      }
  
      parsed = buildFragment( [ data ], context, scripts );
  
      if ( scripts && scripts.length ) {
          jQuery( scripts ).remove();
      }
  
      return jQuery.merge( [], parsed.childNodes );
  };
  
  
  /**
   * Load a url into a page
   */
  jQuery.fn.load = function( url, params, callback ) {
      var selector, type, response,
          self = this,
          off = url.indexOf( " " );
  
      if ( off > -1 ) {
          selector = stripAndCollapse( url.slice( off ) );
          url = url.slice( 0, off );
      }
  
      // If it's a function
      if ( isFunction( params ) ) {
  
          // We assume that it's the callback
          callback = params;
          params = undefined;
  
      // Otherwise, build a param string
      } else if ( params && typeof params === "object" ) {
          type = "POST";
      }
  
      // If we have elements to modify, make the request
      if ( self.length > 0 ) {
          jQuery.ajax( {
              url: url,
  
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
          } ).done( function( responseText ) {
  
              // Save response for use in complete callback
              response = arguments;
  
              self.html( selector ?
  
                  // If a selector was specified, locate the right elements in a dummy div
                  // Exclude scripts to avoid IE 'Permission Denied' errors
                  jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
  
                  // Otherwise use the full result
                  responseText );
  
          // If the request succeeds, this function gets "data", "status", "jqXHR"
          // but they are ignored because response was set above.
          // If it fails, this function gets "jqXHR", "status", "error"
          } ).always( callback && function( jqXHR, status ) {
              self.each( function() {
                  callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
              } );
          } );
      }
  
      return this;
  };
  
  
  
  
  // Attach a bunch of functions for handling common AJAX events
  jQuery.each( [
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
  ], function( i, type ) {
      jQuery.fn[ type ] = function( fn ) {
          return this.on( type, fn );
      };
  } );
  
  
  
  
  jQuery.expr.pseudos.animated = function( elem ) {
      return jQuery.grep( jQuery.timers, function( fn ) {
          return elem === fn.elem;
      } ).length;
  };
  
  
  
  
  jQuery.offset = {
      setOffset: function( elem, options, i ) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
              position = jQuery.css( elem, "position" ),
              curElem = jQuery( elem ),
              props = {};
  
          // Set position first, in-case top/left are set even on static elem
          if ( position === "static" ) {
              elem.style.position = "relative";
          }
  
          curOffset = curElem.offset();
          curCSSTop = jQuery.css( elem, "top" );
          curCSSLeft = jQuery.css( elem, "left" );
          calculatePosition = ( position === "absolute" || position === "fixed" ) &&
              ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
  
          // Need to be able to calculate position if either
          // top or left is auto and position is either absolute or fixed
          if ( calculatePosition ) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
  
          } else {
              curTop = parseFloat( curCSSTop ) || 0;
              curLeft = parseFloat( curCSSLeft ) || 0;
          }
  
          if ( isFunction( options ) ) {
  
              // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
              options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
          }
  
          if ( options.top != null ) {
              props.top = ( options.top - curOffset.top ) + curTop;
          }
          if ( options.left != null ) {
              props.left = ( options.left - curOffset.left ) + curLeft;
          }
  
          if ( "using" in options ) {
              options.using.call( elem, props );
  
          } else {
              curElem.css( props );
          }
      }
  };
  
  jQuery.fn.extend( {
  
      // offset() relates an element's border box to the document origin
      offset: function( options ) {
  
          // Preserve chaining for setter
          if ( arguments.length ) {
              return options === undefined ?
                  this :
                  this.each( function( i ) {
                      jQuery.offset.setOffset( this, options, i );
                  } );
          }
  
          var rect, win,
              elem = this[ 0 ];
  
          if ( !elem ) {
              return;
          }
  
          // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
          // Support: IE <=11 only
          // Running getBoundingClientRect on a
          // disconnected node in IE throws an error
          if ( !elem.getClientRects().length ) {
              return { top: 0, left: 0 };
          }
  
          // Get document-relative position by adding viewport scroll to viewport-relative gBCR
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
          };
      },
  
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
          if ( !this[ 0 ] ) {
              return;
          }
  
          var offsetParent, offset, doc,
              elem = this[ 0 ],
              parentOffset = { top: 0, left: 0 };
  
          // position:fixed elements are offset from the viewport, which itself always has zero offset
          if ( jQuery.css( elem, "position" ) === "fixed" ) {
  
              // Assume position:fixed implies availability of getBoundingClientRect
              offset = elem.getBoundingClientRect();
  
          } else {
              offset = this.offset();
  
              // Account for the *real* offset parent, which can be the document or its root element
              // when a statically positioned element is identified
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while ( offsetParent &&
                  ( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
                  jQuery.css( offsetParent, "position" ) === "static" ) {
  
                  offsetParent = offsetParent.parentNode;
              }
              if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {
  
                  // Incorporate borders into its offset, since they are outside its content origin
                  parentOffset = jQuery( offsetParent ).offset();
                  parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
                  parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
              }
          }
  
          // Subtract parent offsets and element margins
          return {
              top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
              left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
          };
      },
  
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
          return this.map( function() {
              var offsetParent = this.offsetParent;
  
              while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
                  offsetParent = offsetParent.offsetParent;
              }
  
              return offsetParent || documentElement;
          } );
      }
  } );
  
  // Create scrollLeft and scrollTop methods
  jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
      var top = "pageYOffset" === prop;
  
      jQuery.fn[ method ] = function( val ) {
          return access( this, function( elem, method, val ) {
  
              // Coalesce documents and windows
              var win;
              if ( isWindow( elem ) ) {
                  win = elem;
              } else if ( elem.nodeType === 9 ) {
                  win = elem.defaultView;
              }
  
              if ( val === undefined ) {
                  return win ? win[ prop ] : elem[ method ];
              }
  
              if ( win ) {
                  win.scrollTo(
                      !top ? val : win.pageXOffset,
                      top ? val : win.pageYOffset
                  );
  
              } else {
                  elem[ method ] = val;
              }
          }, method, val, arguments.length );
      };
  } );
  
  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
          function( elem, computed ) {
              if ( computed ) {
                  computed = curCSS( elem, prop );
  
                  // If curCSS returns percentage, fallback to offset
                  return rnumnonpx.test( computed ) ?
                      jQuery( elem ).position()[ prop ] + "px" :
                      computed;
              }
          }
      );
  } );
  
  
  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
      jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
          function( defaultExtra, funcName ) {
  
          // Margin is only for outerHeight, outerWidth
          jQuery.fn[ funcName ] = function( margin, value ) {
              var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                  extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
  
              return access( this, function( elem, type, value ) {
                  var doc;
  
                  if ( isWindow( elem ) ) {
  
                      // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                      return funcName.indexOf( "outer" ) === 0 ?
                          elem[ "inner" + name ] :
                          elem.document.documentElement[ "client" + name ];
                  }
  
                  // Get document width or height
                  if ( elem.nodeType === 9 ) {
                      doc = elem.documentElement;
  
                      // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                      // whichever is greatest
                      return Math.max(
                          elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                          elem.body[ "offset" + name ], doc[ "offset" + name ],
                          doc[ "client" + name ]
                      );
                  }
  
                  return value === undefined ?
  
                      // Get width or height on the element, requesting but not forcing parseFloat
                      jQuery.css( elem, type, extra ) :
  
                      // Set width or height on the element
                      jQuery.style( elem, type, value, extra );
              }, type, chainable ? margin : undefined, chainable );
          };
      } );
  } );
  
  
  jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
      "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
      "change select submit keydown keypress keyup contextmenu" ).split( " " ),
      function( i, name ) {
  
      // Handle event binding
      jQuery.fn[ name ] = function( data, fn ) {
          return arguments.length > 0 ?
              this.on( name, null, data, fn ) :
              this.trigger( name );
      };
  } );
  
  jQuery.fn.extend( {
      hover: function( fnOver, fnOut ) {
          return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
      }
  } );
  
  
  
  
  jQuery.fn.extend( {
  
      bind: function( types, data, fn ) {
          return this.on( types, null, data, fn );
      },
      unbind: function( types, fn ) {
          return this.off( types, null, fn );
      },
  
      delegate: function( selector, types, data, fn ) {
          return this.on( types, selector, data, fn );
      },
      undelegate: function( selector, types, fn ) {
  
          // ( namespace ) or ( selector, types [, fn] )
          return arguments.length === 1 ?
              this.off( selector, "**" ) :
              this.off( types, selector || "**", fn );
      }
  } );
  
  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon
  jQuery.proxy = function( fn, context ) {
      var tmp, args, proxy;
  
      if ( typeof context === "string" ) {
          tmp = fn[ context ];
          context = fn;
          fn = tmp;
      }
  
      // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.
      if ( !isFunction( fn ) ) {
          return undefined;
      }
  
      // Simulated bind
      args = slice.call( arguments, 2 );
      proxy = function() {
          return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
      };
  
      // Set the guid of unique handler to the same of original handler, so it can be removed
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
  
      return proxy;
  };
  
  jQuery.holdReady = function( hold ) {
      if ( hold ) {
          jQuery.readyWait++;
      } else {
          jQuery.ready( true );
      }
  };
  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  
  jQuery.now = Date.now;
  
  jQuery.isNumeric = function( obj ) {
  
      // As of jQuery 3.0, isNumeric is limited to
      // strings and numbers (primitives or objects)
      // that can be coerced to finite numbers (gh-2662)
      var type = jQuery.type( obj );
      return ( type === "number" || type === "string" ) &&
  
          // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN( obj - parseFloat( obj ) );
  };
  
  
  
  
  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
  
  if ( typeof define === "function" && define.amd ) {
      define( "jquery", [], function() {
          return jQuery;
      } );
  }
  
  
  
  
  var
  
      // Map over jQuery in case of overwrite
      _jQuery = window.jQuery,
  
      // Map over the $ in case of overwrite
      _$ = window.$;
  
  jQuery.noConflict = function( deep ) {
      if ( window.$ === jQuery ) {
          window.$ = _$;
      }
  
      if ( deep && window.jQuery === jQuery ) {
          window.jQuery = _jQuery;
      }
  
      return jQuery;
  };
  
  // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if ( !noGlobal ) {
      window.jQuery = window.$ = jQuery;
  }
  
  
  
  
  return jQuery;
  } );
  
  ;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
  !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
  
  ;/*!
   * jQuery JavaScript Library v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  ( function( global, factory ) {
  
      "use strict";
  
      if ( typeof module === "object" && typeof module.exports === "object" ) {
  
          // For CommonJS and CommonJS-like environments where a proper `window`
          // is present, execute the factory and get jQuery.
          // For environments that do not have a `window` with a `document`
          // (such as Node.js), expose a factory as module.exports.
          // This accentuates the need for the creation of a real `window`.
          // e.g. var jQuery = require("jquery")(window);
          // See ticket #14549 for more info.
          module.exports = global.document ?
              factory( global, true ) :
              function( w ) {
                  if ( !w.document ) {
                      throw new Error( "jQuery requires a window with a document" );
                  }
                  return factory( w );
              };
      } else {
          factory( global );
      }
  
  // Pass this if window is not defined yet
  } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
  
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";
  
  var arr = [];
  
  var document = window.document;
  
  var getProto = Object.getPrototypeOf;
  
  var slice = arr.slice;
  
  var concat = arr.concat;
  
  var push = arr.push;
  
  var indexOf = arr.indexOf;
  
  var class2type = {};
  
  var toString = class2type.toString;
  
  var hasOwn = class2type.hasOwnProperty;
  
  var fnToString = hasOwn.toString;
  
  var ObjectFunctionString = fnToString.call( Object );
  
  var support = {};
  
  var isFunction = function isFunction( obj ) {
  
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
  
  
  var isWindow = function isWindow( obj ) {
          return obj != null && obj === obj.window;
      };
  
  
  
  
      var preservedScriptAttributes = {
          type: true,
          src: true,
          noModule: true
      };
  
      function DOMEval( code, doc, node ) {
          doc = doc || document;
  
          var i,
              script = doc.createElement( "script" );
  
          script.text = code;
          if ( node ) {
              for ( i in preservedScriptAttributes ) {
                  if ( node[ i ] ) {
                      script[ i ] = node[ i ];
                  }
              }
          }
          doc.head.appendChild( script ).parentNode.removeChild( script );
      }
  
  
  function toType( obj ) {
      if ( obj == null ) {
          return obj + "";
      }
  
      // Support: Android <=2.3 only (functionish RegExp)
      return typeof obj === "object" || typeof obj === "function" ?
          class2type[ toString.call( obj ) ] || "object" :
          typeof obj;
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module
  
  
  
  var
      version = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
  
      // Define a local copy of jQuery
      jQuery = function( selector, context ) {
  
          // The jQuery object is actually just the init constructor 'enhanced'
          // Need init if jQuery is called (just allow error to be thrown if not included)
          return new jQuery.fn.init( selector, context );
      },
  
      // Support: Android <=4.0 only
      // Make sure we trim BOM and NBSP
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  
  jQuery.fn = jQuery.prototype = {
  
      // The current version of jQuery being used
      jquery: version,
  
      constructor: jQuery,
  
      // The default length of a jQuery object is 0
      length: 0,
  
      toArray: function() {
          return slice.call( this );
      },
  
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function( num ) {
  
          // Return all the elements in a clean array
          if ( num == null ) {
              return slice.call( this );
          }
  
          // Return just the one element from the set
          return num < 0 ? this[ num + this.length ] : this[ num ];
      },
  
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function( elems ) {
  
          // Build a new jQuery matched element set
          var ret = jQuery.merge( this.constructor(), elems );
  
          // Add the old object onto the stack (as a reference)
          ret.prevObject = this;
  
          // Return the newly-formed element set
          return ret;
      },
  
      // Execute a callback for every element in the matched set.
      each: function( callback ) {
          return jQuery.each( this, callback );
      },
  
      map: function( callback ) {
          return this.pushStack( jQuery.map( this, function( elem, i ) {
              return callback.call( elem, i, elem );
          } ) );
      },
  
      slice: function() {
          return this.pushStack( slice.apply( this, arguments ) );
      },
  
      first: function() {
          return this.eq( 0 );
      },
  
      last: function() {
          return this.eq( -1 );
      },
  
      eq: function( i ) {
          var len = this.length,
              j = +i + ( i < 0 ? len : 0 );
          return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
      },
  
      end: function() {
          return this.prevObject || this.constructor();
      },
  
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: push,
      sort: arr.sort,
      splice: arr.splice
  };
  
  jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone,
          target = arguments[ 0 ] || {},
          i = 1,
          length = arguments.length,
          deep = false;
  
      // Handle a deep copy situation
      if ( typeof target === "boolean" ) {
          deep = target;
  
          // Skip the boolean and the target
          target = arguments[ i ] || {};
          i++;
      }
  
      // Handle case when target is a string or something (possible in deep copy)
      if ( typeof target !== "object" && !isFunction( target ) ) {
          target = {};
      }
  
      // Extend jQuery itself if only one argument is passed
      if ( i === length ) {
          target = this;
          i--;
      }
  
      for ( ; i < length; i++ ) {
  
          // Only deal with non-null/undefined values
          if ( ( options = arguments[ i ] ) != null ) {
  
              // Extend the base object
              for ( name in options ) {
                  src = target[ name ];
                  copy = options[ name ];
  
                  // Prevent never-ending loop
                  if ( target === copy ) {
                      continue;
                  }
  
                  // Recurse if we're merging plain objects or arrays
                  if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                      ( copyIsArray = Array.isArray( copy ) ) ) ) {
  
                      if ( copyIsArray ) {
                          copyIsArray = false;
                          clone = src && Array.isArray( src ) ? src : [];
  
                      } else {
                          clone = src && jQuery.isPlainObject( src ) ? src : {};
                      }
  
                      // Never move original objects, clone them
                      target[ name ] = jQuery.extend( deep, clone, copy );
  
                  // Don't bring in undefined values
                  } else if ( copy !== undefined ) {
                      target[ name ] = copy;
                  }
              }
          }
      }
  
      // Return the modified object
      return target;
  };
  
  jQuery.extend( {
  
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
  
      // Assume jQuery is ready without the ready module
      isReady: true,
  
      error: function( msg ) {
          throw new Error( msg );
      },
  
      noop: function() {},
  
      isPlainObject: function( obj ) {
          var proto, Ctor;
  
          // Detect obvious negatives
          // Use toString instead of jQuery.type to catch host objects
          if ( !obj || toString.call( obj ) !== "[object Object]" ) {
              return false;
          }
  
          proto = getProto( obj );
  
          // Objects with no prototype (e.g., `Object.create( null )`) are plain
          if ( !proto ) {
              return true;
          }
  
          // Objects with prototype are plain iff they were constructed by a global Object function
          Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
          return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
      },
  
      isEmptyObject: function( obj ) {
  
          /* eslint-disable no-unused-vars */
          // See https://github.com/eslint/eslint/issues/6125
          var name;
  
          for ( name in obj ) {
              return false;
          }
          return true;
      },
  
      // Evaluates a script in a global context
      globalEval: function( code ) {
          DOMEval( code );
      },
  
      each: function( obj, callback ) {
          var length, i = 0;
  
          if ( isArrayLike( obj ) ) {
              length = obj.length;
              for ( ; i < length; i++ ) {
                  if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                      break;
                  }
              }
          } else {
              for ( i in obj ) {
                  if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                      break;
                  }
              }
          }
  
          return obj;
      },
  
      // Support: Android <=4.0 only
      trim: function( text ) {
          return text == null ?
              "" :
              ( text + "" ).replace( rtrim, "" );
      },
  
      // results is for internal usage only
      makeArray: function( arr, results ) {
          var ret = results || [];
  
          if ( arr != null ) {
              if ( isArrayLike( Object( arr ) ) ) {
                  jQuery.merge( ret,
                      typeof arr === "string" ?
                      [ arr ] : arr
                  );
              } else {
                  push.call( ret, arr );
              }
          }
  
          return ret;
      },
  
      inArray: function( elem, arr, i ) {
          return arr == null ? -1 : indexOf.call( arr, elem, i );
      },
  
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function( first, second ) {
          var len = +second.length,
              j = 0,
              i = first.length;
  
          for ( ; j < len; j++ ) {
              first[ i++ ] = second[ j ];
          }
  
          first.length = i;
  
          return first;
      },
  
      grep: function( elems, callback, invert ) {
          var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert;
  
          // Go through the array, only saving the items
          // that pass the validator function
          for ( ; i < length; i++ ) {
              callbackInverse = !callback( elems[ i ], i );
              if ( callbackInverse !== callbackExpect ) {
                  matches.push( elems[ i ] );
              }
          }
  
          return matches;
      },
  
      // arg is for internal usage only
      map: function( elems, callback, arg ) {
          var length, value,
              i = 0,
              ret = [];
  
          // Go through the array, translating each of the items to their new values
          if ( isArrayLike( elems ) ) {
              length = elems.length;
              for ( ; i < length; i++ ) {
                  value = callback( elems[ i ], i, arg );
  
                  if ( value != null ) {
                      ret.push( value );
                  }
              }
  
          // Go through every key on the object,
          } else {
              for ( i in elems ) {
                  value = callback( elems[ i ], i, arg );
  
                  if ( value != null ) {
                      ret.push( value );
                  }
              }
          }
  
          // Flatten any nested arrays
          return concat.apply( [], ret );
      },
  
      // A global GUID counter for objects
      guid: 1,
  
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: support
  } );
  
  if ( typeof Symbol === "function" ) {
      jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
  }
  
  // Populate the class2type map
  jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
  function( i, name ) {
      class2type[ "[object " + name + "]" ] = name.toLowerCase();
  } );
  
  function isArrayLike( obj ) {
  
      // Support: real iOS 8.2 only (not reproducible in simulator)
      // `in` check used to prevent JIT error (gh-2145)
      // hasOwn isn't used here due to false negatives
      // regarding Nodelist length in IE
      var length = !!obj && "length" in obj && obj.length,
          type = toType( obj );
  
      if ( isFunction( obj ) || isWindow( obj ) ) {
          return false;
      }
  
      return type === "array" || length === 0 ||
          typeof length === "number" && length > 0 && ( length - 1 ) in obj;
  }
  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
  (function( window ) {
  
  var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
  
      // Local document vars
      setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
  
      // Instance-specific data
      expando = "sizzle" + 1 * new Date(),
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      sortOrder = function( a, b ) {
          if ( a === b ) {
              hasDuplicate = true;
          }
          return 0;
      },
  
      // Instance methods
      hasOwn = ({}).hasOwnProperty,
      arr = [],
      pop = arr.pop,
      push_native = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
      // https://jsperf.com/thor-indexof-vs-for/5
      indexOf = function( list, elem ) {
          var i = 0,
              len = list.length;
          for ( ; i < len; i++ ) {
              if ( list[i] === elem ) {
                  return i;
              }
          }
          return -1;
      },
  
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  
      // Regular expressions
  
      // http://www.w3.org/TR/css3-selectors/#whitespace
      whitespace = "[\\x20\\t\\r\\n\\f]",
  
      // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
      identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
  
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
          // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace +
          // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
          "*\\]",
  
      pseudos = ":(" + identifier + ")(?:\\((" +
          // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
          // 1. quoted (capture 3; capture 4 or capture 5)
          "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
          // 2. simple (capture 6)
          "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
          // 3. anything else (capture 2)
          ".*" +
          ")\\)|)",
  
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
      rwhitespace = new RegExp( whitespace + "+", "g" ),
      rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
  
      rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
      rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
  
      rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
  
      rpseudo = new RegExp( pseudos ),
      ridentifier = new RegExp( "^" + identifier + "$" ),
  
      matchExpr = {
          "ID": new RegExp( "^#(" + identifier + ")" ),
          "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
          "TAG": new RegExp( "^(" + identifier + "|[*])" ),
          "ATTR": new RegExp( "^" + attributes ),
          "PSEUDO": new RegExp( "^" + pseudos ),
          "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
              "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
              "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
          "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
      },
  
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
  
      rnative = /^[^{]+\{\s*\[native \w/,
  
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
  
      rsibling = /[+~]/,
  
      // CSS escapes
      // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
      runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
      funescape = function( _, escaped, escapedWhitespace ) {
          var high = "0x" + escaped - 0x10000;
          // NaN means non-codepoint
          // Support: Firefox<24
          // Workaround erroneous numeric interpretation of +"0x"
          return high !== high || escapedWhitespace ?
              escaped :
              high < 0 ?
                  // BMP codepoint
                  String.fromCharCode( high + 0x10000 ) :
                  // Supplemental Plane codepoint (surrogate pair)
                  String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
      },
  
      // CSS string/identifier serialization
      // https://drafts.csswg.org/cssom/#common-serializing-idioms
      rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function( ch, asCodePoint ) {
          if ( asCodePoint ) {
  
              // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
              if ( ch === "\0" ) {
                  return "\uFFFD";
              }
  
              // Control characters and (dependent upon position) numbers get escaped as code points
              return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
          }
  
          // Other potentially-special ASCII characters get backslash-escaped
          return "\\" + ch;
      },
  
      // Used for iframes
      // See setDocument()
      // Removing the function wrapper causes a "Permission Denied"
      // error in IE
      unloadHandler = function() {
          setDocument();
      },
  
      disabledAncestor = addCombinator(
          function( elem ) {
              return elem.disabled === true && ("form" in elem || "label" in elem);
          },
          { dir: "parentNode", next: "legend" }
      );
  
  // Optimize for push.apply( _, NodeList )
  try {
      push.apply(
          (arr = slice.call( preferredDoc.childNodes )),
          preferredDoc.childNodes
      );
      // Support: Android<4.0
      // Detect silently failing push.apply
      arr[ preferredDoc.childNodes.length ].nodeType;
  } catch ( e ) {
      push = { apply: arr.length ?
  
          // Leverage slice if possible
          function( target, els ) {
              push_native.apply( target, slice.call(els) );
          } :
  
          // Support: IE<9
          // Otherwise append directly
          function( target, els ) {
              var j = target.length,
                  i = 0;
              // Can't trust NodeList.length
              while ( (target[j++] = els[i++]) ) {}
              target.length = j - 1;
          }
      };
  }
  
  function Sizzle( selector, context, results, seed ) {
      var m, i, elem, nid, match, groups, newSelector,
          newContext = context && context.ownerDocument,
  
          // nodeType defaults to 9, since context defaults to document
          nodeType = context ? context.nodeType : 9;
  
      results = results || [];
  
      // Return early from calls with invalid selector or context
      if ( typeof selector !== "string" || !selector ||
          nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
  
          return results;
      }
  
      // Try to shortcut find operations (as opposed to filters) in HTML documents
      if ( !seed ) {
  
          if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
              setDocument( context );
          }
          context = context || document;
  
          if ( documentIsHTML ) {
  
              // If the selector is sufficiently simple, try using a "get*By*" DOM method
              // (excepting DocumentFragment context, where the methods don't exist)
              if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
  
                  // ID selector
                  if ( (m = match[1]) ) {
  
                      // Document context
                      if ( nodeType === 9 ) {
                          if ( (elem = context.getElementById( m )) ) {
  
                              // Support: IE, Opera, Webkit
                              // TODO: identify versions
                              // getElementById can match elements by name instead of ID
                              if ( elem.id === m ) {
                                  results.push( elem );
                                  return results;
                              }
                          } else {
                              return results;
                          }
  
                      // Element context
                      } else {
  
                          // Support: IE, Opera, Webkit
                          // TODO: identify versions
                          // getElementById can match elements by name instead of ID
                          if ( newContext && (elem = newContext.getElementById( m )) &&
                              contains( context, elem ) &&
                              elem.id === m ) {
  
                              results.push( elem );
                              return results;
                          }
                      }
  
                  // Type selector
                  } else if ( match[2] ) {
                      push.apply( results, context.getElementsByTagName( selector ) );
                      return results;
  
                  // Class selector
                  } else if ( (m = match[3]) && support.getElementsByClassName &&
                      context.getElementsByClassName ) {
  
                      push.apply( results, context.getElementsByClassName( m ) );
                      return results;
                  }
              }
  
              // Take advantage of querySelectorAll
              if ( support.qsa &&
                  !compilerCache[ selector + " " ] &&
                  (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
  
                  if ( nodeType !== 1 ) {
                      newContext = context;
                      newSelector = selector;
  
                  // qSA looks outside Element context, which is not what we want
                  // Thanks to Andrew Dupont for this workaround technique
                  // Support: IE <=8
                  // Exclude object elements
                  } else if ( context.nodeName.toLowerCase() !== "object" ) {
  
                      // Capture the context ID, setting it first if necessary
                      if ( (nid = context.getAttribute( "id" )) ) {
                          nid = nid.replace( rcssescape, fcssescape );
                      } else {
                          context.setAttribute( "id", (nid = expando) );
                      }
  
                      // Prefix every selector in the list
                      groups = tokenize( selector );
                      i = groups.length;
                      while ( i-- ) {
                          groups[i] = "#" + nid + " " + toSelector( groups[i] );
                      }
                      newSelector = groups.join( "," );
  
                      // Expand context for sibling selectors
                      newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                          context;
                  }
  
                  if ( newSelector ) {
                      try {
                          push.apply( results,
                              newContext.querySelectorAll( newSelector )
                          );
                          return results;
                      } catch ( qsaError ) {
                      } finally {
                          if ( nid === expando ) {
                              context.removeAttribute( "id" );
                          }
                      }
                  }
              }
          }
      }
  
      // All others
      return select( selector.replace( rtrim, "$1" ), context, results, seed );
  }
  
  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
  function createCache() {
      var keys = [];
  
      function cache( key, value ) {
          // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
          if ( keys.push( key + " " ) > Expr.cacheLength ) {
              // Only keep the most recent entries
              delete cache[ keys.shift() ];
          }
          return (cache[ key + " " ] = value);
      }
      return cache;
  }
  
  /**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
  function markFunction( fn ) {
      fn[ expando ] = true;
      return fn;
  }
  
  /**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
  function assert( fn ) {
      var el = document.createElement("fieldset");
  
      try {
          return !!fn( el );
      } catch (e) {
          return false;
      } finally {
          // Remove from its parent by default
          if ( el.parentNode ) {
              el.parentNode.removeChild( el );
          }
          // release memory in IE
          el = null;
      }
  }
  
  /**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
  function addHandle( attrs, handler ) {
      var arr = attrs.split("|"),
          i = arr.length;
  
      while ( i-- ) {
          Expr.attrHandle[ arr[i] ] = handler;
      }
  }
  
  /**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
  function siblingCheck( a, b ) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
              a.sourceIndex - b.sourceIndex;
  
      // Use IE sourceIndex if available on both nodes
      if ( diff ) {
          return diff;
      }
  
      // Check if b follows a
      if ( cur ) {
          while ( (cur = cur.nextSibling) ) {
              if ( cur === b ) {
                  return -1;
              }
          }
      }
  
      return a ? 1 : -1;
  }
  
  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
  function createInputPseudo( type ) {
      return function( elem ) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
      };
  }
  
  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
  function createButtonPseudo( type ) {
      return function( elem ) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
      };
  }
  
  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
  function createDisabledPseudo( disabled ) {
  
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function( elem ) {
  
          // Only certain elements can match :enabled or :disabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
          if ( "form" in elem ) {
  
              // Check for inherited disabledness on relevant non-disabled elements:
              // * listed form-associated elements in a disabled fieldset
              //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
              // * option elements in a disabled optgroup
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
              // All such elements have a "form" property.
              if ( elem.parentNode && elem.disabled === false ) {
  
                  // Option elements defer to a parent optgroup if present
                  if ( "label" in elem ) {
                      if ( "label" in elem.parentNode ) {
                          return elem.parentNode.disabled === disabled;
                      } else {
                          return elem.disabled === disabled;
                      }
                  }
  
                  // Support: IE 6 - 11
                  // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                  return elem.isDisabled === disabled ||
  
                      // Where there is no isDisabled, check manually
                      /* jshint -W018 */
                      elem.isDisabled !== !disabled &&
                          disabledAncestor( elem ) === disabled;
              }
  
              return elem.disabled === disabled;
  
          // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
          } else if ( "label" in elem ) {
              return elem.disabled === disabled;
          }
  
          // Remaining elements are neither :enabled nor :disabled
          return false;
      };
  }
  
  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
  function createPositionalPseudo( fn ) {
      return markFunction(function( argument ) {
          argument = +argument;
          return markFunction(function( seed, matches ) {
              var j,
                  matchIndexes = fn( [], seed.length, argument ),
                  i = matchIndexes.length;
  
              // Match elements found at the specified indexes
              while ( i-- ) {
                  if ( seed[ (j = matchIndexes[i]) ] ) {
                      seed[j] = !(matches[j] = seed[j]);
                  }
              }
          });
      });
  }
  
  /**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
  function testContext( context ) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
  }
  
  // Expose support vars for convenience
  support = Sizzle.support = {};
  
  /**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
  isXML = Sizzle.isXML = function( elem ) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
  };
  
  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
  setDocument = Sizzle.setDocument = function( node ) {
      var hasCompare, subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc;
  
      // Return early if doc is invalid or already selected
      if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
          return document;
      }
  
      // Update global variables
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML( document );
  
      // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      if ( preferredDoc !== document &&
          (subWindow = document.defaultView) && subWindow.top !== subWindow ) {
  
          // Support: IE 11, Edge
          if ( subWindow.addEventListener ) {
              subWindow.addEventListener( "unload", unloadHandler, false );
  
          // Support: IE 9 - 10 only
          } else if ( subWindow.attachEvent ) {
              subWindow.attachEvent( "onunload", unloadHandler );
          }
      }
  
      /* Attributes
      ---------------------------------------------------------------------- */
  
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)
      support.attributes = assert(function( el ) {
          el.className = "i";
          return !el.getAttribute("className");
      });
  
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
  
      // Check if getElementsByTagName("*") returns only elements
      support.getElementsByTagName = assert(function( el ) {
          el.appendChild( document.createComment("") );
          return !el.getElementsByTagName("*").length;
      });
  
      // Support: IE<9
      support.getElementsByClassName = rnative.test( document.getElementsByClassName );
  
      // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test
      support.getById = assert(function( el ) {
          docElem.appendChild( el ).id = expando;
          return !document.getElementsByName || !document.getElementsByName( expando ).length;
      });
  
      // ID filter and find
      if ( support.getById ) {
          Expr.filter["ID"] = function( id ) {
              var attrId = id.replace( runescape, funescape );
              return function( elem ) {
                  return elem.getAttribute("id") === attrId;
              };
          };
          Expr.find["ID"] = function( id, context ) {
              if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                  var elem = context.getElementById( id );
                  return elem ? [ elem ] : [];
              }
          };
      } else {
          Expr.filter["ID"] =  function( id ) {
              var attrId = id.replace( runescape, funescape );
              return function( elem ) {
                  var node = typeof elem.getAttributeNode !== "undefined" &&
                      elem.getAttributeNode("id");
                  return node && node.value === attrId;
              };
          };
  
          // Support: IE 6 - 7 only
          // getElementById is not reliable as a find shortcut
          Expr.find["ID"] = function( id, context ) {
              if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                  var node, i, elems,
                      elem = context.getElementById( id );
  
                  if ( elem ) {
  
                      // Verify the id attribute
                      node = elem.getAttributeNode("id");
                      if ( node && node.value === id ) {
                          return [ elem ];
                      }
  
                      // Fall back on getElementsByName
                      elems = context.getElementsByName( id );
                      i = 0;
                      while ( (elem = elems[i++]) ) {
                          node = elem.getAttributeNode("id");
                          if ( node && node.value === id ) {
                              return [ elem ];
                          }
                      }
                  }
  
                  return [];
              }
          };
      }
  
      // Tag
      Expr.find["TAG"] = support.getElementsByTagName ?
          function( tag, context ) {
              if ( typeof context.getElementsByTagName !== "undefined" ) {
                  return context.getElementsByTagName( tag );
  
              // DocumentFragment nodes don't have gEBTN
              } else if ( support.qsa ) {
                  return context.querySelectorAll( tag );
              }
          } :
  
          function( tag, context ) {
              var elem,
                  tmp = [],
                  i = 0,
                  // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                  results = context.getElementsByTagName( tag );
  
              // Filter out possible comments
              if ( tag === "*" ) {
                  while ( (elem = results[i++]) ) {
                      if ( elem.nodeType === 1 ) {
                          tmp.push( elem );
                      }
                  }
  
                  return tmp;
              }
              return results;
          };
  
      // Class
      Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
          if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
              return context.getElementsByClassName( className );
          }
      };
  
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
  
      // QSA and matchesSelector support
  
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      rbuggyMatches = [];
  
      // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378
      rbuggyQSA = [];
  
      if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
          // Build QSA regex
          // Regex strategy adopted from Diego Perini
          assert(function( el ) {
              // Select is set to empty string on purpose
              // This is to test IE's treatment of not explicitly
              // setting a boolean content attribute,
              // since its presence should be enough
              // https://bugs.jquery.com/ticket/12359
              docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                  "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                  "<option selected=''></option></select>";
  
              // Support: IE8, Opera 11-12.16
              // Nothing should be selected when empty strings follow ^= or $= or *=
              // The test attribute must be unknown in Opera but "safe" for WinRT
              // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
              if ( el.querySelectorAll("[msallowcapture^='']").length ) {
                  rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
              }
  
              // Support: IE8
              // Boolean attributes and "value" are not treated correctly
              if ( !el.querySelectorAll("[selected]").length ) {
                  rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
              }
  
              // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
              if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                  rbuggyQSA.push("~=");
              }
  
              // Webkit/Opera - :checked should return selected option elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              // IE8 throws error here and will not see later tests
              if ( !el.querySelectorAll(":checked").length ) {
                  rbuggyQSA.push(":checked");
              }
  
              // Support: Safari 8+, iOS 8+
              // https://bugs.webkit.org/show_bug.cgi?id=136851
              // In-page `selector#id sibling-combinator selector` fails
              if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                  rbuggyQSA.push(".#.+[+~]");
              }
          });
  
          assert(function( el ) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" +
                  "<select disabled='disabled'><option/></select>";
  
              // Support: Windows 8 Native Apps
              // The type and name attributes are restricted during .innerHTML assignment
              var input = document.createElement("input");
              input.setAttribute( "type", "hidden" );
              el.appendChild( input ).setAttribute( "name", "D" );
  
              // Support: IE8
              // Enforce case-sensitivity of name attribute
              if ( el.querySelectorAll("[name=d]").length ) {
                  rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
              }
  
              // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
              // IE8 throws error here and will not see later tests
              if ( el.querySelectorAll(":enabled").length !== 2 ) {
                  rbuggyQSA.push( ":enabled", ":disabled" );
              }
  
              // Support: IE9-11+
              // IE's :disabled selector does not pick up the children of disabled fieldsets
              docElem.appendChild( el ).disabled = true;
              if ( el.querySelectorAll(":disabled").length !== 2 ) {
                  rbuggyQSA.push( ":enabled", ":disabled" );
              }
  
              // Opera 10-11 does not throw on post-comma invalid pseudos
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
          });
      }
  
      if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
          docElem.webkitMatchesSelector ||
          docElem.mozMatchesSelector ||
          docElem.oMatchesSelector ||
          docElem.msMatchesSelector) )) ) {
  
          assert(function( el ) {
              // Check to see if it's possible to do matchesSelector
              // on a disconnected node (IE 9)
              support.disconnectedMatch = matches.call( el, "*" );
  
              // This should fail with an exception
              // Gecko does not error, returns false instead
              matches.call( el, "[s!='']:x" );
              rbuggyMatches.push( "!=", pseudos );
          });
      }
  
      rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
      rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
  
      /* Contains
      ---------------------------------------------------------------------- */
      hasCompare = rnative.test( docElem.compareDocumentPosition );
  
      // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself
      contains = hasCompare || rnative.test( docElem.contains ) ?
          function( a, b ) {
              var adown = a.nodeType === 9 ? a.documentElement : a,
                  bup = b && b.parentNode;
              return a === bup || !!( bup && bup.nodeType === 1 && (
                  adown.contains ?
                      adown.contains( bup ) :
                      a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
              ));
          } :
          function( a, b ) {
              if ( b ) {
                  while ( (b = b.parentNode) ) {
                      if ( b === a ) {
                          return true;
                      }
                  }
              }
              return false;
          };
  
      /* Sorting
      ---------------------------------------------------------------------- */
  
      // Document order sorting
      sortOrder = hasCompare ?
      function( a, b ) {
  
          // Flag for duplicate removal
          if ( a === b ) {
              hasDuplicate = true;
              return 0;
          }
  
          // Sort on method existence if only one input has compareDocumentPosition
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if ( compare ) {
              return compare;
          }
  
          // Calculate position if both inputs belong to the same document
          compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
              a.compareDocumentPosition( b ) :
  
              // Otherwise we know they are disconnected
              1;
  
          // Disconnected nodes
          if ( compare & 1 ||
              (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
  
              // Choose the first element that is related to our preferred document
              if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
                  return -1;
              }
              if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
                  return 1;
              }
  
              // Maintain original order
              return sortInput ?
                  ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                  0;
          }
  
          return compare & 4 ? -1 : 1;
      } :
      function( a, b ) {
          // Exit early if the nodes are identical
          if ( a === b ) {
              hasDuplicate = true;
              return 0;
          }
  
          var cur,
              i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [ a ],
              bp = [ b ];
  
          // Parentless nodes are either documents or disconnected
          if ( !aup || !bup ) {
              return a === document ? -1 :
                  b === document ? 1 :
                  aup ? -1 :
                  bup ? 1 :
                  sortInput ?
                  ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
                  0;
  
          // If the nodes are siblings, we can do a quick check
          } else if ( aup === bup ) {
              return siblingCheck( a, b );
          }
  
          // Otherwise we need full lists of their ancestors for comparison
          cur = a;
          while ( (cur = cur.parentNode) ) {
              ap.unshift( cur );
          }
          cur = b;
          while ( (cur = cur.parentNode) ) {
              bp.unshift( cur );
          }
  
          // Walk down the tree looking for a discrepancy
          while ( ap[i] === bp[i] ) {
              i++;
          }
  
          return i ?
              // Do a sibling check if the nodes have a common ancestor
              siblingCheck( ap[i], bp[i] ) :
  
              // Otherwise nodes in our document sort first
              ap[i] === preferredDoc ? -1 :
              bp[i] === preferredDoc ? 1 :
              0;
      };
  
      return document;
  };
  
  Sizzle.matches = function( expr, elements ) {
      return Sizzle( expr, null, null, elements );
  };
  
  Sizzle.matchesSelector = function( elem, expr ) {
      // Set document vars if needed
      if ( ( elem.ownerDocument || elem ) !== document ) {
          setDocument( elem );
      }
  
      // Make sure that attribute selectors are quoted
      expr = expr.replace( rattributeQuotes, "='$1']" );
  
      if ( support.matchesSelector && documentIsHTML &&
          !compilerCache[ expr + " " ] &&
          ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
          ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
  
          try {
              var ret = matches.call( elem, expr );
  
              // IE 9's matchesSelector returns false on disconnected nodes
              if ( ret || support.disconnectedMatch ||
                      // As well, disconnected nodes are said to be in a document
                      // fragment in IE 9
                      elem.document && elem.document.nodeType !== 11 ) {
                  return ret;
              }
          } catch (e) {}
      }
  
      return Sizzle( expr, document, null, [ elem ] ).length > 0;
  };
  
  Sizzle.contains = function( context, elem ) {
      // Set document vars if needed
      if ( ( context.ownerDocument || context ) !== document ) {
          setDocument( context );
      }
      return contains( context, elem );
  };
  
  Sizzle.attr = function( elem, name ) {
      // Set document vars if needed
      if ( ( elem.ownerDocument || elem ) !== document ) {
          setDocument( elem );
      }
  
      var fn = Expr.attrHandle[ name.toLowerCase() ],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
          val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
              fn( elem, name, !documentIsHTML ) :
              undefined;
  
      return val !== undefined ?
          val :
          support.attributes || !documentIsHTML ?
              elem.getAttribute( name ) :
              (val = elem.getAttributeNode(name)) && val.specified ?
                  val.value :
                  null;
  };
  
  Sizzle.escape = function( sel ) {
      return (sel + "").replace( rcssescape, fcssescape );
  };
  
  Sizzle.error = function( msg ) {
      throw new Error( "Syntax error, unrecognized expression: " + msg );
  };
  
  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
  Sizzle.uniqueSort = function( results ) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
  
      // Unless we *know* we can detect duplicates, assume their presence
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice( 0 );
      results.sort( sortOrder );
  
      if ( hasDuplicate ) {
          while ( (elem = results[i++]) ) {
              if ( elem === results[ i ] ) {
                  j = duplicates.push( i );
              }
          }
          while ( j-- ) {
              results.splice( duplicates[ j ], 1 );
          }
      }
  
      // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225
      sortInput = null;
  
      return results;
  };
  
  /**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
  getText = Sizzle.getText = function( elem ) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
  
      if ( !nodeType ) {
          // If no nodeType, this is expected to be an array
          while ( (node = elem[i++]) ) {
              // Do not traverse comment nodes
              ret += getText( node );
          }
      } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
          // Use textContent for elements
          // innerText usage removed for consistency of new lines (jQuery #11153)
          if ( typeof elem.textContent === "string" ) {
              return elem.textContent;
          } else {
              // Traverse its children
              for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                  ret += getText( elem );
              }
          }
      } else if ( nodeType === 3 || nodeType === 4 ) {
          return elem.nodeValue;
      }
      // Do not include comment or processing instruction nodes
  
      return ret;
  };
  
  Expr = Sizzle.selectors = {
  
      // Can be adjusted by the user
      cacheLength: 50,
  
      createPseudo: markFunction,
  
      match: matchExpr,
  
      attrHandle: {},
  
      find: {},
  
      relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
      },
  
      preFilter: {
          "ATTR": function( match ) {
              match[1] = match[1].replace( runescape, funescape );
  
              // Move the given value to match[3] whether quoted or unquoted
              match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
  
              if ( match[2] === "~=" ) {
                  match[3] = " " + match[3] + " ";
              }
  
              return match.slice( 0, 4 );
          },
  
          "CHILD": function( match ) {
              /* matches from matchExpr["CHILD"]
                  1 type (only|nth|...)
                  2 what (child|of-type)
                  3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                  4 xn-component of xn+y argument ([+-]?\d*n|)
                  5 sign of xn-component
                  6 x of xn-component
                  7 sign of y-component
                  8 y of y-component
              */
              match[1] = match[1].toLowerCase();
  
              if ( match[1].slice( 0, 3 ) === "nth" ) {
                  // nth-* requires argument
                  if ( !match[3] ) {
                      Sizzle.error( match[0] );
                  }
  
                  // numeric x and y parameters for Expr.filter.CHILD
                  // remember that false/true cast respectively to 0/1
                  match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                  match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
  
              // other types prohibit arguments
              } else if ( match[3] ) {
                  Sizzle.error( match[0] );
              }
  
              return match;
          },
  
          "PSEUDO": function( match ) {
              var excess,
                  unquoted = !match[6] && match[2];
  
              if ( matchExpr["CHILD"].test( match[0] ) ) {
                  return null;
              }
  
              // Accept quoted arguments as-is
              if ( match[3] ) {
                  match[2] = match[4] || match[5] || "";
  
              // Strip excess characters from unquoted arguments
              } else if ( unquoted && rpseudo.test( unquoted ) &&
                  // Get excess from tokenize (recursively)
                  (excess = tokenize( unquoted, true )) &&
                  // advance to the next closing parenthesis
                  (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
  
                  // excess is a negative index
                  match[0] = match[0].slice( 0, excess );
                  match[2] = unquoted.slice( 0, excess );
              }
  
              // Return only captures needed by the pseudo filter method (type and argument)
              return match.slice( 0, 3 );
          }
      },
  
      filter: {
  
          "TAG": function( nodeNameSelector ) {
              var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
              return nodeNameSelector === "*" ?
                  function() { return true; } :
                  function( elem ) {
                      return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                  };
          },
  
          "CLASS": function( className ) {
              var pattern = classCache[ className + " " ];
  
              return pattern ||
                  (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                  classCache( className, function( elem ) {
                      return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
                  });
          },
  
          "ATTR": function( name, operator, check ) {
              return function( elem ) {
                  var result = Sizzle.attr( elem, name );
  
                  if ( result == null ) {
                      return operator === "!=";
                  }
                  if ( !operator ) {
                      return true;
                  }
  
                  result += "";
  
                  return operator === "=" ? result === check :
                      operator === "!=" ? result !== check :
                      operator === "^=" ? check && result.indexOf( check ) === 0 :
                      operator === "*=" ? check && result.indexOf( check ) > -1 :
                      operator === "$=" ? check && result.slice( -check.length ) === check :
                      operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
                      operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                      false;
              };
          },
  
          "CHILD": function( type, what, argument, first, last ) {
              var simple = type.slice( 0, 3 ) !== "nth",
                  forward = type.slice( -4 ) !== "last",
                  ofType = what === "of-type";
  
              return first === 1 && last === 0 ?
  
                  // Shortcut for :nth-*(n)
                  function( elem ) {
                      return !!elem.parentNode;
                  } :
  
                  function( elem, context, xml ) {
                      var cache, uniqueCache, outerCache, node, nodeIndex, start,
                          dir = simple !== forward ? "nextSibling" : "previousSibling",
                          parent = elem.parentNode,
                          name = ofType && elem.nodeName.toLowerCase(),
                          useCache = !xml && !ofType,
                          diff = false;
  
                      if ( parent ) {
  
                          // :(first|last|only)-(child|of-type)
                          if ( simple ) {
                              while ( dir ) {
                                  node = elem;
                                  while ( (node = node[ dir ]) ) {
                                      if ( ofType ?
                                          node.nodeName.toLowerCase() === name :
                                          node.nodeType === 1 ) {
  
                                          return false;
                                      }
                                  }
                                  // Reverse direction for :only-* (if we haven't yet done so)
                                  start = dir = type === "only" && !start && "nextSibling";
                              }
                              return true;
                          }
  
                          start = [ forward ? parent.firstChild : parent.lastChild ];
  
                          // non-xml :nth-child(...) stores cache data on `parent`
                          if ( forward && useCache ) {
  
                              // Seek `elem` from a previously-cached index
  
                              // ...in a gzip-friendly way
                              node = parent;
                              outerCache = node[ expando ] || (node[ expando ] = {});
  
                              // Support: IE <9 only
                              // Defend against cloned attroperties (jQuery gh-1709)
                              uniqueCache = outerCache[ node.uniqueID ] ||
                                  (outerCache[ node.uniqueID ] = {});
  
                              cache = uniqueCache[ type ] || [];
                              nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                              diff = nodeIndex && cache[ 2 ];
                              node = nodeIndex && parent.childNodes[ nodeIndex ];
  
                              while ( (node = ++nodeIndex && node && node[ dir ] ||
  
                                  // Fallback to seeking `elem` from the start
                                  (diff = nodeIndex = 0) || start.pop()) ) {
  
                                  // When found, cache indexes on `parent` and break
                                  if ( node.nodeType === 1 && ++diff && node === elem ) {
                                      uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                      break;
                                  }
                              }
  
                          } else {
                              // Use previously-cached element index if available
                              if ( useCache ) {
                                  // ...in a gzip-friendly way
                                  node = elem;
                                  outerCache = node[ expando ] || (node[ expando ] = {});
  
                                  // Support: IE <9 only
                                  // Defend against cloned attroperties (jQuery gh-1709)
                                  uniqueCache = outerCache[ node.uniqueID ] ||
                                      (outerCache[ node.uniqueID ] = {});
  
                                  cache = uniqueCache[ type ] || [];
                                  nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                  diff = nodeIndex;
                              }
  
                              // xml :nth-child(...)
                              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                              if ( diff === false ) {
                                  // Use the same loop as above to seek `elem` from the start
                                  while ( (node = ++nodeIndex && node && node[ dir ] ||
                                      (diff = nodeIndex = 0) || start.pop()) ) {
  
                                      if ( ( ofType ?
                                          node.nodeName.toLowerCase() === name :
                                          node.nodeType === 1 ) &&
                                          ++diff ) {
  
                                          // Cache the index of each encountered element
                                          if ( useCache ) {
                                              outerCache = node[ expando ] || (node[ expando ] = {});
  
                                              // Support: IE <9 only
                                              // Defend against cloned attroperties (jQuery gh-1709)
                                              uniqueCache = outerCache[ node.uniqueID ] ||
                                                  (outerCache[ node.uniqueID ] = {});
  
                                              uniqueCache[ type ] = [ dirruns, diff ];
                                          }
  
                                          if ( node === elem ) {
                                              break;
                                          }
                                      }
                                  }
                              }
                          }
  
                          // Incorporate the offset, then check against cycle size
                          diff -= last;
                          return diff === first || ( diff % first === 0 && diff / first >= 0 );
                      }
                  };
          },
  
          "PSEUDO": function( pseudo, argument ) {
              // pseudo-class names are case-insensitive
              // http://www.w3.org/TR/selectors/#pseudo-classes
              // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
              // Remember that setFilters inherits from pseudos
              var args,
                  fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                      Sizzle.error( "unsupported pseudo: " + pseudo );
  
              // The user may use createPseudo to indicate that
              // arguments are needed to create the filter function
              // just as Sizzle does
              if ( fn[ expando ] ) {
                  return fn( argument );
              }
  
              // But maintain support for old signatures
              if ( fn.length > 1 ) {
                  args = [ pseudo, pseudo, "", argument ];
                  return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                      markFunction(function( seed, matches ) {
                          var idx,
                              matched = fn( seed, argument ),
                              i = matched.length;
                          while ( i-- ) {
                              idx = indexOf( seed, matched[i] );
                              seed[ idx ] = !( matches[ idx ] = matched[i] );
                          }
                      }) :
                      function( elem ) {
                          return fn( elem, 0, args );
                      };
              }
  
              return fn;
          }
      },
  
      pseudos: {
          // Potentially complex pseudos
          "not": markFunction(function( selector ) {
              // Trim the selector passed to compile
              // to avoid treating leading and trailing
              // spaces as combinators
              var input = [],
                  results = [],
                  matcher = compile( selector.replace( rtrim, "$1" ) );
  
              return matcher[ expando ] ?
                  markFunction(function( seed, matches, context, xml ) {
                      var elem,
                          unmatched = matcher( seed, null, xml, [] ),
                          i = seed.length;
  
                      // Match elements unmatched by `matcher`
                      while ( i-- ) {
                          if ( (elem = unmatched[i]) ) {
                              seed[i] = !(matches[i] = elem);
                          }
                      }
                  }) :
                  function( elem, context, xml ) {
                      input[0] = elem;
                      matcher( input, null, xml, results );
                      // Don't keep the element (issue #299)
                      input[0] = null;
                      return !results.pop();
                  };
          }),
  
          "has": markFunction(function( selector ) {
              return function( elem ) {
                  return Sizzle( selector, elem ).length > 0;
              };
          }),
  
          "contains": markFunction(function( text ) {
              text = text.replace( runescape, funescape );
              return function( elem ) {
                  return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
              };
          }),
  
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // http://www.w3.org/TR/selectors/#lang-pseudo
          "lang": markFunction( function( lang ) {
              // lang value must be a valid identifier
              if ( !ridentifier.test(lang || "") ) {
                  Sizzle.error( "unsupported lang: " + lang );
              }
              lang = lang.replace( runescape, funescape ).toLowerCase();
              return function( elem ) {
                  var elemLang;
                  do {
                      if ( (elemLang = documentIsHTML ?
                          elem.lang :
                          elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
  
                          elemLang = elemLang.toLowerCase();
                          return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                      }
                  } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                  return false;
              };
          }),
  
          // Miscellaneous
          "target": function( elem ) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice( 1 ) === elem.id;
          },
  
          "root": function( elem ) {
              return elem === docElem;
          },
  
          "focus": function( elem ) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
  
          // Boolean properties
          "enabled": createDisabledPseudo( false ),
          "disabled": createDisabledPseudo( true ),
  
          "checked": function( elem ) {
              // In CSS3, :checked should return both checked and selected elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              var nodeName = elem.nodeName.toLowerCase();
              return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
          },
  
          "selected": function( elem ) {
              // Accessing this property makes selected-by-default
              // options in Safari work properly
              if ( elem.parentNode ) {
                  elem.parentNode.selectedIndex;
              }
  
              return elem.selected === true;
          },
  
          // Contents
          "empty": function( elem ) {
              // http://www.w3.org/TR/selectors/#empty-pseudo
              // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
              //   but not by others (comment: 8; processing instruction: 7; etc.)
              // nodeType < 6 works because attributes (2) do not appear as children
              for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                  if ( elem.nodeType < 6 ) {
                      return false;
                  }
              }
              return true;
          },
  
          "parent": function( elem ) {
              return !Expr.pseudos["empty"]( elem );
          },
  
          // Element/input types
          "header": function( elem ) {
              return rheader.test( elem.nodeName );
          },
  
          "input": function( elem ) {
              return rinputs.test( elem.nodeName );
          },
  
          "button": function( elem ) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
          },
  
          "text": function( elem ) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" &&
                  elem.type === "text" &&
  
                  // Support: IE<8
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
          },
  
          // Position-in-collection
          "first": createPositionalPseudo(function() {
              return [ 0 ];
          }),
  
          "last": createPositionalPseudo(function( matchIndexes, length ) {
              return [ length - 1 ];
          }),
  
          "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
              return [ argument < 0 ? argument + length : argument ];
          }),
  
          "even": createPositionalPseudo(function( matchIndexes, length ) {
              var i = 0;
              for ( ; i < length; i += 2 ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "odd": createPositionalPseudo(function( matchIndexes, length ) {
              var i = 1;
              for ( ; i < length; i += 2 ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
              var i = argument < 0 ? argument + length : argument;
              for ( ; --i >= 0; ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          }),
  
          "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
              var i = argument < 0 ? argument + length : argument;
              for ( ; ++i < length; ) {
                  matchIndexes.push( i );
              }
              return matchIndexes;
          })
      }
  };
  
  Expr.pseudos["nth"] = Expr.pseudos["eq"];
  
  // Add button/input type pseudos
  for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
      Expr.pseudos[ i ] = createInputPseudo( i );
  }
  for ( i in { submit: true, reset: true } ) {
      Expr.pseudos[ i ] = createButtonPseudo( i );
  }
  
  // Easy API for creating new setFilters
  function setFilters() {}
  setFilters.prototype = Expr.filters = Expr.pseudos;
  Expr.setFilters = new setFilters();
  
  tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
      var matched, match, tokens, type,
          soFar, groups, preFilters,
          cached = tokenCache[ selector + " " ];
  
      if ( cached ) {
          return parseOnly ? 0 : cached.slice( 0 );
      }
  
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
  
      while ( soFar ) {
  
          // Comma and first run
          if ( !matched || (match = rcomma.exec( soFar )) ) {
              if ( match ) {
                  // Don't consume trailing commas as valid
                  soFar = soFar.slice( match[0].length ) || soFar;
              }
              groups.push( (tokens = []) );
          }
  
          matched = false;
  
          // Combinators
          if ( (match = rcombinators.exec( soFar )) ) {
              matched = match.shift();
              tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace( rtrim, " " )
              });
              soFar = soFar.slice( matched.length );
          }
  
          // Filters
          for ( type in Expr.filter ) {
              if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                  (match = preFilters[ type ]( match ))) ) {
                  matched = match.shift();
                  tokens.push({
                      value: matched,
                      type: type,
                      matches: match
                  });
                  soFar = soFar.slice( matched.length );
              }
          }
  
          if ( !matched ) {
              break;
          }
      }
  
      // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens
      return parseOnly ?
          soFar.length :
          soFar ?
              Sizzle.error( selector ) :
              // Cache the tokens
              tokenCache( selector, groups ).slice( 0 );
  };
  
  function toSelector( tokens ) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for ( ; i < len; i++ ) {
          selector += tokens[i].value;
      }
      return selector;
  }
  
  function addCombinator( matcher, combinator, base ) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
  
      return combinator.first ?
          // Check against closest ancestor/preceding element
          function( elem, context, xml ) {
              while ( (elem = elem[ dir ]) ) {
                  if ( elem.nodeType === 1 || checkNonElements ) {
                      return matcher( elem, context, xml );
                  }
              }
              return false;
          } :
  
          // Check against all ancestor/preceding elements
          function( elem, context, xml ) {
              var oldCache, uniqueCache, outerCache,
                  newCache = [ dirruns, doneName ];
  
              // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
              if ( xml ) {
                  while ( (elem = elem[ dir ]) ) {
                      if ( elem.nodeType === 1 || checkNonElements ) {
                          if ( matcher( elem, context, xml ) ) {
                              return true;
                          }
                      }
                  }
              } else {
                  while ( (elem = elem[ dir ]) ) {
                      if ( elem.nodeType === 1 || checkNonElements ) {
                          outerCache = elem[ expando ] || (elem[ expando ] = {});
  
                          // Support: IE <9 only
                          // Defend against cloned attroperties (jQuery gh-1709)
                          uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
  
                          if ( skip && skip === elem.nodeName.toLowerCase() ) {
                              elem = elem[ dir ] || elem;
                          } else if ( (oldCache = uniqueCache[ key ]) &&
                              oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
  
                              // Assign to newCache so results back-propagate to previous elements
                              return (newCache[ 2 ] = oldCache[ 2 ]);
                          } else {
                              // Reuse newcache so results back-propagate to previous elements
                              uniqueCache[ key ] = newCache;
  
                              // A match means we're done; a fail means we have to keep checking
                              if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                                  return true;
                              }
                          }
                      }
                  }
              }
              return false;
          };
  }
  
  function elementMatcher( matchers ) {
      return matchers.length > 1 ?
          function( elem, context, xml ) {
              var i = matchers.length;
              while ( i-- ) {
                  if ( !matchers[i]( elem, context, xml ) ) {
                      return false;
                  }
              }
              return true;
          } :
          matchers[0];
  }
  
  function multipleContexts( selector, contexts, results ) {
      var i = 0,
          len = contexts.length;
      for ( ; i < len; i++ ) {
          Sizzle( selector, contexts[i], results );
      }
      return results;
  }
  
  function condense( unmatched, map, filter, context, xml ) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
  
      for ( ; i < len; i++ ) {
          if ( (elem = unmatched[i]) ) {
              if ( !filter || filter( elem, context, xml ) ) {
                  newUnmatched.push( elem );
                  if ( mapped ) {
                      map.push( i );
                  }
              }
          }
      }
  
      return newUnmatched;
  }
  
  function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
      if ( postFilter && !postFilter[ expando ] ) {
          postFilter = setMatcher( postFilter );
      }
      if ( postFinder && !postFinder[ expando ] ) {
          postFinder = setMatcher( postFinder, postSelector );
      }
      return markFunction(function( seed, results, context, xml ) {
          var temp, i, elem,
              preMap = [],
              postMap = [],
              preexisting = results.length,
  
              // Get initial elements from seed or context
              elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
  
              // Prefilter to get matcher input, preserving a map for seed-results synchronization
              matcherIn = preFilter && ( seed || !selector ) ?
                  condense( elems, preMap, preFilter, context, xml ) :
                  elems,
  
              matcherOut = matcher ?
                  // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                  postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
  
                      // ...intermediate processing is necessary
                      [] :
  
                      // ...otherwise use results directly
                      results :
                  matcherIn;
  
          // Find primary matches
          if ( matcher ) {
              matcher( matcherIn, matcherOut, context, xml );
          }
  
          // Apply postFilter
          if ( postFilter ) {
              temp = condense( matcherOut, postMap );
              postFilter( temp, [], context, xml );
  
              // Un-match failing elements by moving them back to matcherIn
              i = temp.length;
              while ( i-- ) {
                  if ( (elem = temp[i]) ) {
                      matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                  }
              }
          }
  
          if ( seed ) {
              if ( postFinder || preFilter ) {
                  if ( postFinder ) {
                      // Get the final matcherOut by condensing this intermediate into postFinder contexts
                      temp = [];
                      i = matcherOut.length;
                      while ( i-- ) {
                          if ( (elem = matcherOut[i]) ) {
                              // Restore matcherIn since elem is not yet a final match
                              temp.push( (matcherIn[i] = elem) );
                          }
                      }
                      postFinder( null, (matcherOut = []), temp, xml );
                  }
  
                  // Move matched elements from seed to results to keep them synchronized
                  i = matcherOut.length;
                  while ( i-- ) {
                      if ( (elem = matcherOut[i]) &&
                          (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
  
                          seed[temp] = !(results[temp] = elem);
                      }
                  }
              }
  
          // Add elements to results, through postFinder if defined
          } else {
              matcherOut = condense(
                  matcherOut === results ?
                      matcherOut.splice( preexisting, matcherOut.length ) :
                      matcherOut
              );
              if ( postFinder ) {
                  postFinder( null, results, matcherOut, xml );
              } else {
                  push.apply( results, matcherOut );
              }
          }
      });
  }
  
  function matcherFromTokens( tokens ) {
      var checkContext, matcher, j,
          len = tokens.length,
          leadingRelative = Expr.relative[ tokens[0].type ],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
  
          // The foundational matcher ensures that elements are reachable from top-level context(s)
          matchContext = addCombinator( function( elem ) {
              return elem === checkContext;
          }, implicitRelative, true ),
          matchAnyContext = addCombinator( function( elem ) {
              return indexOf( checkContext, elem ) > -1;
          }, implicitRelative, true ),
          matchers = [ function( elem, context, xml ) {
              var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                  (checkContext = context).nodeType ?
                      matchContext( elem, context, xml ) :
                      matchAnyContext( elem, context, xml ) );
              // Avoid hanging onto element (issue #299)
              checkContext = null;
              return ret;
          } ];
  
      for ( ; i < len; i++ ) {
          if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
              matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
          } else {
              matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
  
              // Return special upon seeing a positional matcher
              if ( matcher[ expando ] ) {
                  // Find the next relative operator (if any) for proper handling
                  j = ++i;
                  for ( ; j < len; j++ ) {
                      if ( Expr.relative[ tokens[j].type ] ) {
                          break;
                      }
                  }
                  return setMatcher(
                      i > 1 && elementMatcher( matchers ),
                      i > 1 && toSelector(
                          // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                          tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                      ).replace( rtrim, "$1" ),
                      matcher,
                      i < j && matcherFromTokens( tokens.slice( i, j ) ),
                      j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                      j < len && toSelector( tokens )
                  );
              }
              matchers.push( matcher );
          }
      }
  
      return elementMatcher( matchers );
  }
  
  function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function( seed, context, xml, results, outermost ) {
              var elem, j, matcher,
                  matchedCount = 0,
                  i = "0",
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  // We must always have either seed elements or outermost context
                  elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                  // Use integer dirruns iff this is the outermost matcher
                  dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                  len = elems.length;
  
              if ( outermost ) {
                  outermostContext = context === document || context || outermost;
              }
  
              // Add elements passing elementMatchers directly to results
              // Support: IE<9, Safari
              // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
              for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
                  if ( byElement && elem ) {
                      j = 0;
                      if ( !context && elem.ownerDocument !== document ) {
                          setDocument( elem );
                          xml = !documentIsHTML;
                      }
                      while ( (matcher = elementMatchers[j++]) ) {
                          if ( matcher( elem, context || document, xml) ) {
                              results.push( elem );
                              break;
                          }
                      }
                      if ( outermost ) {
                          dirruns = dirrunsUnique;
                      }
                  }
  
                  // Track unmatched elements for set filters
                  if ( bySet ) {
                      // They will have gone through all possible matchers
                      if ( (elem = !matcher && elem) ) {
                          matchedCount--;
                      }
  
                      // Lengthen the array for every element, matched or not
                      if ( seed ) {
                          unmatched.push( elem );
                      }
                  }
              }
  
              // `i` is now the count of elements visited above, and adding it to `matchedCount`
              // makes the latter nonnegative.
              matchedCount += i;
  
              // Apply set filters to unmatched elements
              // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
              // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
              // no element matchers and no seed.
              // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
              // case, which will result in a "00" `matchedCount` that differs from `i` but is also
              // numerically zero.
              if ( bySet && i !== matchedCount ) {
                  j = 0;
                  while ( (matcher = setMatchers[j++]) ) {
                      matcher( unmatched, setMatched, context, xml );
                  }
  
                  if ( seed ) {
                      // Reintegrate element matches to eliminate the need for sorting
                      if ( matchedCount > 0 ) {
                          while ( i-- ) {
                              if ( !(unmatched[i] || setMatched[i]) ) {
                                  setMatched[i] = pop.call( results );
                              }
                          }
                      }
  
                      // Discard index placeholder values to get only actual matches
                      setMatched = condense( setMatched );
                  }
  
                  // Add matches to results
                  push.apply( results, setMatched );
  
                  // Seedless set matches succeeding multiple successful matchers stipulate sorting
                  if ( outermost && !seed && setMatched.length > 0 &&
                      ( matchedCount + setMatchers.length ) > 1 ) {
  
                      Sizzle.uniqueSort( results );
                  }
              }
  
              // Override manipulation of globals by nested matchers
              if ( outermost ) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
              }
  
              return unmatched;
          };
  
      return bySet ?
          markFunction( superMatcher ) :
          superMatcher;
  }
  
  compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[ selector + " " ];
  
      if ( !cached ) {
          // Generate a function of recursive functions that can be used to check each element
          if ( !match ) {
              match = tokenize( selector );
          }
          i = match.length;
          while ( i-- ) {
              cached = matcherFromTokens( match[i] );
              if ( cached[ expando ] ) {
                  setMatchers.push( cached );
              } else {
                  elementMatchers.push( cached );
              }
          }
  
          // Cache the compiled function
          cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  
          // Save selector and tokenization
          cached.selector = selector;
      }
      return cached;
  };
  
  /**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
  select = Sizzle.select = function( selector, context, results, seed ) {
      var i, tokens, token, type, find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize( (selector = compiled.selector || selector) );
  
      results = results || [];
  
      // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)
      if ( match.length === 1 ) {
  
          // Reduce context if the leading compound selector is an ID
          tokens = match[0] = match[0].slice( 0 );
          if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                  context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
  
              context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
              if ( !context ) {
                  return results;
  
              // Precompiled matchers will still verify ancestry, so step up a level
              } else if ( compiled ) {
                  context = context.parentNode;
              }
  
              selector = selector.slice( tokens.shift().value.length );
          }
  
          // Fetch a seed set for right-to-left matching
          i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
          while ( i-- ) {
              token = tokens[i];
  
              // Abort if we hit a combinator
              if ( Expr.relative[ (type = token.type) ] ) {
                  break;
              }
              if ( (find = Expr.find[ type ]) ) {
                  // Search, expanding context for leading sibling combinators
                  if ( (seed = find(
                      token.matches[0].replace( runescape, funescape ),
                      rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                  )) ) {
  
                      // If seed is empty or no tokens remain, we can return early
                      tokens.splice( i, 1 );
                      selector = seed.length && toSelector( tokens );
                      if ( !selector ) {
                          push.apply( results, seed );
                          return results;
                      }
  
                      break;
                  }
              }
          }
      }
  
      // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above
      ( compiled || compile( selector, match ) )(
          seed,
          context,
          !documentIsHTML,
          results,
          !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
      );
      return results;
  };
  
  // One-time assignments
  
  // Sort stability
  support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
  
  // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function
  support.detectDuplicates = !!hasDuplicate;
  
  // Initialize against the default document
  setDocument();
  
  // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*
  support.sortDetached = assert(function( el ) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
  });
  
  // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if ( !assert(function( el ) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#" ;
  }) ) {
      addHandle( "type|href|height|width", function( elem, name, isXML ) {
          if ( !isXML ) {
              return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
          }
      });
  }
  
  // Support: IE<9
  // Use defaultValue in place of getAttribute("value")
  if ( !support.attributes || !assert(function( el ) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute( "value", "" );
      return el.firstChild.getAttribute( "value" ) === "";
  }) ) {
      addHandle( "value", function( elem, name, isXML ) {
          if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
              return elem.defaultValue;
          }
      });
  }
  
  // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies
  if ( !assert(function( el ) {
      return el.getAttribute("disabled") == null;
  }) ) {
      addHandle( booleans, function( elem, name, isXML ) {
          var val;
          if ( !isXML ) {
              return elem[ name ] === true ? name.toLowerCase() :
                      (val = elem.getAttributeNode( name )) && val.specified ?
                      val.value :
                  null;
          }
      });
  }
  
  return Sizzle;
  
  })( window );
  
  
  
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  
  // Deprecated
  jQuery.expr[ ":" ] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  
  
  
  
  var dir = function( elem, dir, until ) {
      var matched = [],
          truncate = until !== undefined;
  
      while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
          if ( elem.nodeType === 1 ) {
              if ( truncate && jQuery( elem ).is( until ) ) {
                  break;
              }
              matched.push( elem );
          }
      }
      return matched;
  };
  
  
  var siblings = function( n, elem ) {
      var matched = [];
  
      for ( ; n; n = n.nextSibling ) {
          if ( n.nodeType === 1 && n !== elem ) {
              matched.push( n );
          }
      }
  
      return matched;
  };
  
  
  var rneedsContext = jQuery.expr.match.needsContext;
  
  
  
  function nodeName( elem, name ) {
  
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  
  };
  var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
  
  
  
  // Implement the identical functionality for filter and not
  function winnow( elements, qualifier, not ) {
      if ( isFunction( qualifier ) ) {
          return jQuery.grep( elements, function( elem, i ) {
              return !!qualifier.call( elem, i, elem ) !== not;
          } );
      }
  
      // Single element
      if ( qualifier.nodeType ) {
          return jQuery.grep( elements, function( elem ) {
              return ( elem === qualifier ) !== not;
          } );
      }
  
      // Arraylike of elements (jQuery, arguments, Array)
      if ( typeof qualifier !== "string" ) {
          return jQuery.grep( elements, function( elem ) {
              return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
          } );
      }
  
      // Filtered directly for both simple and complex selectors
      return jQuery.filter( qualifier, elements, not );
  }
  
  jQuery.filter = function( expr, elems, not ) {
      var elem = elems[ 0 ];
  
      if ( not ) {
          expr = ":not(" + expr + ")";
      }
  
      if ( elems.length === 1 && elem.nodeType === 1 ) {
          return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
      }
  
      return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
          return elem.nodeType === 1;
      } ) );
  };
  
  jQuery.fn.extend( {
      find: function( selector ) {
          var i, ret,
              len = this.length,
              self = this;
  
          if ( typeof selector !== "string" ) {
              return this.pushStack( jQuery( selector ).filter( function() {
                  for ( i = 0; i < len; i++ ) {
                      if ( jQuery.contains( self[ i ], this ) ) {
                          return true;
                      }
                  }
              } ) );
          }
  
          ret = this.pushStack( [] );
  
          for ( i = 0; i < len; i++ ) {
              jQuery.find( selector, self[ i ], ret );
          }
  
          return len > 1 ? jQuery.uniqueSort( ret ) : ret;
      },
      filter: function( selector ) {
          return this.pushStack( winnow( this, selector || [], false ) );
      },
      not: function( selector ) {
          return this.pushStack( winnow( this, selector || [], true ) );
      },
      is: function( selector ) {
          return !!winnow(
              this,
  
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test( selector ) ?
                  jQuery( selector ) :
                  selector || [],
              false
          ).length;
      }
  } );
  
  
  // Initialize a jQuery object
  
  
  // A central reference to the root jQuery(document)
  var rootjQuery,
  
      // A simple way to check for HTML strings
      // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
      // Strict HTML recognition (#11290: must start with <)
      // Shortcut simple #id case for speed
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  
      init = jQuery.fn.init = function( selector, context, root ) {
          var match, elem;
  
          // HANDLE: $(""), $(null), $(undefined), $(false)
          if ( !selector ) {
              return this;
          }
  
          // Method init() accepts an alternate rootjQuery
          // so migrate can support jQuery.sub (gh-2101)
          root = root || rootjQuery;
  
          // Handle HTML strings
          if ( typeof selector === "string" ) {
              if ( selector[ 0 ] === "<" &&
                  selector[ selector.length - 1 ] === ">" &&
                  selector.length >= 3 ) {
  
                  // Assume that strings that start and end with <> are HTML and skip the regex check
                  match = [ null, selector, null ];
  
              } else {
                  match = rquickExpr.exec( selector );
              }
  
              // Match html or make sure no context is specified for #id
              if ( match && ( match[ 1 ] || !context ) ) {
  
                  // HANDLE: $(html) -> $(array)
                  if ( match[ 1 ] ) {
                      context = context instanceof jQuery ? context[ 0 ] : context;
  
                      // Option to run scripts is true for back-compat
                      // Intentionally let the error be thrown if parseHTML is not present
                      jQuery.merge( this, jQuery.parseHTML(
                          match[ 1 ],
                          context && context.nodeType ? context.ownerDocument || context : document,
                          true
                      ) );
  
                      // HANDLE: $(html, props)
                      if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                          for ( match in context ) {
  
                              // Properties of context are called as methods if possible
                              if ( isFunction( this[ match ] ) ) {
                                  this[ match ]( context[ match ] );
  
                              // ...and otherwise set as attributes
                              } else {
                                  this.attr( match, context[ match ] );
                              }
                          }
                      }
  
                      return this;
  
                  // HANDLE: $(#id)
                  } else {
                      elem = document.getElementById( match[ 2 ] );
  
                      if ( elem ) {
  
                          // Inject the element directly into the jQuery object
                          this[ 0 ] = elem;
                          this.length = 1;
                      }
                      return this;
                  }
  
              // HANDLE: $(expr, $(...))
              } else if ( !context || context.jquery ) {
                  return ( context || root ).find( selector );
  
              // HANDLE: $(expr, context)
              // (which is just equivalent to: $(context).find(expr)
              } else {
                  return this.constructor( context ).find( selector );
              }
  
          // HANDLE: $(DOMElement)
          } else if ( selector.nodeType ) {
              this[ 0 ] = selector;
              this.length = 1;
              return this;
  
          // HANDLE: $(function)
          // Shortcut for document ready
          } else if ( isFunction( selector ) ) {
              return root.ready !== undefined ?
                  root.ready( selector ) :
  
                  // Execute immediately if ready is not present
                  selector( jQuery );
          }
  
          return jQuery.makeArray( selector, this );
      };
  
  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;
  
  // Initialize central reference
  rootjQuery = jQuery( document );
  
  
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
  
      // Methods guaranteed to produce a unique set when starting from a unique set
      guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
      };
  
  jQuery.fn.extend( {
      has: function( target ) {
          var targets = jQuery( target, this ),
              l = targets.length;
  
          return this.filter( function() {
              var i = 0;
              for ( ; i < l; i++ ) {
                  if ( jQuery.contains( this, targets[ i ] ) ) {
                      return true;
                  }
              }
          } );
      },
  
      closest: function( selectors, context ) {
          var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== "string" && jQuery( selectors );
  
          // Positional selectors never match, since there's no _selection_ context
          if ( !rneedsContext.test( selectors ) ) {
              for ( ; i < l; i++ ) {
                  for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
  
                      // Always skip document fragments
                      if ( cur.nodeType < 11 && ( targets ?
                          targets.index( cur ) > -1 :
  
                          // Don't pass non-elements to Sizzle
                          cur.nodeType === 1 &&
                              jQuery.find.matchesSelector( cur, selectors ) ) ) {
  
                          matched.push( cur );
                          break;
                      }
                  }
              }
          }
  
          return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
      },
  
      // Determine the position of an element within the set
      index: function( elem ) {
  
          // No argument, return index in parent
          if ( !elem ) {
              return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
          }
  
          // Index in selector
          if ( typeof elem === "string" ) {
              return indexOf.call( jQuery( elem ), this[ 0 ] );
          }
  
          // Locate the position of the desired element
          return indexOf.call( this,
  
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[ 0 ] : elem
          );
      },
  
      add: function( selector, context ) {
          return this.pushStack(
              jQuery.uniqueSort(
                  jQuery.merge( this.get(), jQuery( selector, context ) )
              )
          );
      },
  
      addBack: function( selector ) {
          return this.add( selector == null ?
              this.prevObject : this.prevObject.filter( selector )
          );
      }
  } );
  
  function sibling( cur, dir ) {
      while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
      return cur;
  }
  
  jQuery.each( {
      parent: function( elem ) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function( elem ) {
          return dir( elem, "parentNode" );
      },
      parentsUntil: function( elem, i, until ) {
          return dir( elem, "parentNode", until );
      },
      next: function( elem ) {
          return sibling( elem, "nextSibling" );
      },
      prev: function( elem ) {
          return sibling( elem, "previousSibling" );
      },
      nextAll: function( elem ) {
          return dir( elem, "nextSibling" );
      },
      prevAll: function( elem ) {
          return dir( elem, "previousSibling" );
      },
      nextUntil: function( elem, i, until ) {
          return dir( elem, "nextSibling", until );
      },
      prevUntil: function( elem, i, until ) {
          return dir( elem, "previousSibling", until );
      },
      siblings: function( elem ) {
          return siblings( ( elem.parentNode || {} ).firstChild, elem );
      },
      children: function( elem ) {
          return siblings( elem.firstChild );
      },
      contents: function( elem ) {
          if ( nodeName( elem, "iframe" ) ) {
              return elem.contentDocument;
          }
  
          // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
          // Treat the template element as a regular one in browsers that
          // don't support it.
          if ( nodeName( elem, "template" ) ) {
              elem = elem.content || elem;
          }
  
          return jQuery.merge( [], elem.childNodes );
      }
  }, function( name, fn ) {
      jQuery.fn[ name ] = function( until, selector ) {
          var matched = jQuery.map( this, fn, until );
  
          if ( name.slice( -5 ) !== "Until" ) {
              selector = until;
          }
  
          if ( selector && typeof selector === "string" ) {
              matched = jQuery.filter( selector, matched );
          }
  
          if ( this.length > 1 ) {
  
              // Remove duplicates
              if ( !guaranteedUnique[ name ] ) {
                  jQuery.uniqueSort( matched );
              }
  
              // Reverse order for parents* and prev-derivatives
              if ( rparentsprev.test( name ) ) {
                  matched.reverse();
              }
          }
  
          return this.pushStack( matched );
      };
  } );
  var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
  
  
  
  // Convert String-formatted options into Object-formatted ones
  function createOptions( options ) {
      var object = {};
      jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
          object[ flag ] = true;
      } );
      return object;
  }
  
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
  jQuery.Callbacks = function( options ) {
  
      // Convert options from String-formatted to Object-formatted if needed
      // (we check in cache first)
      options = typeof options === "string" ?
          createOptions( options ) :
          jQuery.extend( {}, options );
  
      var // Flag to know if list is currently firing
          firing,
  
          // Last fire value for non-forgettable lists
          memory,
  
          // Flag to know if list was already fired
          fired,
  
          // Flag to prevent firing
          locked,
  
          // Actual callback list
          list = [],
  
          // Queue of execution data for repeatable lists
          queue = [],
  
          // Index of currently firing callback (modified by add/remove as needed)
          firingIndex = -1,
  
          // Fire callbacks
          fire = function() {
  
              // Enforce single-firing
              locked = locked || options.once;
  
              // Execute callbacks for all pending executions,
              // respecting firingIndex overrides and runtime changes
              fired = firing = true;
              for ( ; queue.length; firingIndex = -1 ) {
                  memory = queue.shift();
                  while ( ++firingIndex < list.length ) {
  
                      // Run callback and check for early termination
                      if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                          options.stopOnFalse ) {
  
                          // Jump to end and forget the data so .add doesn't re-fire
                          firingIndex = list.length;
                          memory = false;
                      }
                  }
              }
  
              // Forget the data if we're done with it
              if ( !options.memory ) {
                  memory = false;
              }
  
              firing = false;
  
              // Clean up if we're done firing for good
              if ( locked ) {
  
                  // Keep an empty list if we have data for future add calls
                  if ( memory ) {
                      list = [];
  
                  // Otherwise, this object is spent
                  } else {
                      list = "";
                  }
              }
          },
  
          // Actual Callbacks object
          self = {
  
              // Add a callback or a collection of callbacks to the list
              add: function() {
                  if ( list ) {
  
                      // If we have memory from a past run, we should fire after adding
                      if ( memory && !firing ) {
                          firingIndex = list.length - 1;
                          queue.push( memory );
                      }
  
                      ( function add( args ) {
                          jQuery.each( args, function( _, arg ) {
                              if ( isFunction( arg ) ) {
                                  if ( !options.unique || !self.has( arg ) ) {
                                      list.push( arg );
                                  }
                              } else if ( arg && arg.length && toType( arg ) !== "string" ) {
  
                                  // Inspect recursively
                                  add( arg );
                              }
                          } );
                      } )( arguments );
  
                      if ( memory && !firing ) {
                          fire();
                      }
                  }
                  return this;
              },
  
              // Remove a callback from the list
              remove: function() {
                  jQuery.each( arguments, function( _, arg ) {
                      var index;
                      while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                          list.splice( index, 1 );
  
                          // Handle firing indexes
                          if ( index <= firingIndex ) {
                              firingIndex--;
                          }
                      }
                  } );
                  return this;
              },
  
              // Check if a given callback is in the list.
              // If no argument is given, return whether or not list has callbacks attached.
              has: function( fn ) {
                  return fn ?
                      jQuery.inArray( fn, list ) > -1 :
                      list.length > 0;
              },
  
              // Remove all callbacks from the list
              empty: function() {
                  if ( list ) {
                      list = [];
                  }
                  return this;
              },
  
              // Disable .fire and .add
              // Abort any current/pending executions
              // Clear all callbacks and values
              disable: function() {
                  locked = queue = [];
                  list = memory = "";
                  return this;
              },
              disabled: function() {
                  return !list;
              },
  
              // Disable .fire
              // Also disable .add unless we have memory (since it would have no effect)
              // Abort any pending executions
              lock: function() {
                  locked = queue = [];
                  if ( !memory && !firing ) {
                      list = memory = "";
                  }
                  return this;
              },
              locked: function() {
                  return !!locked;
              },
  
              // Call all callbacks with the given context and arguments
              fireWith: function( context, args ) {
                  if ( !locked ) {
                      args = args || [];
                      args = [ context, args.slice ? args.slice() : args ];
                      queue.push( args );
                      if ( !firing ) {
                          fire();
                      }
                  }
                  return this;
              },
  
              // Call all the callbacks with the given arguments
              fire: function() {
                  self.fireWith( this, arguments );
                  return this;
              },
  
              // To know if the callbacks have already been called at least once
              fired: function() {
                  return !!fired;
              }
          };
  
      return self;
  };
  
  
  function Identity( v ) {
      return v;
  }
  function Thrower( ex ) {
      throw ex;
  }
  
  function adoptValue( value, resolve, reject, noValue ) {
      var method;
  
      try {
  
          // Check for promise aspect first to privilege synchronous behavior
          if ( value && isFunction( ( method = value.promise ) ) ) {
              method.call( value ).done( resolve ).fail( reject );
  
          // Other thenables
          } else if ( value && isFunction( ( method = value.then ) ) ) {
              method.call( value, resolve, reject );
  
          // Other non-thenables
          } else {
  
              // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
              // * false: [ value ].slice( 0 ) => resolve( value )
              // * true: [ value ].slice( 1 ) => resolve()
              resolve.apply( undefined, [ value ].slice( noValue ) );
          }
  
      // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.
      } catch ( value ) {
  
          // Support: Android 4.0 only
          // Strict mode functions invoked without .call/.apply get global-object context
          reject.apply( undefined, [ value ] );
      }
  }
  
  jQuery.extend( {
  
      Deferred: function( func ) {
          var tuples = [
  
                  // action, add listener, callbacks,
                  // ... .then handlers, argument index, [final state]
                  [ "notify", "progress", jQuery.Callbacks( "memory" ),
                      jQuery.Callbacks( "memory" ), 2 ],
                  [ "resolve", "done", jQuery.Callbacks( "once memory" ),
                      jQuery.Callbacks( "once memory" ), 0, "resolved" ],
                  [ "reject", "fail", jQuery.Callbacks( "once memory" ),
                      jQuery.Callbacks( "once memory" ), 1, "rejected" ]
              ],
              state = "pending",
              promise = {
                  state: function() {
                      return state;
                  },
                  always: function() {
                      deferred.done( arguments ).fail( arguments );
                      return this;
                  },
                  "catch": function( fn ) {
                      return promise.then( null, fn );
                  },
  
                  // Keep pipe for back-compat
                  pipe: function( /* fnDone, fnFail, fnProgress */ ) {
                      var fns = arguments;
  
                      return jQuery.Deferred( function( newDefer ) {
                          jQuery.each( tuples, function( i, tuple ) {
  
                              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                              var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
  
                              // deferred.progress(function() { bind to newDefer or newDefer.notify })
                              // deferred.done(function() { bind to newDefer or newDefer.resolve })
                              // deferred.fail(function() { bind to newDefer or newDefer.reject })
                              deferred[ tuple[ 1 ] ]( function() {
                                  var returned = fn && fn.apply( this, arguments );
                                  if ( returned && isFunction( returned.promise ) ) {
                                      returned.promise()
                                          .progress( newDefer.notify )
                                          .done( newDefer.resolve )
                                          .fail( newDefer.reject );
                                  } else {
                                      newDefer[ tuple[ 0 ] + "With" ](
                                          this,
                                          fn ? [ returned ] : arguments
                                      );
                                  }
                              } );
                          } );
                          fns = null;
                      } ).promise();
                  },
                  then: function( onFulfilled, onRejected, onProgress ) {
                      var maxDepth = 0;
                      function resolve( depth, deferred, handler, special ) {
                          return function() {
                              var that = this,
                                  args = arguments,
                                  mightThrow = function() {
                                      var returned, then;
  
                                      // Support: Promises/A+ section 2.3.3.3.3
                                      // https://promisesaplus.com/#point-59
                                      // Ignore double-resolution attempts
                                      if ( depth < maxDepth ) {
                                          return;
                                      }
  
                                      returned = handler.apply( that, args );
  
                                      // Support: Promises/A+ section 2.3.1
                                      // https://promisesaplus.com/#point-48
                                      if ( returned === deferred.promise() ) {
                                          throw new TypeError( "Thenable self-resolution" );
                                      }
  
                                      // Support: Promises/A+ sections 2.3.3.1, 3.5
                                      // https://promisesaplus.com/#point-54
                                      // https://promisesaplus.com/#point-75
                                      // Retrieve `then` only once
                                      then = returned &&
  
                                          // Support: Promises/A+ section 2.3.4
                                          // https://promisesaplus.com/#point-64
                                          // Only check objects and functions for thenability
                                          ( typeof returned === "object" ||
                                              typeof returned === "function" ) &&
                                          returned.then;
  
                                      // Handle a returned thenable
                                      if ( isFunction( then ) ) {
  
                                          // Special processors (notify) just wait for resolution
                                          if ( special ) {
                                              then.call(
                                                  returned,
                                                  resolve( maxDepth, deferred, Identity, special ),
                                                  resolve( maxDepth, deferred, Thrower, special )
                                              );
  
                                          // Normal processors (resolve) also hook into progress
                                          } else {
  
                                              // ...and disregard older resolution values
                                              maxDepth++;
  
                                              then.call(
                                                  returned,
                                                  resolve( maxDepth, deferred, Identity, special ),
                                                  resolve( maxDepth, deferred, Thrower, special ),
                                                  resolve( maxDepth, deferred, Identity,
                                                      deferred.notifyWith )
                                              );
                                          }
  
                                      // Handle all other returned values
                                      } else {
  
                                          // Only substitute handlers pass on context
                                          // and multiple values (non-spec behavior)
                                          if ( handler !== Identity ) {
                                              that = undefined;
                                              args = [ returned ];
                                          }
  
                                          // Process the value(s)
                                          // Default process is resolve
                                          ( special || deferred.resolveWith )( that, args );
                                      }
                                  },
  
                                  // Only normal processors (resolve) catch and reject exceptions
                                  process = special ?
                                      mightThrow :
                                      function() {
                                          try {
                                              mightThrow();
                                          } catch ( e ) {
  
                                              if ( jQuery.Deferred.exceptionHook ) {
                                                  jQuery.Deferred.exceptionHook( e,
                                                      process.stackTrace );
                                              }
  
                                              // Support: Promises/A+ section 2.3.3.3.4.1
                                              // https://promisesaplus.com/#point-61
                                              // Ignore post-resolution exceptions
                                              if ( depth + 1 >= maxDepth ) {
  
                                                  // Only substitute handlers pass on context
                                                  // and multiple values (non-spec behavior)
                                                  if ( handler !== Thrower ) {
                                                      that = undefined;
                                                      args = [ e ];
                                                  }
  
                                                  deferred.rejectWith( that, args );
                                              }
                                          }
                                      };
  
                              // Support: Promises/A+ section 2.3.3.3.1
                              // https://promisesaplus.com/#point-57
                              // Re-resolve promises immediately to dodge false rejection from
                              // subsequent errors
                              if ( depth ) {
                                  process();
                              } else {
  
                                  // Call an optional hook to record the stack, in case of exception
                                  // since it's otherwise lost when execution goes async
                                  if ( jQuery.Deferred.getStackHook ) {
                                      process.stackTrace = jQuery.Deferred.getStackHook();
                                  }
                                  window.setTimeout( process );
                              }
                          };
                      }
  
                      return jQuery.Deferred( function( newDefer ) {
  
                          // progress_handlers.add( ... )
                          tuples[ 0 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onProgress ) ?
                                      onProgress :
                                      Identity,
                                  newDefer.notifyWith
                              )
                          );
  
                          // fulfilled_handlers.add( ... )
                          tuples[ 1 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onFulfilled ) ?
                                      onFulfilled :
                                      Identity
                              )
                          );
  
                          // rejected_handlers.add( ... )
                          tuples[ 2 ][ 3 ].add(
                              resolve(
                                  0,
                                  newDefer,
                                  isFunction( onRejected ) ?
                                      onRejected :
                                      Thrower
                              )
                          );
                      } ).promise();
                  },
  
                  // Get a promise for this deferred
                  // If obj is provided, the promise aspect is added to the object
                  promise: function( obj ) {
                      return obj != null ? jQuery.extend( obj, promise ) : promise;
                  }
              },
              deferred = {};
  
          // Add list-specific methods
          jQuery.each( tuples, function( i, tuple ) {
              var list = tuple[ 2 ],
                  stateString = tuple[ 5 ];
  
              // promise.progress = list.add
              // promise.done = list.add
              // promise.fail = list.add
              promise[ tuple[ 1 ] ] = list.add;
  
              // Handle state
              if ( stateString ) {
                  list.add(
                      function() {
  
                          // state = "resolved" (i.e., fulfilled)
                          // state = "rejected"
                          state = stateString;
                      },
  
                      // rejected_callbacks.disable
                      // fulfilled_callbacks.disable
                      tuples[ 3 - i ][ 2 ].disable,
  
                      // rejected_handlers.disable
                      // fulfilled_handlers.disable
                      tuples[ 3 - i ][ 3 ].disable,
  
                      // progress_callbacks.lock
                      tuples[ 0 ][ 2 ].lock,
  
                      // progress_handlers.lock
                      tuples[ 0 ][ 3 ].lock
                  );
              }
  
              // progress_handlers.fire
              // fulfilled_handlers.fire
              // rejected_handlers.fire
              list.add( tuple[ 3 ].fire );
  
              // deferred.notify = function() { deferred.notifyWith(...) }
              // deferred.resolve = function() { deferred.resolveWith(...) }
              // deferred.reject = function() { deferred.rejectWith(...) }
              deferred[ tuple[ 0 ] ] = function() {
                  deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
                  return this;
              };
  
              // deferred.notifyWith = list.fireWith
              // deferred.resolveWith = list.fireWith
              // deferred.rejectWith = list.fireWith
              deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
          } );
  
          // Make the deferred a promise
          promise.promise( deferred );
  
          // Call given func if any
          if ( func ) {
              func.call( deferred, deferred );
          }
  
          // All done!
          return deferred;
      },
  
      // Deferred helper
      when: function( singleValue ) {
          var
  
              // count of uncompleted subordinates
              remaining = arguments.length,
  
              // count of unprocessed arguments
              i = remaining,
  
              // subordinate fulfillment data
              resolveContexts = Array( i ),
              resolveValues = slice.call( arguments ),
  
              // the master Deferred
              master = jQuery.Deferred(),
  
              // subordinate callback factory
              updateFunc = function( i ) {
                  return function( value ) {
                      resolveContexts[ i ] = this;
                      resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                      if ( !( --remaining ) ) {
                          master.resolveWith( resolveContexts, resolveValues );
                      }
                  };
              };
  
          // Single- and empty arguments are adopted like Promise.resolve
          if ( remaining <= 1 ) {
              adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
                  !remaining );
  
              // Use .then() to unwrap secondary thenables (cf. gh-3000)
              if ( master.state() === "pending" ||
                  isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
  
                  return master.then();
              }
          }
  
          // Multiple arguments are aggregated like Promise.all array elements
          while ( i-- ) {
              adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
          }
  
          return master.promise();
      }
  } );
  
  
  // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  
  jQuery.Deferred.exceptionHook = function( error, stack ) {
  
      // Support: IE 8 - 9 only
      // Console exists when dev tools are open, which can happen at any time
      if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
          window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
      }
  };
  
  
  
  
  jQuery.readyException = function( error ) {
      window.setTimeout( function() {
          throw error;
      } );
  };
  
  
  
  
  // The deferred used on DOM ready
  var readyList = jQuery.Deferred();
  
  jQuery.fn.ready = function( fn ) {
  
      readyList
          .then( fn )
  
          // Wrap jQuery.readyException in a function so that the lookup
          // happens at the time of error handling instead of callback
          // registration.
          .catch( function( error ) {
              jQuery.readyException( error );
          } );
  
      return this;
  };
  
  jQuery.extend( {
  
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
  
      // A counter to track how many items to wait for before
      // the ready event fires. See #6781
      readyWait: 1,
  
      // Handle when the DOM is ready
      ready: function( wait ) {
  
          // Abort if there are pending holds or we're already ready
          if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
              return;
          }
  
          // Remember that the DOM is ready
          jQuery.isReady = true;
  
          // If a normal DOM Ready event fired, decrement, and wait if need be
          if ( wait !== true && --jQuery.readyWait > 0 ) {
              return;
          }
  
          // If there are functions bound, to execute
          readyList.resolveWith( document, [ jQuery ] );
      }
  } );
  
  jQuery.ready.then = readyList.then;
  
  // The ready event handler and self cleanup method
  function completed() {
      document.removeEventListener( "DOMContentLoaded", completed );
      window.removeEventListener( "load", completed );
      jQuery.ready();
  }
  
  // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon
  if ( document.readyState === "complete" ||
      ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
  
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      window.setTimeout( jQuery.ready );
  
  } else {
  
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", completed );
  
      // A fallback to window.onload, that will always work
      window.addEventListener( "load", completed );
  }
  
  
  
  
  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
      var i = 0,
          len = elems.length,
          bulk = key == null;
  
      // Sets many values
      if ( toType( key ) === "object" ) {
          chainable = true;
          for ( i in key ) {
              access( elems, fn, i, key[ i ], true, emptyGet, raw );
          }
  
      // Sets one value
      } else if ( value !== undefined ) {
          chainable = true;
  
          if ( !isFunction( value ) ) {
              raw = true;
          }
  
          if ( bulk ) {
  
              // Bulk operations run against the entire set
              if ( raw ) {
                  fn.call( elems, value );
                  fn = null;
  
              // ...except when executing function values
              } else {
                  bulk = fn;
                  fn = function( elem, key, value ) {
                      return bulk.call( jQuery( elem ), value );
                  };
              }
          }
  
          if ( fn ) {
              for ( ; i < len; i++ ) {
                  fn(
                      elems[ i ], key, raw ?
                      value :
                      value.call( elems[ i ], i, fn( elems[ i ], key ) )
                  );
              }
          }
      }
  
      if ( chainable ) {
          return elems;
      }
  
      // Gets
      if ( bulk ) {
          return fn.call( elems );
      }
  
      return len ? fn( elems[ 0 ], key ) : emptyGet;
  };
  
  
  // Matches dashed string for camelizing
  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g;
  
  // Used by camelCase as callback to replace()
  function fcamelCase( all, letter ) {
      return letter.toUpperCase();
  }
  
  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)
  function camelCase( string ) {
      return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  }
  var acceptData = function( owner ) {
  
      // Accepts only:
      //  - Node
      //    - Node.ELEMENT_NODE
      //    - Node.DOCUMENT_NODE
      //  - Object
      //    - Any
      return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
  };
  
  
  
  
  function Data() {
      this.expando = jQuery.expando + Data.uid++;
  }
  
  Data.uid = 1;
  
  Data.prototype = {
  
      cache: function( owner ) {
  
          // Check if the owner object already has a cache
          var value = owner[ this.expando ];
  
          // If not, create one
          if ( !value ) {
              value = {};
  
              // We can accept data for non-element nodes in modern browsers,
              // but we should not, see #8335.
              // Always return an empty object.
              if ( acceptData( owner ) ) {
  
                  // If it is a node unlikely to be stringify-ed or looped over
                  // use plain assignment
                  if ( owner.nodeType ) {
                      owner[ this.expando ] = value;
  
                  // Otherwise secure it in a non-enumerable property
                  // configurable must be true to allow the property to be
                  // deleted when data is removed
                  } else {
                      Object.defineProperty( owner, this.expando, {
                          value: value,
                          configurable: true
                      } );
                  }
              }
          }
  
          return value;
      },
      set: function( owner, data, value ) {
          var prop,
              cache = this.cache( owner );
  
          // Handle: [ owner, key, value ] args
          // Always use camelCase key (gh-2257)
          if ( typeof data === "string" ) {
              cache[ camelCase( data ) ] = value;
  
          // Handle: [ owner, { properties } ] args
          } else {
  
              // Copy the properties one-by-one to the cache object
              for ( prop in data ) {
                  cache[ camelCase( prop ) ] = data[ prop ];
              }
          }
          return cache;
      },
      get: function( owner, key ) {
          return key === undefined ?
              this.cache( owner ) :
  
              // Always use camelCase key (gh-2257)
              owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
      },
      access: function( owner, key, value ) {
  
          // In cases where either:
          //
          //   1. No key was specified
          //   2. A string key was specified, but no value provided
          //
          // Take the "read" path and allow the get method to determine
          // which value to return, respectively either:
          //
          //   1. The entire cache object
          //   2. The data stored at the key
          //
          if ( key === undefined ||
                  ( ( key && typeof key === "string" ) && value === undefined ) ) {
  
              return this.get( owner, key );
          }
  
          // When the key is not a string, or both a key and value
          // are specified, set or extend (existing objects) with either:
          //
          //   1. An object of properties
          //   2. A key and value
          //
          this.set( owner, key, value );
  
          // Since the "set" path can have two possible entry points
          // return the expected data based on which path was taken[*]
          return value !== undefined ? value : key;
      },
      remove: function( owner, key ) {
          var i,
              cache = owner[ this.expando ];
  
          if ( cache === undefined ) {
              return;
          }
  
          if ( key !== undefined ) {
  
              // Support array or space separated string of keys
              if ( Array.isArray( key ) ) {
  
                  // If key is an array of keys...
                  // We always set camelCase keys, so remove that.
                  key = key.map( camelCase );
              } else {
                  key = camelCase( key );
  
                  // If a key with the spaces exists, use it.
                  // Otherwise, create an array by matching non-whitespace
                  key = key in cache ?
                      [ key ] :
                      ( key.match( rnothtmlwhite ) || [] );
              }
  
              i = key.length;
  
              while ( i-- ) {
                  delete cache[ key[ i ] ];
              }
          }
  
          // Remove the expando if there's no more data
          if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
  
              // Support: Chrome <=35 - 45
              // Webkit & Blink performance suffers when deleting properties
              // from DOM nodes, so set to undefined instead
              // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
              if ( owner.nodeType ) {
                  owner[ this.expando ] = undefined;
              } else {
                  delete owner[ this.expando ];
              }
          }
      },
      hasData: function( owner ) {
          var cache = owner[ this.expando ];
          return cache !== undefined && !jQuery.isEmptyObject( cache );
      }
  };
  var dataPriv = new Data();
  
  var dataUser = new Data();
  
  
  
  //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
  
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  
  function getData( data ) {
      if ( data === "true" ) {
          return true;
      }
  
      if ( data === "false" ) {
          return false;
      }
  
      if ( data === "null" ) {
          return null;
      }
  
      // Only convert to a number if it doesn't change the string
      if ( data === +data + "" ) {
          return +data;
      }
  
      if ( rbrace.test( data ) ) {
          return JSON.parse( data );
      }
  
      return data;
  }
  
  function dataAttr( elem, key, data ) {
      var name;
  
      // If nothing was found internally, try to fetch any
      // data from the HTML5 data-* attribute
      if ( data === undefined && elem.nodeType === 1 ) {
          name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
          data = elem.getAttribute( name );
  
          if ( typeof data === "string" ) {
              try {
                  data = getData( data );
              } catch ( e ) {}
  
              // Make sure we set the data so it isn't changed later
              dataUser.set( elem, key, data );
          } else {
              data = undefined;
          }
      }
      return data;
  }
  
  jQuery.extend( {
      hasData: function( elem ) {
          return dataUser.hasData( elem ) || dataPriv.hasData( elem );
      },
  
      data: function( elem, name, data ) {
          return dataUser.access( elem, name, data );
      },
  
      removeData: function( elem, name ) {
          dataUser.remove( elem, name );
      },
  
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function( elem, name, data ) {
          return dataPriv.access( elem, name, data );
      },
  
      _removeData: function( elem, name ) {
          dataPriv.remove( elem, name );
      }
  } );
  
  jQuery.fn.extend( {
      data: function( key, value ) {
          var i, name, data,
              elem = this[ 0 ],
              attrs = elem && elem.attributes;
  
          // Gets all values
          if ( key === undefined ) {
              if ( this.length ) {
                  data = dataUser.get( elem );
  
                  if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
                      i = attrs.length;
                      while ( i-- ) {
  
                          // Support: IE 11 only
                          // The attrs elements can be null (#14894)
                          if ( attrs[ i ] ) {
                              name = attrs[ i ].name;
                              if ( name.indexOf( "data-" ) === 0 ) {
                                  name = camelCase( name.slice( 5 ) );
                                  dataAttr( elem, name, data[ name ] );
                              }
                          }
                      }
                      dataPriv.set( elem, "hasDataAttrs", true );
                  }
              }
  
              return data;
          }
  
          // Sets multiple values
          if ( typeof key === "object" ) {
              return this.each( function() {
                  dataUser.set( this, key );
              } );
          }
  
          return access( this, function( value ) {
              var data;
  
              // The calling jQuery object (element matches) is not empty
              // (and therefore has an element appears at this[ 0 ]) and the
              // `value` parameter was not undefined. An empty jQuery object
              // will result in `undefined` for elem = this[ 0 ] which will
              // throw an exception if an attempt to read a data cache is made.
              if ( elem && value === undefined ) {
  
                  // Attempt to get data from the cache
                  // The key will always be camelCased in Data
                  data = dataUser.get( elem, key );
                  if ( data !== undefined ) {
                      return data;
                  }
  
                  // Attempt to "discover" the data in
                  // HTML5 custom data-* attrs
                  data = dataAttr( elem, key );
                  if ( data !== undefined ) {
                      return data;
                  }
  
                  // We tried really hard, but the data doesn't exist.
                  return;
              }
  
              // Set the data...
              this.each( function() {
  
                  // We always store the camelCased key
                  dataUser.set( this, key, value );
              } );
          }, null, value, arguments.length > 1, null, true );
      },
  
      removeData: function( key ) {
          return this.each( function() {
              dataUser.remove( this, key );
          } );
      }
  } );
  
  
  jQuery.extend( {
      queue: function( elem, type, data ) {
          var queue;
  
          if ( elem ) {
              type = ( type || "fx" ) + "queue";
              queue = dataPriv.get( elem, type );
  
              // Speed up dequeue by getting out quickly if this is just a lookup
              if ( data ) {
                  if ( !queue || Array.isArray( data ) ) {
                      queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
                  } else {
                      queue.push( data );
                  }
              }
              return queue || [];
          }
      },
  
      dequeue: function( elem, type ) {
          type = type || "fx";
  
          var queue = jQuery.queue( elem, type ),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks( elem, type ),
              next = function() {
                  jQuery.dequeue( elem, type );
              };
  
          // If the fx queue is dequeued, always remove the progress sentinel
          if ( fn === "inprogress" ) {
              fn = queue.shift();
              startLength--;
          }
  
          if ( fn ) {
  
              // Add a progress sentinel to prevent the fx queue from being
              // automatically dequeued
              if ( type === "fx" ) {
                  queue.unshift( "inprogress" );
              }
  
              // Clear up the last queue stop function
              delete hooks.stop;
              fn.call( elem, next, hooks );
          }
  
          if ( !startLength && hooks ) {
              hooks.empty.fire();
          }
      },
  
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function( elem, type ) {
          var key = type + "queueHooks";
          return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
              empty: jQuery.Callbacks( "once memory" ).add( function() {
                  dataPriv.remove( elem, [ type + "queue", key ] );
              } )
          } );
      }
  } );
  
  jQuery.fn.extend( {
      queue: function( type, data ) {
          var setter = 2;
  
          if ( typeof type !== "string" ) {
              data = type;
              type = "fx";
              setter--;
          }
  
          if ( arguments.length < setter ) {
              return jQuery.queue( this[ 0 ], type );
          }
  
          return data === undefined ?
              this :
              this.each( function() {
                  var queue = jQuery.queue( this, type, data );
  
                  // Ensure a hooks for this queue
                  jQuery._queueHooks( this, type );
  
                  if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                      jQuery.dequeue( this, type );
                  }
              } );
      },
      dequeue: function( type ) {
          return this.each( function() {
              jQuery.dequeue( this, type );
          } );
      },
      clearQueue: function( type ) {
          return this.queue( type || "fx", [] );
      },
  
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function( type, obj ) {
          var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function() {
                  if ( !( --count ) ) {
                      defer.resolveWith( elements, [ elements ] );
                  }
              };
  
          if ( typeof type !== "string" ) {
              obj = type;
              type = undefined;
          }
          type = type || "fx";
  
          while ( i-- ) {
              tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
              if ( tmp && tmp.empty ) {
                  count++;
                  tmp.empty.add( resolve );
              }
          }
          resolve();
          return defer.promise( obj );
      }
  } );
  var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
  
  var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
  
  
  var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
  
  var isHiddenWithinTree = function( elem, el ) {
  
          // isHiddenWithinTree might be called from jQuery#filter function;
          // in that case, element will be second argument
          elem = el || elem;
  
          // Inline style trumps all
          return elem.style.display === "none" ||
              elem.style.display === "" &&
  
              // Otherwise, check computed style
              // Support: Firefox <=43 - 45
              // Disconnected elements can have computed display: none, so first confirm that elem is
              // in the document.
              jQuery.contains( elem.ownerDocument, elem ) &&
  
              jQuery.css( elem, "display" ) === "none";
      };
  
  var swap = function( elem, options, callback, args ) {
      var ret, name,
          old = {};
  
      // Remember the old values, and insert the new ones
      for ( name in options ) {
          old[ name ] = elem.style[ name ];
          elem.style[ name ] = options[ name ];
      }
  
      ret = callback.apply( elem, args || [] );
  
      // Revert the old values
      for ( name in options ) {
          elem.style[ name ] = old[ name ];
      }
  
      return ret;
  };
  
  
  
  
  function adjustCSS( elem, prop, valueParts, tween ) {
      var adjusted, scale,
          maxIterations = 20,
          currentValue = tween ?
              function() {
                  return tween.cur();
              } :
              function() {
                  return jQuery.css( elem, prop, "" );
              },
          initial = currentValue(),
          unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
  
          // Starting value computation is required for potential unit mismatches
          initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
              rcssNum.exec( jQuery.css( elem, prop ) );
  
      if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
  
          // Support: Firefox <=54
          // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
          initial = initial / 2;
  
          // Trust units reported by jQuery.css
          unit = unit || initialInUnit[ 3 ];
  
          // Iteratively approximate from a nonzero starting point
          initialInUnit = +initial || 1;
  
          while ( maxIterations-- ) {
  
              // Evaluate and update our best guess (doubling guesses that zero out).
              // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
              jQuery.style( elem, prop, initialInUnit + unit );
              if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
                  maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
  
          }
  
          initialInUnit = initialInUnit * 2;
          jQuery.style( elem, prop, initialInUnit + unit );
  
          // Make sure we update the tween properties later on
          valueParts = valueParts || [];
      }
  
      if ( valueParts ) {
          initialInUnit = +initialInUnit || +initial || 0;
  
          // Apply relative offset (+=/-=) if specified
          adjusted = valueParts[ 1 ] ?
              initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
              +valueParts[ 2 ];
          if ( tween ) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
          }
      }
      return adjusted;
  }
  
  
  var defaultDisplayMap = {};
  
  function getDefaultDisplay( elem ) {
      var temp,
          doc = elem.ownerDocument,
          nodeName = elem.nodeName,
          display = defaultDisplayMap[ nodeName ];
  
      if ( display ) {
          return display;
      }
  
      temp = doc.body.appendChild( doc.createElement( nodeName ) );
      display = jQuery.css( temp, "display" );
  
      temp.parentNode.removeChild( temp );
  
      if ( display === "none" ) {
          display = "block";
      }
      defaultDisplayMap[ nodeName ] = display;
  
      return display;
  }
  
  function showHide( elements, show ) {
      var display, elem,
          values = [],
          index = 0,
          length = elements.length;
  
      // Determine new display value for elements that need to change
      for ( ; index < length; index++ ) {
          elem = elements[ index ];
          if ( !elem.style ) {
              continue;
          }
  
          display = elem.style.display;
          if ( show ) {
  
              // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
              // check is required in this first loop unless we have a nonempty display value (either
              // inline or about-to-be-restored)
              if ( display === "none" ) {
                  values[ index ] = dataPriv.get( elem, "display" ) || null;
                  if ( !values[ index ] ) {
                      elem.style.display = "";
                  }
              }
              if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                  values[ index ] = getDefaultDisplay( elem );
              }
          } else {
              if ( display !== "none" ) {
                  values[ index ] = "none";
  
                  // Remember what we're overwriting
                  dataPriv.set( elem, "display", display );
              }
          }
      }
  
      // Set the display of the elements in a second loop to avoid constant reflow
      for ( index = 0; index < length; index++ ) {
          if ( values[ index ] != null ) {
              elements[ index ].style.display = values[ index ];
          }
      }
  
      return elements;
  }
  
  jQuery.fn.extend( {
      show: function() {
          return showHide( this, true );
      },
      hide: function() {
          return showHide( this );
      },
      toggle: function( state ) {
          if ( typeof state === "boolean" ) {
              return state ? this.show() : this.hide();
          }
  
          return this.each( function() {
              if ( isHiddenWithinTree( this ) ) {
                  jQuery( this ).show();
              } else {
                  jQuery( this ).hide();
              }
          } );
      }
  } );
  var rcheckableType = ( /^(?:checkbox|radio)$/i );
  
  var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
  
  var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );
  
  
  
  // We have to close these tags to support XHTML (#13200)
  var wrapMap = {
  
      // Support: IE <=9 only
      option: [ 1, "<select multiple='multiple'>", "</select>" ],
  
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [ 1, "<table>", "</table>" ],
      col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
      tr: [ 2, "<table><tbody>", "</tbody></table>" ],
      td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  
      _default: [ 0, "", "" ]
  };
  
  // Support: IE <=9 only
  wrapMap.optgroup = wrapMap.option;
  
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  
  
  function getAll( context, tag ) {
  
      // Support: IE <=9 - 11 only
      // Use typeof to avoid zero-argument method invocation on host objects (#15151)
      var ret;
  
      if ( typeof context.getElementsByTagName !== "undefined" ) {
          ret = context.getElementsByTagName( tag || "*" );
  
      } else if ( typeof context.querySelectorAll !== "undefined" ) {
          ret = context.querySelectorAll( tag || "*" );
  
      } else {
          ret = [];
      }
  
      if ( tag === undefined || tag && nodeName( context, tag ) ) {
          return jQuery.merge( [ context ], ret );
      }
  
      return ret;
  }
  
  
  // Mark scripts as having already been evaluated
  function setGlobalEval( elems, refElements ) {
      var i = 0,
          l = elems.length;
  
      for ( ; i < l; i++ ) {
          dataPriv.set(
              elems[ i ],
              "globalEval",
              !refElements || dataPriv.get( refElements[ i ], "globalEval" )
          );
      }
  }
  
  
  var rhtml = /<|&#?\w+;/;
  
  function buildFragment( elems, context, scripts, selection, ignored ) {
      var elem, tmp, tag, wrap, contains, j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;
  
      for ( ; i < l; i++ ) {
          elem = elems[ i ];
  
          if ( elem || elem === 0 ) {
  
              // Add nodes directly
              if ( toType( elem ) === "object" ) {
  
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
  
              // Convert non-html into a text node
              } else if ( !rhtml.test( elem ) ) {
                  nodes.push( context.createTextNode( elem ) );
  
              // Convert html into DOM nodes
              } else {
                  tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
  
                  // Deserialize a standard representation
                  tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                  wrap = wrapMap[ tag ] || wrapMap._default;
                  tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
  
                  // Descend through wrappers to the right content
                  j = wrap[ 0 ];
                  while ( j-- ) {
                      tmp = tmp.lastChild;
                  }
  
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge( nodes, tmp.childNodes );
  
                  // Remember the top-level container
                  tmp = fragment.firstChild;
  
                  // Ensure the created nodes are orphaned (#12392)
                  tmp.textContent = "";
              }
          }
      }
  
      // Remove wrapper from fragment
      fragment.textContent = "";
  
      i = 0;
      while ( ( elem = nodes[ i++ ] ) ) {
  
          // Skip elements already in the context collection (trac-4087)
          if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
              if ( ignored ) {
                  ignored.push( elem );
              }
              continue;
          }
  
          contains = jQuery.contains( elem.ownerDocument, elem );
  
          // Append to fragment
          tmp = getAll( fragment.appendChild( elem ), "script" );
  
          // Preserve script evaluation history
          if ( contains ) {
              setGlobalEval( tmp );
          }
  
          // Capture executables
          if ( scripts ) {
              j = 0;
              while ( ( elem = tmp[ j++ ] ) ) {
                  if ( rscriptType.test( elem.type || "" ) ) {
                      scripts.push( elem );
                  }
              }
          }
      }
  
      return fragment;
  }
  
  
  ( function() {
      var fragment = document.createDocumentFragment(),
          div = fragment.appendChild( document.createElement( "div" ) ),
          input = document.createElement( "input" );
  
      // Support: Android 4.0 - 4.3 only
      // Check state lost if the name is set (#11217)
      // Support: Windows Web Apps (WWA)
      // `name` and `type` must use .setAttribute for WWA (#14901)
      input.setAttribute( "type", "radio" );
      input.setAttribute( "checked", "checked" );
      input.setAttribute( "name", "t" );
  
      div.appendChild( input );
  
      // Support: Android <=4.1 only
      // Older WebKit doesn't clone checked state correctly in fragments
      support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
  
      // Support: IE <=11 only
      // Make sure textarea (and checkbox) defaultValue is properly cloned
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
  } )();
  var documentElement = document.documentElement;
  
  
  
  var
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  
  function returnTrue() {
      return true;
  }
  
  function returnFalse() {
      return false;
  }
  
  // Support: IE <=9 only
  // See #13393 for more info
  function safeActiveElement() {
      try {
          return document.activeElement;
      } catch ( err ) { }
  }
  
  function on( elem, types, selector, data, fn, one ) {
      var origFn, type;
  
      // Types can be a map of types/handlers
      if ( typeof types === "object" ) {
  
          // ( types-Object, selector, data )
          if ( typeof selector !== "string" ) {
  
              // ( types-Object, data )
              data = data || selector;
              selector = undefined;
          }
          for ( type in types ) {
              on( elem, type, selector, data, types[ type ], one );
          }
          return elem;
      }
  
      if ( data == null && fn == null ) {
  
          // ( types, fn )
          fn = selector;
          data = selector = undefined;
      } else if ( fn == null ) {
          if ( typeof selector === "string" ) {
  
              // ( types, selector, fn )
              fn = data;
              data = undefined;
          } else {
  
              // ( types, data, fn )
              fn = data;
              data = selector;
              selector = undefined;
          }
      }
      if ( fn === false ) {
          fn = returnFalse;
      } else if ( !fn ) {
          return elem;
      }
  
      if ( one === 1 ) {
          origFn = fn;
          fn = function( event ) {
  
              // Can use an empty set, since event contains the info
              jQuery().off( event );
              return origFn.apply( this, arguments );
          };
  
          // Use same guid so caller can remove using origFn
          fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
      }
      return elem.each( function() {
          jQuery.event.add( this, types, fn, data, selector );
      } );
  }
  
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {
  
      global: {},
  
      add: function( elem, types, handler, data, selector ) {
  
          var handleObjIn, eventHandle, tmp,
              events, t, handleObj,
              special, handlers, type, namespaces, origType,
              elemData = dataPriv.get( elem );
  
          // Don't attach events to noData or text/comment nodes (but allow plain objects)
          if ( !elemData ) {
              return;
          }
  
          // Caller can pass in an object of custom data in lieu of the handler
          if ( handler.handler ) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
          }
  
          // Ensure that invalid selectors throw exceptions at attach time
          // Evaluate against documentElement in case elem is a non-element node (e.g., document)
          if ( selector ) {
              jQuery.find.matchesSelector( documentElement, selector );
          }
  
          // Make sure that the handler has a unique ID, used to find/remove it later
          if ( !handler.guid ) {
              handler.guid = jQuery.guid++;
          }
  
          // Init the element's event structure and main handler, if this is the first
          if ( !( events = elemData.events ) ) {
              events = elemData.events = {};
          }
          if ( !( eventHandle = elemData.handle ) ) {
              eventHandle = elemData.handle = function( e ) {
  
                  // Discard the second event of a jQuery.event.trigger() and
                  // when an event is called after a page has unloaded
                  return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                      jQuery.event.dispatch.apply( elem, arguments ) : undefined;
              };
          }
  
          // Handle multiple events separated by a space
          types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
          t = types.length;
          while ( t-- ) {
              tmp = rtypenamespace.exec( types[ t ] ) || [];
              type = origType = tmp[ 1 ];
              namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
  
              // There *must* be a type, no attaching namespace-only handlers
              if ( !type ) {
                  continue;
              }
  
              // If event changes its type, use the special event handlers for the changed type
              special = jQuery.event.special[ type ] || {};
  
              // If selector defined, determine special event api type, otherwise given type
              type = ( selector ? special.delegateType : special.bindType ) || type;
  
              // Update special based on newly reset type
              special = jQuery.event.special[ type ] || {};
  
              // handleObj is passed to all event handlers
              handleObj = jQuery.extend( {
                  type: type,
                  origType: origType,
                  data: data,
                  handler: handler,
                  guid: handler.guid,
                  selector: selector,
                  needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                  namespace: namespaces.join( "." )
              }, handleObjIn );
  
              // Init the event handler queue if we're the first
              if ( !( handlers = events[ type ] ) ) {
                  handlers = events[ type ] = [];
                  handlers.delegateCount = 0;
  
                  // Only use addEventListener if the special events handler returns false
                  if ( !special.setup ||
                      special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
  
                      if ( elem.addEventListener ) {
                          elem.addEventListener( type, eventHandle );
                      }
                  }
              }
  
              if ( special.add ) {
                  special.add.call( elem, handleObj );
  
                  if ( !handleObj.handler.guid ) {
                      handleObj.handler.guid = handler.guid;
                  }
              }
  
              // Add to the element's handler list, delegates in front
              if ( selector ) {
                  handlers.splice( handlers.delegateCount++, 0, handleObj );
              } else {
                  handlers.push( handleObj );
              }
  
              // Keep track of which events have ever been used, for event optimization
              jQuery.event.global[ type ] = true;
          }
  
      },
  
      // Detach an event or set of events from an element
      remove: function( elem, types, handler, selector, mappedTypes ) {
  
          var j, origCount, tmp,
              events, t, handleObj,
              special, handlers, type, namespaces, origType,
              elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
  
          if ( !elemData || !( events = elemData.events ) ) {
              return;
          }
  
          // Once for each type.namespace in types; type may be omitted
          types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
          t = types.length;
          while ( t-- ) {
              tmp = rtypenamespace.exec( types[ t ] ) || [];
              type = origType = tmp[ 1 ];
              namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
  
              // Unbind all events (on this namespace, if provided) for the element
              if ( !type ) {
                  for ( type in events ) {
                      jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                  }
                  continue;
              }
  
              special = jQuery.event.special[ type ] || {};
              type = ( selector ? special.delegateType : special.bindType ) || type;
              handlers = events[ type ] || [];
              tmp = tmp[ 2 ] &&
                  new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
  
              // Remove matching events
              origCount = j = handlers.length;
              while ( j-- ) {
                  handleObj = handlers[ j ];
  
                  if ( ( mappedTypes || origType === handleObj.origType ) &&
                      ( !handler || handler.guid === handleObj.guid ) &&
                      ( !tmp || tmp.test( handleObj.namespace ) ) &&
                      ( !selector || selector === handleObj.selector ||
                          selector === "**" && handleObj.selector ) ) {
                      handlers.splice( j, 1 );
  
                      if ( handleObj.selector ) {
                          handlers.delegateCount--;
                      }
                      if ( special.remove ) {
                          special.remove.call( elem, handleObj );
                      }
                  }
              }
  
              // Remove generic event handler if we removed something and no more handlers exist
              // (avoids potential for endless recursion during removal of special event handlers)
              if ( origCount && !handlers.length ) {
                  if ( !special.teardown ||
                      special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
  
                      jQuery.removeEvent( elem, type, elemData.handle );
                  }
  
                  delete events[ type ];
              }
          }
  
          // Remove data and the expando if it's no longer used
          if ( jQuery.isEmptyObject( events ) ) {
              dataPriv.remove( elem, "handle events" );
          }
      },
  
      dispatch: function( nativeEvent ) {
  
          // Make a writable jQuery.Event from the native event object
          var event = jQuery.event.fix( nativeEvent );
  
          var i, j, ret, matched, handleObj, handlerQueue,
              args = new Array( arguments.length ),
              handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
              special = jQuery.event.special[ event.type ] || {};
  
          // Use the fix-ed jQuery.Event rather than the (read-only) native event
          args[ 0 ] = event;
  
          for ( i = 1; i < arguments.length; i++ ) {
              args[ i ] = arguments[ i ];
          }
  
          event.delegateTarget = this;
  
          // Call the preDispatch hook for the mapped type, and let it bail if desired
          if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
              return;
          }
  
          // Determine handlers
          handlerQueue = jQuery.event.handlers.call( this, event, handlers );
  
          // Run delegates first; they may want to stop propagation beneath us
          i = 0;
          while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
              event.currentTarget = matched.elem;
  
              j = 0;
              while ( ( handleObj = matched.handlers[ j++ ] ) &&
                  !event.isImmediatePropagationStopped() ) {
  
                  // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                  // a subset or equal to those in the bound event (both can have no namespace).
                  if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
  
                      event.handleObj = handleObj;
                      event.data = handleObj.data;
  
                      ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                          handleObj.handler ).apply( matched.elem, args );
  
                      if ( ret !== undefined ) {
                          if ( ( event.result = ret ) === false ) {
                              event.preventDefault();
                              event.stopPropagation();
                          }
                      }
                  }
              }
          }
  
          // Call the postDispatch hook for the mapped type
          if ( special.postDispatch ) {
              special.postDispatch.call( this, event );
          }
  
          return event.result;
      },
  
      handlers: function( event, handlers ) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors,
              handlerQueue = [],
              delegateCount = handlers.delegateCount,
              cur = event.target;
  
          // Find delegate handlers
          if ( delegateCount &&
  
              // Support: IE <=9
              // Black-hole SVG <use> instance trees (trac-13180)
              cur.nodeType &&
  
              // Support: Firefox <=42
              // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
              // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
              // Support: IE 11 only
              // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
              !( event.type === "click" && event.button >= 1 ) ) {
  
              for ( ; cur !== this; cur = cur.parentNode || this ) {
  
                  // Don't check non-elements (#13208)
                  // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                  if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
                      matchedHandlers = [];
                      matchedSelectors = {};
                      for ( i = 0; i < delegateCount; i++ ) {
                          handleObj = handlers[ i ];
  
                          // Don't conflict with Object.prototype properties (#13203)
                          sel = handleObj.selector + " ";
  
                          if ( matchedSelectors[ sel ] === undefined ) {
                              matchedSelectors[ sel ] = handleObj.needsContext ?
                                  jQuery( sel, this ).index( cur ) > -1 :
                                  jQuery.find( sel, this, null, [ cur ] ).length;
                          }
                          if ( matchedSelectors[ sel ] ) {
                              matchedHandlers.push( handleObj );
                          }
                      }
                      if ( matchedHandlers.length ) {
                          handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
                      }
                  }
              }
          }
  
          // Add the remaining (directly-bound) handlers
          cur = this;
          if ( delegateCount < handlers.length ) {
              handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
          }
  
          return handlerQueue;
      },
  
      addProp: function( name, hook ) {
          Object.defineProperty( jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
  
              get: isFunction( hook ) ?
                  function() {
                      if ( this.originalEvent ) {
                              return hook( this.originalEvent );
                      }
                  } :
                  function() {
                      if ( this.originalEvent ) {
                              return this.originalEvent[ name ];
                      }
                  },
  
              set: function( value ) {
                  Object.defineProperty( this, name, {
                      enumerable: true,
                      configurable: true,
                      writable: true,
                      value: value
                  } );
              }
          } );
      },
  
      fix: function( originalEvent ) {
          return originalEvent[ jQuery.expando ] ?
              originalEvent :
              new jQuery.Event( originalEvent );
      },
  
      special: {
          load: {
  
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
          },
          focus: {
  
              // Fire native event if possible so blur/focus sequence is correct
              trigger: function() {
                  if ( this !== safeActiveElement() && this.focus ) {
                      this.focus();
                      return false;
                  }
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if ( this === safeActiveElement() && this.blur ) {
                      this.blur();
                      return false;
                  }
              },
              delegateType: "focusout"
          },
          click: {
  
              // For checkbox, fire native event so checked state will be right
              trigger: function() {
                  if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
                      this.click();
                      return false;
                  }
              },
  
              // For cross-browser consistency, don't fire native .click() on links
              _default: function( event ) {
                  return nodeName( event.target, "a" );
              }
          },
  
          beforeunload: {
              postDispatch: function( event ) {
  
                  // Support: Firefox 20+
                  // Firefox doesn't alert if the returnValue field is not set.
                  if ( event.result !== undefined && event.originalEvent ) {
                      event.originalEvent.returnValue = event.result;
                  }
              }
          }
      }
  };
  
  jQuery.removeEvent = function( elem, type, handle ) {
  
      // This "if" is needed for plain objects
      if ( elem.removeEventListener ) {
          elem.removeEventListener( type, handle );
      }
  };
  
  jQuery.Event = function( src, props ) {
  
      // Allow instantiation without the 'new' keyword
      if ( !( this instanceof jQuery.Event ) ) {
          return new jQuery.Event( src, props );
      }
  
      // Event object
      if ( src && src.type ) {
          this.originalEvent = src;
          this.type = src.type;
  
          // Events bubbling up the document may have been marked as prevented
          // by a handler lower down the tree; reflect the correct value.
          this.isDefaultPrevented = src.defaultPrevented ||
                  src.defaultPrevented === undefined &&
  
                  // Support: Android <=2.3 only
                  src.returnValue === false ?
              returnTrue :
              returnFalse;
  
          // Create target properties
          // Support: Safari <=6 - 7 only
          // Target should not be a text node (#504, #13143)
          this.target = ( src.target && src.target.nodeType === 3 ) ?
              src.target.parentNode :
              src.target;
  
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
  
      // Event type
      } else {
          this.type = src;
      }
  
      // Put explicitly provided properties onto the event object
      if ( props ) {
          jQuery.extend( this, props );
      }
  
      // Create a timestamp if incoming event doesn't have one
      this.timeStamp = src && src.timeStamp || Date.now();
  
      // Mark it as fixed
      this[ jQuery.expando ] = true;
  };
  
  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
  
      preventDefault: function() {
          var e = this.originalEvent;
  
          this.isDefaultPrevented = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.preventDefault();
          }
      },
      stopPropagation: function() {
          var e = this.originalEvent;
  
          this.isPropagationStopped = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.stopPropagation();
          }
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
  
          this.isImmediatePropagationStopped = returnTrue;
  
          if ( e && !this.isSimulated ) {
              e.stopImmediatePropagation();
          }
  
          this.stopPropagation();
      }
  };
  
  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each( {
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
  
      which: function( event ) {
          var button = event.button;
  
          // Add which for key events
          if ( event.which == null && rkeyEvent.test( event.type ) ) {
              return event.charCode != null ? event.charCode : event.keyCode;
          }
  
          // Add which for click: 1 === left; 2 === middle; 3 === right
          if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
              if ( button & 1 ) {
                  return 1;
              }
  
              if ( button & 2 ) {
                  return 3;
              }
  
              if ( button & 4 ) {
                  return 2;
              }
  
              return 0;
          }
  
          return event.which;
      }
  }, jQuery.event.addProp );
  
  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each( {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function( orig, fix ) {
      jQuery.event.special[ orig ] = {
          delegateType: fix,
          bindType: fix,
  
          handle: function( event ) {
              var ret,
                  target = this,
                  related = event.relatedTarget,
                  handleObj = event.handleObj;
  
              // For mouseenter/leave call the handler if related is outside the target.
              // NB: No relatedTarget if the mouse left/entered the browser window
              if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
                  event.type = handleObj.origType;
                  ret = handleObj.handler.apply( this, arguments );
                  event.type = fix;
              }
              return ret;
          }
      };
  } );
  
  jQuery.fn.extend( {
  
      on: function( types, selector, data, fn ) {
          return on( this, types, selector, data, fn );
      },
      one: function( types, selector, data, fn ) {
          return on( this, types, selector, data, fn, 1 );
      },
      off: function( types, selector, fn ) {
          var handleObj, type;
          if ( types && types.preventDefault && types.handleObj ) {
  
              // ( event )  dispatched jQuery.Event
              handleObj = types.handleObj;
              jQuery( types.delegateTarget ).off(
                  handleObj.namespace ?
                      handleObj.origType + "." + handleObj.namespace :
                      handleObj.origType,
                  handleObj.selector,
                  handleObj.handler
              );
              return this;
          }
          if ( typeof types === "object" ) {
  
              // ( types-object [, selector] )
              for ( type in types ) {
                  this.off( type, selector, types[ type ] );
              }
              return this;
          }
          if ( selector === false || typeof selector === "function" ) {
  
              // ( types [, fn] )
              fn = selector;
              selector = undefined;
          }
          if ( fn === false ) {
              fn = returnFalse;
          }
          return this.each( function() {
              jQuery.event.remove( this, types, fn, selector );
          } );
      }
  } );
  
  
  var
  
      /* eslint-disable max-len */
  
      // See https://github.com/eslint/eslint/issues/3229
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  
      /* eslint-enable */
  
      // Support: IE <=10 - 11, Edge 12 - 13 only
      // In IE/Edge using regex groups here causes severe slowdowns.
      // See https://connect.microsoft.com/IE/feedback/details/1736512/
      rnoInnerhtml = /<script|<style|<link/i,
  
      // checked="checked" or checked
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  
  // Prefer a tbody over its parent table for containing new rows
  function manipulationTarget( elem, content ) {
      if ( nodeName( elem, "table" ) &&
          nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
  
          return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
      }
  
      return elem;
  }
  
  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript( elem ) {
      elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
      return elem;
  }
  function restoreScript( elem ) {
      if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
          elem.type = elem.type.slice( 5 );
      } else {
          elem.removeAttribute( "type" );
      }
  
      return elem;
  }
  
  function cloneCopyEvent( src, dest ) {
      var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
  
      if ( dest.nodeType !== 1 ) {
          return;
      }
  
      // 1. Copy private data: events, handlers, etc.
      if ( dataPriv.hasData( src ) ) {
          pdataOld = dataPriv.access( src );
          pdataCur = dataPriv.set( dest, pdataOld );
          events = pdataOld.events;
  
          if ( events ) {
              delete pdataCur.handle;
              pdataCur.events = {};
  
              for ( type in events ) {
                  for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                      jQuery.event.add( dest, type, events[ type ][ i ] );
                  }
              }
          }
      }
  
      // 2. Copy user data
      if ( dataUser.hasData( src ) ) {
          udataOld = dataUser.access( src );
          udataCur = jQuery.extend( {}, udataOld );
  
          dataUser.set( dest, udataCur );
      }
  }
  
  // Fix IE bugs, see support tests
  function fixInput( src, dest ) {
      var nodeName = dest.nodeName.toLowerCase();
  
      // Fails to persist the checked state of a cloned checkbox or radio button.
      if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
          dest.checked = src.checked;
  
      // Fails to return the selected option to the default selected state when cloning options
      } else if ( nodeName === "input" || nodeName === "textarea" ) {
          dest.defaultValue = src.defaultValue;
      }
  }
  
  function domManip( collection, args, callback, ignored ) {
  
      // Flatten any nested arrays
      args = concat.apply( [], args );
  
      var fragment, first, scripts, hasScripts, node, doc,
          i = 0,
          l = collection.length,
          iNoClone = l - 1,
          value = args[ 0 ],
          valueIsFunction = isFunction( value );
  
      // We can't cloneNode fragments that contain checked, in WebKit
      if ( valueIsFunction ||
              ( l > 1 && typeof value === "string" &&
                  !support.checkClone && rchecked.test( value ) ) ) {
          return collection.each( function( index ) {
              var self = collection.eq( index );
              if ( valueIsFunction ) {
                  args[ 0 ] = value.call( this, index, self.html() );
              }
              domManip( self, args, callback, ignored );
          } );
      }
  
      if ( l ) {
          fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
          first = fragment.firstChild;
  
          if ( fragment.childNodes.length === 1 ) {
              fragment = first;
          }
  
          // Require either new content or an interest in ignored elements to invoke the callback
          if ( first || ignored ) {
              scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
              hasScripts = scripts.length;
  
              // Use the original fragment for the last item
              // instead of the first because it can end up
              // being emptied incorrectly in certain situations (#8070).
              for ( ; i < l; i++ ) {
                  node = fragment;
  
                  if ( i !== iNoClone ) {
                      node = jQuery.clone( node, true, true );
  
                      // Keep references to cloned scripts for later restoration
                      if ( hasScripts ) {
  
                          // Support: Android <=4.0 only, PhantomJS 1 only
                          // push.apply(_, arraylike) throws on ancient WebKit
                          jQuery.merge( scripts, getAll( node, "script" ) );
                      }
                  }
  
                  callback.call( collection[ i ], node, i );
              }
  
              if ( hasScripts ) {
                  doc = scripts[ scripts.length - 1 ].ownerDocument;
  
                  // Reenable scripts
                  jQuery.map( scripts, restoreScript );
  
                  // Evaluate executable scripts on first document insertion
                  for ( i = 0; i < hasScripts; i++ ) {
                      node = scripts[ i ];
                      if ( rscriptType.test( node.type || "" ) &&
                          !dataPriv.access( node, "globalEval" ) &&
                          jQuery.contains( doc, node ) ) {
  
                          if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {
  
                              // Optional AJAX dependency, but won't run scripts if not present
                              if ( jQuery._evalUrl ) {
                                  jQuery._evalUrl( node.src );
                              }
                          } else {
                              DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
                          }
                      }
                  }
              }
          }
      }
  
      return collection;
  }
  
  function remove( elem, selector, keepData ) {
      var node,
          nodes = selector ? jQuery.filter( selector, elem ) : elem,
          i = 0;
  
      for ( ; ( node = nodes[ i ] ) != null; i++ ) {
          if ( !keepData && node.nodeType === 1 ) {
              jQuery.cleanData( getAll( node ) );
          }
  
          if ( node.parentNode ) {
              if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
                  setGlobalEval( getAll( node, "script" ) );
              }
              node.parentNode.removeChild( node );
          }
      }
  
      return elem;
  }
  
  jQuery.extend( {
      htmlPrefilter: function( html ) {
          return html.replace( rxhtmlTag, "<$1></$2>" );
      },
  
      clone: function( elem, dataAndEvents, deepDataAndEvents ) {
          var i, l, srcElements, destElements,
              clone = elem.cloneNode( true ),
              inPage = jQuery.contains( elem.ownerDocument, elem );
  
          // Fix IE cloning issues
          if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
                  !jQuery.isXMLDoc( elem ) ) {
  
              // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
              destElements = getAll( clone );
              srcElements = getAll( elem );
  
              for ( i = 0, l = srcElements.length; i < l; i++ ) {
                  fixInput( srcElements[ i ], destElements[ i ] );
              }
          }
  
          // Copy the events from the original to the clone
          if ( dataAndEvents ) {
              if ( deepDataAndEvents ) {
                  srcElements = srcElements || getAll( elem );
                  destElements = destElements || getAll( clone );
  
                  for ( i = 0, l = srcElements.length; i < l; i++ ) {
                      cloneCopyEvent( srcElements[ i ], destElements[ i ] );
                  }
              } else {
                  cloneCopyEvent( elem, clone );
              }
          }
  
          // Preserve script evaluation history
          destElements = getAll( clone, "script" );
          if ( destElements.length > 0 ) {
              setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
          }
  
          // Return the cloned set
          return clone;
      },
  
      cleanData: function( elems ) {
          var data, elem, type,
              special = jQuery.event.special,
              i = 0;
  
          for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
              if ( acceptData( elem ) ) {
                  if ( ( data = elem[ dataPriv.expando ] ) ) {
                      if ( data.events ) {
                          for ( type in data.events ) {
                              if ( special[ type ] ) {
                                  jQuery.event.remove( elem, type );
  
                              // This is a shortcut to avoid jQuery.event.remove's overhead
                              } else {
                                  jQuery.removeEvent( elem, type, data.handle );
                              }
                          }
                      }
  
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[ dataPriv.expando ] = undefined;
                  }
                  if ( elem[ dataUser.expando ] ) {
  
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[ dataUser.expando ] = undefined;
                  }
              }
          }
      }
  } );
  
  jQuery.fn.extend( {
      detach: function( selector ) {
          return remove( this, selector, true );
      },
  
      remove: function( selector ) {
          return remove( this, selector );
      },
  
      text: function( value ) {
          return access( this, function( value ) {
              return value === undefined ?
                  jQuery.text( this ) :
                  this.empty().each( function() {
                      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                          this.textContent = value;
                      }
                  } );
          }, null, value, arguments.length );
      },
  
      append: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                  var target = manipulationTarget( this, elem );
                  target.appendChild( elem );
              }
          } );
      },
  
      prepend: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                  var target = manipulationTarget( this, elem );
                  target.insertBefore( elem, target.firstChild );
              }
          } );
      },
  
      before: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.parentNode ) {
                  this.parentNode.insertBefore( elem, this );
              }
          } );
      },
  
      after: function() {
          return domManip( this, arguments, function( elem ) {
              if ( this.parentNode ) {
                  this.parentNode.insertBefore( elem, this.nextSibling );
              }
          } );
      },
  
      empty: function() {
          var elem,
              i = 0;
  
          for ( ; ( elem = this[ i ] ) != null; i++ ) {
              if ( elem.nodeType === 1 ) {
  
                  // Prevent memory leaks
                  jQuery.cleanData( getAll( elem, false ) );
  
                  // Remove any remaining nodes
                  elem.textContent = "";
              }
          }
  
          return this;
      },
  
      clone: function( dataAndEvents, deepDataAndEvents ) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
  
          return this.map( function() {
              return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
          } );
      },
  
      html: function( value ) {
          return access( this, function( value ) {
              var elem = this[ 0 ] || {},
                  i = 0,
                  l = this.length;
  
              if ( value === undefined && elem.nodeType === 1 ) {
                  return elem.innerHTML;
              }
  
              // See if we can take a shortcut and just use innerHTML
              if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                  !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
  
                  value = jQuery.htmlPrefilter( value );
  
                  try {
                      for ( ; i < l; i++ ) {
                          elem = this[ i ] || {};
  
                          // Remove element nodes and prevent memory leaks
                          if ( elem.nodeType === 1 ) {
                              jQuery.cleanData( getAll( elem, false ) );
                              elem.innerHTML = value;
                          }
                      }
  
                      elem = 0;
  
                  // If using innerHTML throws an exception, use the fallback method
                  } catch ( e ) {}
              }
  
              if ( elem ) {
                  this.empty().append( value );
              }
          }, null, value, arguments.length );
      },
  
      replaceWith: function() {
          var ignored = [];
  
          // Make the changes, replacing each non-ignored context element with the new content
          return domManip( this, arguments, function( elem ) {
              var parent = this.parentNode;
  
              if ( jQuery.inArray( this, ignored ) < 0 ) {
                  jQuery.cleanData( getAll( this ) );
                  if ( parent ) {
                      parent.replaceChild( elem, this );
                  }
              }
  
          // Force callback invocation
          }, ignored );
      }
  } );
  
  jQuery.each( {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function( name, original ) {
      jQuery.fn[ name ] = function( selector ) {
          var elems,
              ret = [],
              insert = jQuery( selector ),
              last = insert.length - 1,
              i = 0;
  
          for ( ; i <= last; i++ ) {
              elems = i === last ? this : this.clone( true );
              jQuery( insert[ i ] )[ original ]( elems );
  
              // Support: Android <=4.0 only, PhantomJS 1 only
              // .get() because push.apply(_, arraylike) throws on ancient WebKit
              push.apply( ret, elems.get() );
          }
  
          return this.pushStack( ret );
      };
  } );
  var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
  
  var getStyles = function( elem ) {
  
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
          var view = elem.ownerDocument.defaultView;
  
          if ( !view || !view.opener ) {
              view = window;
          }
  
          return view.getComputedStyle( elem );
      };
  
  var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );
  
  
  
  ( function() {
  
      // Executing both pixelPosition & boxSizingReliable tests require only one layout
      // so they're executed at the same time to save the second computation.
      function computeStyleTests() {
  
          // This is a singleton, we need to execute it only once
          if ( !div ) {
              return;
          }
  
          container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
              "margin-top:1px;padding:0;border:0";
          div.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
              "margin:auto;border:1px;padding:1px;" +
              "width:60%;top:1%";
          documentElement.appendChild( container ).appendChild( div );
  
          var divStyle = window.getComputedStyle( div );
          pixelPositionVal = divStyle.top !== "1%";
  
          // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
          reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;
  
          // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
          // Some styles come back with percentage values, even though they shouldn't
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;
  
          // Support: IE 9 - 11 only
          // Detect misreporting of content dimensions for box-sizing:border-box elements
          boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;
  
          // Support: IE 9 only
          // Detect overflow:scroll screwiness (gh-3699)
          div.style.position = "absolute";
          scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
  
          documentElement.removeChild( container );
  
          // Nullify the div so it wouldn't be stored in the memory and
          // it will also be a sign that checks already performed
          div = null;
      }
  
      function roundPixelMeasures( measure ) {
          return Math.round( parseFloat( measure ) );
      }
  
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
          reliableMarginLeftVal,
          container = document.createElement( "div" ),
          div = document.createElement( "div" );
  
      // Finish early in limited (non-browser) environments
      if ( !div.style ) {
          return;
      }
  
      // Support: IE <=9 - 11 only
      // Style of cloned element affects source element cloned (#8908)
      div.style.backgroundClip = "content-box";
      div.cloneNode( true ).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
  
      jQuery.extend( support, {
          boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
          },
          pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
          },
          reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
          }
      } );
  } )();
  
  
  function curCSS( elem, name, computed ) {
      var width, minWidth, maxWidth, ret,
  
          // Support: Firefox 51+
          // Retrieving style before computed somehow
          // fixes an issue with getting wrong values
          // on detached elements
          style = elem.style;
  
      computed = computed || getStyles( elem );
  
      // getPropertyValue is needed for:
      //   .css('filter') (IE 9 only, #12537)
      //   .css('--customProperty) (#3144)
      if ( computed ) {
          ret = computed.getPropertyValue( name ) || computed[ name ];
  
          if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
              ret = jQuery.style( elem, name );
          }
  
          // A tribute to the "awesome hack by Dean Edwards"
          // Android Browser returns percentage for some values,
          // but width seems to be reliably pixels.
          // This is against the CSSOM draft spec:
          // https://drafts.csswg.org/cssom/#resolved-values
          if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {
  
              // Remember the original values
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
  
              // Put in the new values to get a computed value out
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
  
              // Revert the changed values
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
          }
      }
  
      return ret !== undefined ?
  
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + "" :
          ret;
  }
  
  
  function addGetHookIf( conditionFn, hookFn ) {
  
      // Define the hook, we'll check on the first run if it's really needed.
      return {
          get: function() {
              if ( conditionFn() ) {
  
                  // Hook not needed (or it's not possible to use it due
                  // to missing dependency), remove it.
                  delete this.get;
                  return;
              }
  
              // Hook needed; redefine it so that the support test is not executed again.
              return ( this.get = hookFn ).apply( this, arguments );
          }
      };
  }
  
  
  var
  
      // Swappable if display is none or starts with table
      // except "table", "table-cell", or "table-caption"
      // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = { position: "absolute", visibility: "hidden", display: "block" },
      cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
      },
  
      cssPrefixes = [ "Webkit", "Moz", "ms" ],
      emptyStyle = document.createElement( "div" ).style;
  
  // Return a css property mapped to a potentially vendor prefixed property
  function vendorPropName( name ) {
  
      // Shortcut for names that are not vendor prefixed
      if ( name in emptyStyle ) {
          return name;
      }
  
      // Check for vendor prefixed names
      var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
          i = cssPrefixes.length;
  
      while ( i-- ) {
          name = cssPrefixes[ i ] + capName;
          if ( name in emptyStyle ) {
              return name;
          }
      }
  }
  
  // Return a property mapped along what jQuery.cssProps suggests or to
  // a vendor prefixed property.
  function finalPropName( name ) {
      var ret = jQuery.cssProps[ name ];
      if ( !ret ) {
          ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
      }
      return ret;
  }
  
  function setPositiveNumber( elem, value, subtract ) {
  
      // Any relative (+/-) values have already been
      // normalized at this point
      var matches = rcssNum.exec( value );
      return matches ?
  
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
          value;
  }
  
  function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
      var i = dimension === "width" ? 1 : 0,
          extra = 0,
          delta = 0;
  
      // Adjustment may not be necessary
      if ( box === ( isBorderBox ? "border" : "content" ) ) {
          return 0;
      }
  
      for ( ; i < 4; i += 2 ) {
  
          // Both box models exclude margin
          if ( box === "margin" ) {
              delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
          }
  
          // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
          if ( !isBorderBox ) {
  
              // Add padding
              delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
  
              // For "border" or "margin", add border
              if ( box !== "padding" ) {
                  delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
  
              // But still keep track of it otherwise
              } else {
                  extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
              }
  
          // If we get here with a border-box (content + padding + border), we're seeking "content" or
          // "padding" or "margin"
          } else {
  
              // For "content", subtract padding
              if ( box === "content" ) {
                  delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
              }
  
              // For "content" or "padding", subtract border
              if ( box !== "margin" ) {
                  delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
              }
          }
      }
  
      // Account for positive content-box scroll gutter when requested by providing computedVal
      if ( !isBorderBox && computedVal >= 0 ) {
  
          // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
          // Assuming integer scroll gutter, subtract the rest and round down
          delta += Math.max( 0, Math.ceil(
              elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
              computedVal -
              delta -
              extra -
              0.5
          ) );
      }
  
      return delta;
  }
  
  function getWidthOrHeight( elem, dimension, extra ) {
  
      // Start with computed style
      var styles = getStyles( elem ),
          val = curCSS( elem, dimension, styles ),
          isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          valueIsBorderBox = isBorderBox;
  
      // Support: Firefox <=54
      // Return a confounding non-pixel value or feign ignorance, as appropriate.
      if ( rnumnonpx.test( val ) ) {
          if ( !extra ) {
              return val;
          }
          val = "auto";
      }
  
      // Check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style
      valueIsBorderBox = valueIsBorderBox &&
          ( support.boxSizingReliable() || val === elem.style[ dimension ] );
  
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      if ( val === "auto" ||
          !parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {
  
          val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];
  
          // offsetWidth/offsetHeight provide border-box values
          valueIsBorderBox = true;
      }
  
      // Normalize "" and auto
      val = parseFloat( val ) || 0;
  
      // Adjust for the element's box model
      return ( val +
          boxModelAdjustment(
              elem,
              dimension,
              extra || ( isBorderBox ? "border" : "content" ),
              valueIsBorderBox,
              styles,
  
              // Provide the current computed size to request scroll gutter calculation (gh-3589)
              val
          )
      ) + "px";
  }
  
  jQuery.extend( {
  
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
          opacity: {
              get: function( elem, computed ) {
                  if ( computed ) {
  
                      // We should always get a number back from opacity
                      var ret = curCSS( elem, "opacity" );
                      return ret === "" ? "1" : ret;
                  }
              }
          }
      },
  
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
      },
  
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
  
      // Get and set the style property on a DOM Node
      style: function( elem, name, value, extra ) {
  
          // Don't set styles on text and comment nodes
          if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
              return;
          }
  
          // Make sure that we're working with the right name
          var ret, type, hooks,
              origName = camelCase( name ),
              isCustomProp = rcustomProp.test( name ),
              style = elem.style;
  
          // Make sure that we're working with the right name. We don't
          // want to query the value if it is a CSS custom property
          // since they are user-defined.
          if ( !isCustomProp ) {
              name = finalPropName( origName );
          }
  
          // Gets hook for the prefixed version, then unprefixed version
          hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
  
          // Check if we're setting a value
          if ( value !== undefined ) {
              type = typeof value;
  
              // Convert "+=" or "-=" to relative numbers (#7345)
              if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
                  value = adjustCSS( elem, name, ret );
  
                  // Fixes bug #9237
                  type = "number";
              }
  
              // Make sure that null and NaN values aren't set (#7116)
              if ( value == null || value !== value ) {
                  return;
              }
  
              // If a number was passed in, add the unit (except for certain CSS properties)
              if ( type === "number" ) {
                  value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
              }
  
              // background-* props affect original clone's values
              if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
                  style[ name ] = "inherit";
              }
  
              // If a hook was provided, use that value, otherwise just set the specified value
              if ( !hooks || !( "set" in hooks ) ||
                  ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
  
                  if ( isCustomProp ) {
                      style.setProperty( name, value );
                  } else {
                      style[ name ] = value;
                  }
              }
  
          } else {
  
              // If a hook was provided get the non-computed value from there
              if ( hooks && "get" in hooks &&
                  ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
  
                  return ret;
              }
  
              // Otherwise just get the value from the style object
              return style[ name ];
          }
      },
  
      css: function( elem, name, extra, styles ) {
          var val, num, hooks,
              origName = camelCase( name ),
              isCustomProp = rcustomProp.test( name );
  
          // Make sure that we're working with the right name. We don't
          // want to modify the value if it is a CSS custom property
          // since they are user-defined.
          if ( !isCustomProp ) {
              name = finalPropName( origName );
          }
  
          // Try prefixed name followed by the unprefixed name
          hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
  
          // If a hook was provided get the computed value from there
          if ( hooks && "get" in hooks ) {
              val = hooks.get( elem, true, extra );
          }
  
          // Otherwise, if a way to get the computed value exists, use that
          if ( val === undefined ) {
              val = curCSS( elem, name, styles );
          }
  
          // Convert "normal" to computed value
          if ( val === "normal" && name in cssNormalTransform ) {
              val = cssNormalTransform[ name ];
          }
  
          // Make numeric if forced or a qualifier was provided and val looks numeric
          if ( extra === "" || extra ) {
              num = parseFloat( val );
              return extra === true || isFinite( num ) ? num || 0 : val;
          }
  
          return val;
      }
  } );
  
  jQuery.each( [ "height", "width" ], function( i, dimension ) {
      jQuery.cssHooks[ dimension ] = {
          get: function( elem, computed, extra ) {
              if ( computed ) {
  
                  // Certain elements can have dimension info if we invisibly show them
                  // but it must have a current display style that would benefit
                  return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
  
                      // Support: Safari 8+
                      // Table columns in Safari have non-zero offsetWidth & zero
                      // getBoundingClientRect().width unless display is changed.
                      // Support: IE <=11 only
                      // Running getBoundingClientRect on a disconnected node
                      // in IE throws an error.
                      ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
                          swap( elem, cssShow, function() {
                              return getWidthOrHeight( elem, dimension, extra );
                          } ) :
                          getWidthOrHeight( elem, dimension, extra );
              }
          },
  
          set: function( elem, value, extra ) {
              var matches,
                  styles = getStyles( elem ),
                  isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                  subtract = extra && boxModelAdjustment(
                      elem,
                      dimension,
                      extra,
                      isBorderBox,
                      styles
                  );
  
              // Account for unreliable border-box dimensions by comparing offset* to computed and
              // faking a content-box to get border and padding (gh-3699)
              if ( isBorderBox && support.scrollboxSize() === styles.position ) {
                  subtract -= Math.ceil(
                      elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
                      parseFloat( styles[ dimension ] ) -
                      boxModelAdjustment( elem, dimension, "border", false, styles ) -
                      0.5
                  );
              }
  
              // Convert to pixels if value adjustment is needed
              if ( subtract && ( matches = rcssNum.exec( value ) ) &&
                  ( matches[ 3 ] || "px" ) !== "px" ) {
  
                  elem.style[ dimension ] = value;
                  value = jQuery.css( elem, dimension );
              }
  
              return setPositiveNumber( elem, value, subtract );
          }
      };
  } );
  
  jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
      function( elem, computed ) {
          if ( computed ) {
              return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
                  elem.getBoundingClientRect().left -
                      swap( elem, { marginLeft: 0 }, function() {
                          return elem.getBoundingClientRect().left;
                      } )
                  ) + "px";
          }
      }
  );
  
  // These hooks are used by animate to expand properties
  jQuery.each( {
      margin: "",
      padding: "",
      border: "Width"
  }, function( prefix, suffix ) {
      jQuery.cssHooks[ prefix + suffix ] = {
          expand: function( value ) {
              var i = 0,
                  expanded = {},
  
                  // Assumes a single number if not a string
                  parts = typeof value === "string" ? value.split( " " ) : [ value ];
  
              for ( ; i < 4; i++ ) {
                  expanded[ prefix + cssExpand[ i ] + suffix ] =
                      parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
              }
  
              return expanded;
          }
      };
  
      if ( prefix !== "margin" ) {
          jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
      }
  } );
  
  jQuery.fn.extend( {
      css: function( name, value ) {
          return access( this, function( elem, name, value ) {
              var styles, len,
                  map = {},
                  i = 0;
  
              if ( Array.isArray( name ) ) {
                  styles = getStyles( elem );
                  len = name.length;
  
                  for ( ; i < len; i++ ) {
                      map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                  }
  
                  return map;
              }
  
              return value !== undefined ?
                  jQuery.style( elem, name, value ) :
                  jQuery.css( elem, name );
          }, name, value, arguments.length > 1 );
      }
  } );
  
  
  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function( time, type ) {
      time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
      type = type || "fx";
  
      return this.queue( type, function( next, hooks ) {
          var timeout = window.setTimeout( next, time );
          hooks.stop = function() {
              window.clearTimeout( timeout );
          };
      } );
  };
  
  
  ( function() {
      var input = document.createElement( "input" ),
          select = document.createElement( "select" ),
          opt = select.appendChild( document.createElement( "option" ) );
  
      input.type = "checkbox";
  
      // Support: Android <=4.3 only
      // Default value for a checkbox should be "on"
      support.checkOn = input.value !== "";
  
      // Support: IE <=11 only
      // Must access selectedIndex to make default options select
      support.optSelected = opt.selected;
  
      // Support: IE <=11 only
      // An input loses its value after becoming a radio
      input = document.createElement( "input" );
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
  } )();
  
  
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  
  jQuery.fn.extend( {
      attr: function( name, value ) {
          return access( this, jQuery.attr, name, value, arguments.length > 1 );
      },
  
      removeAttr: function( name ) {
          return this.each( function() {
              jQuery.removeAttr( this, name );
          } );
      }
  } );
  
  jQuery.extend( {
      attr: function( elem, name, value ) {
          var ret, hooks,
              nType = elem.nodeType;
  
          // Don't get/set attributes on text, comment and attribute nodes
          if ( nType === 3 || nType === 8 || nType === 2 ) {
              return;
          }
  
          // Fallback to prop when attributes are not supported
          if ( typeof elem.getAttribute === "undefined" ) {
              return jQuery.prop( elem, name, value );
          }
  
          // Attribute hooks are determined by the lowercase version
          // Grab necessary hook if one is defined
          if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
              hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
                  ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
          }
  
          if ( value !== undefined ) {
              if ( value === null ) {
                  jQuery.removeAttr( elem, name );
                  return;
              }
  
              if ( hooks && "set" in hooks &&
                  ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                  return ret;
              }
  
              elem.setAttribute( name, value + "" );
              return value;
          }
  
          if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
              return ret;
          }
  
          ret = jQuery.find.attr( elem, name );
  
          // Non-existent attributes return null, we normalize to undefined
          return ret == null ? undefined : ret;
      },
  
      attrHooks: {
          type: {
              set: function( elem, value ) {
                  if ( !support.radioValue && value === "radio" &&
                      nodeName( elem, "input" ) ) {
                      var val = elem.value;
                      elem.setAttribute( "type", value );
                      if ( val ) {
                          elem.value = val;
                      }
                      return value;
                  }
              }
          }
      },
  
      removeAttr: function( elem, value ) {
          var name,
              i = 0,
  
              // Attribute names can contain non-HTML whitespace characters
              // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
              attrNames = value && value.match( rnothtmlwhite );
  
          if ( attrNames && elem.nodeType === 1 ) {
              while ( ( name = attrNames[ i++ ] ) ) {
                  elem.removeAttribute( name );
              }
          }
      }
  } );
  
  // Hooks for boolean attributes
  boolHook = {
      set: function( elem, value, name ) {
          if ( value === false ) {
  
              // Remove boolean attributes when set to false
              jQuery.removeAttr( elem, name );
          } else {
              elem.setAttribute( name, name );
          }
          return name;
      }
  };
  
  jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
      var getter = attrHandle[ name ] || jQuery.find.attr;
  
      attrHandle[ name ] = function( elem, name, isXML ) {
          var ret, handle,
              lowercaseName = name.toLowerCase();
  
          if ( !isXML ) {
  
              // Avoid an infinite loop by temporarily removing this function from the getter
              handle = attrHandle[ lowercaseName ];
              attrHandle[ lowercaseName ] = ret;
              ret = getter( elem, name, isXML ) != null ?
                  lowercaseName :
                  null;
              attrHandle[ lowercaseName ] = handle;
          }
          return ret;
      };
  } );
  
  
  
  
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  
  jQuery.fn.extend( {
      prop: function( name, value ) {
          return access( this, jQuery.prop, name, value, arguments.length > 1 );
      },
  
      removeProp: function( name ) {
          return this.each( function() {
              delete this[ jQuery.propFix[ name ] || name ];
          } );
      }
  } );
  
  jQuery.extend( {
      prop: function( elem, name, value ) {
          var ret, hooks,
              nType = elem.nodeType;
  
          // Don't get/set properties on text, comment and attribute nodes
          if ( nType === 3 || nType === 8 || nType === 2 ) {
              return;
          }
  
          if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
  
              // Fix name and attach hooks
              name = jQuery.propFix[ name ] || name;
              hooks = jQuery.propHooks[ name ];
          }
  
          if ( value !== undefined ) {
              if ( hooks && "set" in hooks &&
                  ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                  return ret;
              }
  
              return ( elem[ name ] = value );
          }
  
          if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
              return ret;
          }
  
          return elem[ name ];
      },
  
      propHooks: {
          tabIndex: {
              get: function( elem ) {
  
                  // Support: IE <=9 - 11 only
                  // elem.tabIndex doesn't always return the
                  // correct value when it hasn't been explicitly set
                  // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                  // Use proper attribute retrieval(#12072)
                  var tabindex = jQuery.find.attr( elem, "tabindex" );
  
                  if ( tabindex ) {
                      return parseInt( tabindex, 10 );
                  }
  
                  if (
                      rfocusable.test( elem.nodeName ) ||
                      rclickable.test( elem.nodeName ) &&
                      elem.href
                  ) {
                      return 0;
                  }
  
                  return -1;
              }
          }
      },
  
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  } );
  
  // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop
  if ( !support.optSelected ) {
      jQuery.propHooks.selected = {
          get: function( elem ) {
  
              /* eslint no-unused-expressions: "off" */
  
              var parent = elem.parentNode;
              if ( parent && parent.parentNode ) {
                  parent.parentNode.selectedIndex;
              }
              return null;
          },
          set: function( elem ) {
  
              /* eslint no-unused-expressions: "off" */
  
              var parent = elem.parentNode;
              if ( parent ) {
                  parent.selectedIndex;
  
                  if ( parent.parentNode ) {
                      parent.parentNode.selectedIndex;
                  }
              }
          }
      };
  }
  
  jQuery.each( [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
  ], function() {
      jQuery.propFix[ this.toLowerCase() ] = this;
  } );
  
  
  
  
      // Strip and collapse whitespace according to HTML spec
      // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
      function stripAndCollapse( value ) {
          var tokens = value.match( rnothtmlwhite ) || [];
          return tokens.join( " " );
      }
  
  
  function getClass( elem ) {
      return elem.getAttribute && elem.getAttribute( "class" ) || "";
  }
  
  function classesToArray( value ) {
      if ( Array.isArray( value ) ) {
          return value;
      }
      if ( typeof value === "string" ) {
          return value.match( rnothtmlwhite ) || [];
      }
      return [];
  }
  
  jQuery.fn.extend( {
      addClass: function( value ) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
              i = 0;
  
          if ( isFunction( value ) ) {
              return this.each( function( j ) {
                  jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
              } );
          }
  
          classes = classesToArray( value );
  
          if ( classes.length ) {
              while ( ( elem = this[ i++ ] ) ) {
                  curValue = getClass( elem );
                  cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
  
                  if ( cur ) {
                      j = 0;
                      while ( ( clazz = classes[ j++ ] ) ) {
                          if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                              cur += clazz + " ";
                          }
                      }
  
                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse( cur );
                      if ( curValue !== finalValue ) {
                          elem.setAttribute( "class", finalValue );
                      }
                  }
              }
          }
  
          return this;
      },
  
      removeClass: function( value ) {
          var classes, elem, cur, curValue, clazz, j, finalValue,
              i = 0;
  
          if ( isFunction( value ) ) {
              return this.each( function( j ) {
                  jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
              } );
          }
  
          if ( !arguments.length ) {
              return this.attr( "class", "" );
          }
  
          classes = classesToArray( value );
  
          if ( classes.length ) {
              while ( ( elem = this[ i++ ] ) ) {
                  curValue = getClass( elem );
  
                  // This expression is here for better compressibility (see addClass)
                  cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
  
                  if ( cur ) {
                      j = 0;
                      while ( ( clazz = classes[ j++ ] ) ) {
  
                          // Remove *all* instances
                          while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                              cur = cur.replace( " " + clazz + " ", " " );
                          }
                      }
  
                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse( cur );
                      if ( curValue !== finalValue ) {
                          elem.setAttribute( "class", finalValue );
                      }
                  }
              }
          }
  
          return this;
      },
  
      toggleClass: function( value, stateVal ) {
          var type = typeof value,
              isValidValue = type === "string" || Array.isArray( value );
  
          if ( typeof stateVal === "boolean" && isValidValue ) {
              return stateVal ? this.addClass( value ) : this.removeClass( value );
          }
  
          if ( isFunction( value ) ) {
              return this.each( function( i ) {
                  jQuery( this ).toggleClass(
                      value.call( this, i, getClass( this ), stateVal ),
                      stateVal
                  );
              } );
          }
  
          return this.each( function() {
              var className, i, self, classNames;
  
              if ( isValidValue ) {
  
                  // Toggle individual class names
                  i = 0;
                  self = jQuery( this );
                  classNames = classesToArray( value );
  
                  while ( ( className = classNames[ i++ ] ) ) {
  
                      // Check each className given, space separated list
                      if ( self.hasClass( className ) ) {
                          self.removeClass( className );
                      } else {
                          self.addClass( className );
                      }
                  }
  
              // Toggle whole class name
              } else if ( value === undefined || type === "boolean" ) {
                  className = getClass( this );
                  if ( className ) {
  
                      // Store className if set
                      dataPriv.set( this, "__className__", className );
                  }
  
                  // If the element has a class name or if we're passed `false`,
                  // then remove the whole classname (if there was one, the above saved it).
                  // Otherwise bring back whatever was previously saved (if anything),
                  // falling back to the empty string if nothing was stored.
                  if ( this.setAttribute ) {
                      this.setAttribute( "class",
                          className || value === false ?
                          "" :
                          dataPriv.get( this, "__className__" ) || ""
                      );
                  }
              }
          } );
      },
  
      hasClass: function( selector ) {
          var className, elem,
              i = 0;
  
          className = " " + selector + " ";
          while ( ( elem = this[ i++ ] ) ) {
              if ( elem.nodeType === 1 &&
                  ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
                      return true;
              }
          }
  
          return false;
      }
  } );
  
  
  
  
  var rreturn = /\r/g;
  
  jQuery.fn.extend( {
      val: function( value ) {
          var hooks, ret, valueIsFunction,
              elem = this[ 0 ];
  
          if ( !arguments.length ) {
              if ( elem ) {
                  hooks = jQuery.valHooks[ elem.type ] ||
                      jQuery.valHooks[ elem.nodeName.toLowerCase() ];
  
                  if ( hooks &&
                      "get" in hooks &&
                      ( ret = hooks.get( elem, "value" ) ) !== undefined
                  ) {
                      return ret;
                  }
  
                  ret = elem.value;
  
                  // Handle most common string cases
                  if ( typeof ret === "string" ) {
                      return ret.replace( rreturn, "" );
                  }
  
                  // Handle cases where value is null/undef or number
                  return ret == null ? "" : ret;
              }
  
              return;
          }
  
          valueIsFunction = isFunction( value );
  
          return this.each( function( i ) {
              var val;
  
              if ( this.nodeType !== 1 ) {
                  return;
              }
  
              if ( valueIsFunction ) {
                  val = value.call( this, i, jQuery( this ).val() );
              } else {
                  val = value;
              }
  
              // Treat null/undefined as ""; convert numbers to string
              if ( val == null ) {
                  val = "";
  
              } else if ( typeof val === "number" ) {
                  val += "";
  
              } else if ( Array.isArray( val ) ) {
                  val = jQuery.map( val, function( value ) {
                      return value == null ? "" : value + "";
                  } );
              }
  
              hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
  
              // If set returns undefined, fall back to normal setting
              if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
                  this.value = val;
              }
          } );
      }
  } );
  
  jQuery.extend( {
      valHooks: {
          option: {
              get: function( elem ) {
  
                  var val = jQuery.find.attr( elem, "value" );
                  return val != null ?
                      val :
  
                      // Support: IE <=10 - 11 only
                      // option.text throws exceptions (#14686, #14858)
                      // Strip and collapse whitespace
                      // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                      stripAndCollapse( jQuery.text( elem ) );
              }
          },
          select: {
              get: function( elem ) {
                  var value, option, i,
                      options = elem.options,
                      index = elem.selectedIndex,
                      one = elem.type === "select-one",
                      values = one ? null : [],
                      max = one ? index + 1 : options.length;
  
                  if ( index < 0 ) {
                      i = max;
  
                  } else {
                      i = one ? index : 0;
                  }
  
                  // Loop through all the selected options
                  for ( ; i < max; i++ ) {
                      option = options[ i ];
  
                      // Support: IE <=9 only
                      // IE8-9 doesn't update selected after form reset (#2551)
                      if ( ( option.selected || i === index ) &&
  
                              // Don't return options that are disabled or in a disabled optgroup
                              !option.disabled &&
                              ( !option.parentNode.disabled ||
                                  !nodeName( option.parentNode, "optgroup" ) ) ) {
  
                          // Get the specific value for the option
                          value = jQuery( option ).val();
  
                          // We don't need an array for one selects
                          if ( one ) {
                              return value;
                          }
  
                          // Multi-Selects return an array
                          values.push( value );
                      }
                  }
  
                  return values;
              },
  
              set: function( elem, value ) {
                  var optionSet, option,
                      options = elem.options,
                      values = jQuery.makeArray( value ),
                      i = options.length;
  
                  while ( i-- ) {
                      option = options[ i ];
  
                      /* eslint-disable no-cond-assign */
  
                      if ( option.selected =
                          jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
                      ) {
                          optionSet = true;
                      }
  
                      /* eslint-enable no-cond-assign */
                  }
  
                  // Force browsers to behave consistently when non-matching value is set
                  if ( !optionSet ) {
                      elem.selectedIndex = -1;
                  }
                  return values;
              }
          }
      }
  } );
  
  // Radios and checkboxes getter/setter
  jQuery.each( [ "radio", "checkbox" ], function() {
      jQuery.valHooks[ this ] = {
          set: function( elem, value ) {
              if ( Array.isArray( value ) ) {
                  return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
              }
          }
      };
      if ( !support.checkOn ) {
          jQuery.valHooks[ this ].get = function( elem ) {
              return elem.getAttribute( "value" ) === null ? "on" : elem.value;
          };
      }
  } );
  
  
  
  
  // Return jQuery for attributes-only inclusion
  
  
  support.focusin = "onfocusin" in window;
  
  
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function( e ) {
          e.stopPropagation();
      };
  
  jQuery.extend( jQuery.event, {
  
      trigger: function( event, data, elem, onlyHandlers ) {
  
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
              eventPath = [ elem || document ],
              type = hasOwn.call( event, "type" ) ? event.type : event,
              namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
  
          cur = lastElement = tmp = elem = elem || document;
  
          // Don't do events on text and comment nodes
          if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
              return;
          }
  
          // focus/blur morphs to focusin/out; ensure we're not firing them right now
          if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
              return;
          }
  
          if ( type.indexOf( "." ) > -1 ) {
  
              // Namespaced trigger; create a regexp to match event type in handle()
              namespaces = type.split( "." );
              type = namespaces.shift();
              namespaces.sort();
          }
          ontype = type.indexOf( ":" ) < 0 && "on" + type;
  
          // Caller can pass in a jQuery.Event object, Object, or just an event type string
          event = event[ jQuery.expando ] ?
              event :
              new jQuery.Event( type, typeof event === "object" && event );
  
          // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join( "." );
          event.rnamespace = event.namespace ?
              new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
              null;
  
          // Clean up the event in case it is being reused
          event.result = undefined;
          if ( !event.target ) {
              event.target = elem;
          }
  
          // Clone any incoming data and prepend the event, creating the handler arg list
          data = data == null ?
              [ event ] :
              jQuery.makeArray( data, [ event ] );
  
          // Allow special events to draw outside the lines
          special = jQuery.event.special[ type ] || {};
          if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
              return;
          }
  
          // Determine event propagation path in advance, per W3C events spec (#9951)
          // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
          if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {
  
              bubbleType = special.delegateType || type;
              if ( !rfocusMorph.test( bubbleType + type ) ) {
                  cur = cur.parentNode;
              }
              for ( ; cur; cur = cur.parentNode ) {
                  eventPath.push( cur );
                  tmp = cur;
              }
  
              // Only add window if we got to document (e.g., not plain obj or detached DOM)
              if ( tmp === ( elem.ownerDocument || document ) ) {
                  eventPath.push( tmp.defaultView || tmp.parentWindow || window );
              }
          }
  
          // Fire handlers on the event path
          i = 0;
          while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
              lastElement = cur;
              event.type = i > 1 ?
                  bubbleType :
                  special.bindType || type;
  
              // jQuery handler
              handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
                  dataPriv.get( cur, "handle" );
              if ( handle ) {
                  handle.apply( cur, data );
              }
  
              // Native handler
              handle = ontype && cur[ ontype ];
              if ( handle && handle.apply && acceptData( cur ) ) {
                  event.result = handle.apply( cur, data );
                  if ( event.result === false ) {
                      event.preventDefault();
                  }
              }
          }
          event.type = type;
  
          // If nobody prevented the default action, do it now
          if ( !onlyHandlers && !event.isDefaultPrevented() ) {
  
              if ( ( !special._default ||
                  special._default.apply( eventPath.pop(), data ) === false ) &&
                  acceptData( elem ) ) {
  
                  // Call a native DOM method on the target with the same name as the event.
                  // Don't do default actions on window, that's where global variables be (#6170)
                  if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {
  
                      // Don't re-trigger an onFOO event when we call its FOO() method
                      tmp = elem[ ontype ];
  
                      if ( tmp ) {
                          elem[ ontype ] = null;
                      }
  
                      // Prevent re-triggering of the same event, since we already bubbled it above
                      jQuery.event.triggered = type;
  
                      if ( event.isPropagationStopped() ) {
                          lastElement.addEventListener( type, stopPropagationCallback );
                      }
  
                      elem[ type ]();
  
                      if ( event.isPropagationStopped() ) {
                          lastElement.removeEventListener( type, stopPropagationCallback );
                      }
  
                      jQuery.event.triggered = undefined;
  
                      if ( tmp ) {
                          elem[ ontype ] = tmp;
                      }
                  }
              }
          }
  
          return event.result;
      },
  
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function( type, elem, event ) {
          var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                  type: type,
                  isSimulated: true
              }
          );
  
          jQuery.event.trigger( e, null, elem );
      }
  
  } );
  
  jQuery.fn.extend( {
  
      trigger: function( type, data ) {
          return this.each( function() {
              jQuery.event.trigger( type, data, this );
          } );
      },
      triggerHandler: function( type, data ) {
          var elem = this[ 0 ];
          if ( elem ) {
              return jQuery.event.trigger( type, data, elem, true );
          }
      }
  } );
  
  
  // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
  if ( !support.focusin ) {
      jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
  
          // Attach a single capturing handler on the document while someone wants focusin/focusout
          var handler = function( event ) {
              jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
          };
  
          jQuery.event.special[ fix ] = {
              setup: function() {
                  var doc = this.ownerDocument || this,
                      attaches = dataPriv.access( doc, fix );
  
                  if ( !attaches ) {
                      doc.addEventListener( orig, handler, true );
                  }
                  dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
              },
              teardown: function() {
                  var doc = this.ownerDocument || this,
                      attaches = dataPriv.access( doc, fix ) - 1;
  
                  if ( !attaches ) {
                      doc.removeEventListener( orig, handler, true );
                      dataPriv.remove( doc, fix );
  
                  } else {
                      dataPriv.access( doc, fix, attaches );
                  }
              }
          };
      } );
  }
  
  
  var
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  
  function buildParams( prefix, obj, traditional, add ) {
      var name;
  
      if ( Array.isArray( obj ) ) {
  
          // Serialize array item.
          jQuery.each( obj, function( i, v ) {
              if ( traditional || rbracket.test( prefix ) ) {
  
                  // Treat each array item as a scalar.
                  add( prefix, v );
  
              } else {
  
                  // Item is non-scalar (array or object), encode its numeric index.
                  buildParams(
                      prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                      v,
                      traditional,
                      add
                  );
              }
          } );
  
      } else if ( !traditional && toType( obj ) === "object" ) {
  
          // Serialize object item.
          for ( name in obj ) {
              buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
          }
  
      } else {
  
          // Serialize scalar item.
          add( prefix, obj );
      }
  }
  
  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function( a, traditional ) {
      var prefix,
          s = [],
          add = function( key, valueOrFunction ) {
  
              // If value is a function, invoke it and use its return value
              var value = isFunction( valueOrFunction ) ?
                  valueOrFunction() :
                  valueOrFunction;
  
              s[ s.length ] = encodeURIComponent( key ) + "=" +
                  encodeURIComponent( value == null ? "" : value );
          };
  
      // If an array was passed in, assume that it is an array of form elements.
      if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
  
          // Serialize the form elements
          jQuery.each( a, function() {
              add( this.name, this.value );
          } );
  
      } else {
  
          // If traditional, encode the "old" way (the way 1.3.2 or older
          // did it), otherwise encode params recursively.
          for ( prefix in a ) {
              buildParams( prefix, a[ prefix ], traditional, add );
          }
      }
  
      // Return the resulting serialization
      return s.join( "&" );
  };
  
  jQuery.fn.extend( {
      serialize: function() {
          return jQuery.param( this.serializeArray() );
      },
      serializeArray: function() {
          return this.map( function() {
  
              // Can add propHook for "elements" to filter or add form elements
              var elements = jQuery.prop( this, "elements" );
              return elements ? jQuery.makeArray( elements ) : this;
          } )
          .filter( function() {
              var type = this.type;
  
              // Use .is( ":disabled" ) so that fieldset[disabled] works
              return this.name && !jQuery( this ).is( ":disabled" ) &&
                  rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                  ( this.checked || !rcheckableType.test( type ) );
          } )
          .map( function( i, elem ) {
              var val = jQuery( this ).val();
  
              if ( val == null ) {
                  return null;
              }
  
              if ( Array.isArray( val ) ) {
                  return jQuery.map( val, function( val ) {
                      return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                  } );
              }
  
              return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          } ).get();
      }
  } );
  
  
  jQuery.fn.extend( {
      wrapAll: function( html ) {
          var wrap;
  
          if ( this[ 0 ] ) {
              if ( isFunction( html ) ) {
                  html = html.call( this[ 0 ] );
              }
  
              // The elements to wrap the target around
              wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
  
              if ( this[ 0 ].parentNode ) {
                  wrap.insertBefore( this[ 0 ] );
              }
  
              wrap.map( function() {
                  var elem = this;
  
                  while ( elem.firstElementChild ) {
                      elem = elem.firstElementChild;
                  }
  
                  return elem;
              } ).append( this );
          }
  
          return this;
      },
  
      wrapInner: function( html ) {
          if ( isFunction( html ) ) {
              return this.each( function( i ) {
                  jQuery( this ).wrapInner( html.call( this, i ) );
              } );
          }
  
          return this.each( function() {
              var self = jQuery( this ),
                  contents = self.contents();
  
              if ( contents.length ) {
                  contents.wrapAll( html );
  
              } else {
                  self.append( html );
              }
          } );
      },
  
      wrap: function( html ) {
          var htmlIsFunction = isFunction( html );
  
          return this.each( function( i ) {
              jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
          } );
      },
  
      unwrap: function( selector ) {
          this.parent( selector ).not( "body" ).each( function() {
              jQuery( this ).replaceWith( this.childNodes );
          } );
          return this;
      }
  } );
  
  
  jQuery.expr.pseudos.hidden = function( elem ) {
      return !jQuery.expr.pseudos.visible( elem );
  };
  jQuery.expr.pseudos.visible = function( elem ) {
      return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
  };
  
  
  
  
  // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337
  support.createHTMLDocument = ( function() {
      var body = document.implementation.createHTMLDocument( "" ).body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
  } )();
  
  
  // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function( data, context, keepScripts ) {
      if ( typeof data !== "string" ) {
          return [];
      }
      if ( typeof context === "boolean" ) {
          keepScripts = context;
          context = false;
      }
  
      var base, parsed, scripts;
  
      if ( !context ) {
  
          // Stop scripts or inline event handlers from being executed immediately
          // by using document.implementation
          if ( support.createHTMLDocument ) {
              context = document.implementation.createHTMLDocument( "" );
  
              // Set the base href for the created document
              // so any parsed elements with URLs
              // are based on the document's URL (gh-2965)
              base = context.createElement( "base" );
              base.href = document.location.href;
              context.head.appendChild( base );
          } else {
              context = document;
          }
      }
  
      parsed = rsingleTag.exec( data );
      scripts = !keepScripts && [];
  
      // Single tag
      if ( parsed ) {
          return [ context.createElement( parsed[ 1 ] ) ];
      }
  
      parsed = buildFragment( [ data ], context, scripts );
  
      if ( scripts && scripts.length ) {
          jQuery( scripts ).remove();
      }
  
      return jQuery.merge( [], parsed.childNodes );
  };
  
  
  jQuery.offset = {
      setOffset: function( elem, options, i ) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
              position = jQuery.css( elem, "position" ),
              curElem = jQuery( elem ),
              props = {};
  
          // Set position first, in-case top/left are set even on static elem
          if ( position === "static" ) {
              elem.style.position = "relative";
          }
  
          curOffset = curElem.offset();
          curCSSTop = jQuery.css( elem, "top" );
          curCSSLeft = jQuery.css( elem, "left" );
          calculatePosition = ( position === "absolute" || position === "fixed" ) &&
              ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
  
          // Need to be able to calculate position if either
          // top or left is auto and position is either absolute or fixed
          if ( calculatePosition ) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
  
          } else {
              curTop = parseFloat( curCSSTop ) || 0;
              curLeft = parseFloat( curCSSLeft ) || 0;
          }
  
          if ( isFunction( options ) ) {
  
              // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
              options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
          }
  
          if ( options.top != null ) {
              props.top = ( options.top - curOffset.top ) + curTop;
          }
          if ( options.left != null ) {
              props.left = ( options.left - curOffset.left ) + curLeft;
          }
  
          if ( "using" in options ) {
              options.using.call( elem, props );
  
          } else {
              curElem.css( props );
          }
      }
  };
  
  jQuery.fn.extend( {
  
      // offset() relates an element's border box to the document origin
      offset: function( options ) {
  
          // Preserve chaining for setter
          if ( arguments.length ) {
              return options === undefined ?
                  this :
                  this.each( function( i ) {
                      jQuery.offset.setOffset( this, options, i );
                  } );
          }
  
          var rect, win,
              elem = this[ 0 ];
  
          if ( !elem ) {
              return;
          }
  
          // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
          // Support: IE <=11 only
          // Running getBoundingClientRect on a
          // disconnected node in IE throws an error
          if ( !elem.getClientRects().length ) {
              return { top: 0, left: 0 };
          }
  
          // Get document-relative position by adding viewport scroll to viewport-relative gBCR
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
          };
      },
  
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
          if ( !this[ 0 ] ) {
              return;
          }
  
          var offsetParent, offset, doc,
              elem = this[ 0 ],
              parentOffset = { top: 0, left: 0 };
  
          // position:fixed elements are offset from the viewport, which itself always has zero offset
          if ( jQuery.css( elem, "position" ) === "fixed" ) {
  
              // Assume position:fixed implies availability of getBoundingClientRect
              offset = elem.getBoundingClientRect();
  
          } else {
              offset = this.offset();
  
              // Account for the *real* offset parent, which can be the document or its root element
              // when a statically positioned element is identified
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while ( offsetParent &&
                  ( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
                  jQuery.css( offsetParent, "position" ) === "static" ) {
  
                  offsetParent = offsetParent.parentNode;
              }
              if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {
  
                  // Incorporate borders into its offset, since they are outside its content origin
                  parentOffset = jQuery( offsetParent ).offset();
                  parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
                  parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
              }
          }
  
          // Subtract parent offsets and element margins
          return {
              top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
              left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
          };
      },
  
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
          return this.map( function() {
              var offsetParent = this.offsetParent;
  
              while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
                  offsetParent = offsetParent.offsetParent;
              }
  
              return offsetParent || documentElement;
          } );
      }
  } );
  
  // Create scrollLeft and scrollTop methods
  jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
      var top = "pageYOffset" === prop;
  
      jQuery.fn[ method ] = function( val ) {
          return access( this, function( elem, method, val ) {
  
              // Coalesce documents and windows
              var win;
              if ( isWindow( elem ) ) {
                  win = elem;
              } else if ( elem.nodeType === 9 ) {
                  win = elem.defaultView;
              }
  
              if ( val === undefined ) {
                  return win ? win[ prop ] : elem[ method ];
              }
  
              if ( win ) {
                  win.scrollTo(
                      !top ? val : win.pageXOffset,
                      top ? val : win.pageYOffset
                  );
  
              } else {
                  elem[ method ] = val;
              }
          }, method, val, arguments.length );
      };
  } );
  
  // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here
  jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
          function( elem, computed ) {
              if ( computed ) {
                  computed = curCSS( elem, prop );
  
                  // If curCSS returns percentage, fallback to offset
                  return rnumnonpx.test( computed ) ?
                      jQuery( elem ).position()[ prop ] + "px" :
                      computed;
              }
          }
      );
  } );
  
  
  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
      jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
          function( defaultExtra, funcName ) {
  
          // Margin is only for outerHeight, outerWidth
          jQuery.fn[ funcName ] = function( margin, value ) {
              var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                  extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
  
              return access( this, function( elem, type, value ) {
                  var doc;
  
                  if ( isWindow( elem ) ) {
  
                      // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                      return funcName.indexOf( "outer" ) === 0 ?
                          elem[ "inner" + name ] :
                          elem.document.documentElement[ "client" + name ];
                  }
  
                  // Get document width or height
                  if ( elem.nodeType === 9 ) {
                      doc = elem.documentElement;
  
                      // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                      // whichever is greatest
                      return Math.max(
                          elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                          elem.body[ "offset" + name ], doc[ "offset" + name ],
                          doc[ "client" + name ]
                      );
                  }
  
                  return value === undefined ?
  
                      // Get width or height on the element, requesting but not forcing parseFloat
                      jQuery.css( elem, type, extra ) :
  
                      // Set width or height on the element
                      jQuery.style( elem, type, value, extra );
              }, type, chainable ? margin : undefined, chainable );
          };
      } );
  } );
  
  
  jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
      "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
      "change select submit keydown keypress keyup contextmenu" ).split( " " ),
      function( i, name ) {
  
      // Handle event binding
      jQuery.fn[ name ] = function( data, fn ) {
          return arguments.length > 0 ?
              this.on( name, null, data, fn ) :
              this.trigger( name );
      };
  } );
  
  jQuery.fn.extend( {
      hover: function( fnOver, fnOut ) {
          return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
      }
  } );
  
  
  
  
  jQuery.fn.extend( {
  
      bind: function( types, data, fn ) {
          return this.on( types, null, data, fn );
      },
      unbind: function( types, fn ) {
          return this.off( types, null, fn );
      },
  
      delegate: function( selector, types, data, fn ) {
          return this.on( types, selector, data, fn );
      },
      undelegate: function( selector, types, fn ) {
  
          // ( namespace ) or ( selector, types [, fn] )
          return arguments.length === 1 ?
              this.off( selector, "**" ) :
              this.off( types, selector || "**", fn );
      }
  } );
  
  // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon
  jQuery.proxy = function( fn, context ) {
      var tmp, args, proxy;
  
      if ( typeof context === "string" ) {
          tmp = fn[ context ];
          context = fn;
          fn = tmp;
      }
  
      // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.
      if ( !isFunction( fn ) ) {
          return undefined;
      }
  
      // Simulated bind
      args = slice.call( arguments, 2 );
      proxy = function() {
          return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
      };
  
      // Set the guid of unique handler to the same of original handler, so it can be removed
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
  
      return proxy;
  };
  
  jQuery.holdReady = function( hold ) {
      if ( hold ) {
          jQuery.readyWait++;
      } else {
          jQuery.ready( true );
      }
  };
  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  
  jQuery.now = Date.now;
  
  jQuery.isNumeric = function( obj ) {
  
      // As of jQuery 3.0, isNumeric is limited to
      // strings and numbers (primitives or objects)
      // that can be coerced to finite numbers (gh-2662)
      var type = jQuery.type( obj );
      return ( type === "number" || type === "string" ) &&
  
          // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN( obj - parseFloat( obj ) );
  };
  
  
  
  
  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
  
  if ( typeof define === "function" && define.amd ) {
      define( "jquery", [], function() {
          return jQuery;
      } );
  }
  
  
  
  
  var
  
      // Map over jQuery in case of overwrite
      _jQuery = window.jQuery,
  
      // Map over the $ in case of overwrite
      _$ = window.$;
  
  jQuery.noConflict = function( deep ) {
      if ( window.$ === jQuery ) {
          window.$ = _$;
      }
  
      if ( deep && window.jQuery === jQuery ) {
          window.jQuery = _jQuery;
      }
  
      return jQuery;
  };
  
  // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if ( !noGlobal ) {
      window.jQuery = window.$ = jQuery;
  }
  
  
  
  
  return jQuery;
  } );
  
  ;/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
  !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,u=n.push,s=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,d=f.toString,p=d.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},v=function e(t){return null!=t&&t===t.window},y={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in y)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var x="3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",w=function(e,t){return new w.fn.init(e,t)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:x,constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},u=1,s=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[u]||{},u++),"object"==typeof a||g(a)||(a={}),u===s&&(a=this,u--);u<s;u++)if(null!=(e=arguments[u]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+(x+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&d.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(T(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?w.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,u=!n;o<a;o++)(r=!t(e[o],o))!==u&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,u=[];if(T(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&u.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&u.push(i);return a.apply([],u)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function T(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,u,s,l,c,f,d,p,h,g,v,y,m,b,x="sizzle"+1*new Date,w=e.document,C=0,T=0,E=ae(),N=ae(),k=ae(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,S=[],L=S.pop,j=S.push,q=S.push,O=S.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",B="\\["+I+"*("+R+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+I+"*\\]",M=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",W=new RegExp(I+"+","g"),$=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),F=new RegExp("^"+I+"*,"+I+"*"),z=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),_=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),U=new RegExp(M),V=new RegExp("^"+R+"$"),X={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{q.apply(S=O.call(w.childNodes),w.childNodes),S[w.childNodes.length].nodeType}catch(e){q={apply:S.length?function(e,t){j.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,u,l,c,f,h,y,m=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(f=K.exec(e)))if(o=f[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!v||!v.test(e))){if(1!==C)m=t,y=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=x),u=(h=a(e)).length;while(u--)h[u]="#"+c+" "+ye(h[u]);y=h.join(","),m=J.test(e)&&ge(t.parentNode)||t}if(y)try{return q.apply(r,m.querySelectorAll(y)),r}catch(e){}finally{c===x&&t.removeAttribute("id")}}}return s(e.replace($,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ue(e){return e[x]=!0,e}function se(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ue(function(t){return t=+t,ue(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(p=a,h=p.documentElement,g=!o(p),w!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=G.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=G.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+I+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]")}),se(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=G.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",M)}),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=G.test(h.compareDocumentPosition),b=t||G.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?P(c,e)-P(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)u.unshift(n);while(a[r]===u[r])r++;return r?ce(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},p):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(_,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:ue,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=u&&t.nodeName.toLowerCase(),m=!s&&!u,b=!1;if(v){if(o){while(g){d=t;while(d=d[g])if(u?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){b=(p=(l=(c=(f=(d=v)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],d=p&&v.childNodes[p];while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if(1===d.nodeType&&++b&&d===t){c[e]=[C,p,b];break}}else if(m&&(b=p=(l=(c=(f=(d=t)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===b)while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if((u?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++b&&(m&&((c=(f=d[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[C,b]),d===t))break;return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=P(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ue(function(e){var t=[],n=[],r=u(e.replace($,"$1"));return r[x]?ue(function(e,t,n,i){var o,a=r(e,null,i,[]),u=e.length;while(u--)(o=a[u])&&(e[u]=!(t[u]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ue(function(e){return function(t){return oe(e,t).length>0}}),contains:ue(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ue(function(e){return V.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:pe(!1),disabled:pe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t);function ve(){}ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,a=oe.tokenize=function(e,t){var n,i,o,a,u,s,l,c=N[e+" "];if(c)return t?0:c.slice(0);u=e,s=[],l=r.preFilter;while(u){n&&!(i=F.exec(u))||(i&&(u=u.slice(i[0].length)||u),s.push(o=[])),n=!1,(i=z.exec(u))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),u=u.slice(n.length));for(a in r.filter)!(i=X[a].exec(u))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),u=u.slice(n.length));if(!n)break}return t?u.length:u?oe.error(e):N(e,s).slice(0)};function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,u=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,s){var l,c,f,d=[C,u];if(s){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[x]||(t[x]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===C&&l[1]===u)return d[2]=l[2];if(c[o]=d,d[2]=e(t,n,s))return!0}return!1}}function be(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xe(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(u)));return a}function Ce(e,t,n,r,i,o){return r&&!r[x]&&(r=Ce(r)),i&&!i[x]&&(i=Ce(i,o)),ue(function(o,a,u,s){var l,c,f,d=[],p=[],h=a.length,g=o||xe(t||"*",u.nodeType?[u]:u,[]),v=!e||!o&&t?g:we(g,d,e,u,s),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,u,s),r){l=we(y,p),r(l,[],u,s),c=l.length;while(c--)(f=l[c])&&(y[p[c]]=!(v[p[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,s)}c=y.length;while(c--)(f=y[c])&&(l=i?P(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else y=we(y===a?y.splice(h,y.length):y),i?i(null,a,y,s):q.apply(a,y)})}function Te(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],u=a||r.relative[" "],s=a?1:0,c=me(function(e){return e===t},u,!0),f=me(function(e){return P(t,e)>-1},u,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];s<o;s++)if(n=r.relative[e[s].type])d=[me(be(d),n)];else{if((n=r.filter[e[s].type].apply(null,e[s].matches))[x]){for(i=++s;i<o;i++)if(r.relative[e[i].type])break;return Ce(s>1&&be(d),s>1&&ye(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),n,s<i&&Te(e.slice(s,i)),i<o&&Te(e=e.slice(i)),i<o&&ye(e))}d.push(n)}return be(d)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,u,s,c){var f,h,v,y=0,m="0",b=o&&[],x=[],w=l,T=o||i&&r.find.TAG("*",c),E=C+=null==w?1:Math.random()||.1,N=T.length;for(c&&(l=a===p||a||c);m!==N&&null!=(f=T[m]);m++){if(i&&f){h=0,a||f.ownerDocument===p||(d(f),u=!g);while(v=e[h++])if(v(f,a||p,u)){s.push(f);break}c&&(C=E)}n&&((f=!v&&f)&&y--,o&&b.push(f))}if(y+=m,n&&m!==y){h=0;while(v=t[h++])v(b,x,a,u);if(o){if(y>0)while(m--)b[m]||x[m]||(x[m]=L.call(s));x=we(x)}q.apply(s,x),c&&!o&&x.length>0&&y+t.length>1&&oe.uniqueSort(s)}return c&&(C=E,l=w),b};return n?ue(o):o}return u=oe.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Te(t[n]))[x]?r.push(o):i.push(o);(o=k(e,Ee(i,r))).selector=e}return o},s=oe.select=function(e,t,n,i){var o,s,l,c,f,d="function"==typeof e&&e,p=!i&&a(e=d.selector||e);if(n=n||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&g&&r.relative[s[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(s.shift().value.length)}o=X.needsContext.test(e)?0:s.length;while(o--){if(l=s[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),J.test(s[0].type)&&ge(t.parentNode)||t))){if(s.splice(o,1),!(e=i.length&&ye(s)))return q.apply(n,i),n;break}}}return(d||u(e,p))(i,t,!g,n,!t||J.test(e)&&ge(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||le(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=w.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return s.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&A.test(e)?w(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),S.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,j=w(r);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(w(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(P[e]||w.uniqueSort(i),O.test(e)&&i.reverse()),this.pushStack(i)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(I)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],u=-1,s=function(){for(i=i||e.once,r=t=!0;a.length;u=-1){n=a.shift();while(++u<o.length)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),n&&!t&&s()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||s()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function B(e){return e}function M(e){throw e}function W(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var u=this,s=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(u,s))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,B,i),a(o,n,M,i)):(o++,l.call(e,a(o,n,B,i),a(o,n,M,i),a(o,n,B,n.notifyWith))):(r!==B&&(u=void 0,s=[e]),(i||n.resolveWith)(u,s))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==M&&(u=void 0,s=[e]),n.rejectWith(u,s))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:B,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:B)),n[2][3].add(a(0,e,g(r)?r:M))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],u=t[5];i[t[1]]=a.add,u&&a.add(function(){r=u},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),u=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&(W(e,a.done(u(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)W(i[n],u(n),a.reject);return a.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&$.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function z(){r.removeEventListener("DOMContentLoaded",z),e.removeEventListener("load",z),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",z),e.addEventListener("load",z));var _=function(e,t,n,r,i,o,a){var u=0,s=e.length,l=null==n;if("object"===b(n)){i=!0;for(u in n)_(e,t,u,n[u],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;u<s;u++)t(e[u],n,a?r:r.call(e[u],u,t(e[u],n)));return i?e:l?t.call(e):s?t(e[0],n):o},U=/^-ms-/,V=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function Q(e){return e.replace(U,"ms-").replace(V,X)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=w.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[Q(t)]=n;else for(r in t)i[Q(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Q):(t=Q(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var K=new G,J=new G,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return J.hasData(e)||K.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!K.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=Q(r.slice(5)),ne(o,r,i[r]));K.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){J.set(this,e)}):_(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=J.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){J.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=K.get(e,t),n&&(!r||Array.isArray(n)?r=K.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:w.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,u=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=K.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function se(e,t,n,r){var i,o,a=20,u=r?function(){return r.cur()}:function(){return w.css(e,t,"")},s=u(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+s)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){s/=2,l=l||c[3],c=+s||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=u()/s||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+s||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=K.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",K.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var de=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?w.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function be(e,t,n,r,i){for(var o,a,u,s,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===b(o))w.merge(d,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),u=(pe.exec(o)||["",""])[1].toLowerCase(),s=ge[u]||ge._default,a.innerHTML=s[1]+w.htmlPrefilter(o)+s[2],c=s[0];while(c--)a=a.lastChild;w.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var xe=r.documentElement,we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function ke(){try{return r.activeElement}catch(e){}}function Ae(e,t,n,r,i,o){var a,u;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(u in t)Ae(e,u,n,r,t[u],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.get(e);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(xe,i),n.guid||(n.guid=w.guid++),(s=v.events)||(s=v.events={}),(a=v.handle)||(a=v.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(I)||[""]).length;while(l--)p=g=(u=Te.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),p&&(f=w.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=w.event.special[p]||{},c=w.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=s[p])||((d=s[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),w.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.hasData(e)&&K.get(e);if(v&&(s=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(u=Te.exec(t[l])||[],p=g=u[1],h=(u[2]||"").split(".").sort(),p){f=w.event.special[p]||{},d=s[p=(r?f.delegateType:f.bindType)||p]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||w.removeEvent(e,p,v.handle),delete s[p])}else for(p in s)w.event.remove(e,p+t[l],n,r,!0);w.isEmptyObject(s)&&K.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,u,s=new Array(arguments.length),l=(K.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(s[0]=t,n=1;n<arguments.length;n++)s[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){u=w.event.handlers.call(this,t,l),n=0;while((o=u[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,s))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,u=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<s;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&u.push({elem:l,handlers:o})}return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ke()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===ke()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){w.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Se=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function Oe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,u,s,l;if(1===t.nodeType){if(K.hasData(e)&&(o=K.access(e),a=K.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}J.hasData(e)&&(u=J.access(e),s=w.extend({},u),J.set(t,s))}}function Ie(e,t){var n=t.nodeName.toLowerCase();"input"===n&&de.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,u,s,l,c,f=0,d=e.length,p=d-1,v=t[0],y=g(v);if(y||d>1&&"string"==typeof v&&!h.checkClone&&Le.test(v))return e.each(function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),Re(o,t,n,r)});if(d&&(i=be(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(u=w.map(ve(i,"script"),Oe)).length;f<d;f++)l=i,f!==p&&(l=w.clone(l,!0,!0),s&&w.merge(u,ve(l,"script"))),n.call(e[f],l,f);if(s)for(c=u[u.length-1].ownerDocument,w.map(u,Pe),f=0;f<s;f++)l=u[f],he.test(l.type||"")&&!K.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(je,""),c,l))}return e}function Be(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ve(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,u=e.cloneNode(!0),s=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ve(u),r=0,i=(o=ve(e)).length;r<i;r++)Ie(o[r],a[r]);if(t)if(n)for(o=o||ve(e),a=a||ve(u),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,u);return(a=ve(u,"script")).length>0&&ye(a,!s&&ve(e,"script")),u},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[K.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[K.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return _(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!ge[(pe.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ve(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),u.apply(r,n.get());return this.pushStack(r)}});var Me=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),We=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},$e=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,s=12===n(t.marginLeft),c.style.right="60%",u=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",xe.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,u,s,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),u},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,u=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var _e=/^(none|table(?!-c[ea]).+)/,Ue=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Ge(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Ye)return e}function Ke(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Ge(e)||e),t}function Je(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,u=0,s=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(s+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(s-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(s-=w.css(e,"border"+oe[a]+"Width",!0,i))):(s+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?s+=w.css(e,"border"+oe[a]+"Width",!0,i):u+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-u-.5))),s}function et(e,t,n){var r=We(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,u=Q(t),s=Ue.test(t),l=e.style;if(s||(t=Ke(u)),a=w.cssHooks[t]||w.cssHooks[u],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[u]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(s?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,u=Q(t);return Ue.test(t)||(t=Ke(u)),(a=w.cssHooks[t]||w.cssHooks[u])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!_e.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):ue(e,Ve,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=We(e),a="border-box"===w.css(e,"boxSizing",!1,o),u=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Je(e,n,u)}}}),w.cssHooks.marginLeft=ze(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Je)}),w.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}}),w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var tt,nt=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return _(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?tt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),tt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||w.find.attr;nt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=nt[a],nt[a]=i,i=null!=n(e,t,r)?a:null,nt[a]=o),i}});var rt=/^(?:input|select|textarea|button)$/i,it=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return _(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):rt.test(e.nodeName)||it.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function ot(e){return(e.match(I)||[]).join(" ")}function at(e){return e.getAttribute&&e.getAttribute("class")||""}function ut(e){return Array.isArray(e)?e:"string"==typeof e?e.match(I)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,at(this)))});if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},removeClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,at(this)))});if(!arguments.length)return this.attr("class","");if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,at(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=ut(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=at(this))&&K.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":K.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+ot(at(n))+" ").indexOf(t)>-1)return!0;return!1}});var st=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(st,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:ot(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,u=a?null:[],s=a?o+1:i.length;for(r=o<0?s:a?o:0;r<s;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;u.push(t)}return u},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var lt=/^(?:focusinfocus|focusoutblur)$/,ct=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,u,s,l,c,d,p,h,y=[i||r],m=f.call(t,"type")?t.type:t,b=f.call(t,"namespace")?t.namespace.split("."):[];if(u=h=s=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!lt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(b=m.split(".")).shift(),b.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),p=w.event.special[m]||{},o||!p.trigger||!1!==p.trigger.apply(i,n))){if(!o&&!p.noBubble&&!v(i)){for(l=p.delegateType||m,lt.test(l+m)||(u=u.parentNode);u;u=u.parentNode)y.push(u),s=u;s===(i.ownerDocument||r)&&y.push(s.defaultView||s.parentWindow||e)}a=0;while((u=y[a++])&&!t.isPropagationStopped())h=u,t.type=a>1?l:p.bindType||m,(d=(K.get(u,"events")||{})[t.type]&&K.get(u,"handle"))&&d.apply(u,n),(d=c&&u[c])&&d.apply&&Y(u)&&(t.result=d.apply(u,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(y.pop(),n)||!Y(i)||c&&g(i[m])&&!v(i)&&((s=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,ct),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,ct),w.event.triggered=void 0,s&&(i[c]=s)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=K.access(r,t);i||r.addEventListener(e,n,!0),K.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=K.access(r,t)-1;i?K.access(r,t,i):(r.removeEventListener(e,n,!0),K.remove(r,t))}}});var ft=/\[\]$/,dt=/\r?\n/g,pt=/^(?:submit|button|image|reset|file)$/i,ht=/^(?:input|select|textarea|keygen)/i;function gt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||ft.test(e)?r(e,i):gt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==b(t))r(e,t);else for(i in t)gt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)gt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&ht.test(this.nodeName)&&!pt.test(e)&&(this.checked||!de.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(dt,"\r\n")}}):{name:t.name,value:n.replace(dt,"\r\n")}}).get()}}),w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=S.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=be([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.offset={setOffset:function(e,t,n){var r,i,o,a,u,s,l,c=w.css(e,"position"),f=w(e),d={};"static"===c&&(e.style.position="relative"),u=f.offset(),o=w.css(e,"top"),s=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+s).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(s)||0),g(t)&&(t=t.call(e,n,w.extend({},u))),null!=t.top&&(d.top=t.top-u.top+a),null!=t.left&&(d.left=t.left-u.left+i),"using"in t?t.using.call(e,d):f.css(d)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||xe})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return _(this,function(e,r,i){var o;if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=ze(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),Me.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),u=n||(!0===i||!0===o?"margin":"border");return _(this,function(t,n,i){var o;return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,u):w.style(t,n,i,u)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=D,w.isFunction=g,w.isWindow=v,w.camelCase=Q,w.type=b,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var vt=e.jQuery,yt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=yt),t&&e.jQuery===w&&(e.jQuery=vt),w},t||(e.jQuery=e.$=w),w});
  
  ;{"version":3,"sources":["jquery.slim.js"],"names":["global","factory","module","exports","document","w","Error","window","this","noGlobal","arr","getProto","Object","getPrototypeOf","slice","concat","push","indexOf","class2type","toString","hasOwn","hasOwnProperty","fnToString","ObjectFunctionString","call","support","isFunction","obj","nodeType","isWindow","preservedScriptAttributes","type","src","noModule","DOMEval","code","doc","node","i","script","createElement","text","head","appendChild","parentNode","removeChild","toType","version","jQuery","selector","context","fn","init","rtrim","prototype","jquery","constructor","length","toArray","get","num","pushStack","elems","ret","merge","prevObject","each","callback","map","elem","apply","arguments","first","eq","last","len","j","end","sort","splice","extend","options","name","copy","copyIsArray","clone","target","deep","isPlainObject","Array","isArray","undefined","expando","Math","random","replace","isReady","error","msg","noop","proto","Ctor","isEmptyObject","globalEval","isArrayLike","trim","makeArray","results","inArray","second","grep","invert","callbackInverse","matches","callbackExpect","arg","value","guid","Symbol","iterator","split","toLowerCase","Sizzle","Expr","getText","isXML","tokenize","compile","select","outermostContext","sortInput","hasDuplicate","setDocument","docElem","documentIsHTML","rbuggyQSA","rbuggyMatches","contains","Date","preferredDoc","dirruns","done","classCache","createCache","tokenCache","compilerCache","sortOrder","a","b","pop","push_native","list","booleans","whitespace","identifier","attributes","pseudos","rwhitespace","RegExp","rcomma","rcombinators","rattributeQuotes","rpseudo","ridentifier","matchExpr","ID","CLASS","TAG","ATTR","PSEUDO","CHILD","bool","needsContext","rinputs","rheader","rnative","rquickExpr","rsibling","runescape","funescape","_","escaped","escapedWhitespace","high","String","fromCharCode","rcssescape","fcssescape","ch","asCodePoint","charCodeAt","unloadHandler","disabledAncestor","addCombinator","disabled","dir","next","childNodes","e","els","seed","m","nid","match","groups","newSelector","newContext","ownerDocument","exec","getElementById","id","getElementsByTagName","getElementsByClassName","qsa","test","nodeName","getAttribute","setAttribute","toSelector","join","testContext","querySelectorAll","qsaError","removeAttribute","keys","cache","key","cacheLength","shift","markFunction","assert","el","addHandle","attrs","handler","attrHandle","siblingCheck","cur","diff","sourceIndex","nextSibling","createInputPseudo","createButtonPseudo","createDisabledPseudo","isDisabled","createPositionalPseudo","argument","matchIndexes","documentElement","hasCompare","subWindow","defaultView","top","addEventListener","attachEvent","className","createComment","getById","getElementsByName","filter","attrId","find","getAttributeNode","tag","tmp","innerHTML","input","matchesSelector","webkitMatchesSelector","mozMatchesSelector","oMatchesSelector","msMatchesSelector","disconnectedMatch","compareDocumentPosition","adown","bup","compare","sortDetached","aup","ap","bp","unshift","expr","elements","attr","val","specified","escape","sel","uniqueSort","duplicates","detectDuplicates","sortStable","textContent","firstChild","nodeValue","selectors","createPseudo","relative",">"," ","+","~","preFilter","excess","unquoted","nodeNameSelector","pattern","operator","check","result","what","simple","forward","ofType","xml","uniqueCache","outerCache","nodeIndex","start","parent","useCache","lastChild","uniqueID","pseudo","args","setFilters","idx","matched","not","matcher","unmatched","has","innerText","lang","elemLang","hash","location","root","focus","activeElement","hasFocus","href","tabIndex","enabled","checked","selected","selectedIndex","empty","header","button","even","odd","lt","gt","radio","checkbox","file","password","image","submit","reset","filters","parseOnly","tokens","soFar","preFilters","cached","combinator","base","skip","checkNonElements","doneName","oldCache","newCache","elementMatcher","matchers","multipleContexts","contexts","condense","newUnmatched","mapped","setMatcher","postFilter","postFinder","postSelector","temp","preMap","postMap","preexisting","matcherIn","matcherOut","matcherFromTokens","checkContext","leadingRelative","implicitRelative","matchContext","matchAnyContext","matcherFromGroupMatchers","elementMatchers","setMatchers","bySet","byElement","superMatcher","outermost","matchedCount","setMatched","contextBackup","dirrunsUnique","token","compiled","defaultValue","unique","isXMLDoc","escapeSelector","until","truncate","is","siblings","n","rneedsContext","rsingleTag","winnow","qualifier","self","rootjQuery","parseHTML","ready","rparentsprev","guaranteedUnique","children","contents","prev","targets","l","closest","index","prevAll","add","addBack","sibling","parents","parentsUntil","nextAll","nextUntil","prevUntil","contentDocument","content","reverse","rnothtmlwhite","createOptions","object","flag","Callbacks","firing","memory","fired","locked","queue","firingIndex","fire","once","stopOnFalse","remove","disable","lock","fireWith","Identity","v","Thrower","ex","adoptValue","resolve","reject","noValue","method","promise","fail","then","Deferred","func","tuples","state","always","deferred","catch","pipe","fns","newDefer","tuple","returned","progress","notify","onFulfilled","onRejected","onProgress","maxDepth","depth","special","that","mightThrow","TypeError","notifyWith","resolveWith","process","exceptionHook","stackTrace","rejectWith","getStackHook","setTimeout","stateString","when","singleValue","remaining","resolveContexts","resolveValues","master","updateFunc","rerrorNames","stack","console","warn","message","readyException","readyList","readyWait","wait","completed","removeEventListener","readyState","doScroll","access","chainable","emptyGet","raw","bulk","rmsPrefix","rdashAlpha","fcamelCase","all","letter","toUpperCase","camelCase","string","acceptData","owner","Data","uid","defineProperty","configurable","set","data","prop","hasData","dataPriv","dataUser","rbrace","rmultiDash","getData","JSON","parse","dataAttr","removeData","_data","_removeData","dequeue","startLength","hooks","_queueHooks","stop","setter","clearQueue","count","defer","pnum","source","rcssNum","cssExpand","isHiddenWithinTree","style","display","css","swap","old","adjustCSS","valueParts","tween","adjusted","scale","maxIterations","currentValue","initial","unit","cssNumber","initialInUnit","defaultDisplayMap","getDefaultDisplay","body","showHide","show","values","hide","toggle","rcheckableType","rtagName","rscriptType","wrapMap","option","thead","col","tr","td","_default","optgroup","tbody","tfoot","colgroup","caption","th","getAll","setGlobalEval","refElements","rhtml","buildFragment","scripts","selection","ignored","wrap","fragment","createDocumentFragment","nodes","htmlPrefilter","createTextNode","div","checkClone","cloneNode","noCloneChecked","rkeyEvent","rmouseEvent","rtypenamespace","returnTrue","returnFalse","safeActiveElement","err","on","types","one","origFn","event","off","handleObjIn","eventHandle","events","t","handleObj","handlers","namespaces","origType","elemData","handle","triggered","dispatch","delegateType","bindType","namespace","delegateCount","setup","mappedTypes","origCount","teardown","removeEvent","nativeEvent","fix","handlerQueue","delegateTarget","preDispatch","isPropagationStopped","currentTarget","isImmediatePropagationStopped","rnamespace","preventDefault","stopPropagation","postDispatch","matchedHandlers","matchedSelectors","addProp","hook","Event","enumerable","originalEvent","writable","load","noBubble","trigger","blur","click","beforeunload","returnValue","props","isDefaultPrevented","defaultPrevented","relatedTarget","timeStamp","now","isSimulated","stopImmediatePropagation","altKey","bubbles","cancelable","changedTouches","ctrlKey","detail","eventPhase","metaKey","pageX","pageY","shiftKey","view","char","charCode","keyCode","buttons","clientX","clientY","offsetX","offsetY","pointerId","pointerType","screenX","screenY","targetTouches","toElement","touches","which","mouseenter","mouseleave","pointerenter","pointerleave","orig","related","rxhtmlTag","rnoInnerhtml","rchecked","rcleanScript","manipulationTarget","disableScript","restoreScript","cloneCopyEvent","dest","pdataOld","pdataCur","udataOld","udataCur","fixInput","domManip","collection","hasScripts","iNoClone","valueIsFunction","html","_evalUrl","keepData","cleanData","dataAndEvents","deepDataAndEvents","srcElements","destElements","inPage","detach","append","prepend","insertBefore","before","after","replaceWith","replaceChild","appendTo","prependTo","insertAfter","replaceAll","original","insert","rnumnonpx","getStyles","opener","getComputedStyle","rboxStyle","computeStyleTests","container","cssText","divStyle","pixelPositionVal","reliableMarginLeftVal","roundPixelMeasures","marginLeft","right","pixelBoxStylesVal","boxSizingReliableVal","width","position","scrollboxSizeVal","offsetWidth","measure","round","parseFloat","backgroundClip","clearCloneStyle","boxSizingReliable","pixelBoxStyles","pixelPosition","reliableMarginLeft","scrollboxSize","curCSS","computed","minWidth","maxWidth","getPropertyValue","addGetHookIf","conditionFn","hookFn","rdisplayswap","rcustomProp","cssShow","visibility","cssNormalTransform","letterSpacing","fontWeight","cssPrefixes","emptyStyle","vendorPropName","capName","finalPropName","cssProps","setPositiveNumber","subtract","max","boxModelAdjustment","dimension","box","isBorderBox","styles","computedVal","extra","delta","ceil","getWidthOrHeight","valueIsBorderBox","cssHooks","opacity","animationIterationCount","columnCount","fillOpacity","flexGrow","flexShrink","lineHeight","order","orphans","widows","zIndex","zoom","origName","isCustomProp","setProperty","isFinite","getClientRects","getBoundingClientRect","left","margin","padding","border","prefix","suffix","expand","expanded","parts","delay","time","fx","speeds","timeout","clearTimeout","opt","checkOn","optSelected","radioValue","boolHook","removeAttr","nType","attrHooks","attrNames","getter","lowercaseName","rfocusable","rclickable","removeProp","propFix","propHooks","tabindex","parseInt","for","class","stripAndCollapse","getClass","classesToArray","addClass","classes","curValue","clazz","finalValue","removeClass","toggleClass","stateVal","isValidValue","classNames","hasClass","rreturn","valHooks","optionSet","focusin","rfocusMorph","stopPropagationCallback","onlyHandlers","bubbleType","ontype","lastElement","eventPath","isTrigger","parentWindow","simulate","triggerHandler","attaches","rbracket","rCRLF","rsubmitterTypes","rsubmittable","buildParams","traditional","param","s","valueOrFunction","encodeURIComponent","serialize","serializeArray","wrapAll","firstElementChild","wrapInner","htmlIsFunction","unwrap","hidden","visible","offsetHeight","createHTMLDocument","implementation","keepScripts","parsed","offset","setOffset","curPosition","curLeft","curCSSTop","curTop","curOffset","curCSSLeft","calculatePosition","curElem","using","rect","win","pageYOffset","pageXOffset","offsetParent","parentOffset","scrollLeft","scrollTop","scrollTo","Height","Width","","defaultExtra","funcName","hover","fnOver","fnOut","bind","unbind","delegate","undelegate","proxy","holdReady","hold","parseJSON","isNumeric","isNaN","define","amd","_jQuery","_$","$","noConflict"],"mappings":"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","file":"jquery.slim.min.js"}
  ;/*
   * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
   *
   * Adds compatibility for applications that use the pre 1.2 easing names
   *
   * Copyright (c) 2007 George Smith
   * Licensed under the MIT License:
   *   http://www.opensource.org/licenses/mit-license.php
   */
  
  (function($){
  $.extend( $.easing,
  {
      easeIn: function (x, t, b, c, d) {
          return $.easing.easeInQuad(x, t, b, c, d);
      },
      easeOut: function (x, t, b, c, d) {
          return $.easing.easeOutQuad(x, t, b, c, d);
      },
      easeInOut: function (x, t, b, c, d) {
          return $.easing.easeInOutQuad(x, t, b, c, d);
      },
      expoin: function(x, t, b, c, d) {
          return $.easing.easeInExpo(x, t, b, c, d);
      },
      expoout: function(x, t, b, c, d) {
          return $.easing.easeOutExpo(x, t, b, c, d);
      },
      expoinout: function(x, t, b, c, d) {
          return $.easing.easeInOutExpo(x, t, b, c, d);
      },
      bouncein: function(x, t, b, c, d) {
          return $.easing.easeInBounce(x, t, b, c, d);
      },
      bounceout: function(x, t, b, c, d) {
          return $.easing.easeOutBounce(x, t, b, c, d);
      },
      bounceinout: function(x, t, b, c, d) {
          return $.easing.easeInOutBounce(x, t, b, c, d);
      },
      elasin: function(x, t, b, c, d) {
          return $.easing.easeInElastic(x, t, b, c, d);
      },
      elasout: function(x, t, b, c, d) {
          return $.easing.easeOutElastic(x, t, b, c, d);
      },
      elasinout: function(x, t, b, c, d) {
          return $.easing.easeInOutElastic(x, t, b, c, d);
      },
      backin: function(x, t, b, c, d) {
          return $.easing.easeInBack(x, t, b, c, d);
      },
      backout: function(x, t, b, c, d) {
          return $.easing.easeOutBack(x, t, b, c, d);
      },
      backinout: function(x, t, b, c, d) {
          return $.easing.easeInOutBack(x, t, b, c, d);
      }
  });})(jQuery);
  
  ;/*
   * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
   * Open source under the BSD License.
   * Copyright © 2008 George McGinley Smith
   * All rights reserved.
   * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
  */
  
  (function (factory) {
      if (typeof define === "function" && define.amd) {
          define(['jquery'], function ($) {
              return factory($);
          });
      } else if (typeof module === "object" && typeof module.exports === "object") {
          exports = factory(require('jquery'));
      } else {
          factory(jQuery);
      }
  })(function($){
  
  // Preserve the original jQuery "swing" easing as "jswing"
  $.easing.jswing = $.easing.swing;
  
  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = ( 2 * PI ) / 3,
      c5 = ( 2 * PI ) / 4.5;
  
  // x is the fraction of animation progress, in the range 0..1
  function bounceOut(x) {
      var n1 = 7.5625,
          d1 = 2.75;
      if ( x < 1/d1 ) {
          return n1*x*x;
      } else if ( x < 2/d1 ) {
          return n1*(x-=(1.5/d1))*x + 0.75;
      } else if ( x < 2.5/d1 ) {
          return n1*(x-=(2.25/d1))*x + 0.9375;
      } else {
          return n1*(x-=(2.625/d1))*x + 0.984375;
      }
  }
  
  $.extend( $.easing,
  {
      def: 'easeOutQuad',
      swing: function (x) {
          return $.easing[$.easing.def](x);
      },
      easeInQuad: function (x) {
          return x * x;
      },
      easeOutQuad: function (x) {
          return 1 - ( 1 - x ) * ( 1 - x );
      },
      easeInOutQuad: function (x) {
          return x < 0.5 ?
              2 * x * x :
              1 - pow( -2 * x + 2, 2 ) / 2;
      },
      easeInCubic: function (x) {
          return x * x * x;
      },
      easeOutCubic: function (x) {
          return 1 - pow( 1 - x, 3 );
      },
      easeInOutCubic: function (x) {
          return x < 0.5 ?
              4 * x * x * x :
              1 - pow( -2 * x + 2, 3 ) / 2;
      },
      easeInQuart: function (x) {
          return x * x * x * x;
      },
      easeOutQuart: function (x) {
          return 1 - pow( 1 - x, 4 );
      },
      easeInOutQuart: function (x) {
          return x < 0.5 ?
              8 * x * x * x * x :
              1 - pow( -2 * x + 2, 4 ) / 2;
      },
      easeInQuint: function (x) {
          return x * x * x * x * x;
      },
      easeOutQuint: function (x) {
          return 1 - pow( 1 - x, 5 );
      },
      easeInOutQuint: function (x) {
          return x < 0.5 ?
              16 * x * x * x * x * x :
              1 - pow( -2 * x + 2, 5 ) / 2;
      },
      easeInSine: function (x) {
          return 1 - cos( x * PI/2 );
      },
      easeOutSine: function (x) {
          return sin( x * PI/2 );
      },
      easeInOutSine: function (x) {
          return -( cos( PI * x ) - 1 ) / 2;
      },
      easeInExpo: function (x) {
          return x === 0 ? 0 : pow( 2, 10 * x - 10 );
      },
      easeOutExpo: function (x) {
          return x === 1 ? 1 : 1 - pow( 2, -10 * x );
      },
      easeInOutExpo: function (x) {
          return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
              pow( 2, 20 * x - 10 ) / 2 :
              ( 2 - pow( 2, -20 * x + 10 ) ) / 2;
      },
      easeInCirc: function (x) {
          return 1 - sqrt( 1 - pow( x, 2 ) );
      },
      easeOutCirc: function (x) {
          return sqrt( 1 - pow( x - 1, 2 ) );
      },
      easeInOutCirc: function (x) {
          return x < 0.5 ?
              ( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
              ( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
      },
      easeInElastic: function (x) {
          return x === 0 ? 0 : x === 1 ? 1 :
              -pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
      },
      easeOutElastic: function (x) {
          return x === 0 ? 0 : x === 1 ? 1 :
              pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
      },
      easeInOutElastic: function (x) {
          return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
              -( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
              pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
      },
      easeInBack: function (x) {
          return c3 * x * x * x - c1 * x * x;
      },
      easeOutBack: function (x) {
          return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
      },
      easeInOutBack: function (x) {
          return x < 0.5 ?
              ( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
              ( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
      },
      easeInBounce: function (x) {
          return 1 - bounceOut( 1 - x );
      },
      easeOutBounce: bounceOut,
      easeInOutBounce: function (x) {
          return x < 0.5 ?
              ( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
              ( 1 + bounceOut( 2 * x - 1 ) ) / 2;
      }
  });
  
  });
  
  ;(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});
  ;