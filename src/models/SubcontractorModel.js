function Subcontractor(name, phoneNumber, email, companyName, city, state, areaServed, milesWillingToTravel, services, miscCharges) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.companyName = companyName;
    this.city = city;
    this.state = state;
    this.areaServed = areaServed //['list of cities']
    this.milesWillingToTravel = milesWillingToTravel;
    this.services = services; //[{type: "Master Electritian", price: ""},]
    this.miscCharges = miscCharges //[{type: "", price: ""}]
};

export default Subcontractor;