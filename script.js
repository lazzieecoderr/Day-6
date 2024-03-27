//!class
class Movie {
  constructor(title,studio,rating="PG"){
     this.title = title;   //key: value  // leo = title
     this.studio = studio;
     this.rating = rating;
  }
}
 const obj1 = new Movie("Casino Royale","Eon Productions","PG13")
 console.log(obj1.title,obj1.studio,obj1.rating);

 //!session practice task
 //!class person => name,age,gender,martial status,contact,email\
 //! class car => brand,color,model,type,price,section
 //! Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
 //!the studio “Eon Productions”, and the rating “PG­13”