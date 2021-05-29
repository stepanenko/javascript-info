
const data = {
  people: [
    {
      name: "Jerry Carry",
      addresses: [
        {
          street: "3 Trees St",
          zcode: 15,
        },
        {
          street: "11 Waterhouse St",
          zcode: 2,
        },
      ],
    },
    {
      name: "Jack Peterson",
      addresses: [
        {
          street: "13 Bold St",
          zcode: 30,
        },
        {
          street: "115 Baker St",
          zcode: 4,
        },
      ],
    },
  ],
};

const { people } = data;

let targetPerson = {
  name: "",
  address: {
    street: "",
    zcode: 0,
  },
};

people.forEach((person) => {
  person.addresses.forEach((address) => {
    if (address.zcode > targetPerson.address.zcode) {
      targetPerson.address = address;
      targetPerson.name = person.name;
    }
  });
});

console.log("person", targetPerson);
