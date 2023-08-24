const cellEl1 = document.getElementById('cell-1') ;
const cellEl2 = document.getElementById('cell-2') ;
const cellEl3 = document.getElementById('cell-3') ;
const cellEl4 = document.getElementById('cell-4') ;
const cellEl5 = document.getElementById('cell-5') ;
const cellEl6 = document.getElementById('cell-6') ;
const cellEl7 = document.getElementById('cell-7') ;
const cellEl8 = document.getElementById('cell-8') ;
const cellEl9 = document.getElementById('cell-9') ;
//const cell = document.querySelector('.game-cell');
const btnReset = document.querySelector('.btn-Reset');
const status = document.querySelector('.Status');

let xISNext = true;
const xSympol = 'x';
const oSympol = 'o';

//function if x win
function xWinner(){
    if(cellEl1.textContent === xSympol && cellEl2.textContent === xSympol &&cellEl3.textContent === xSympol){
        return cellEl1.style.color = '#BD022F',cellEl2.style.color = '#BD022F',cellEl3.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
    } else if(cellEl4.textContent === xSympol && cellEl5.textContent === xSympol &&cellEl6.textContent === xSympol){
        return cellEl4.style.color = '#BD022F',cellEl5.style.color = '#BD022F',cellEl6.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl7.textContent === xSympol && cellEl8.textContent === xSympol &&cellEl9.textContent === xSympol){
            return cellEl7.style.color = '#BD022F',cellEl8.style.color = '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl1.textContent === xSympol && cellEl4.textContent === xSympol &&cellEl7.textContent === xSympol){
            return cellEl1.style.color = '#BD022F',cellEl4.style.color = '#BD022F',cellEl7.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl2.textContent === xSympol && cellEl5.textContent === xSympol &&cellEl8.textContent === xSympol){
            return cellEl2.style.color = '#BD022F',cellEl5.style.color = '#BD022F',cellEl8.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl3.textContent === xSympol && cellEl6.textContent === xSympol &&cellEl9.textContent === xSympol){
            return cellEl3.style.color = '#BD022F',cellEl6.style.color = '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl1.textContent === xSympol && cellEl5.textContent === xSympol &&cellEl9.textContent === xSympol){
            return cellEl1.style.color = '#BD022F',cellEl5.style.color = '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        } else if(cellEl3.textContent === xSympol && cellEl5.textContent === xSympol &&cellEl7.textContent === xSympol){
            return cellEl3.style.color = '#BD022F',cellEl5.style.color = '#BD022F',cellEl7.style.color = '#BD022F' , status.textContent = 'X is winner!🎉';
        }
}


//function if x win
function oWinner(){
    if(cellEl1.textContent === oSympol && cellEl2.textContent === oSympol &&
       cellEl3.textContent === oSympol){
        return cellEl1.style.color = '#BD022F',cellEl2.style.color = 
         '#BD022F',cellEl3.style.color = '#BD022F' , status.textContent = 'o is winner!🎉';
    } else if(cellEl4.textContent === oSympol && cellEl5.textContent === 
      oSympol &&cellEl6.textContent === oSympol){
        return cellEl4.style.color = '#BD022F',cellEl5.style.color = 
        '#BD022F',cellEl6.style.color = '#BD022F' , status.textContent = 'O is winner!🎉';
        } else if(cellEl7.textContent === oSympol && cellEl8.textContent === 
          oSympol &&cellEl9.textContent === oSympol){
            return cellEl7.style.color = '#BD022F',cellEl8.style.color = 
            '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 
            'O is winner!🎉';
        } else if(cellEl1.textContent === oSympol && cellEl4.textContent === 
            oSympol &&cellEl7.textContent === oSympol){
            return cellEl1.style.color = '#BD022F',cellEl4.style.color = 
             '#BD022F',cellEl7.style.color = '#BD022F' , status.textContent = 
               'O is winner!🎉';
        } else if(cellEl2.textContent === oSympol && cellEl5.textContent === 
           oSympol &&cellEl8.textContent === oSympol){
            return cellEl2.style.color = '#BD022F',cellEl5.style.color = 
              '#BD022F',cellEl8.style.color = '#BD022F' , status.textContent = 'O is winner!🎉';
        } else if(cellEl3.textContent === oSympol && cellEl6.textContent === 
           oSympol &&cellEl9.textContent === oSympol){
            return cellEl3.style.color = '#BD022F',cellEl6.style.color = 
            '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 
             'O is winner!🎉';
        } else if(cellEl1.textContent === oSympol && cellEl5.textContent === 
             oSympol &&cellEl9.textContent === oSympol){
            return cellEl1.style.color = '#BD022F',cellEl5.style.color = 
             '#BD022F',cellEl9.style.color = '#BD022F' , status.textContent = 
              'O is winner!🎉';
        } else if(cellEl3.textContent === oSympol && cellEl5.textContent === 
                  oSympol &&cellEl7.textContent === oSympol){
            return cellEl3.style.color = '#BD022F',cellEl5.style.color = 
             '#BD022F',cellEl7.style.color = '#BD022F' , status.textContent = 
              'O is winner!🎉';
        }
}



