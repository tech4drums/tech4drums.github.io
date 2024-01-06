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
       
/*
const shuffle = (array: string[]) => { 
    return array.sort(() => Math.random() - 0.5); 
};


function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
} 
*/      
       

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
const snareClefs = [[new StaveNote({keys: ['c/5'],duration: 'q'})]];

const bassClefs = [[new StaveNote({keys: ['f/4'],duration: 'q'})],
                   [new StaveNote({keys: ['f/4'],duration: '8'}), new StaveNote({keys: ['f/4'],duration: '8'})]
                  ];
          
const hihatClefs = [[new StaveNote({keys: ['d/4/x2'],duration: 'q'})],
                    [new StaveNote({keys: ['d/4/x2'],duration: '8'}), new StaveNote({keys: ['d/4/x2'], duration: '8'})],
                    [new StaveNote({keys: ['a/4'],duration: '8r'}), new StaveNote({keys: ['d/4/x2'], duration: '8'})]    
                   ];    
                
const rideClefs = [[new StaveNote({ keys: ['a/5/x2'], duration: 'q'})], //1
                   [new StaveNote({ keys: ['a/5/x2'], duration: '8'}), new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //2
                   [new StaveNote({ keys: ['a/4'], duration: '8r'}), new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //3
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //4
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), new StaveNote({ keys: ['a/5/x2'], duration: '16'}),
                    new StaveNote({ keys: ['a/4'], duration: '8r'})], //5
                   [new StaveNote({ keys: ['a/4'], duration: '8r'}), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //6
                   [dotted(new StaveNote({ keys: ['a/5/x2'], duration: '8', })), new StaveNote({ keys: ['a/5/x2'], duration: '16'}),],//7
                   [dotted(new StaveNote({ keys: ['a/4'], duration: '8r', })), new StaveNote({ keys: ['a/5/x2'], duration: '16'}),],//8
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'})], //9
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), dotted(new StaveNote({ keys: ['a/5/x2'], duration: '8'}))], //10
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), new StaveNote({ keys: ['a/5/x2'], duration: '8'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //11
                   [new StaveNote({ keys: ['a/5/x2'], duration: '8'}), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'})], //12
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '8'}), ], //13
                   [new StaveNote({ keys: ['a/4'], duration: '16r', }), new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), 
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}),], //14       
                   [new StaveNote({ keys: ['a/5/x2'], duration: '16'}), new StaveNote({ keys: ['a/5/x2'], duration: '8'}),
                    new StaveNote({ keys: ['a/5/x2'], duration: '16'}), ], //15
                   ];         


