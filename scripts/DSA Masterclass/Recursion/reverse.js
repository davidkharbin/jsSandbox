const reverse = function(str){
	if ( str.length === 1 ) return str[0];

	return reverse(str.substring(1)) + str[0];
};

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
