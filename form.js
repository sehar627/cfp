class Form {

    constructor() {
        this.input = createInput("");
        this.text = createElement('h1', "Please enter your name.");
        this.button1 = createButton('Submit');
        this.button2 = createButton('Calculate my footprint');
        this.greeting = createElement('h2');
        this.text2 = createElement('h2', "Let's calculate your carbon footprint.")
        this.q1 = createElement('h3', "How many kilometres do you drive your car on a weekday?");
        this.radio1.createRadio('h3');
        this.radio1.option('Less than 30 kilometres');
        this.radio1.option('More than 30 kilometres');
        this.radio1.option('More than 60 kilometres');
        this.q2 = createElement('h3', "How many kilometres do you drive your car on a weekend?");
        this.radio2.createRadio('h3');
        this.radio2.option('Less than 40 kilometres');
        this.radio2.option('More than 40 kilometres');
        this.radio2.option('More than 80 kilometres');
        this.q3 = createElement('h3', "How many vehicles does your family own?")
        this.radio3 = createRadio('h3');
        this.radio3.option('0');
        this.radio3.option('1-3');
        this.radio3.option('More than 3');
        this.q4 = createElement('h3', "What kind of fuel do your vehicles run on?");
        this.radio4.createRadio('h3');
        this.radio4.option('Petrol');
        this.radio4.option('Diesel');
        this.radio4.option('CNG');
        this.radio4.option('Biodiesel');
        this.radio4.option('Electricity');
        this.radio4.option('Other');
        this.q5 = createElement('h3', "Do you carpool often?");
        this.radio5.createElement('h3');
        this.radio5.option('No');
        this.radio5.option('Yes');
        this.q6 = createElement('h3', "Does your house have a coal furnace? If yes, how often do you use it?")
        this.radio6.createRadio('h3');
        this.radio6.option('No');
        this.radio6.option('Yes. Use is less than an hour');
        this.radio6.option('Yes. Use is more than an hour');
        this.q7 = createElement('h3', "Do you use your vehicle to travel to destinations that are less than 3 kilometres away?");
        this.radio7.createElement('h3');
        this.radio7.option('No');
        this.radio7.option('Yes');
        this.q8 = createElement('h3', "Do you burn your waste?")
        this.radio8.createElement('h3');
        this.radio8.option('No');
        this.radio8.option('Yes');
        this.q9 = createElement('h3', "Do you recycle waste?");
        this.radio9.createElement('h3');
        this.radio9.option('No');
        this.radio9.option('Yes');
        this.q10 = createElement('h3', "Do you donate funds to environment protection organisations?");
        this.radio10.createElement('h3');
        this.radio10.option('No');
        this.radio10.option('Yes');
        this.q11 = createElement('h3', "Approximately how many trees do you plant every year?");
        this.radio11.createElement('h3');
        this.radio11.option('Less than 10');
        this.radio11.option('More than 10');
        this.q12 = createElement('h3', "Approxiamtely how much is your monthly cooking gas bill?");
        this.radio12.createElement('h3');
        this.radio12.option('Less than $50');
        this.radio12.option('More than $50');
        this.q13 = createElement('h3', "What efforts do you take to save energy?");
        this.inputq13 = createInput("");
        this.q14 = createElement('h3', "Would you term yourself as environment friendly? Why?");
        this.inputq14 = createInput("");
        this.q15 = createElement('h3', "What would you do to reduce global warming and excess carbon release?");
        this.inputq15 = createInput("");
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}