// Groove Scribe grooves
const snareGS = ["&S=|----o-------o---|"];
const bassGS  = ["&K=|o-------o-------|", "&K=|o-o-----o-o-----|"];
const hihatGS = ["&K=|x---x---x---x---|", "&K=|x-x-x-x-x-x-x-x-|", "&K=|--x---x---x---x-|"];
const rideGS  = ["&H=|r---r---r---r---|", "&H=|r-r-r-r-r-r-r-r-|", "&H=|--r---r---r---r-|", 
                 "&H=|rrrrrrrrrrrrrrrr|", "&H=|rr--rr--rr--rr--|", "&H=|--rr--rr--rr--rr|", 
                 "&H=|r--rr--rr--rr--r|", "&H=|---r---r---r---r|", "&H=|-rr--rr--rr--rr-|", 
                 "&H=|-r---r---r---r--|", "&H=|-r-r-r-r-r-r-r-r|", "&H=|r-rrr-rrr-rrr-rr|", 
                 "&H=|rrr-rrr-rrr-rrr-|", "&H=|-rrr-rrr-rrr-rrr|", "&H=|rr-rrr-rrr-rrr-r|"];

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
        this.lengths = [bassClefs.length, rideClefs.length, hihatClefs.length]
        this.randoms = [Math.floor(Math.random() * this.lengths[0]),
                        Math.floor(Math.random() * this.lengths[1]),
                        Math.floor(Math.random() * this.lengths[2])];
        this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
        this.played_counter = document.getElementById('played-counter');
        this.repeatBars = 4; //document.getElementById('maxRepeat').value;
        this.change = 0;   // how many bars to change from one exercise to the next one
        this.weight = 0;   // use weighted random selection
        this.played = [];  // played exercises, so that there are not repeated
        this.max_combinations = bassClefs.length * rideClefs.length * hihatClefs.length; // maximum number of bar combinations
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
        //this.played = [];
        //this.played_counter.textContent = "Played " + this.played.length+ " out of "+this.max_combinations+" combinations";
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
    
    
    
    /* -------------------------
       Weighted Randoms function 
       ------------------------- */
    weightedRandom(weights) { 
      // Preparing the cumulative weights array.
      // For example:
      // - weights = [1, 4, 3]
      // - cumulativeWeights = [1, 5, 8]
      const cumulativeWeights = [];
      for (let i = 0; i < weights.length; i += 1) {
        cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
      }
      // Getting the random number in a range of [0...sum(weights)]
      // For example:
      // - weights = [1, 4, 3]
      // - maxCumulativeWeight = 8
      // - range for the random number is [0...8]
      const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
      const randomNumber = maxCumulativeWeight * Math.random();
      // Picking the random item based on its weight.
      // The items with higher weight will be picked more often.
      for (let itemIndex = 0; itemIndex < weights.length; itemIndex += 1) {
        if (cumulativeWeights[itemIndex] >= randomNumber) {
          return itemIndex;
        }
      }
    }
    
    /* -------------------------
       GENERATE WEIGHTED RANDOMS 
       ------------------------- */
    generateWeightedRandoms(){
        if (this.change != 0){
            /* Can change any, but at least one */
            var randoms = [];
            this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
            do{
                randoms = [this.weightedRandom(weights[0]),
                           this.weightedRandom(weights[1]),
                           this.weightedRandom(weights[2])];
            } while (JSON.stringify(randoms) == JSON.stringify(this.randoms));
            this.randoms = randoms;
        }  
        else{
           /* Change only one limb */
            let limb = 0;
            let new_val = 0;
            this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
            do {
               limb = this.weightedRandom(limbWeights);
               new_val = this.weightedRandom(weights[limb]);
            } while (new_val == this.randoms[limb]);
           this.randoms[limb] = new_val;
        }
    }
    
    /* -----------------
        GENERATE RANDOMS 
       ------------------- */
    generateRandoms(){
        if (this.change != 0){
            /* can change any, at least one */
            let randoms = [];  
            let val ="";
            let attempts = 0;
            this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
            do{
               randoms = [Math.floor(Math.random() * this.lengths[0]),
                          Math.floor(Math.random() * this.lengths[1]),
                          Math.floor(Math.random() * this.lengths[2])]; 
               val = JSON.stringify(randoms);
               attempts+=1;
            }
            while (((JSON.stringify(randoms) == JSON.stringify(this.randoms)) || 
                     this.played.includes(val)) && attempts < 20 );
            
            this.played.push(val);
            this.randoms = randoms;
        }  
        else{
           /* Change only one limb */
           let limb = 0;
           let new_val = 0;
           let val = '';
           let attempts = 0; //number of random selections so as not to block the app
           this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
           do{ 
               limb = Math.floor(Math.random() * 3);
               new_val = Math.floor(Math.random() * this.lengths[limb]);
               let clonedRandoms = JSON.parse(JSON.stringify(this.randoms))
               clonedRandoms[limb] = new_val;
               val = JSON.stringify(clonedRandoms);
               attempts+=1;
               //console.log(val, this.played.includes(val));
           } while ((new_val == this.randoms[limb] || this.played.includes(val)) && (attempts<20));
           
           this.randoms[limb] = new_val;
           if (!this.played.includes(val))
                this.played.push(val);
         }
    }
    
    
 

    /* -----------------
        Tempo update 
       ----------------- */
    clefTempoUpdate(){
        /* when you change the tempo, update the GS score */ 
        let groove = this.createGrooveScribeGroove(this.previous_randoms);
        this.gs.AddGrooveDisplayToElementId('GrooveDisplay', groove, true, true, false);
    }
    
    
    /* ------------------------
       Generate exercise scores
       ------------------------ */
    clef(){
        /* draw the current and next exercises */
        /* when reached max_combinations reset the played array */
        if (this.played.length == this.max_combinations){
                this.played = [];
                this.played.length = 0;  
        }   
        this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
        // Current exercise 
        this.bass('bassSnare', this.randoms[0]);
        document.getElementById('bassno').innerHTML = "&nbsp;A"+(this.randoms[0]+1)+".&nbsp;";
        this.ride('ride', this.randoms[1]);
        document.getElementById('rideno').innerHTML = "&nbsp;B"+(this.randoms[1]+1)+".&nbsp;";    
        this.hihat('hihat', this.randoms[2]);
        document.getElementById('hhno').innerHTML = "&nbsp;C"+(this.randoms[2]+1)+".&nbsp;";
        
        // Groove scribe
        let groove = this.createGrooveScribeGroove(this.randoms);
        this.gs.AddGrooveDisplayToElementId('GrooveDisplay', groove, true, true, false);    

        // Next exercise
        if (this.weight == 0)
            this.generateWeightedRandoms();
        else
           this.generateRandoms();
        
        this.played_counter.textContent = "Played " + this.played.length+ " out of "+this.max_combinations+" combinations";
        this.bass('bassSnareNext', this.randoms[0]);
        document.getElementById('bassnonext').innerHTML = "&nbsp;A"+(this.randoms[0]+1)+".&nbsp;";
        this.ride('rideNext', this.randoms[1]);
        document.getElementById('ridenonext').innerHTML = "&nbsp;B"+(this.randoms[1]+1)+".&nbsp;";
        this.hihat('hihatNext', this.randoms[2]);
        document.getElementById('hhnonext').innerHTML = "&nbsp;C"+(this.randoms[2]+1)+".&nbsp;";
    }
    
    
    /* -------------------------
       Groove Scribe URL creator
       ------------------------- */
    createGrooveScribeGroove(randoms){
        // build the GS URL
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
    
}
            
    
