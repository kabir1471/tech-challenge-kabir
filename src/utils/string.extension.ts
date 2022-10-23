/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
declare global {
    interface String{
        format(...args:any):string;
        formatMap(args:any):string;
    }
}

String.prototype.format = function format(...args:any) {
	return this.replace(/{([0-9]+)}/g, (match, index) => (typeof args[index] === 'undefined' ? match : args[index])); // Check if the argument is there
};

export {};
