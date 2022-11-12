import { NearBindgen, near, call, view, LookupMap } from 'near-sdk-js';
class Student {
  name: string;
  age: number;
  constructor({name, age} : {name: string, age: number}) {
    this.name = name;
    this.age = age;
  }
}
@NearBindgen({})
class HelloNear {
  greeting: string = "Hello";
  classes: LookupMap = new LookupMap("Duy Tan");
  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.greeting;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }: { message: string }): void {
    // Record a log permanently to the blockchain!
    near.log(`Saving greeting ${message}`);
    this.greeting = message + " HEHE";
  }
}