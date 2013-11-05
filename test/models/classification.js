// Generated by CoffeeScript 1.6.3
(function() {
  var Api, Classification, Subject;

  Subject = window.zooniverse.models.Subject;

  Api = window.zooniverse.Api;

  Classification = window.zooniverse.models.Classification;

  describe('Classification', function() {
    before(function() {
      this.api = new Api({
        project: 'test',
        host: "" + location.protocol + "//" + location.host,
        path: '/doesnt-exist#for-subject-tests',
        loadTimeout: 100
      });
      Subject.destroyAll();
      this.subject = new Subject({
        id: "SUBJECT_TO_CLASSIFY",
        zooniverse_id: "SUBJECT_TO_CLASSIFY_ZOONIVERSE_ID",
        location: {
          standard: '//placehold.it/'
        },
        coords: [0, 0],
        metadata: {},
        workflow_ids: ['WORKFLOW_ID']
      });
      this.classification = new Classification({
        subject: this.subject
      });
      this.classification.annotate({
        foo: 'bar'
      });
      return this.classification.annotate({
        toJSON: function() {
          return {
            foo: 'bar'
          };
        }
      });
    });
    after(function() {
      return this.api.destroy();
    });
    return describe('::toJSON', function() {
      before(function() {
        return this.wasJSON = JSON.parse(JSON.stringify(this.classification)).classification;
      });
      it('knows its annotations', function() {
        return expect(this.wasJSON.annotations[0].foo).to.equal('bar');
      });
      it('properly serializes its annotations', function() {
        return expect(this.wasJSON.annotations[1].foo).to.equal('bar');
      });
      it('knows when it was created', function() {
        return expect(this.classification.started_at.split(' ').slice(0, 4)).to.eql((new Date).toUTCString().split(' ').slice(0, 4));
      });
      it('knows its user agent', function() {
        return expect(this.classification.user_agent).to.equal(navigator.userAgent);
      });
      it('knows its user agent', function() {
        return expect(this.classification.user_agent).to.equal(navigator.userAgent);
      });
      describe('with a connected API', function() {
        describe('::send', function() {
          it('increments the "sentThisSession"');
          it('creates a recent');
          it('makes a favorite, if appropriate');
          return it('triggers "send"');
        });
        return describe('sendPending', function() {});
      });
      return describe('with an offline API', function() {
        return describe('::send', function() {
          it('adds itself to the "pending" list');
          return it('triggers "send"');
        });
      });
    });
  });

}).call(this);
