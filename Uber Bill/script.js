class Person {
    
    constructor(Name,Address1,Address2,Contact,Bill){
        //creates an Object
        this.person_Name = Name;
        this.person_Address1 = Address1;
        this.person_Address2 = Address2;
        this.person_Contact= Contact;
        
    }
}
//Inheritance
    class Billofuber extends Person{
        constructor(Name,Address1,Address2,Contact,Bill,tax)
        {
        super(Name,Address1,Address2,Contact,Bill);
        {
            this.person_Bill = Bill;
            this.tax= tax;
        }

        }
    
    
    getuberbill(){
        
            let p = 100 //petrol;
            let k= 4; //km
            if(k<=4)
            {
                let Billamount=this.person_Bill*p*k/100;
        console.log("Bill Amount",Billamount); 
            }
            else if(k =0){
                let Billamount=this.person_Bill*p*k/100;
        console.log("Bill Amount",Billamount); 

            }
            else{
                let Billamount=this.person_Bill*200*k/100;
        console.log("Bill Amount",Billamount); 
            }
        
        }

    }
     


const uberbill = new Billofuber("Vennilashanthini","KumaranNagar","Guduvancheri",7358550747,90,20);
console.log(uberbill);
uberbill.getuberbill();



