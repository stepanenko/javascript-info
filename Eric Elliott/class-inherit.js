
// Class Inheritance Example
// NOT RECOMMENDED. Use object composition, instead.

class GuitarAmp {
  constructor({ cabinet = 'spruce', distortion = '1', volume = '0' } = {}) {
    Object.assign(this, {
      cabinet, distortion, volume
    });
  }
}

class BassAmp extends GuitarAmp {
  constructor(options = {}) {
    super(options);
    this.lowCut = options.lowCut;
  }
}

class ChannelStrip extends BassAmp {
  constructor(options = {}) {
    super(options);
    this.inputLevel = options.inputLevel;
  }
}

const gAmp = new GuitarAmp();
console.log(gAmp);

const bAmp = new BassAmp({ lowCut: '12' });
console.log(bAmp);

const cs = new ChannelStrip({ lowCut: '2', inputLevel: 4 });
console.log(cs);

console.log('======');

// OR
class GuitarAmp2 {
  constructor(obj = {}) {
    this.cabinet = obj.cabinet || 'spruce';
    this.distortion = obj.distortion || '1';
    this.volume = obj.volume || '0';
  }
}

let ga = new GuitarAmp2();
console.log('g', ga);

class BassAmp2 extends GuitarAmp2 {
  constructor(options = {}) {
    super();
    this.lowCut = options.lowCut || 12;
  }
}

let ba = new BassAmp2();
console.log('bg', ba);

// ...

// This is an example of how OO design goes wrong. A channel strip isn’t
// actually a type of guitar amp, and doesn’t actually need a cabinet at all.
// A better option would be to create a new base class that both the amps
// and the channel strip inherits from, but even that has limitations.
