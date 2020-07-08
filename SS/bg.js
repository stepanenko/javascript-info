
const enabled = { ics: true, ae: false, mop: true, loyalty: true };

const ok = Object.keys(enabled).filter(key => enabled[key]);

console.log(ok);