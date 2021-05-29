
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



// Before testing get some testing library
/*
test('Class Inheritance', nest => {
  nest.test('BassAmp', assert => {
    const msg = `instance should inherit props
    from GuitarAmp and BassAmp`;

    const myAmp = new BassAmp();
    const actual = Object.keys(myAmp);
    const expected = ['cabinet', 'distortion', 'volume', 'lowCut'];

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });

  nest.test('ChannelStrip', assert => {
    const msg = 'instance should inherit from GuitarAmp, BassAmp, and ChannelStrip';
    const myStrip = new ChannelStrip();
    const actual = Object.keys(myStrip);
    const expected = ['cabinet', 'distortion', 'volume', 'lowCut', 'inputLevel'];

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });
});
*/
