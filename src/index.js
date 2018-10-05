class SmartCalculator {
	constructor(initialValue) {
    this.value = "" + initialValue;
    this.values = this.value;
    this.toString = function() {
      return Math.round(eval(this.value));
    }
  } 
  add(number) {
    this.values = number;
    this.value = this.value + " + " + number;
    return this;
  } 
  subtract(number) {
    this.values = number;
    this.value = this.value + ' - ' + number;
    return this;
  }
  multiply(number) {
    this.values = number;
    this.value = this.value + ' * ' + number;
    return this;
  }
  devide(number) {
    this.values = number;
    this.value = this.value + ' / ' + number;
    return this;
  }
	pow(number){
    this.values = number;  
    this.value = this.value + ' ** ' + number;
		return this;
	} 	
}
module.exports = SmartCalculator;