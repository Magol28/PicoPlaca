const { assert } = require('chai');
const { isValidTime, isPicoPlacaApplied, getLastDigit, isPicoPlacaDay, isNewPicoPlacaSchedule } = require('../functions/app');
describe('get Last Digit of the plate as a number', () => {
    it('if we set the plate AAC-0123 it must return 3', () => {
        assert.equal(getLastDigit('AAC-0123'), 3)
    })
})
describe('get Last Digit of the plate as a number', () => {
    it('if we set the plate AEC-0000 it must return 0', () => {
        assert.equal(getLastDigit('AEC-0000'), 0)
    })
})
describe('get Last Digit of the plate as a number', () => {
    it('if we set the plate AAA-0003 it must return 3', () => {
        assert.equal(getLastDigit('AAA-0003'), 3)
    })
})
describe('get Last Digit of the plate as a number', () => {
    it('if we set the plate PBB-3239 it must return 9', () => {
        assert.equal(getLastDigit('PBB-3239'), 9)
    })
})

describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-03 it must return false', () => {
        assert.equal(isPicoPlacaDay('2019-08-03'), false)
    })
})

describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-04 it must return false', () => {
        assert.equal(isPicoPlacaDay('2019-08-04'), false)
    })
})
describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-05 it must return true', () => {
        assert.equal(isPicoPlacaDay('2019-08-05'), true)
    })
})
describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-06 it must return true', () => {
        assert.equal(isPicoPlacaDay('2019-08-06'), true)
    })
})
describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-07 it must return true', () => {
        assert.equal(isPicoPlacaDay('2019-08-07'), true)
    })
})

describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-08 it must return true', () => {
        assert.equal(isPicoPlacaDay('2019-08-08'), true)
    })
})

describe(' get if any date is a Pico Placa day ', () => {
    it('if we set the date 2019-08-09 it must return true', () => {
        assert.equal(isPicoPlacaDay('2019-08-08'), true)
    })
})

describe(' get if any time is bewtween 5:00:00 to 20:00:00 ', () => {
    it('if we set the date 15:00:00 it must return true', () => {
        assert.equal(isValidTime('15:00:00', '4:59:59', '20:00:01'), true)
    })
})

describe(' get if any time is bewtween 5:00:00 to 20:00:00 ', () => {
    it('if we set the date 20:00:01 it must return false', () => {
        assert.equal(isValidTime('20:00:01', '4:59:59', '20:00:01'), false)
    })
})
describe(' get if any time is bewtween 5:00:00 to 20:00:00 ', () => {
    it('if we set the date 20:00:00 it must return true', () => {
        assert.equal(isValidTime('20:00:00', '4:59:59', '20:00:01'), true)
    })
})

describe(' get if any time is bewtween 5:00:00 to 20:00:00 ', () => {
    it('if we set the date 05:00:01 it must return true', () => {
        assert.equal(isValidTime('05:00:01', '4:59:59', '20:00:01'), true)
    })
})

describe(' get if any time is bewtween 5:00:00 to 20:00:00 ', () => {
    it('if we set the date 05:00:01 it must return true', () => {
        assert.equal(isValidTime('05:00:00', '4:59:59', '20:00:01'), true)
    })
})


describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-05 as a date and AAB-4421 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-05', 'AAB-4421'), true)
    })
})

describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-05 as a date and AAB-4422 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-05', 'AAB-4422'), true)
    })
})


describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-02 as a date and AAB-4423 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-02', 'AAB-4423'), false)
    })
})

describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-06 as a date and AAB-4423 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-06', 'AAB-4423'), true)
    })
})

describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-02 as a date and AAB-4420 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-02', 'AAB-4420'), true)
    })
})

describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-02 as a date and AAB-4429 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-02', 'AAB-4429'), true)
    })
})



describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-01 as a date and AAB-4420 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-01', 'AAB-4420'), false)
    })
})

describe(' test any number plate with any date get if Pico Placa is being applied', () => {
    it('if we set 2019-08-01 as a date and AAB-4429 as a number plate it must return true ', () => {
        assert.equal(isPicoPlacaApplied('2019-08-01', 'AAB-4429'), false)
    })
})


describe(' get if we must use the new Pico Placa ', () => {
    it('if we set 2019-08-02  it must return false ', () => {
        assert.equal(isNewPicoPlacaSchedule('2019-08-02'), false)
    })
})
describe(' get if we must use the new Pico Placa ', () => {
    it('if we set 2019-08-02  it must return false ', () => {
        assert.equal(isNewPicoPlacaSchedule('2020-08-02'), false)
    })
})


describe(' get if we must use the new Pico Placa ', () => {
    it('if we set 2019-09-02  it must return true ', () => {
        assert.equal(isNewPicoPlacaSchedule('2019-09-02'), true)
    })
})

describe(' get if we must use the new Pico Placa ', () => {
    it('if we set 2020-05-02  it must return true ', () => {
        assert.equal(isNewPicoPlacaSchedule('2020-05-02', 'YYYY-MM-DD'), true)
    })
})