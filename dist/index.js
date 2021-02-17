/*!
 * name: @jswork/next-random-avatar
 * description: Random avatar api.
 * homepage: https://github.com/afeiship/next-random-avatar
 * version: 1.0.0
 * date: 2021-02-17 15:28:09
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxRandom = nx.random || require('@jswork/next-random');
  var nxRandomList = nx.randomList || require('@jswork/next-random-list');
  var API_URL = 'https://randomuser.me/api/portraits/';
  var MAP = [100, 100, 10];

  var NxRandomAvatar = nx.declare('nx.RandomAvatar', {
    statics: {
      'men,women,lego': function (inName, inIndex) {
        return function (inLength) {
          return inLength
            ? nxRandomList(this[inName], inLength)
            : API_URL + inName + '/' + nxRandom(0, MAP[inIndex]) + '.jpg';
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRandomAvatar;
  }
})();
