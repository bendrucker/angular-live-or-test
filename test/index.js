'use strict';

var expect = require('chai').expect;

describe('live-or-test', function () {

  beforeEach(angular.mock.module(require('../')));

  var live;
  beforeEach(angular.mock.inject(function (_live_) {
    live = _live_;
  }));

  describe('Service', function () {

    it('is initially enabled', function () {
      expect(live.enabled()).to.be.true;
    });

    it('can be disabled', function () {
      expect(live.enabled(false)).to.be.false;
      expect(live.enabled()).to.be.false;
    });

    it('throws with a non-boolean', function () {
      expect(function () {
        live.enabled('true');
      })
      .to.throw('boolean');
    });

  });

  describe('Directive', function () {

    var scope, element;
    beforeEach(angular.mock.inject(function ($injector) {
      scope = $injector.get('$rootScope').$new();
      element = $injector.get('$compile')('<test-badge>{{message}}</test-badge>')(scope);
    }));

    it('is hidden when live mode is enabled', function () {
      live.enabled(true);
      scope.$digest();
      expect(element.find('div').hasClass('ng-hide')).to.be.true;
    });

    it('is transcludes the parent scope', function () {
      scope.message = 'Test';
      scope.$digest();
      expect(element.text()).to.contain('Test');
    });

  });

});
