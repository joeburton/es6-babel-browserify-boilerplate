import {Person} from './model/Person';

global.app = function () {
    var christoph = new Person('Joseph James', 'Burton');
    console.log(christoph.fullName);
};