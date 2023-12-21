export class Personne {
  id= 0;
  name ="";
  firstName ="";
  age =0;
  path ="";
  cin ="";
  job="";
  constructor(
    id :number,
    name :string,
    firstname :string,
    age : number,
    cin :string,
    path :string,
    job :string,

  ) {
    this.id=id ;
    this.name=name ;
    this.firstName = firstname;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job ;
  }
}

