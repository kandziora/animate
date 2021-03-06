"use strict";

import { runBlock } from './modules/index.run';
import { stateConfig } from './modules/index.states';

/* Components */
import appBarComponent from './modules/gui/components/app-bar/app-bar.component';
import timelineComponent from './modules/gui/components/timeline/timeline.component';
import collapseContainerComponent from './modules/gui/components/collapse-container/collapse-container.component';
import propertiesContainerComponent from './modules/gui/components/properties-container/properties-container.component';
import modalComponent from './modules/gui/components/modal/modal.component';

/* Directives */
import { CompileDirective } from './modules/utils/directives/compile/compile.directive';
import { DragDividerDirective } from './modules/gui/directives/drag-divider/drag-divider.directive';
import { FormatURLDirective } from './modules/gui/directives/format-url.directive.js';

/* Factories */
import { settingsServiceFactory } from './modules/core/factories/settingsService.factory';
import { propertyFactory } from './modules/gui/factories/property.factory';
import { projectFactory } from './modules/gui/factories/project.factory';
import { modalFactory } from './modules/gui/factories/modal.factory';
import { generatorFactory } from './modules/core/factories/generator.factory';

/* Constants */
import { DEFAULT_SETTINGS } from './modules/core/constants/defaultSettings.constant';

/* Services */
import { projectClassService } from './modules/core/classes/project.service';
import { elementClassService } from './modules/core/classes/element.service';
import { keyframeClassService } from './modules/core/classes/keyframe.service';
import { timelineClassService } from './modules/core/classes/timeline.service';

angular.module('aniMateApp', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'templates'
  ])

  .run(runBlock)
  .config(stateConfig)

  /* Components */
  .component('appBar', appBarComponent)
  .component('timeline', timelineComponent)
  .component('collapseContainer', collapseContainerComponent)
  .component('propertiesContainer', propertiesContainerComponent)
  .component('modal', modalComponent)

  /* Directives */
  .directive('compile', CompileDirective)
  .directive('dragDivider', DragDividerDirective)
  .directive('formatUrl', FormatURLDirective)

  /* Factories */
  .factory('settingsService', settingsServiceFactory)
  .factory('propertyFactory',propertyFactory)
  .factory('projectFactory',projectFactory)
  .factory('modalFactory', modalFactory)
  .factory('generatorFactory', generatorFactory)

  /* Constants */
  .constant('DEFAULT_SETTINGS', DEFAULT_SETTINGS)

  /* Services */
  .service('Project', projectClassService)
  .service('Element', elementClassService)
  .service('Keyframe', keyframeClassService)
  .service('Timeline', timelineClassService)

  .config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects.
    $sceProvider.enabled(false);
  })

  .run(['$state', function ($state) {
    $state.go('main.default');
  }]);