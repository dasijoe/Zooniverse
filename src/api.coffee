$ = require 'jqueryify'
_ = require 'underscore/underscore'
ProxyFrame = require 'proxy_frame'

class Api
  @requests = { }
  @ready = false
  @proxy = undefined
  
  constructor: (@host) ->
    @createProxy() unless Api.proxy
  
  createProxy: ->
    Api.proxy = new ProxyFrame @host
    Api.proxy.bind 'load', @loaded
    Api.proxy.bind 'response', @respond
  
  loaded: =>
    Api.ready = true
    @process(id) for id, request of Api.requests when not request.processed
  
  request: (type, url, data, done, fail) ->
    id = @nextId()
    headers = { }
    
    if typeof data is 'function'
      fail = done
      done = data
      data = null
    
    message = {id, type, url, data, done, fail, headers}
    
    Api.requests[id] = message
    if Api.ready then @process id else message.processed = false
  
  respond: (ev, message) =>
    request = Api.requests[message.id]
    
    if message.failure
      request.fail? message.response
    else
      request.done? message.response
    
    delete Api.requests[message.id]
  
  process: (id) =>
    Api.requests[id].processed = true
    { id, type, url, data, headers } = Api.requests[id]
    message = { id, type, url, data, headers }
    Api.proxy.send message
  
  nextId: ->
    _.uniqueId 'api-'

module.exports = Api
