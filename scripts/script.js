// Person object (literal)
var person = {
    firstName: 'David',
    lastName: 'Harbin',
    getFullName: function() {

      return `${this.firstName} ${this.lastName}`;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged:  ' + this.getFullName() + '\n' + 'Args: ' + lang1, lang2);
};

var languages = ['es', 'en'];
logName.apply(person, languages);