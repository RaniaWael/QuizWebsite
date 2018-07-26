'use strict';

/**
 * @ngdoc function
 * @name quizWebsiteApp.controller:questionsCtrl
 * @description
 * Controller of the quizWebsiteApp
 */

angular.module('quizWebsiteApp', [])
  .controller('questionsCtrl', ['$scope', function ($scope) {
    console.log('INSIDE Controller');
    // const fs = require('fs');
    //
    // let rawdata = fs.readFileSync('./././data/questions.json');
    // let qs = JSON.parse(rawdata);
    $scope.questions = {
      'questions':
      [
        {
          'q':'a?',
          'answers': ['a', 'b',  'c', 'd'],
          'rightAns': 'a'
        },
        {
          'q':'b?',
          'answers': ['a', 'b',  'c', 'd'],
          'rightAns': 'b'
        },
        {
          'q':'c?',
          'answers': ['a', 'b',  'c', 'd'],
          'rightAns': 'c'
        },
        {
          'q':'d?',
          'answers': ['a', 'b',  'c', 'd'],
          'rightAns': 'd'
        },
        {
          'q':'e?',
          'answers': ['a', 'e',  'c', 'd'],
          'rightAns': 'e'
        }
      ]
    };
  }]);
