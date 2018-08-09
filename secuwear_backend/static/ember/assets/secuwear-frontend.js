"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('secuwear-frontend/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
		namespace: 'api'
	});
});
define('secuwear-frontend/app', ['exports', 'ember', 'secuwear-frontend/resolver', 'ember-load-initializers', 'secuwear-frontend/config/environment'], function (exports, _ember, _secuwearFrontendResolver, _emberLoadInitializers, _secuwearFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _secuwearFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _secuwearFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _secuwearFrontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _secuwearFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('secuwear-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'secuwear-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _secuwearFrontendConfigEnvironment) {

  var name = _secuwearFrontendConfigEnvironment['default'].APP.name;
  var version = _secuwearFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('secuwear-frontend/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('secuwear-frontend/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('secuwear-frontend/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('secuwear-frontend/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('secuwear-frontend/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('secuwear-frontend/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('secuwear-frontend/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('secuwear-frontend/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('secuwear-frontend/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('secuwear-frontend/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('secuwear-frontend/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('secuwear-frontend/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('secuwear-frontend/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('secuwear-frontend/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('secuwear-frontend/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('secuwear-frontend/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('secuwear-frontend/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('secuwear-frontend/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('secuwear-frontend/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('secuwear-frontend/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('secuwear-frontend/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('secuwear-frontend/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('secuwear-frontend/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('secuwear-frontend/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('secuwear-frontend/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('secuwear-frontend/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('secuwear-frontend/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('secuwear-frontend/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('secuwear-frontend/components/experiment-selector', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		selectedExperiment: null,
		selectedRun: null,
		router: _ember['default'].inject.service('-routing'),

		actions: {
			selectExperiment: function selectExperiment(value) {
				if (value !== '' && value !== null) {
					this.set('selectedExperiment', value);
				}
			},

			selectRun: function selectRun(value) {
				if (value !== '' && value !== null) {
					this.set('selectedRun', value);
					this.get('router').transitionTo('runs', [value.id]);
				}
			}
		}
	});
});
// upload: function(){
// 	console.log('This is the event '+fileToUpload);
// 	this.get('auth').Upload(fileToUpload);
// }
define('secuwear-frontend/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('secuwear-frontend/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('secuwear-frontend/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('secuwear-frontend/components/nav-bar', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		authManager: _ember['default'].inject.service('auth-manager'),

		actions: {
			logout: function logout() {
				this.get('authManager').logout();
			},

			reload: function reload() {
				//this.reload();
			}
		}
	});
});
define('secuwear-frontend/components/range-slider', ['exports', 'ui-slider/components/range-slider'], function (exports, _uiSliderComponentsRangeSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _uiSliderComponentsRangeSlider['default'];
    }
  });
});
define('secuwear-frontend/components/run-display', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		selectedRange: [0, 0],
		inputStart: 0,
		inputEnd: 0,
		noGrids: true,
		gridChange: false,
		selectedDomain: '',
		manualRange: false,
		minVal: 0,
		error: false,
		errorMsg: '',

		actions: {
			selectDomain: function selectDomain(domainName) {
				if (this.get('selectedDomain') === domainName) {
					this.set('selectedDomain', "");
				} else {
					this.set('selectedDomain', domainName);
				}
			},

			manualRangeInput: function manualRangeInput() {
				this.set('manualRange', true);
			},

			removeManualRangeInput: function removeManualRangeInput() {
				this.set('manualRange', false);
			}

		},

		//start value for the slider
		start: _ember['default'].computed('selectedRange', function () {
			if (this.get('selectedRange')) {
				var startValue = this.get('selectedRange')[0];
				return startValue;
			}
		}),

		//end value for the slider
		end: _ember['default'].computed('selectedRange', function () {
			if (this.get('selectedRange')) {
				var endValue = this.get('selectedRange')[1];
				return endValue;
			}
		}),

		//This computed property gets all the events that are present in a single run.
		filteredEvents: _ember['default'].computed('btles', function () {
			var filteredEvents = [];
			this.get('run').get('btleevents').then(function (events) {
				events.forEach(function (event) {
					filteredEvents.pushObject(event);
				});
			});

			return filteredEvents;
		}),

		//maximum end value for the slider
		//The filteredEvents.@each is used to check if there are any elements in the filteredEvents when the property is computed.
		maxValue: _ember['default'].computed('filteredEvents.@each', function () {
			var min = 0;
			var max = 0;

			if (this.get('filteredEvents').get('length') > 0) {
				min = this.get('filteredEvents').objectAt(0).get('addedTimeStamp');
				max = this.get('filteredEvents').objectAt(0).get('addedTimeStamp');
			}

			this.get('filteredEvents').forEach(function (event) {
				var addedTimestamp = event.get('addedTimeStamp');
				if (max < addedTimestamp) {
					max = addedTimestamp;
				}

				if (min > addedTimestamp) {
					min = addedTimestamp;
				}
			});

			//diff in milliseconds
			var diff = max - min;

			//difference in seconds
			var diffSeconds = diff / 1000;
			var diffSecondsinCeil = Math.ceil(diffSeconds);

			return diffSecondsinCeil;
		}),

		//Parsing the run id from the url. /////// Has to be changed to a better way.
		idinUrl: _ember['default'].computed(function () {
			var url = window.location.pathname;
			var idinUrl = url.substring(url.lastIndexOf('/') + 1);
			return idinUrl;
		}),

		/*  Handles for max 3.5 hrs..647.22px represent 1:1 and checks till (647.22 * 15) */
		steps: _ember['default'].computed(function () {
			var width = _ember['default'].$(window).width();
			var sliderWidth = 84 / 100 * width;
			var endValue = this.get('maxValue');
			var ratio = endValue / sliderWidth;
			var stepsValue = 1;
			var startCompValue = 0;
			var returnValue = 1;
			for (var i = 0; i <= 50; i++) {
				if (ratio >= startCompValue && ratio < startCompValue + 1) {
					stepsValue = returnValue;
				}

				returnValue += 1;
				startCompValue += 1;
			}

			return stepsValue;
		}),

		//observes the input value in form and changes slider accordingly
		updateRange: (function () {
			var startValue = parseInt(this.get('inputStart'));
			var endValue = parseInt(this.get('inputEnd'));
			var max = parseInt(this.get('maxValue'));

			if (startValue > endValue) {
				this.set('error', true);
				this.set('errorMsg', "\'To\' must be greater than from");
			} else if (endValue > max) {
				this.set('error', true);
				this.set('errorMsg', 'To - cannot be greater than ' + max + '');
			} else {
				this.set('error', false);
				this.set('noGrids', true);
				this.set('selectedRange', [parseInt(this.get('inputStart')), parseInt(this.get('inputEnd'))]);
			}
		}).observes('inputStart', 'inputEnd'),

		//for loader image...
		catchValue: (function () {
			var rangeValue = this.get('selectedRange');
			if (parseInt(rangeValue[0]) === 0 && parseInt(rangeValue[1]) === 0) {
				this.set('noGrids', true);
				this.set('gridChange', false);
			} else {
				this.set('noGrids', false);
				this.set('gridChange', true);
			}
			if (this.gridChange === true) {
				//make the loader work
			}
		}).observes('selectedRange'),

		//#########################################################################################################################//
		//This function calculates the total grid of the data display and arranges data accordingly in an array replicating the grid.
		//#########################################################################################################################//

		//This function returns the number of columns allowed on a page, based on the screen size and pixels of the panel.
		noOfColumns: _ember['default'].computed(function () {
			var noOfColumns = Math.floor(_ember['default'].$(window).width() / 130);
			if (noOfColumns > 11) {
				noOfColumns = 11;
			}
			return noOfColumns;
		}),

		//This function returns Number of seconds allowed for a column, based on the screen size.
		secondsPerColumn: _ember['default'].computed('noOfColumns', 'selectedRange', function () {
			//Declarations for the variables being used.
			var noOfEventsPerColumn = this.get('maxValue') / this.get('noOfColumns');
			return noOfEventsPerColumn;
		}),

		//This function returns Number of seconds allowed for a row, based on the screen size.
		secondsPerRow: _ember['default'].computed('secondsPerColumn', function () {
			var secondsPerRow = this.get('secondsPerColumn') / 5;
			return secondsPerRow;
		}),

		//This function returns all the column breakpoints, based on the screen size.
		columnBreakpoints: _ember['default'].computed('secondsPerColumn', 'noOfColumns', function () {
			var start = parseInt(this.get('selectedRange')[0]);
			var things = [];
			for (var i = 0; i <= this.get('noOfColumns'); i++) {
				if (i === 0) {
					things[i] = 0 + start;
				} else {
					things[i] = +Math.ceil(this.get('secondsPerColumn') * i) + start;
				}
			}
			return things;
		}),

		//Sorting the events based on the added time stamp which is the time added with clock difference.
		sortEventsBy: ['addedTimeStamp'],
		sortedEvents: _ember['default'].computed.sort('filteredEvents', 'sortEventsBy'), //events replaced by filteredEvents here

		//This function creates the actual grid for display.
		eventsByGrid: _ember['default'].computed('filteredEvents', 'selectedRange', function () {
			//events replaced by filteredEvents here

			//Declaring the Variables required for Computation.
			var start = parseInt(this.get('selectedRange')[0]);

			var eventsByGrid = [];
			var noOfRows = 5;
			var minTimeStamp = this.get('sortedEvents').objectAt(0).get('addedTimeStamp') + start * 1000;
			var noOfColumns = this.get('noOfColumns');
			var columnBpoints = this.get('columnBreakpoints');
			var secondsPerRow = this.get('secondsPerRow');

			//setting up values in manual entry according to range selected
			this.set('inputStart', start);
			this.set('inputEnd', this.get('end'));

			//Initializing and setting up the grid to add the events.
			for (var row = 0; row < noOfRows; row++) {
				eventsByGrid.pushObject([]); //experiments/run/6
				for (var coll = 0; coll < noOfColumns + 1; coll++) {
					eventsByGrid.objectAt(row).pushObject([]);
				}
			}

			//Calling the foreach method for adding all the events to the grid.
			this.get('sortedEvents').forEach(manageSortedEvents);

			//This function checks the lower limit and upper limit based on the added Time stamp and the breakpoints that were created using the screen size.
			function manageSortedEvents(event) {
				if (columnBpoints.length > 1) {
					for (var counter = 0; counter < columnBpoints.length - 1; counter++) {
						if (event.get('addedTimeStamp') >= parseInt(columnBpoints[counter] * 1000 + minTimeStamp) && event.get('addedTimeStamp') <= parseInt((secondsPerRow + columnBpoints[counter]) * 1000 + minTimeStamp)) {
							eventsByGrid.objectAt(0).objectAt(counter).pushObject(event);
						}

						if (event.get('addedTimeStamp') > parseInt((secondsPerRow + columnBpoints[counter]) * 1000 + minTimeStamp) && event.get('addedTimeStamp') <= parseInt((secondsPerRow * 2 + columnBpoints[counter]) * 1000 + minTimeStamp)) {
							eventsByGrid.objectAt(1).objectAt(counter).pushObject(event);
						}

						if (event.get('addedTimeStamp') > parseInt((secondsPerRow * 2 + columnBpoints[counter]) * 1000 + minTimeStamp) && event.get('addedTimeStamp') <= parseInt((secondsPerRow * 3 + columnBpoints[counter]) * 1000 + minTimeStamp)) {
							eventsByGrid.objectAt(2).objectAt(counter).pushObject(event);
						}

						if (event.get('addedTimeStamp') > parseInt((secondsPerRow * 3 + columnBpoints[counter]) * 1000 + minTimeStamp) && event.get('addedTimeStamp') <= parseInt((secondsPerRow * 4 + columnBpoints[counter]) * 1000 + minTimeStamp)) {
							eventsByGrid.objectAt(3).objectAt(counter).pushObject(event);
						}

						if (event.get('addedTimeStamp') > parseInt((secondsPerRow * 4 + columnBpoints[counter]) * 1000 + minTimeStamp) && event.get('addedTimeStamp') <= parseInt((secondsPerRow * 5 + columnBpoints[counter]) * 1000 + minTimeStamp)) {
							eventsByGrid.objectAt(4).objectAt(counter).pushObject(event);
						}
					}
				}
			}

			//Returning the final array with proper columns divisions.
			this.set('noGrids', false);
			return eventsByGrid;
		})
	});
});
//#########################################################################################################################//
//                                          End of the eventsByGrid Function.                                              //
//#########################################################################################################################//
define('secuwear-frontend/components/ui-slider', ['exports', 'ui-slider/components/ui-slider'], function (exports, _uiSliderComponentsUiSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _uiSliderComponentsUiSlider['default'];
    }
  });
});
define('secuwear-frontend/components/x-option', ['exports', 'emberx-select/components/x-option'], function (exports, _emberxSelectComponentsXOption) {
  exports['default'] = _emberxSelectComponentsXOption['default'];
});
define('secuwear-frontend/components/x-select', ['exports', 'emberx-select/components/x-select'], function (exports, _emberxSelectComponentsXSelect) {
  exports['default'] = _emberxSelectComponentsXSelect['default'];
});
define('secuwear-frontend/controllers/applicaton', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({});
});
define('secuwear-frontend/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		auth: _ember['default'].inject.service('auth-manager'),
		actions: {
			login: function login() {
				this.get('auth').login();
			},
			logout: function logout() {
				this.get('auth').logout();
			}
		}
	});
});
define('secuwear-frontend/controllers/register', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        routing: _ember['default'].inject.service('-routing'),
        confirmpassword: '',
        showPolicy: false,
        success: false,
        genders: ['Male', 'Female', 'Other'],
        educationLevels: ['Some highschool', 'Highschool', 'Some college(2 years or less)', 'Bachelor\'s degree', 'Graduate degree'],
        states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        agree: false,
        validationErrorMsg: "",
        showError: false,

        //client-side validators
        usernameChanged: _ember['default'].observer('content.user.username', function () {
            var user = this.get('content').user;
            if (user.get('username') === undefined) {
                this.set('usernameclasses', null);
                this.set('usernameIcon', 'chevron-left');
            } else if (!/^[a-z0-9]+$/i.test(user.get('username'))) {
                this.set('usernameerror', 'Username must contain only alphanumeric characters');
                this.set('usernameclasses', 'has-error');
                this.set('usernameIcon', 'remove');
            } else {
                this.set('usernameerror', null);
                this.set('usernameclasses', 'has-success');
                this.set('usernameIcon', 'ok');
            }
        }),
        emailChanged: _ember['default'].observer('content.user.email', function () {
            var user = this.get('content').user;

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (user.get('email') === undefined) {
                this.set('emailclasses', null);
                this.set('emailIcon', 'chevron-left');
            } else if (!re.test(user.get('email'))) {
                this.set('emailerror', 'Enter a valid email');
                this.set('emailclasses', 'has-error');
                this.set('emailIcon', 'remove');
            } else {
                this.set('emailclasses', 'has-success');
                this.set('emailIcon', 'ok');
            }
        }),
        passwordChanged: _ember['default'].observer('content.user.password', function () {
            var user = this.get('content').user;
            if (user.get('password') === undefined || user.get('password') === '') {
                this.set('passwordclasses', null);
                this.set('passwordIcon', 'chevron-left');
            } else if (user.get('password').length < 8) {
                this.set('passwordclasses', 'has-error');
                this.set('passwordIcon', 'remove');
            } else {
                this.set('passwordclasses', 'has-success');
                this.set('passwordIcon', 'ok');
            }
        }),
        passwordConfirmChanged: _ember['default'].observer('content.user.confirmpassword', function () {
            var user = this.get('content').user;
            if (user.get('confirmpassword') === undefined || user.get('confirmpassword') === '') {
                this.set('confirmpasswordclasses', null);
                this.set('confirmpasswordIcon', 'chevron-left');
            } else if (user.get('password') !== user.get('confirmpassword')) {
                this.set('confirmpasswordclasses', 'has-error');
                this.set('confirmpasswordIcon', 'remove');
            } else {
                this.set('confirmpasswordclasses', 'has-success');
                this.set('confirmpasswordIcon', 'ok');
            }
        }),
        /* firstnameChanged: Ember.observer('content.profile.firstname', function(){
             var profile = this.get('content').profile;
             if (profile.get('firstname')===undefined || profile.get('firstname')===''){
                 this.set('firstnameclasses', null);
                 this.set('firstnameIcon', 'chevron-left');
             } else if (!/^[a-z]+$/i.test(profile.get('firstname'))){
                 this.set('firstnameclasses', 'has-error');
                 this.set('firstnameIcon', 'remove');
             } else {
                 this.set('firstnameclasses', 'has-success');
                 this.set('firstnameIcon', 'ok');
             }
         }),
         lastnameChanged: Ember.observer('content.profile.lastname', function(){
             var profile = this.get('content').profile;
             if (profile.get('lastname')===undefined || profile.get('lastname')===''){
                 this.set('lastnameclasses', null);
                 this.set('lastnameIcon', 'chevron-left');
             } else if (!/^[a-z]+$/i.test(profile.get('lastname'))){
                 this.set('lastnameclasses', 'has-error');
                 this.set('lastnameIcon', 'remove');
             } else {
                 this.set('lastnameclasses', 'has-success');
                 this.set('lastnameIcon', 'ok');
             }
         }),*/
        ageChanged: _ember['default'].observer('content.profile.age', function () {
            var profile = this.get('content').profile;
            if (profile.get('age') === undefined || profile.get('age') === '') {
                this.set('ageClass', null);
                this.set('ageIcon', 'chevron-left');
            } else if (!/^[0-9]{1,2}$/i.test(profile.get('age'))) {
                this.set('ageClass', 'has-error');
                this.set('ageIcon', 'remove');
            } else {
                this.set('ageClass', 'has-success');
                this.set('ageIcon', 'ok');
            }
        }),
        cityChanged: _ember['default'].observer('content.profile.city', function () {
            var profile = this.get('content').profile;
            if (profile.get('city') === undefined || profile.get('city') === '') {
                this.set('cityClass', null);
                this.set('cityIcon', 'chevron-left');
            } else if (!/^[a-zA-Z]+$/i.test(profile.get('city'))) {
                this.set('cityClass', 'has-error');
                this.set('cityIcon', 'remove');
            } else {
                this.set('cityClass', 'has-success');
                this.set('cityIcon', 'ok');
            }
        }),

        //actions
        actions: {
            showPolicy: function showPolicy() {
                this.set('showPolicy', !this.get('showPolicy'));
            },

            selectGender: function selectGender(gender) {
                this.set("selectGender", gender);
            },

            selectEduLevel: function selectEduLevel(edu) {
                this.set("selectEduLevel", edu);
            },

            selectState: function selectState(state) {
                this.set("selectState", state);
            },
            register: function register() {
                var route = this;
                route.set('validationErrorMsg', '');
                var user = route.get('content').user;
                var profile = route.get('content').profile;
                var gender = route.get('selectGender');
                var edu = route.get('selectEduLevel');
                var state = route.get('selectState');
                //console.log(gender);

                var t = route;
                //probably want to do some additional validation here
                if (user.get('password') === route.get('confirmpassword')) {
                    var requestdata = {
                        'username': user.get("username"),
                        'password': user.get('password'),
                        'email': user.get('email'),
                        //'gender': profile.get('gender'),
                        'gender': gender,
                        //'gender': gender,
                        'age': profile.get('age'),
                        'educationlevel': edu,
                        'city': profile.get('city'),
                        'state': state

                    };

                    console.log(requestdata);

                    _ember['default'].$.post('../api/register/', requestdata, function (response) {
                        var errMsg = '';
                        if (response.data.status === "error") {
                            if (response.data.username) {
                                errMsg = response.data.username;
                            } else if (response.data.email) {
                                errMsg = response.data.email;
                            } else {
                                errMsg = "An unknown error occured. Please try again";
                            }
                            t.set('validationErrorMsg', errMsg);
                        } else {
                            //success
                            t.set('success', true);
                            //could forward the user to another page (like home)
                            //t.transitionTo('login');
                            route.get('routing').transitionTo('login');
                        }
                    });
                } else {
                    route.set('validationErrorMsg', 'Passwords don\'t match');
                }
            }

        }
    });
});
define('secuwear-frontend/helpers/add', ['exports', 'ember'], function (exports, _ember) {
  exports.add = add;

  function add(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return +(a + b).toFixed(2);
    });
  }

  exports['default'] = _ember['default'].Helper.helper(add);
});
define('secuwear-frontend/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('secuwear-frontend/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('secuwear-frontend/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _emberBootstrapHelpersBsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot.not;
    }
  });
});
define('secuwear-frontend/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _emberBootstrapHelpersBsReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath.readPath;
    }
  });
});
define("secuwear-frontend/helpers/domain-color", ["exports", "ember"], function (exports, _ember) {
	exports.domainColor = domainColor;

	function domainColor(params /*, hash*/) {
		//This function return different colors based on the three different levels of domain.
		var panelColor;
		if (params[0] === "wearable") {
			//Orange
			panelColor = "orangeBackground";
		} else if (params[0] === "mobile") {
			//Grey
			panelColor = "greyBackground";
		} else if (params[0] === "webapp") {
			//Blue
			panelColor = "blueBackground";
		}

		return panelColor;
	}

	exports["default"] = _ember["default"].Helper.helper(domainColor);
});
define('secuwear-frontend/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  exports.eq = eq;

  function eq(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return a === b;
    });
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('secuwear-frontend/helpers/gt', ['exports', 'ember'], function (exports, _ember) {

  var gt = function gt(params) {
    return params[0] >= params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(gt);
});
define('secuwear-frontend/helpers/lt', ['exports', 'ember'], function (exports, _ember) {

  var lt = function lt(params) {
    return params[0] < params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(lt);
});
define('secuwear-frontend/helpers/mult', ['exports', 'ember'], function (exports, _ember) {
  exports.mult = mult;

  function mult(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return +Math.ceil(a * b);
    });
  }

  exports['default'] = _ember['default'].Helper.helper(mult);
});
define('secuwear-frontend/helpers/ne', ['exports', 'ember'], function (exports, _ember) {
  exports.ne = ne;

  function ne(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return a !== b;
    });
  }

  exports['default'] = _ember['default'].Helper.helper(ne);
});
define('secuwear-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('secuwear-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('secuwear-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'secuwear-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _secuwearFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_secuwearFrontendConfigEnvironment['default'].APP.name, _secuwearFrontendConfigEnvironment['default'].APP.version)
  };
});
define('secuwear-frontend/initializers/auth-manager', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    application.inject('route', 'auth', 'service:auth-manager');
    application.inject('component', 'auth', 'service:auth-manager');
    application.inject('controller', 'auth', 'service:auth-manager');
  }

  exports['default'] = {
    name: 'auth-manager',
    initialize: initialize
  };

  /*export function initialize(application) {
  	application.inject('route', 'auth', 'service:auth-manager');
  }
  
  export default {
  	name: 'auth-manager',
  	initialize: initialize
  };
  */
});
define('secuwear-frontend/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _emberBootstrapInitializersBootstrapLinkto) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto.initialize;
    }
  });
});
define('secuwear-frontend/initializers/constants', ['exports'], function (exports) {
	exports.initialize = initialize;

	function initialize(application) {
		application.inject('route', 'constants', 'service:constants');
		application.inject('controller', 'constants', 'service:constants');
		application.inject('model', 'constants', 'service:constants');
	}

	exports['default'] = {
		name: 'constants',
		initialize: initialize
	};
});
define('secuwear-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('secuwear-frontend/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('secuwear-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('secuwear-frontend/initializers/export-application-global', ['exports', 'ember', 'secuwear-frontend/config/environment'], function (exports, _ember, _secuwearFrontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_secuwearFrontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _secuwearFrontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_secuwearFrontendConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('secuwear-frontend/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('secuwear-frontend/initializers/load-bootstrap-config', ['exports', 'secuwear-frontend/config/environment', 'ember-bootstrap/config'], function (exports, _secuwearFrontendConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_secuwearFrontendConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('secuwear-frontend/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('secuwear-frontend/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('secuwear-frontend/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("secuwear-frontend/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('secuwear-frontend/models/btleevent', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
    exports['default'] = _emberData['default'].Model.extend({
        caplength: _emberData['default'].attr(),
        layers: _emberData['default'].attr(),
        highestlayer: _emberData['default'].attr(),
        epochtime: _emberData['default'].attr(),
        arrivaltime: _emberData['default'].attr(),
        //btle
        accessaddress: _emberData['default'].attr(),
        advertisingaddress: _emberData['default'].attr(),
        advertisingheader: _emberData['default'].attr(),
        crc: _emberData['default'].attr(),
        btledata: _emberData['default'].attr(),
        //ppi layer data
        ppiflags: _emberData['default'].attr(),
        ppiversion: _emberData['default'].attr(),
        ppidlt: _emberData['default'].attr(),
        ppiheaderlength: _emberData['default'].attr(),
        ppireserved: _emberData['default'].attr(),
        domain: _emberData['default'].attr(),
        run: _emberData['default'].belongsTo('run'),

        addedTimeStamp: _ember['default'].computed('arrivaltime', function () {
            var timeChanged = new Date(this.get('arrivaltime'));
            return timeChanged.getTime();
        })
    });
});
define('secuwear-frontend/models/event', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
	exports['default'] = _emberData['default'].Model.extend({
		researcherid: _emberData['default'].attr(),
		runid: _emberData['default'].belongsTo('run'),
		created: _emberData['default'].attr(),
		clocktimedifference: _emberData['default'].attr(),
		event: _emberData['default'].attr(),
		eventtype: _emberData['default'].attr(),
		domain: _emberData['default'].attr(),
		codereference: _emberData['default'].attr(),

		dateTime: _ember['default'].computed('created', function () {
			var timeChanged = new Date(this.get('created'));
			return timeChanged;
		}),

		addedTimeStamp: _ember['default'].computed('clocktimedifference', function () {
			var a = this.get('clocktimedifference').split(':');
			var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
			seconds *= 1000;
			var timeChanged = this.get('dateTime').getTime() + seconds;
			return timeChanged;
		})

	});
});
define('secuwear-frontend/models/experiment', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr(),
		description: _emberData['default'].attr(),
		datecreated: _emberData['default'].attr(),
		runs: _emberData['default'].hasMany('run'),
		user: _emberData['default'].belongsTo('user')
	});
});
define('secuwear-frontend/models/profile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		user: _emberData['default'].belongsTo('user'),
		roles: _emberData['default'].attr('role', { defaultValue: { admin: false, researcher: false, subject: false } }),
		age: _emberData['default'].attr('number'),
		gender: _emberData['default'].attr('string'),
		educationlevel: _emberData['default'].attr('string'),
		city: _emberData['default'].attr('string'),
		state: _emberData['default'].attr('string')
	});
});
define('secuwear-frontend/models/run', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr(),
		description: _emberData['default'].attr(),
		datecreated: _emberData['default'].attr(),
		experiment: _emberData['default'].belongsTo('experiment'),
		events: _emberData['default'].hasMany('event'),
		btleevents: _emberData['default'].hasMany('btleevent'),
		user: _emberData['default'].belongsTo('user')
	});
});
define('secuwear-frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		profile: _emberData['default'].belongsTo('profile'),
		username: _emberData['default'].attr(),
		email: _emberData['default'].attr(),
		password: _emberData['default'].attr(),
		experiments: _emberData['default'].hasMany('experiment'),
		runs: _emberData['default'].hasMany('run')
	});
});
define('secuwear-frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('secuwear-frontend/router', ['exports', 'ember', 'secuwear-frontend/config/environment'], function (exports, _ember, _secuwearFrontendConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _secuwearFrontendConfigEnvironment['default'].locationType,
        rootURL: _secuwearFrontendConfigEnvironment['default'].routerRootURL
    });

    Router.map(function () {
        this.route('login', { path: '/' });
        this.route('register', { path: '/register' });
        //Going to the index route of the experiment.
        this.route('experiments', { path: '/experiments' }, function () {
            this.route('index', { path: '/' });
        });
        //This route takes us to the runs display.
        this.route('runs', { path: '/experiments/run/:run_id' });
        this.route('page-not-found', { path: '/* wildcard' });
    });

    exports['default'] = Router;
});
define('secuwear-frontend/routes/experiments', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('secuwear-frontend/routes/experiments/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		//Route protection
		authManager: _ember['default'].inject.service('auth-manager'),
		beforeModel: function beforeModel(transition) {
			this.get('authManager').routeRestriction(transition, 'login');
		},

		model: function model() {}
	});
});
define('secuwear-frontend/routes/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('secuwear-frontend/routes/register', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return _rsvp['default'].hash({
				user: this.store.createRecord('user'),
				profile: this.store.createRecord('profile')
			});
		}
	});
});
define('secuwear-frontend/routes/run', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		//Route protection
		authManager: _ember['default'].inject.service('auth-manager'),
		beforeModel: function beforeModel(transition) {
			this.get('authManager').routeRestriction(transition, 'login');
		},

		model: function model(params) {
			return this.get('store').findRecord('run', params.runId);
		}
	});
});
define('secuwear-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('secuwear-frontend/services/auth-manager', ['exports', 'ember', 'secuwear-frontend/config/environment'], function (exports, _ember, _secuwearFrontendConfigEnvironment) {
	exports['default'] = _ember['default'].Service.extend({
		store: _ember['default'].inject.service('store'),
		routing: _ember['default'].inject.service('-routing'),

		//field vars
		username: '',
		password: '',
		remember: false,
		errorMsg: '',

		//stored data
		user: null,
		profile: null,
		isLoggedIn: false,
		routeLoggedIn: false,
		login: function login() {
			console.log('Logging in:');

			//retrieve field data
			var username = this.get('username');
			var password = this.get('password');
			var remember = this.get('remember');

			var data = {
				'username': username,
				'password': password
			};
			var auth = this;

			//make api request
			_ember['default'].$.post(_secuwearFrontendConfigEnvironment['default'].domainURL + '/api/session/', data, function (response) {
				if (response.data.isauthenticated) {
					//success
					auth.set('user', auth.get('store').findRecord('user', response.data.userid));
					//auth.set('profile', auth.get('store').findRecord('profile', response.data.userid));
					auth.set('isLoggedIn', true);

					if (remember) {
						//save username and pass to local storage
						localStorage.setItem('remember', true);
						localStorage.setItem('username', auth.get('username'));
						localStorage.setItem('password', auth.get('password'));
					} else {
						localStorage.removeItem('remember');
						localStorage.removeItem('username');
						localStorage.removeItem('password');
					}
					auth.set('password', '');
					// Change per user role!
					// if(auth.profile.roles.admin) {
					// 	auth.get('routing').transitionTo('admin');
					// } else {
					// 	auth.get('routing').transitionTo('subject');
					// }

					auth.get('routing').transitionTo('experiments.index');

					console.log('Login POST Request to ../api/session/ was successful.');
				} else {
					//errors
					console.log('Login POST Request to ../api/session/ was unsuccessful.');
					auth.set('errorMsg', response.data.message);
				}
			});
		},
		logout: function logout() {
			console.log('Logging out');
			var auth = this;
			_ember['default'].$.ajax({ url: _secuwearFrontendConfigEnvironment['default'].domainURL + '/api/session/', type: 'DELETE' }).then(function (response) {
				console.log('Logout DELETE Request to ../api/session/ was successful:' + response);
				auth.set('isLoggedIn', false);
				auth.set('errorMsg', '');
				auth.set('username', '');
				auth.set('user', null);
				//auth.set('profile', null);

				if (localStorage.remember) {
					auth.set('remember', localStorage.remember);
					auth.set('username', localStorage.username);
					auth.set('password', localStorage.password);
				}
				auth.get('routing').transitionTo('login');
			});
		},
		/**
  	called whenever the application loads to initialize any stored session/local variables
  **/
		init: function init() {
			this._super();
			var auth = this;

			//handle session and local variable loading
			this.set('remember', localStorage.remember);

			if (auth.get('remember')) {
				auth.set('username', localStorage.username);
				auth.set('password', localStorage.password);
			}

			//check to see if the user is logged into the API
			_ember['default'].$.get(_secuwearFrontendConfigEnvironment['default'].domainURL + '/api/session/', function (response) {
				if (response.data.isauthenticated) {
					//success
					console.log('The user: \'' + response.data.username + '\' is currently logged in.');
					auth.set('user', auth.get('store').findRecord('user', response.data.userid));
					//auth.set('profile', auth.get('store').findRecord('profile', response.data.userid));
					auth.set('isLoggedIn', true);
				} else {
					//errors
					console.log('The user is not currently logged in.');
				}
			});
		},

		routeRestriction: function routeRestriction(transition, transitionURL) {
			var route = this;
			if (!route.get('routeLoggedIn')) {
				var trans = transition.abort();
				_ember['default'].$.get(_secuwearFrontendConfigEnvironment['default'].domainURL + '/api/session/', function (response) {
					if (response.data.isauthenticated) {
						route.set('routeLoggedIn', true);
						trans.retry();
					} else {
						route.get('routing').transitionTo(transitionURL);
					}
				});
			}
		},

		//Uploading a file to the django server to scan files!
		Upload: function Upload(file) {
			var fileToUpload = file;
			// var auth = this;
			console.log('This is the file: ');
			console.log(fileToUpload);
			_ember['default'].$.post(_secuwearFrontendConfigEnvironment['default'].domainURL + '/api/btles', fileToUpload, function (response) {
				console.log(response);
			});
		}
	});
});
define("secuwear-frontend/services/constants", ["exports", "ember"], function (exports, _ember) {

	var month_names = [];
	month_names[month_names.length] = "Jan";
	month_names[month_names.length] = "Feb";
	month_names[month_names.length] = "Mar";
	month_names[month_names.length] = "Apr";
	month_names[month_names.length] = "May";
	month_names[month_names.length] = "Jun";
	month_names[month_names.length] = "Jul";
	month_names[month_names.length] = "Aug";
	month_names[month_names.length] = "Sep";
	month_names[month_names.length] = "Oct";
	month_names[month_names.length] = "Nov";
	month_names[month_names.length] = "Dec";

	exports["default"] = _ember["default"].Service.extend({
		debug: true,
		genders: ['Male', 'Female', 'Other'],
		educationLevels: ['some highschool', 'highschool', 'some college(2 years or less)', 'bachelor\'s degree', 'graduate degree'],
		states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],

		month_names: month_names,
		secsToStr: function secsToStr(seconds) {
			//Helper function for creating Gmail/FB/Twitter style time strings of the form tt <unit>(s) ago, where unit = <year||day||hour||minutes||seconds>.
			var numberEnding = function numberEnding(number) {
				return number > 1 ? 's ' : ' ';
			};
			var years = Math.floor(seconds / 31536000);
			var days = Math.floor(seconds % 31536000 / 86400);
			var hours = Math.floor(seconds % 31536000 % 86400 / 3600);
			var mins = Math.floor(seconds % 31536000 % 86400 % 3600 / 60);
			var secs = Math.floor(seconds % 31536000 % 86400 % 3600 % 60);
			if (years > 0) {
				return years + " year" + numberEnding(years) + " ago";
			} else if (days > 0) {
				return days + " day" + numberEnding(days) + " ago";
			} else if (hours > 0) {
				return hours + " hour" + numberEnding(hours) + " ago";
			} else if (mins > 0) {
				return mins + " minute" + numberEnding(mins) + " ago";
			} else if (secs > 0) {
				return secs + " second" + numberEnding(secs) + " ago";
			} else if (secs === 0) {
				return "Just Now";
			}
		}
	});
});
define("secuwear-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "nav-bar", ["loc", [null, [4, 2], [4, 13]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [10, 0], [10, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]], 0, 0, 0, 0], "collapsed", "expanded"], [], ["loc", [null, [1, 63], [1, 102]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]], 0, 0], ["content", "title", ["loc", [null, [4, 12], [4, 21]]], 0, 0, 0, 0], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "hidden", ["loc", [null, [1, 10], [1, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 31]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 67]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 4], [2, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 2], [4, 16]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 0
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [9, 34], [9, 38]]], 0, 0, 0, 0], "fade"], [], ["loc", [null, [9, 29], [9, 47]]], 0, 0], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [9, 53], [9, 55]]], 0, 0, 0, 0], "in"], [], ["loc", [null, [9, 48], [9, 62]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [9, 70], [9, 80]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]], 0, 0], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]], 0, 0, 0, 0]], [], [], 0, 0], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]], 0, 0, 0, 0]], [], [], 0, 0], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]], 0, 0, 0, 0]], [], [], 0, 0], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [8, 6], [8, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 0], [10, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 19
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "_renderInPlace", ["loc", [null, [1, 69], [1, 83]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [13, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 8], [4, 32]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 30], [10, 54]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "bs-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [2, 46]]], 0, 0], 0, 0, 0, 0], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "bs-read-path", [["get", "item", ["loc", [null, [8, 34], [8, 38]]], 0, 0, 0, 0], ["get", "optionValuePath", ["loc", [null, [8, 39], [8, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 19], [8, 56]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "bs-eq", [["get", "item", ["loc", [null, [9, 29], [9, 33]]], 0, 0, 0, 0], ["get", "value", ["loc", [null, [9, 34], [9, 39]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [9, 41]]], 0, 0], 0, 0, 0, 0], ["inline", "bs-read-path", [["get", "item", ["loc", [null, [10, 23], [10, 27]]], 0, 0, 0, 0], ["get", "optionLabelPath", ["loc", [null, [10, 28], [10, 43]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 8], [10, 45]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "secuwear-frontend/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]], 0, 0, 0, 0]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/experiment-selector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 9
                },
                "end": {
                  "line": 23,
                  "column": 59
                }
              },
              "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "experiment.name", ["loc", [null, [23, 40], [23, 59]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 8
              },
              "end": {
                "line": 24,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			    		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "experiment", ["loc", [null, [23, 28], [23, 38]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [23, 9], [23, 73]]]]],
          locals: ["experiment"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 6
            },
            "end": {
              "line": 25,
              "column": 7
            }
          },
          "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			    	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "true");
          dom.setAttribute(el1, "selected", "true");
          var el2 = dom.createTextNode(" -- Select experiment -- ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "auth.user.experiments", ["loc", [null, [22, 16], [22, 37]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [22, 8], [24, 17]]]]],
        locals: ["xs"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 6
            },
            "end": {
              "line": 42,
              "column": 6
            }
          },
          "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		     	from ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "selectedExperiment.name", ["loc", [null, [41, 13], [41, 40]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 48,
                  "column": 9
                },
                "end": {
                  "line": 48,
                  "column": 45
                }
              },
              "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "run.name", ["loc", [null, [48, 33], [48, 45]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 47,
                "column": 8
              },
              "end": {
                "line": 49,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		    			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "run", ["loc", [null, [48, 28], [48, 31]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [48, 9], [48, 59]]]]],
          locals: ["run"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 6
            },
            "end": {
              "line": 50,
              "column": 6
            }
          },
          "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		    	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "true");
          dom.setAttribute(el1, "selected", "true");
          var el2 = dom.createTextNode(" -- Select run -- ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "selectedExperiment.runs", ["loc", [null, [47, 16], [47, 39]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [47, 8], [49, 17]]]]],
        locals: ["xs"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 58,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/experiment-selector.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-2 col-md-2 col-sm-2 col-xs-2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-8 col-md-8 col-sm-8 col-xs-8");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Welcome ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-2 col-md-2 col-sm-2 col-xs-2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-2 col-md-2 col-sm-2 col-xs-2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-4 col-md-4 col-sm-4 col-xs-4");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default");
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-heading hashExp");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "panel-title");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-body");
        var el5 = dom.createTextNode("\n		   	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Experiments");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("		    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-4 col-md-4 col-sm-4 col-xs-4");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default");
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-heading hashExp");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "panel-title");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-body");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Runs \n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("		   	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("		    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-2 col-md-2 col-sm-2 col-xs-2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [6, 1, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1, 3, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["content", "auth.user.username", ["loc", [null, [4, 14], [4, 36]]], 0, 0, 0, 0], ["block", "x-select", [], ["class", "form-control reg-input-field", "action", "selectExperiment"], 0, null, ["loc", [null, [20, 6], [25, 20]]]], ["block", "if", [["get", "selectedExperiment", ["loc", [null, [40, 12], [40, 30]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [40, 6], [42, 13]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "action", "selectRun"], 2, null, ["loc", [null, [45, 6], [50, 19]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "validationMessages.firstObject", ["loc", [null, [2, 29], [2, 63]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showValidationMessages", ["loc", [null, [1, 6], [1, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 97]]], 0, 0], ["content", "label", ["loc", [null, [4, 98], [4, 107]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 40], [5, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 12], [5, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 12], [7, 160]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [15, 26], [15, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [15, 40], [15, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 12], [15, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 12], [17, 143]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 184]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 131]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 162]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 145]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "secuwear-frontend/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/components/nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 8
              },
              "end": {
                "line": 15,
                "column": 106
              }
            },
            "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "href", "");
            dom.setAttribute(el1, "style", "color:#000;");
            var el2 = dom.createTextNode("Secuwear Data");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 6
            },
            "end": {
              "line": 16,
              "column": 6
            }
          },
          "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["experiments.index"], ["class", "navbar-brand"], 0, null, ["loc", [null, [15, 8], [15, 118]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 6
            },
            "end": {
              "line": 18,
              "column": 6
            }
          },
          "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "navbar-brand");
          dom.setAttribute(el1, "href", "/");
          var el2 = dom.createTextNode("Secuwear Data");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 10
              },
              "end": {
                "line": 27,
                "column": 10
              }
            },
            "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "href", "");
            var el2 = dom.createTextNode("Experiments");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 6
            },
            "end": {
              "line": 33,
              "column": 6
            }
          },
          "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "nav navbar-nav");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "nav navbar-nav logout");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "glyphicon glyphicon-off");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  Log out ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["block", "link-to", ["experiments.index"], ["tagName", "li"], 0, null, ["loc", [null, [25, 10], [27, 22]]]], ["element", "action", ["logout"], [], ["loc", [null, [31, 42], [31, 61]]], 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 6
          }
        },
        "moduleName": "secuwear-frontend/templates/components/nav-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el4, "aria-expanded", "false");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        dom.setAttribute(el3, "id", "bs-example-navbar-collapse-1");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.container-fluid ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "auth.isLoggedIn", ["loc", [null, [14, 12], [14, 27]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 6], [18, 13]]]], ["block", "if", [["get", "auth.isLoggedIn", ["loc", [null, [23, 12], [23, 27]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [23, 6], [33, 13]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/components/run-display", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 3
            },
            "end": {
              "line": 5,
              "column": 72
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "");
          var el2 = dom.createTextNode("Experiments");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 3
            },
            "end": {
              "line": 6,
              "column": 64
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "");
          var el2 = dom.createTextNode("Runs");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 5
              },
              "end": {
                "line": 37,
                "column": 5
              }
            },
            "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "alert alert-danger");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "errorMsg", ["loc", [null, [36, 39], [36, 51]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 3
            },
            "end": {
              "line": 39,
              "column": 3
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				 From: ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "margin-right:50px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" \n				To: ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n					\n					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-danger");
          dom.setAttribute(el1, "style", "height:25px; width: 25px; padding:0;");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "glyphicon glyphicon-remove");
          dom.setAttribute(el2, "style", "font-size: 10px; padding: 0;");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createElementMorph(element7);
          morphs[3] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["class", "inputWidth", "type", "text", "value", ["subexpr", "@mut", [["get", "inputStart", ["loc", [null, [30, 56], [30, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Start value"], ["loc", [null, [30, 11], [30, 94]]], 0, 0], ["inline", "input", [], ["class", "inputWidth", "type", "text", "value", ["subexpr", "@mut", [["get", "inputEnd", ["loc", [null, [32, 53], [32, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "End value"], ["loc", [null, [32, 8], [32, 87]]], 0, 0], ["element", "action", ["removeManualRangeInput"], [], ["loc", [null, [34, 81], [34, 116]]], 0, 0], ["block", "if", [["get", "error", ["loc", [null, [35, 11], [35, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [35, 5], [37, 12]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 3
            },
            "end": {
              "line": 42,
              "column": 3
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-default");
          var el2 = dom.createTextNode("Manually enter range");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n				\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [["element", "action", ["manualRangeInput"], [], ["loc", [null, [40, 36], [40, 66]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 4
            },
            "end": {
              "line": 58,
              "column": 4
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "range-slider", [], ["mood", "info", "min", 0, "max", ["subexpr", "@mut", [["get", "maxValue", ["loc", [null, [57, 42], [57, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "step", ["subexpr", "@mut", [["get", "steps", ["loc", [null, [57, 56], [57, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "tooltip", "always", "handle", "round", "class", "rangeslider", "value", ["subexpr", "@mut", [["get", "selectedRange", ["loc", [null, [57, 120], [57, 133]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [57, 5], [57, 135]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 1
            },
            "end": {
              "line": 79,
              "column": 1
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "width:20%; margin:0 auto;");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-spinner fa-spin");
          dom.setAttribute(el2, "style", "font-size: 30px; margin-left:20%; ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Waiting for you to select range...");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 81,
                "column": 3
              },
              "end": {
                "line": 83,
                "column": 3
              }
            },
            "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-lg-1 col-md-1 col-sm-1 col-xs-1");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "columnSecond", ["loc", [null, [82, 53], [82, 69]]], 0, 0, 0, 0]],
          locals: ["columnSecond"],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 99,
                      "column": 8
                    },
                    "end": {
                      "line": 144,
                      "column": 8
                    }
                  },
                  "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("								");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1, "class", "panel-group");
                  var el2 = dom.createTextNode("\n");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("									");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "panel");
                  dom.setAttribute(el2, "id", "twrap");
                  var el3 = dom.createTextNode("\n										");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("div");
                  dom.setAttribute(el3, "data-toggle", "collapse");
                  dom.setAttribute(el3, "data-parent", "#accordion");
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("h4");
                  dom.setAttribute(el4, "class", "panel-title");
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("a");
                  dom.setAttribute(el5, "data-toggle", "collapse");
                  dom.setAttribute(el5, "id", "eventTitle");
                  var el6 = dom.createElement("strong");
                  var el7 = dom.createComment("");
                  dom.appendChild(el6, el7);
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n											");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n										");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n								        ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("div");
                  dom.setAttribute(el3, "id", "detail");
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Capture Length:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Layers:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Highest Layer:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Epoch Time:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Arrival Time:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Access Address:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("br");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("Advertising Address:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("CRC:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("BTLE Data:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("PPI Flags:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("PPI Version:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("PPI DLT:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("PPI Header Length:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("strong");
                  var el5 = dom.createTextNode("PPI Reserved:");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(" ");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n										");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n										");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("div");
                  dom.setAttribute(el3, "class", "panel-collapse collapse");
                  var el4 = dom.createTextNode("\n											");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createElement("div");
                  dom.setAttribute(el4, "class", "panel-body");
                  dom.setAttribute(el4, "id", "dataList");
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Capture Length:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Layers:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Highest Layer:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Epoch Time:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Arrival Time:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Access Address:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("br");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("Advertising Address:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("CRC:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("BTLE Data:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("PPI Flags:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("PPI Version:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("PPI DLT:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("PPI Header Length:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n												");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createElement("strong");
                  var el6 = dom.createTextNode("PPI Reserved:");
                  dom.appendChild(el5, el6);
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode(" ");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createComment("");
                  dom.appendChild(el4, el5);
                  var el5 = dom.createTextNode("\n											");
                  dom.appendChild(el4, el5);
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("\n										");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n									");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n								");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element0 = dom.childAt(fragment, [1, 2]);
                  var element1 = dom.childAt(element0, [1]);
                  var element2 = dom.childAt(element1, [1, 1]);
                  var element3 = dom.childAt(element0, [3]);
                  var element4 = dom.childAt(element0, [5]);
                  var element5 = dom.childAt(element4, [1]);
                  var morphs = new Array(33);
                  morphs[0] = dom.createAttrMorph(element1, 'class');
                  morphs[1] = dom.createAttrMorph(element1, 'data-target');
                  morphs[2] = dom.createAttrMorph(element2, 'href');
                  morphs[3] = dom.createMorphAt(dom.childAt(element2, [0]), 0, 0);
                  morphs[4] = dom.createMorphAt(element3, 3, 3);
                  morphs[5] = dom.createMorphAt(element3, 8, 8);
                  morphs[6] = dom.createMorphAt(element3, 13, 13);
                  morphs[7] = dom.createMorphAt(element3, 18, 18);
                  morphs[8] = dom.createMorphAt(element3, 23, 23);
                  morphs[9] = dom.createMorphAt(element3, 28, 28);
                  morphs[10] = dom.createMorphAt(element3, 33, 33);
                  morphs[11] = dom.createMorphAt(element3, 37, 37);
                  morphs[12] = dom.createMorphAt(element3, 41, 41);
                  morphs[13] = dom.createMorphAt(element3, 45, 45);
                  morphs[14] = dom.createMorphAt(element3, 49, 49);
                  morphs[15] = dom.createMorphAt(element3, 53, 53);
                  morphs[16] = dom.createMorphAt(element3, 57, 57);
                  morphs[17] = dom.createMorphAt(element3, 61, 61);
                  morphs[18] = dom.createAttrMorph(element4, 'id');
                  morphs[19] = dom.createMorphAt(element5, 3, 3);
                  morphs[20] = dom.createMorphAt(element5, 8, 8);
                  morphs[21] = dom.createMorphAt(element5, 13, 13);
                  morphs[22] = dom.createMorphAt(element5, 18, 18);
                  morphs[23] = dom.createMorphAt(element5, 23, 23);
                  morphs[24] = dom.createMorphAt(element5, 28, 28);
                  morphs[25] = dom.createMorphAt(element5, 33, 33);
                  morphs[26] = dom.createMorphAt(element5, 37, 37);
                  morphs[27] = dom.createMorphAt(element5, 41, 41);
                  morphs[28] = dom.createMorphAt(element5, 45, 45);
                  morphs[29] = dom.createMorphAt(element5, 49, 49);
                  morphs[30] = dom.createMorphAt(element5, 53, 53);
                  morphs[31] = dom.createMorphAt(element5, 57, 57);
                  morphs[32] = dom.createMorphAt(element5, 61, 61);
                  return morphs;
                },
                statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "domain-color", [["get", "event.domain", ["loc", [null, [103, 51], [103, 63]]], 0, 0, 0, 0]], [], ["loc", [null, [103, 36], [103, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "data-target", ["concat", ["#collapse", ["get", "event.id", ["loc", [null, [103, 139], [103, 147]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["#collapse", ["get", "event.id", ["loc", [null, [105, 71], [105, 79]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "event.highestlayer", ["loc", [null, [105, 91], [105, 113]]], 0, 0, 0, 0], ["content", "event.caplength", ["loc", [null, [109, 44], [109, 63]]], 0, 0, 0, 0], ["content", "event.layers", ["loc", [null, [110, 36], [110, 52]]], 0, 0, 0, 0], ["content", "event.highestlayer", ["loc", [null, [111, 43], [111, 65]]], 0, 0, 0, 0], ["content", "event.epochtime", ["loc", [null, [112, 40], [112, 59]]], 0, 0, 0, 0], ["content", "event.arrivaltime", ["loc", [null, [113, 42], [113, 63]]], 0, 0, 0, 0], ["content", "event.accessaddress", ["loc", [null, [114, 44], [114, 67]]], 0, 0, 0, 0], ["content", "event.advertisingaddress", ["loc", [null, [115, 49], [115, 77]]], 0, 0, 0, 0], ["content", "event.crc", ["loc", [null, [116, 33], [116, 46]]], 0, 0, 0, 0], ["content", "event.btledata", ["loc", [null, [117, 39], [117, 57]]], 0, 0, 0, 0], ["content", "event.ppiflags", ["loc", [null, [118, 39], [118, 57]]], 0, 0, 0, 0], ["content", "event.ppiversion", ["loc", [null, [119, 41], [119, 61]]], 0, 0, 0, 0], ["content", "event.ppidlt", ["loc", [null, [120, 37], [120, 53]]], 0, 0, 0, 0], ["content", "event.ppiheaderlength", ["loc", [null, [121, 47], [121, 72]]], 0, 0, 0, 0], ["content", "event.ppireserved", ["loc", [null, [122, 42], [122, 63]]], 0, 0, 0, 0], ["attribute", "id", ["concat", ["collapse", ["get", "event.id", ["loc", [null, [124, 29], [124, 37]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "event.caplength", ["loc", [null, [126, 45], [126, 64]]], 0, 0, 0, 0], ["content", "event.layers", ["loc", [null, [127, 37], [127, 53]]], 0, 0, 0, 0], ["content", "event.highestlayer", ["loc", [null, [128, 44], [128, 66]]], 0, 0, 0, 0], ["content", "event.epochtime", ["loc", [null, [129, 41], [129, 60]]], 0, 0, 0, 0], ["content", "event.arrivaltime", ["loc", [null, [130, 43], [130, 64]]], 0, 0, 0, 0], ["content", "event.accessaddress", ["loc", [null, [131, 45], [131, 68]]], 0, 0, 0, 0], ["content", "event.advertisingaddress", ["loc", [null, [132, 50], [132, 78]]], 0, 0, 0, 0], ["content", "event.crc", ["loc", [null, [133, 34], [133, 47]]], 0, 0, 0, 0], ["content", "event.btledata", ["loc", [null, [134, 40], [134, 58]]], 0, 0, 0, 0], ["content", "event.ppiflags", ["loc", [null, [135, 40], [135, 58]]], 0, 0, 0, 0], ["content", "event.ppiversion", ["loc", [null, [136, 42], [136, 62]]], 0, 0, 0, 0], ["content", "event.ppidlt", ["loc", [null, [137, 38], [137, 54]]], 0, 0, 0, 0], ["content", "event.ppiheaderlength", ["loc", [null, [138, 48], [138, 73]]], 0, 0, 0, 0], ["content", "event.ppireserved", ["loc", [null, [139, 43], [139, 64]]], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 98,
                    "column": 6
                  },
                  "end": {
                    "line": 145,
                    "column": 6
                  }
                },
                "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["subexpr", "ne", [["get", "selectedDomain", ["loc", [null, [99, 18], [99, 32]]], 0, 0, 0, 0], ["get", "event.domain", ["loc", [null, [99, 33], [99, 45]]], 0, 0, 0, 0]], [], ["loc", [null, [99, 14], [99, 46]]], 0, 0]], [], 0, null, ["loc", [null, [99, 8], [144, 15]]]]],
              locals: ["event"],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 95,
                  "column": 4
                },
                "end": {
                  "line": 147,
                  "column": 4
                }
              },
              "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-lg-1 col-md-1 col-sm-1 col-xs-1");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("					");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "eventCol", ["loc", [null, [98, 14], [98, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [98, 6], [145, 15]]]]],
            locals: ["eventCol"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 92,
                "column": 2
              },
              "end": {
                "line": 151,
                "column": 2
              }
            },
            "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row verticalline");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("			");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
            return morphs;
          },
          statements: [["block", "each", [["get", "eventRow", ["loc", [null, [95, 12], [95, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [95, 4], [147, 13]]]], ["inline", "mult", [["get", "secondsPerRow", ["loc", [null, [150, 15], [150, 28]]], 0, 0, 0, 0], ["subexpr", "add", [["get", "index", ["loc", [null, [150, 34], [150, 39]]], 0, 0, 0, 0], 1], [], ["loc", [null, [150, 29], [150, 43]]], 0, 0]], [], ["loc", [null, [150, 8], [150, 45]]], 0, 0]],
          locals: ["eventRow", "index"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 1
            },
            "end": {
              "line": 152,
              "column": 1
            }
          },
          "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row datadisplay");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "xaxis");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "columnBreakpoints", ["loc", [null, [81, 11], [81, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [81, 3], [83, 12]]]], ["block", "each", [["get", "eventsByGrid", ["loc", [null, [92, 10], [92, 22]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [92, 2], [151, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 152,
            "column": 8
          }
        },
        "moduleName": "secuwear-frontend/templates/components/run-display.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-4 col-md-4 col-sm-12 col-xs-12 left");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "id", "breadcrumbs-two");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" \n\n			   ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("	");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		\n		\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-4 col-md-4 col-sm-12 col-xs-12");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("strong");
        var el5 = dom.createTextNode("Available domains");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "legendbtn3 btn btn-default");
        var el5 = dom.createTextNode("Web App");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "legendbtn1 btn btn-default");
        var el5 = dom.createTextNode("Wearable");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "legendbtn2 btn btn-default");
        var el5 = dom.createTextNode("Mobile");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("			\n			\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-4 col-md-4 col-sm-12 col-xs-12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("			\n\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row chart-container");
        var el2 = dom.createTextNode("\n		\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-1 col-md-1 col-sm-1 col-xs-1");
        dom.setAttribute(el2, "style", "margin-top: 20px;");
        var el3 = dom.createTextNode("\n				");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("0 s");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-10 col-md-10 col-sm-10 col-xs-10");
        dom.setAttribute(el2, "style", "margin-left:-15px; width: 84%; margin-top: -20px; margin-bottom: -20px;");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("			");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-1 col-md-1 col-sm-1 col-xs-1");
        dom.setAttribute(el2, "style", "margin-top: 20px; float:right;");
        var el3 = dom.createTextNode("\n				");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" s");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n				\n	");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n	\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element8 = dom.childAt(fragment, [0]);
        var element9 = dom.childAt(element8, [2, 1]);
        var element10 = dom.childAt(element8, [5, 1]);
        var element11 = dom.childAt(element10, [2]);
        var element12 = dom.childAt(element10, [4]);
        var element13 = dom.childAt(element10, [6]);
        var element14 = dom.childAt(fragment, [4]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(element9, 1, 1);
        morphs[1] = dom.createMorphAt(element9, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element9, [5, 0]), 1, 1);
        morphs[3] = dom.createElementMorph(element11);
        morphs[4] = dom.createElementMorph(element12);
        morphs[5] = dom.createElementMorph(element13);
        morphs[6] = dom.createMorphAt(dom.childAt(element8, [8]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element14, [3]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element14, [5, 1]), 0, 0);
        morphs[9] = dom.createMorphAt(fragment, 9, 9, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["experiments.index"], ["tagName", "li"], 0, null, ["loc", [null, [5, 3], [5, 84]]]], ["block", "link-to", ["experiments.index"], ["tagName", "li"], 1, null, ["loc", [null, [6, 3], [6, 76]]]], ["content", "idinUrl", ["loc", [null, [8, 23], [8, 34]]], 0, 0, 0, 0], ["element", "action", ["selectDomain", "webapp"], [], ["loc", [null, [19, 47], [19, 81]]], 0, 0], ["element", "action", ["selectDomain", "wearable"], [], ["loc", [null, [20, 47], [20, 83]]], 0, 0], ["element", "action", ["selectDomain", "mobile"], [], ["loc", [null, [21, 47], [21, 81]]], 0, 0], ["block", "if", [["get", "manualRange", ["loc", [null, [29, 9], [29, 20]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [29, 3], [42, 10]]]], ["block", "if", [["get", "maxValue", ["loc", [null, [56, 10], [56, 18]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [56, 4], [58, 11]]]], ["content", "maxValue", ["loc", [null, [62, 7], [62, 19]]], 0, 0, 0, 0], ["block", "if", [["get", "noGrids", ["loc", [null, [74, 7], [74, 14]]], 0, 0, 0, 0]], [], 5, 6, ["loc", [null, [74, 1], [152, 8]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  })());
});
define('secuwear-frontend/templates/components/x-select', ['exports', 'emberx-select/templates/components/x-select'], function (exports, _emberxSelectTemplatesComponentsXSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberxSelectTemplatesComponentsXSelect['default'];
    }
  });
});
define("secuwear-frontend/templates/experiments", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/experiments.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/experiments/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/experiments/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "experiment-selector", [], ["users", ["subexpr", "@mut", [["get", "content", ["loc", [null, [1, 28], [1, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [1, 38]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 24
            },
            "end": {
              "line": 37,
              "column": 60
            }
          },
          "moduleName": "secuwear-frontend/templates/login.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Register Now.");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        dom.setAttribute(el1, "style", "margin-top:40px");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-6 col-md-4 col-md-offset-4 login-box shadow-2");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        var el5 = dom.createTextNode("\n\n					");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n						");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "login-img-wrapper");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("						");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row login-box");
        var el6 = dom.createTextNode("\n						");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-12 col-md-10 col-md-offset-1");
        var el7 = dom.createTextNode("\n							");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group");
        var el8 = dom.createTextNode("\n								");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "input-group");
        var el9 = dom.createTextNode("\n									");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "input-group-addon");
        var el10 = dom.createTextNode("\n										");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("i");
        dom.setAttribute(el10, "class", "glyphicon glyphicon-user");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n									");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n									");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n							");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group");
        var el8 = dom.createTextNode("\n								");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "input-group");
        var el9 = dom.createTextNode("\n									");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9, "class", "input-group-addon");
        var el10 = dom.createTextNode("\n										");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("i");
        dom.setAttribute(el10, "class", "glyphicon glyphicon-lock");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n									");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n									");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n								");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n							");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7, "class", "checkbox");
        var el8 = dom.createTextNode("\n								");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n								Remember me\n							");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n							");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group");
        var el8 = dom.createTextNode("\n								");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("input");
        dom.setAttribute(el8, "type", "submit");
        dom.setAttribute(el8, "class", "btn btn-lg btn-primary btn-block");
        dom.setAttribute(el8, "value", "Sign in");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n							Need an account? ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 2, 1, 3, 1]);
        var element1 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createElementMorph(element1);
        morphs[4] = dom.createMorphAt(element0, 9, 9);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "class", "input-sm form-control", "value", ["subexpr", "@mut", [["get", "auth.username", ["loc", [null, [19, 65], [19, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "login", "placeholder", "Username", "autofocus", "autofocus"], ["loc", [null, [19, 9], [19, 139]]], 0, 0], ["inline", "input", [], ["type", "text", "class", "input-sm form-control", "value", ["subexpr", "@mut", [["get", "auth.password", ["loc", [null, [27, 64], [27, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "login", "placeholder", "Password", "type", "password"], ["loc", [null, [27, 9], [27, 132]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "auth.remember", ["loc", [null, [31, 40], [31, 53]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [31, 8], [31, 55]]], 0, 0], ["element", "action", ["login"], [], ["loc", [null, [35, 86], [35, 104]]], 0, 0], ["block", "link-to", ["register"], [], 0, null, ["loc", [null, [37, 24], [37, 72]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("secuwear-frontend/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 10
          }
        },
        "moduleName": "secuwear-frontend/templates/page-not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "width: 20%; margin:0 auto;");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "pagenotfoundh1");
        var el4 = dom.createTextNode("404");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "pagenotfoundtext");
        var el4 = dom.createTextNode("We are sorry but the page you were looking for was not found...");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [13, 0], [13, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("secuwear-frontend/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 32
              },
              "end": {
                "line": 76,
                "column": 96
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Select most applicable");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 78,
                  "column": 40
                },
                "end": {
                  "line": 78,
                  "column": 67
                }
              },
              "moduleName": "secuwear-frontend/templates/register.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "g", ["loc", [null, [78, 62], [78, 67]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 77,
                "column": 36
              },
              "end": {
                "line": 80,
                "column": 36
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                                    \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "g", ["loc", [null, [78, 59], [78, 60]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [78, 40], [78, 81]]]]],
          locals: ["g"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 75,
              "column": 28
            },
            "end": {
              "line": 81,
              "column": 28
            }
          },
          "moduleName": "secuwear-frontend/templates/register.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [76, 32], [76, 110]]]], ["block", "each", [["get", "genders", ["loc", [null, [77, 44], [77, 51]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [77, 36], [80, 45]]]]],
        locals: ["xs"],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 95,
                "column": 28
              },
              "end": {
                "line": 95,
                "column": 100
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Select highest education level");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 97,
                  "column": 36
                },
                "end": {
                  "line": 97,
                  "column": 63
                }
              },
              "moduleName": "secuwear-frontend/templates/register.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "l", ["loc", [null, [97, 58], [97, 63]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 96,
                "column": 32
              },
              "end": {
                "line": 98,
                "column": 32
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "l", ["loc", [null, [97, 55], [97, 56]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [97, 36], [97, 77]]]]],
          locals: ["l"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 94,
              "column": 25
            },
            "end": {
              "line": 99,
              "column": 25
            }
          },
          "moduleName": "secuwear-frontend/templates/register.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [95, 28], [95, 114]]]], ["block", "each", [["get", "educationLevels", ["loc", [null, [96, 40], [96, 55]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [96, 32], [98, 41]]]]],
        locals: ["xs"],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 120,
                "column": 36
              },
              "end": {
                "line": 120,
                "column": 102
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Select current residence");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 122,
                  "column": 44
                },
                "end": {
                  "line": 122,
                  "column": 71
                }
              },
              "moduleName": "secuwear-frontend/templates/register.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "s", ["loc", [null, [122, 66], [122, 71]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 121,
                "column": 40
              },
              "end": {
                "line": 124,
                "column": 40
              }
            },
            "moduleName": "secuwear-frontend/templates/register.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                                            \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "s", ["loc", [null, [122, 63], [122, 64]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [122, 44], [122, 85]]]]],
          locals: ["s"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 119,
              "column": 32
            },
            "end": {
              "line": 125,
              "column": 32
            }
          },
          "moduleName": "secuwear-frontend/templates/register.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [120, 36], [120, 116]]]], ["block", "each", [["get", "states", ["loc", [null, [121, 48], [121, 54]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [121, 40], [124, 49]]]]],
        locals: ["xs"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 396,
            "column": 27
          }
        },
        "moduleName": "secuwear-frontend/templates/register.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        dom.setAttribute(el1, "style", "margin-top:40px; margin-bottom:40px");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-6 col-md-6 col-md-offset-3 login-box shadow-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        dom.setAttribute(el6, "style", "text-align:center;");
        var el7 = dom.createTextNode("Account Registration");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" username and email row ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row login-box");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        dom.setAttribute(el8, "class", "reg-label");
        var el9 = dom.createTextNode("Username");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        dom.setAttribute(el8, "class", "reg-label");
        var el9 = dom.createTextNode("Email");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                     ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "form-group has-feedback");
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                            ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "form-group has-feedback");
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("i");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                            ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" password row ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("Password");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("Confirm Password");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                     ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group has-feedback");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                       ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group has-feedback");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("                                  \n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                              \n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Personal info ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("Age");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("Gender");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group has-feedback");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                   \n\n                     ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Gender ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("Education Level");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        dom.setAttribute(el5, "style", "margin-bottom: 5px;");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                     ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Location ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("City");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "reg-label");
        var el8 = dom.createTextNode("State");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row reg-form-row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "form-group has-feedback");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Privacy Policy ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" ./Privacy Policy ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" Register ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-12");
        var el7 = dom.createTextNode("\n                                    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "type", "button");
        dom.setAttribute(el7, "class", "btn btn-block btn-success");
        var el8 = dom.createTextNode("Sign Up");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" begins here ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" ends here ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element1 = dom.childAt(element0, [5, 3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element1, [3]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element6, [3]);
        var element8 = dom.childAt(element0, [11]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element9, [1]);
        var element11 = dom.childAt(element10, [3]);
        var element12 = dom.childAt(element8, [3]);
        var element13 = dom.childAt(element12, [1]);
        var element14 = dom.childAt(element13, [3]);
        var element15 = dom.childAt(element0, [17]);
        var element16 = dom.childAt(element15, [1]);
        var element17 = dom.childAt(element16, [1]);
        var element18 = dom.childAt(element17, [3]);
        var element19 = dom.childAt(element0, [29]);
        var element20 = dom.childAt(element19, [1]);
        var element21 = dom.childAt(element20, [1]);
        var element22 = dom.childAt(element21, [3]);
        var element23 = dom.childAt(element0, [38, 1, 1]);
        var morphs = new Array(22);
        morphs[0] = dom.createAttrMorph(element2, 'class');
        morphs[1] = dom.createMorphAt(element3, 1, 1);
        morphs[2] = dom.createAttrMorph(element4, 'class');
        morphs[3] = dom.createAttrMorph(element5, 'class');
        morphs[4] = dom.createMorphAt(element6, 1, 1);
        morphs[5] = dom.createAttrMorph(element7, 'class');
        morphs[6] = dom.createAttrMorph(element9, 'class');
        morphs[7] = dom.createMorphAt(element10, 1, 1);
        morphs[8] = dom.createAttrMorph(element11, 'class');
        morphs[9] = dom.createAttrMorph(element12, 'class');
        morphs[10] = dom.createMorphAt(element13, 1, 1);
        morphs[11] = dom.createAttrMorph(element14, 'class');
        morphs[12] = dom.createAttrMorph(element16, 'class');
        morphs[13] = dom.createMorphAt(element17, 1, 1);
        morphs[14] = dom.createAttrMorph(element18, 'class');
        morphs[15] = dom.createMorphAt(dom.childAt(element15, [3]), 1, 1);
        morphs[16] = dom.createMorphAt(dom.childAt(element0, [23]), 1, 1);
        morphs[17] = dom.createAttrMorph(element20, 'class');
        morphs[18] = dom.createMorphAt(element21, 1, 1);
        morphs[19] = dom.createAttrMorph(element22, 'class');
        morphs[20] = dom.createMorphAt(dom.childAt(element19, [3]), 1, 1);
        morphs[21] = dom.createElementMorph(element23);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["col-md-6 ", ["get", "usernameclasses", ["loc", [null, [19, 47], [19, 62]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.username", ["loc", [null, [21, 58], [21, 79]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "enter", "register", "placeholder", "Username"], ["loc", [null, [21, 32], [21, 142]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "usernameIcon", ["loc", [null, [22, 64], [22, 76]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["col-md-6 ", ["get", "emailclasses", ["loc", [null, [25, 47], [25, 59]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.email", ["loc", [null, [27, 58], [27, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "enter", "register", "placeholder", "Email"], ["loc", [null, [27, 32], [27, 136]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "emailIcon", ["loc", [null, [28, 64], [28, 73]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["col-sm-6 ", ["get", "passwordclasses", ["loc", [null, [44, 47], [44, 62]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.password", ["loc", [null, [46, 58], [46, 79]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "enter", "register", "placeholder", "Password", "type", "password"], ["loc", [null, [46, 32], [46, 158]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "passwordIcon", ["loc", [null, [47, 64], [47, 76]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["col-sm-6 ", ["get", "confirmpasswordclasses", ["loc", [null, [50, 47], [50, 69]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "confirmpassword", ["loc", [null, [52, 58], [52, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "enter", "register", "placeholder", "Confirm Password", "type", "password"], ["loc", [null, [52, 32], [52, 160]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "confirmpasswordIcon", ["loc", [null, [53, 64], [53, 83]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["col-md-6 ", ["get", "ageClass", ["loc", [null, [68, 47], [68, 55]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.profile.age", ["loc", [null, [70, 58], [70, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "enter", "register", "placeholder", "Age"], ["loc", [null, [70, 32], [70, 135]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "ageIcon", ["loc", [null, [71, 64], [71, 71]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "x-select", [], ["class", "form-control reg-input-field", "action", "selectGender"], 0, null, ["loc", [null, [75, 28], [81, 41]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "action", "selectEduLevel"], 1, null, ["loc", [null, [94, 25], [99, 38]]]], ["attribute", "class", ["concat", ["col-md-6 ", ["get", "cityClass", ["loc", [null, [112, 47], [112, 56]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.profile.city", ["loc", [null, [114, 58], [114, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "register", "placeholder", "City"], ["loc", [null, [114, 32], [114, 153]]], 0, 0], ["attribute", "class", ["concat", ["glyphicon glyphicon-", ["get", "cityIcon", ["loc", [null, [115, 64], [115, 72]]], 0, 0, 0, 0], " form-control-feedback "], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "x-select", [], ["class", "form-control reg-input-field", "action", "selectState"], 2, null, ["loc", [null, [119, 32], [125, 45]]]], ["element", "action", ["register"], [], ["loc", [null, [140, 92], [140, 113]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("secuwear-frontend/templates/runs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "secuwear-frontend/templates/runs.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "run-display", [], ["run", ["subexpr", "@mut", [["get", "content", ["loc", [null, [3, 19], [3, 26]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 1], [3, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('secuwear-frontend/transforms/array', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
	exports['default'] = _emberData['default'].Transform.extend({
		deserialize: function deserialize(serialized) {
			return _ember['default'].typeOf(serialized) === "array" ? serialized : [];
		},

		serialize: function serialize(deserialized) {
			var type = _ember['default'].typeOf(deserialized);
			if (type === 'array') {
				return deserialized;
			} else if (type === 'string') {
				return deserialized.split(',').map(function (item) {
					return _ember['default'].$.trim(item);
				});
			} else {
				return [];
			}
		}
	});
});
define('secuwear-frontend/transforms/object', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
	exports['default'] = _emberData['default'].Transform.extend({
		deserialize: function deserialize(value) {
			if (!_ember['default'].$.isPlainObject(value)) {
				return {};
			} else {
				return value;
			}
		},
		serialize: function serialize(value) {
			if (!_ember['default'].$.isPlainObject(value)) {
				return {};
			} else {
				return value;
			}
		}
	});
});
define('secuwear-frontend/transforms/role', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
	exports['default'] = _emberData['default'].Transform.extend({
		deserialize: function deserialize(serialized) {
			var roles = _ember['default'].$.parseJSON(serialized);
			return _ember['default'].typeOf(roles) === 'object' ? roles : null;
		},
		serialize: function serialize(deserialized) {
			return JSON.stringify(deserialized);
		}
	});
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('secuwear-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'secuwear-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("secuwear-frontend/app")["default"].create({"name":"secuwear-frontend","version":"0.0.0+7d6fbee9"});
}

/* jshint ignore:end */
//# sourceMappingURL=secuwear-frontend.map
