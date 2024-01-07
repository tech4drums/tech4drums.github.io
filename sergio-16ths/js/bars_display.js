const {Renderer,
       Stave,
       StaveNote,
       Formatter,
       Beam, Dot
       } = Vex.Flow;
         
       

function dotted(staveNote, noteIndex = -1) {
  if (noteIndex < 0) {
    Dot.buildAndAttach([staveNote], {
      all: true
    });
  } else {
    Dot.buildAndAttach([staveNote], {
      index: noteIndex
    });
  }
  return staveNote;
}


       
// Scores
const snareClefs = [[new StaveNote({keys: ['c/5'],duration: 'q'})],
                    [new StaveNote({ keys: ['a/4'], duration: '4r', })]];

const bassClefs = [[new StaveNote({keys: ['f/4'],duration: 'q'})], //1
                   
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                    dotted(new StaveNote({ keys: ['f/4'], duration: '8'}))], //2
                   
                   [new StaveNote({ keys: ['a/4'], duration: '8r'}), 
                    new StaveNote({ keys: ['f/4'], duration: '8'})], //3
                   
                   [dotted(new StaveNote({ keys: ['a/4'], duration: '8r', })), 
                    new StaveNote({ keys: ['f/4'], duration: '16'}),],//4
                   
                   [new StaveNote({ keys: ['f/4'], duration: '16'}), 
                    new StaveNote({ keys: ['f/4'], duration: '16'}),
                    new StaveNote({ keys: ['a/4'], duration: '8r'})], //5
                   
                    [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '8'})], //6   
                   
                    [new StaveNote({ keys: ['a/4'], duration: '8r'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'})], //7  
                   
                    [dotted(new StaveNote({ keys: ['f/4'], duration: '8', })), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}),],//8
                   
                    [new StaveNote({keys: ['f/4'],duration: '8'}), 
                     new StaveNote({keys: ['f/4'],duration: '8'})], //9
                   
                    [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                     new StaveNote({ keys: ['f/4'], duration: '8'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'})], //10
                   
                   
                    [new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '8'}), ], //11
                   
                    [new StaveNote({ keys: ['f/4'], duration: '8'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'})], //12
                   
                    [new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '8'}),
                     new StaveNote({ keys: ['f/4'], duration: '16'}), ], //13
                   
                    [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}),], //14
                   
                    [new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'}), 
                     new StaveNote({ keys: ['f/4'], duration: '16'})], //15
                   
                    [new StaveNote({ keys: ['a/4'], duration: '4r', })]
                  ];


/*const bassClefs = [[new StaveNote({keys: ['f/4'],duration: 'q'})],
                        
                        [new StaveNote({keys: ['f/4'],duration: '8'}), 
                         new StaveNote({keys: ['f/4'],duration: '8'})],
                        
                        [new StaveNote({ keys: ['a/4'], duration: '4r', })]
                  ];
          
*/
const hihatClefs = [[new StaveNote({keys: ['d/4/x2'],duration: 'q'})],//1
                    
                    [new StaveNote({keys: ['d/4/x2'],duration: '8'}), 
                     new StaveNote({keys: ['d/4/x2'], duration: '8'})],//2
                    
                    [new StaveNote({keys: ['a/4'],duration: '8r'}), 
                     new StaveNote({keys: ['d/4/x2'], duration: '8'})],//3
                    
                    [new StaveNote({ keys: ['a/4'], duration: '4r', })]//rest
                   ];    
                
const rideClefs = [[new StaveNote({ keys: ['a/5/x2'], duration: 'q'})], //1
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '8'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //2
                   
                   [new StaveNote({ keys: ['a/4'], duration: '8r'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //3
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //4
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),
                    new StaveNote({ keys: ['a/4'], duration: '8r'})], //5
                   
                   [new StaveNote({ keys: ['a/4'], duration: '8r'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //6
                   
                   [dotted(new StaveNote({ keys: ['a/5/x2'], duration: '8', })), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),],//7
                   
                   [dotted(new StaveNote({ keys: ['a/4'], duration: '8r', })), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),],//8
                   
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //9
                   
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                    dotted(new StaveNote({ keys: ['a/5/x2'], duration: '8'}))], //10
                   
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //11
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '8'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //12
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'}), ], //13
                   
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),], //14 
                   
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'}),
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),], //15
                   
                   [new StaveNote({ keys: ['a/4'], duration: '4r', })] //rest
                   ];         


// Groove Scribe grooves
const snareGS     = ["&S=|----o-------o---|"];

/*const bassGS = ["&K=|o-------o-------|", 
                     "&K=|o-o-----o-o-----|"];*/

const bassGS  = ["&K=|o-------o-------|",//1
                 "&K=|-o-------o------|",//2
                 "&K=|--o-------o-----|",//3
                 "&K=|---o-------o----|",//4
                 "&K=|oo------oo------|",//5
                 "&K=|-oo------oo-----|",//6
                 "&K=|--oo------oo----|",//7
                 "&K=|o--o----o--o----|",//8  
                 "&K=|o-o-----o-o-----|",//9
                 "&K=|-o-o-----o-o----|",//10
                 "&K=|ooo-----ooo-----|",//11
                 "&K=|o-oo----o-oo----|",//12
                 "&K=|oo-o----oo-o----|",//13
                 "&K=|-ooo-----ooo----|",//14
                 "&K=|oooo----oooo----|",//15
                ];

const hihatGS = ["&K=|x---x---x---x---|", 
                 "&K=|x-x-x-x-x-x-x-x-|", 
                 "&K=|--x---x---x---x-|"];

const rideGS  = ["&H=|r---r---r---r---|", 
                 "&H=|r-r-r-r-r-r-r-r-|", 
                 "&H=|--r---r---r---r-|", 
                 "&H=|rrrrrrrrrrrrrrrr|", 
                 "&H=|rr--rr--rr--rr--|", 
                 "&H=|--rr--rr--rr--rr|", 
                 "&H=|r--rr--rr--rr--r|", 
                 "&H=|---r---r---r---r|", 
                 "&H=|-rr--rr--rr--rr-|", 
                 "&H=|-r---r---r---r--|", 
                 "&H=|-r-r-r-r-r-r-r-r|", 
                 "&H=|r-rrr-rrr-rrr-rr|", 
                 "&H=|rrr-rrr-rrr-rrr-|", 
                 "&H=|-rrr-rrr-rrr-rrr|", 
                 "&H=|rr-rrr-rrr-rrr-r|"];