//Event handeler
cellEl1.addEventListener('click',function(){
    if(xISNext){
        cellEl1.textContent = xSympol;
        cellEl1.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3'
        xWinner();
        xISNext = false ; 
    } else {
        cellEl1.textContent = oSympol;
        cellEl1.style.fontSize = '250px';
        cellEl1.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }   
})

cellEl2.addEventListener('click',function(){
    if(xISNext){
        cellEl2.textContent = xSympol;
        cellEl2.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3';
        xWinner();
        xISNext = false ; 
    } else {
        cellEl2.textContent = oSympol;
        cellEl2.style.fontSize = '250px';
        cellEl2.style.color = '#F2EBD3'
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ; 
    }
})

cellEl3.addEventListener('click',function(){
    if(xISNext){
       cellEl3.textContent = xSympol;
       cellEl3.style.fontSize = '200px';
       status.textContent = 'O is next';
       status.style.color = '#F2EBD3' ;
       xWinner();
       xISNext = false ; 
    } else {
       cellEl3.textContent = oSympol;
       cellEl3.style.fontSize = '250px';
       cellEl3.style.color = '#F2EBD3';
       status.textContent = 'X is next';
       status.style.color = '#545454';
       oWinner();
       xISNext = true ;
    }   
})

cellEl4.addEventListener('click',function(){
    if(xISNext){
        cellEl4.textContent = xSympol;
        cellEl4.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl4.textContent = oSympol;
        cellEl4.style.fontSize = '250px';
        cellEl4.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }  
})

cellEl5.addEventListener('click',function(){
    if(xISNext){
        cellEl5.textContent = xSympol;
        cellEl5.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl5.textContent = oSympol;
        cellEl5.style.fontSize = '250px';
        cellEl5.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }  
})

cellEl6.addEventListener('click',function(){
    if(xISNext){
        cellEl6.textContent = xSympol;
        cellEl6.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl6.textContent = oSympol;
        cellEl6.style.fontSize = '250px';
        cellEl6.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }  
})

cellEl7.addEventListener('click',function(){
    if(xISNext){
        cellEl7.textContent = xSympol;
        cellEl7.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl7.textContent = oSympol;
        cellEl7.style.fontSize = '250px';
        cellEl7.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }  
})

cellEl8.addEventListener('click',function(){
    if(xISNext){
        cellEl8.textContent = xSympol;
        cellEl8.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl8.textContent = oSympol;
        cellEl8.style.fontSize = '250px';
        cellEl8.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }  
})

cellEl9.addEventListener('click',function(){
    if(xISNext){
        cellEl9.textContent = xSympol;
        cellEl9.style.fontSize = '200px';
        status.textContent = 'O is next';
        status.style.color = '#F2EBD3' ;
        xWinner();
        xISNext = false ; 
    } else {
        cellEl9.textContent = oSympol;
        cellEl9.style.fontSize = '250px';
        cellEl9.style.color = '#F2EBD3';
        status.textContent = 'X is next';
        status.style.color = '#545454';
        oWinner();
        xISNext = true ;
    }    
})

btnReset.addEventListener('click',function(){
    cellEl1.textContent = '';
    cellEl2.textContent = '';
    cellEl3.textContent = '';
    cellEl4.textContent = '';
    cellEl5.textContent = '';
    cellEl6.textContent = '';
    cellEl7.textContent = '';
    cellEl8.textContent = '';
    cellEl9.textContent = '';
    cellEl1.style.color = '#545454';
    cellEl2.style.color = '#545454';
    cellEl3.style.color = '#545454';
    cellEl4.style.color = '#545454';
    cellEl5.style.color = '#545454';
    cellEl6.style.color = '#545454';
    cellEl7.style.color = '#545454';
    cellEl8.style.color = '#545454';
    cellEl9.style.color = '#545454';
    status.textContent = 'X is next';
    status.style.color = '#545454';
    xISNext = true ;
})