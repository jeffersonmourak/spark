const HTTP = require('@core/http');

new TestTarget(HTTP, {
  exposed: {
    _request: 'function',
    get: 'function',
    post: 'function'
  },
  tests: {
    _request: () => {
      it('should be a promise', () => {
        expect(HTTP._request('get', 'google') instanceof Promise).to.be(true);
      });

      it('should resolve when 200', () => {
        helper.promise.toBeResolved(HTTP._request('get', 'http://google.com'));
      });

      it('should rejected when error', () => {
        helper.promise.toBeRejected(HTTP._request('get', 'http://google.com/404'));
      });
    },
    get: () => {
      beforeEach(() => {
        HTTP._request = sinon.spy();
      });
      it('should call HTTP._request with get and url params', () => {
        let url = 'http://google.com';
        HTTP.get(url);

        sinon.assert.calledWith(HTTP._request, 'get', url);
      });
    },
    post: () => {
      beforeEach(() => {
        HTTP._request = sinon.spy();
      });
      it('should call HTTP._request with post and url params', () => {
        let url = 'http://google.com';
        HTTP.post(url);

        sinon.assert.calledWith(HTTP._request, 'post', url);
      });
    }
  }
});
