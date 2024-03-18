class movie {
    //Encapsulate
    constructor(Title,Studio,Rating){
        //creates an Object
        this.title = Title;
        this.studio = Studio;
        this.rating = Rating;

    }
    getmoviedetails(){
        console.log(`
            Title : ${this.title}
            Studio : ${this.studio}
            Rating : ${this.rating}
            `);
            }
        getPG()
        { 
            var a = this.rating;
            if (a ="PG­13"){
                console.log(`
                    Title : ${this.title}
            Studio : ${this.studio}
            Rating : ${this.rating}
               ` )}
               
            }
           
        } 


       

const movie1= new movie("Casino Royale","Eon Productions","PG­13");
const movie2 = new movie ("Casino Royale","Eon Productions")
console.log(movie1);
movie1.getmoviedetails();
movie2.getPG();
