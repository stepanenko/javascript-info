
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
class Guitar {
  constructor(obj = {}) {
    this.cabinet = obj.cabinet || 'spruce';
    this.distortion = obj.distortion || '1';
    this.volume = obj.volume || '0';
  }
}

let g = new Guitar();
console.log('g', g);

class BaseGuitar extends Guitar {
  constructor(options = {}) {
    super();
    this.lowCut = options.lowCut || 12;
  }
}

let bg = new BaseGuitar();
console.log('bg', bg);

// ...
