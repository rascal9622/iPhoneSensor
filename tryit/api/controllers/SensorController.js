/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  ready: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = { message: "connected" };

    return res.view(data);
  },

  getinfo: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = { message: "connected" };

    return res.view(data);
  },

};

