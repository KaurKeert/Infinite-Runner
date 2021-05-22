class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Let Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('REFRESH');
    this.wait=createElement('h2')

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.wait.hide()
  }

  display(){
background("pink")

    this.title.html("INFINITE  RUNNER");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.wait.html("PLEASE WAIT FOR OTHER PLAYERS " )
      this.wait.position(displayWidth/2 - 200, displayHeight/3);

    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}
