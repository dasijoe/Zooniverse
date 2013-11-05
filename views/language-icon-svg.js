window.zooniverse = window.zooniverse || {};
window.zooniverse.views = window.zooniverse.views || {};
template = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var className;
    
      className = this.className || 'zooniverse-group-icon';
    
      __out.push('\n\n<svg class="');
    
      __out.push(__sanitize(className));
    
      __out.push('" viewBox="0 0 32 32" version="1.1" width="1.5em" height="1.5em" x="0px" y="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path d="M15.5,0C6.939,0,0,6.939,0,15.5S6.939,31,15.5,31S31,24.061,31,15.5S24.061,0,15.5,0z M28.975,15  h-5.996c-0.055-2.215-0.449-4.331-1.148-6.268c1.35-0.563,2.598-1.312,3.736-2.197C27.59,8.806,28.855,11.755,28.975,15z   M14.947,28.972c-1.662-1.384-3.056-3.181-4.076-5.268c1.309-0.409,2.696-0.633,4.129-0.679v5.949  C14.982,28.974,14.965,28.973,14.947,28.972z M16.051,2.028c1.886,1.57,3.425,3.673,4.466,6.126c-1.426,0.487-2.941,0.77-4.518,0.82  V2.025C16.018,2.026,16.034,2.027,16.051,2.028z M17.717,2.198c2.76,0.459,5.236,1.748,7.164,3.614  c-1.047,0.803-2.191,1.483-3.428,1.998C20.543,5.653,19.266,3.746,17.717,2.198z M15,2.025v6.949  c-1.577-0.051-3.093-0.333-4.518-0.82c1.041-2.453,2.58-4.556,4.466-6.126C14.966,2.027,14.982,2.026,15,2.025z M9.546,7.811  c-1.235-0.515-2.38-1.195-3.427-1.998c1.927-1.866,4.404-3.155,7.164-3.614C11.733,3.746,10.457,5.653,9.546,7.811z M10.105,9.076  C11.647,9.611,13.29,9.923,15,9.975V15H9.021C9.075,12.906,9.446,10.905,10.105,9.076z M15,16v6.025  c-1.577,0.048-3.102,0.306-4.539,0.769C9.595,20.732,9.084,18.435,9.021,16H15z M13.283,28.802  c-2.473-0.411-4.719-1.488-6.545-3.052c0.985-0.683,2.05-1.261,3.188-1.7C10.798,25.858,11.939,27.463,13.283,28.802z M16,28.975  v-5.949c1.432,0.046,2.82,0.27,4.129,0.679c-1.021,2.087-2.414,3.884-4.076,5.268C16.036,28.973,16.018,28.974,16,28.975z   M21.074,24.05c1.137,0.439,2.201,1.018,3.188,1.7c-1.826,1.563-4.072,2.641-6.545,3.052C19.061,27.463,20.201,25.858,21.074,24.05z   M20.539,22.794c-1.438-0.463-2.963-0.721-4.539-0.769V16h5.979C21.916,18.435,21.404,20.732,20.539,22.794z M16,15V9.975  c1.709-0.052,3.352-0.363,4.895-0.898c0.658,1.829,1.029,3.83,1.084,5.924H16z M5.434,6.535C6.572,7.42,7.82,8.169,9.169,8.732  C8.47,10.669,8.076,12.785,8.021,15H2.025C2.145,11.755,3.41,8.806,5.434,6.535z M2.025,16h5.996  c0.062,2.555,0.596,4.968,1.503,7.137c-1.267,0.494-2.448,1.152-3.538,1.931C3.638,22.731,2.156,19.536,2.025,16z M25.014,25.067  c-1.09-0.778-2.271-1.437-3.539-1.931c0.908-2.169,1.441-4.582,1.504-7.137h5.996C28.844,19.536,27.361,22.731,25.014,25.067z" fill="#ffffff" id="world"/>\n</svg>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
window.zooniverse.views['languageIcon-svg'] = template;
if (typeof module !== 'undefined') module.exports = template;
