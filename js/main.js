


const btnGen = document.getElementById("btn_input_griglia");


const selectLevel = document.querySelector( "[name='select-level']" );



let bombs;



btnGen.addEventListener( "click", function () {
  
   
    
    const level = selectLevel.value;
    bombs = generateBombsList( +level );
    generateCells( +level );
    
  } );
  
  
  function generateCells ( numCelle ) {

    const gridSection = document.querySelector( ".grid-section" );
    
    
    
    gridSection.innerHTML = "";
  
    for ( let i = 0; i < numCelle; i++ ) {

      const newCell = document.createElement( "div" );
      
      const rowsNum = Math.sqrt( numCelle );
  
      newCell.classList.add( "grid-cell" );
      
      newCell.style.width = 100 / rowsNum + "%";
  
      newCell.textContent = i + 1;
  
     
      newCell.dataset.numCella = i + 1;
      
      newCell.addEventListener( "click", onCellClick );
  
      gridSection.append( newCell );
    }
  
    gridSection.classList.remove( "d-none" );
  }
  
  
  function onCellClick () {
   
    const numCella = +this.dataset.numCella;
  
    
    if ( bombs.includes( numCella ) ) {
    
      alert( " Game Over!" );
  
      this.classList.add( "active");
    } else {
      this.classList.toggle( "active" );
    }
  }
  
  
  function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }
  
  
  function generateBombsList ( numCelle ) {
    const bombsList = [];
  
   
    while ( bombsList.length < 16 ) {
   
      const num = generateRandomNumber( 1, numCelle );
  
      
      if ( !bombsList.includes( num ) ) {
        
        bombsList.push( num );
      }
    }
  
    return bombsList;
  }
  
  