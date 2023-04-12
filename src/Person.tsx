interface Persons {
  name: string;
  email: string;
  age: number;
  friends: string[];
  country: Country;
}

export enum Country {
  France = "France",
  Canada = "Canada",
  America = "America",
}

export const Person = (props: Persons) => {
  return (
    <div className="Person ms-3 mt-4 text-secondary ">
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <h4>{props.age}</h4>
      {props.friends.map((friend) => {
        return <h4 key={friend}>{friend}</h4>;
      })}
      <h4>{props.country}</h4>
    </div>
  );
};

export const DemoPerson = () => {
  return (
    <div>
      <Person
        name="Rachel"
        email="liu@gmail.com"
        age={18}
        friends={["Monica", "Phobe"]}
        country={Country.Canada}
      />
    </div>
  );
};
