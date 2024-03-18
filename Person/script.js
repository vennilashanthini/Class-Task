class Person {
    //Encapsulate
    constructor(Name, FatherName,Age,Address1,Address2,Contact){
        //creates an Object
        this.person_Name = Name;
        this.person_Father_Name = FatherName;
        this.person_Age = Age;
        this.person_Address1 = Address1;
        this.person_Address2 = Address2;
        this.Contact= Contact;


    }
    getfathername() {
        console.log("Persons Father's Name is ",this.person_Father_Name); //Encapsulation
    }
    getcontact() {
        console.log("Persons Contact Number is ",this.Contact); //Encapsulation

    }
    getoveralldetails() {
        
        console.log(`
        Name : ${this.person_Name}
        Age : ${this.person_Age}
        Contact :${this.Contact}
        `); 

    }
}

const persondetails = new Person("Vennilashanthini","Murugan",27,"KumaranNagar","Guduvancheri",7358550747);
console.log(persondetails);
persondetails.getfathername();
persondetails.getcontact();
persondetails.getoveralldetails();
console.log(persondetails);
