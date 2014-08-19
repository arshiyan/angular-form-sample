(function(){
    var app = angular.module("entry",[]);

    app.controller("EntryController",function(){

        this.dentry = {};


        this.addentry = function(personsdata)
        {
           console.log(this.dentry);

            personsdata.persons.push(this.dentry);
            this.dentry = {};
        }


    });

    app.controller("PersonController",function(){

        this.persons = [
            {
            username:"javad",
            gender:"male",
            body:"this is a test",
            level:1},
        ];
    });




})();