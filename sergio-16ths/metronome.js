/* TODO:
    - weighted randoms - decrease with each exercise
    - fixed randoms - create arrays and pop, do not generate radom at each step
*/


var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");

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

// weighted randoms for bass, ride, hihat
const weights = [[1,2],
                 [1,1,2,1,1,1,5,4,3,3,5,1,1,3,1],
                 [1,2,2]];

const limbWeights = [1,1,2];
       
// Scores
const snareClefs = [[new StaveNote({keys: ['c/5'],duration: 'q'})],
                    [new StaveNote({ keys: ['a/4'], duration: '4r', })]];

const bassClefs_full = [[new StaveNote({keys: ['f/4'],duration: 'q'})], //1
                   
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


const bassClefs = [[new StaveNote({keys: ['f/4'],duration: 'q'})],
                        
                        [new StaveNote({keys: ['f/4'],duration: '8'}), 
                         new StaveNote({keys: ['f/4'],duration: '8'})],
                        
                        [new StaveNote({ keys: ['a/4'], duration: '4r', })]
                  ];
          
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

const bassGS = ["&K=|o-------o-------|", 
                     "&K=|o-o-----o-o-----|"];

const bassGS_full  = ["&K=|o-------o-------|",//1
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

/* ----------------
   Class METRONOME
   ---------------- */
class Metronome
{
    constructor(tempo = 70)
    {
        this.audioContext = null;
        this.notesInQueue = [];    // notes that have been put into the web audio and may or may not have been played yet {note, time}
        this.currentBeatInBar = 0;
        this.beatsPerBar = 4;
        this.tempo = tempo;
        this.lookahead = 25;          // How frequently to call scheduling function (in milliseconds)
        this.scheduleAheadTime = 0.1;   // How far ahead to schedule audio (sec)
        this.nextNoteTime = 0.0;     // when the next note is due
        this.isRunning = false;
        this.intervalID = null;
        
        /* Score attributes */
        this.counter = 0;
        this.lengths = [bassClefs.length-1, rideClefs.length-1, hihatClefs.length-1]
        
        this.played_counter = document.getElementById('played-counter');
        this.repeatBars = 1; //document.getElementById('maxRepeat').value;
        this.change = 0;   // how many bars to change from one exercise to the next one
        this.weight = 0;   // use weighted random selection
        this.max_combinations = (bassClefs.length-1) * (rideClefs.length-1) * (hihatClefs.length-1); // maximum number of bar combinations
        this.matrix = this.generateMatrix();
        this.randoms = this.matrix[0];
        this.barindex = 0;
        this.gs = new GrooveDisplay();
        this.clef();
    }
    

    nextNote(){
        // Advance current note and time by a quarter note (crotchet if you're posh)
        var secondsPerBeat = 60.0 / this.tempo; // Notice this picks up the CURRENT tempo value to calculate beat length.
        this.nextNoteTime += secondsPerBeat; // Add beat length to last beat time
        this.currentBeatInBar++;    // Advance the beat number, wrap to zero
        if (this.currentBeatInBar == this.beatsPerBar) {
            this.currentBeatInBar = 0;
        }
    }

    scheduleNote(beatNumber, time){
        // push the note on the queue, even if we're not playing.
        this.notesInQueue.push({ note: beatNumber, time: time });
    
        // create an oscillator
        const osc = this.audioContext.createOscillator();
        const envelope = this.audioContext.createGain();
        
        osc.frequency.value = (beatNumber % this.beatsPerBar == 0) ? 3000 : 2000;
        envelope.gain.value = 1;
        envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

        osc.connect(envelope);
        envelope.connect(this.audioContext.destination);
    
        osc.start(time);
        osc.stop(time + 0.03);
    }

    scheduler(counter, repeatBars){
        // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
        while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime ) {
            this.scheduleNote(this.currentBeatInBar, this.nextNoteTime);
            this.nextNote();
            
            //Reset circles
            circle1.style.color = "mediumseagreen";
            circle2.style.color = "mediumseagreen";
            circle3.style.color = "mediumseagreen";
            circle4.style.color = "mediumseagreen";
            switch(this.currentBeatInBar) {
                case 1:
                    circle1.style.color = "#ec6a52";
                    break; 
                case 2:
                    circle2.style.color = "#ec6a52";
                    break;
                case 3:
                    circle3.style.color = "#ec6a52";
                    break;
                case 0:
                    circle4.style.color = "#ec6a52";
                    break;     
            }
            
            
            if (this.currentBeatInBar == 1){
                //console.log(this.counter);
                this.counter += 1;
                if (this.counter == 0){
                    counter.style.background = '#064786';
                    counter.textContent = "Count in";  
                }
                              
                if (this.counter == repeatBars){
                    counter.style.background = '#ec6a52';
                    counter.textContent = this.counter;
                }
                else if (this.counter > 0){
                        counter.style.background = 'mediumseagreen';
                        counter.textContent = this.counter;
                }
                
                if (this.counter == repeatBars + 1){
                    counter.style.background = 'orange';
                    counter.textContent = "FILL";
                }
                if (this.counter == repeatBars + 2){
                    this.clef();
                    this.counter = 1;
                    counter.textContent = this.counter;
                }
                
                if (this.counter > repeatBars + 2){
                    this.counter = 1;
                    counter.textContent = this.counter;
                }
            }
            
        }
    }

    start(){
        if (this.isRunning) return;
        this.counter = -1;
        if (this.audioContext == null){
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        this.isRunning = true;
        this.currentBeatInBar = 0;
        this.nextNoteTime = this.audioContext.currentTime + 0.05;
        this.intervalID = setInterval(() => this.scheduler(counter, this.repeatBars), this.lookahead);      
    }


    stop(){
        this.isRunning = false;
        clearInterval(this.intervalID);
    }

    startStop(counter){
        if (this.isRunning) {
            this.stop();
            this.counter = -1;
            counter.textContent = 0;
            counter.style.background = 'dodgerblue';
        }
        else {
            this.start(counter);
        }
    }
    
 
    /* -----------------
       MUSIC SCORE
       ----------------- */
    // kick
    bass(elementid, rand){
        document.getElementById(elementid).innerHTML = '';
        const div = document.getElementById(elementid);
        const renderer = new Renderer(div, Renderer.Backends.SVG);
        renderer.resize(220, 90);
        const context = renderer.getContext();
        const stave = new Stave(0, 0, 200);
        stave.addClef('percussion').addTimeSignature('2/4');
        stave.setContext(context).draw();
        //notes
        var notes1 = bassClefs[rand];
        if (rand == bassClefs.length-1)
            var notes2 = snareClefs[1];
        else
            var notes2 = snareClefs[0];
        const allnotes = notes1.concat(notes2);
        const beams = Beam.generateBeams(allnotes);
        Formatter.FormatAndDraw(context, stave, allnotes);
        beams.forEach((b) => {
          b.setContext(context).draw();
        });
    }
    
    
    // ride
    ride(elementid, rand){
        document.getElementById(elementid).innerHTML = '';
        const div = document.getElementById(elementid);
        const renderer = new Renderer(div, Renderer.Backends.SVG);
        renderer.resize(220, 120);
        const context = renderer.getContext();
        const stave = new Stave(0, 0, 200);
        stave.addClef('percussion').addTimeSignature('1/4');
        stave.setContext(context).draw();

        // Create the notes
        const notes1 = rideClefs[rand];
        const beams = Beam.generateBeams(notes1);
        Formatter.FormatAndDraw(context, stave, notes1);
        beams.forEach((b) => {
          b.setContext(context).draw();
        });
    }
    
    // hihat 
    hihat(elementid, rand){
        document.getElementById(elementid).innerHTML = '';
        const div = document.getElementById(elementid);
        const renderer = new Renderer(div, Renderer.Backends.SVG);
        renderer.resize(210, 90);
        const context = renderer.getContext();
        const stave = new Stave(0, 0, 200);
        stave.addClef('percussion').addTimeSignature('1/4');
        stave.setContext(context).draw();

        // Create the notes
        const notes1 = hihatClefs[rand];
        const beams = Beam.generateBeams(notes1);
        Formatter.FormatAndDraw(context, stave, notes1);
        beams.forEach((b) => {
          b.setContext(context).draw();
        });
    }
    
    
    /* -----------------
       Generate matrix
       -----------------*/
    generateMatrix(){
        console.log("Generating matrix");
        var matrix = [];
        var nm = [];
        matrix = generateRandomMatrix(this.max_combinations, this.lengths);
        if (this.change == 1){
            console.log("Change one limb", this.change);
            //change only one limb
            var attempts = 0;
            do {
                    nm = orderMatrix2Common(matrix);
                    attempts+=1;
            } while ((nm.length< matrix.length) && (attempts < 1000));
            if (attempts == 1000)
                matrix = JSON.parse(JSON.stringify(shuffleMatrix(matrix)));
            else    
                matrix = JSON.parse(JSON.stringify(nm));
            console.log("Attempts:", attempts);
        }
        else{
            console.log("Change ANY limb");
            //can change any, just scramble
            matrix = JSON.parse(JSON.stringify(shuffleMatrix(matrix)));
        }
        //console.log("Matrix:", JSON.stringify(matrix));
        matrix.push([bassClefs.length-1, rideClefs.length-1, hihatClefs.length-1]);
        //matrix.push([bassClefs.length-1, rideClefs.length-1, hihatClefs.length-1]);
        return matrix;
    }
    
    

    /* -----------------
        Tempo update 
       ----------------- */
    clefTempoUpdate(){
        /* when you change the tempo, update the GS score */ 
        let groove = this.createGrooveScribeGroove(-1);
        this.gs.AddGrooveDisplayToElementId('GrooveDisplay', groove, true, true, false);
    }
    
    /* ------------------------
       Generate exercise scores
       ------------------------ */
    clef(){
        /* draw the current and next exercises */
        if (this.barindex == this.max_combinations){
            console.log("Stopping");
            this.stop();
            var playPauseIcon = document.getElementById('play-pause-icon');
            playPauseIcon.className = 'play';
            return;
            //this.redraw();
        }
        // Current exercise 
        this.randoms = this.matrix[this.barindex]; 
        
        this.bass('bassSnare', this.randoms[0]);
        document.getElementById('bassno').innerHTML = "&nbsp;A"+(this.randoms[0]+1)+".&nbsp;";
        this.ride('ride', this.randoms[1]);
        document.getElementById('rideno').innerHTML = "&nbsp;B"+(this.randoms[1]+1)+".&nbsp;";    
        this.hihat('hihat', this.randoms[2]);
        document.getElementById('hhno').innerHTML = "&nbsp;C"+(this.randoms[2]+1)+".&nbsp;";
        
        // Groove scribe
        let groove = this.createGrooveScribeGroove(0);
        this.gs.AddGrooveDisplayToElementId('GrooveDisplay', groove, true, true, false);    

        this.played_counter.textContent = "Playing " + (this.barindex+1)+ " out of "+this.max_combinations+" combinations";
        console.log("Barindex", this.barindex, "Current bar: ", JSON.stringify(this.randoms));
        
        
        // Next exercise
        this.barindex+=1;
        this.randoms = this.matrix[this.barindex];
        
        this.bass('bassSnareNext', this.randoms[0]);
        document.getElementById('bassnonext').innerHTML = "&nbsp;A"+(this.randoms[0]+1)+".&nbsp;";
        this.ride('rideNext', this.randoms[1]);
        document.getElementById('ridenonext').innerHTML = "&nbsp;B"+(this.randoms[1]+1)+".&nbsp;";
        this.hihat('hihatNext', this.randoms[2]);
        document.getElementById('hhnonext').innerHTML = "&nbsp;C"+(this.randoms[2]+1)+".&nbsp;";
        console.log("Barindex", this.barindex, "Next bar: ", JSON.stringify(this.randoms));
        
        
        
    }
    
    
    /* -------------------------
       Groove Scribe URL creator
       ------------------------- */
    createGrooveScribeGroove(val){
        // build the GS URL
        var randoms = this.matrix[this.barindex+val];
        //var randoms = [11,10,0];
        let stem = "?TimeSig=4/4&Div=16&Tempo=";
        stem += this.tempo;
        stem += "&Measures=1";
        stem += rideGS[randoms[1]];
        stem += snareGS[0];
        
        let kick = bassGS[randoms[0]];
        let hh = hihatGS[randoms[2]];
        let comb = '&K=|';
        // combine kick and hihat foot for GS 
        for (let i = 4; i < kick.length-1; i++) {
          if (kick[i] != '-' && hh[i] != '-')
              comb += 'X';
          else if (kick[i] != '-')
                 comb += 'o';
          else if (hh[i] != '-')
                 comb += 'x';
          else
              comb += '-';
        }   
        comb += '|';
        stem += comb;
        return stem;
    
    }
    
    /*-------
      REDRAW
    --------- */
    
    redraw(){
        this.matrix = this.generateMatrix();
        this.barindex = 0;
        this.randoms = this.matrix[this.barindex];
        this.clef();
        this.createGrooveScribeGroove(0);
    }
    
}
            
    
