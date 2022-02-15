import '../src'

describe('String', () => {
    test('String.toNumber()', () => {
        expect('10.6'.toNumber()).toBe(10.6)
        expect('10'.toNumber()).toBe(10)
    })

    test('String.toBoolean()', () => {
        expect('true'.toBoolean()).toBe(true)
        expect('false'.toBoolean()).toBe(false)
        expect('Value'.toBoolean).toThrowError()
    })

    test('String.toFormattedDate(f, s)', () => {
        const date = '06/10/2021'

        expect(date.toFormattedDate()).toBe('10/06/2021')
        expect(date.toFormattedDate({ day: 'numeric', month: 'short', year: 'numeric' }, '-')).toBe('10-Jun-2021')
        expect(date.toFormattedDate(null, '.')).toBe('10.06.2021')
        expect(date.toFormattedDate(null, null)).toBe('10/06/2021')
    })

    test('String.toRegExp()', () => {
        expect('d+'.toRegExp()).toBeInstanceOf(RegExp)
    })

    test('String.contains(s)', () => {
        expect('TypeScript'.contains('Script')).toBe(true)
        expect('TypeScript'.contains('Java')).toBe(false)

        expect('GOLANG'.contains('go', true)).toBe(true)
        expect('KOTLIN'.contains('h', true)).toBe(false)
    })

    test('String.endsWith(s)', () => {
        expect('ECMAScript'.endsWith('t')).toBe(true)
        expect('ES modules'.endsWith('JS')).toBe(false)

        expect('F SHARP'.endsWith('p', true)).toBe(true)
        expect('DART'.endsWith('z', true)).toBe(false)
    })

    test('String.isEmpty()', () => {
        expect(''.isEmpty()).toBe(true)
        expect('Filled'.isEmpty()).toBe(false)
    })
})

describe('Number', () => {
    test('Number.isDecimal()', () => {
        const num = 10

        expect(10.6.isDecimal()).toBe(true)
        expect(num.isDecimal()).toBe(false)
    })

    test('Number.toInt()', () => {
        expect(10.6.toInt()).toBe(10)
    })
})

describe('Array', () => {
    const langs = [
        { language: 'TypeScript', creator: 'Microsoft' },
        { language: 'Go', creator: 'Google' }
    ]
    const moreLangs = [...langs, { language: 'Kotlin', creator: 'JetBrains' }]

    test('Array.plus(a)', () => {
        expect([0, 1, 2].plus([3, 4])).toStrictEqual([0, 1, 2, 3, 4])
        expect(langs.plus([{ language: 'Kotlin', creator: 'JetBrains' }])).toStrictEqual(moreLangs)
    })

    test('Array.minus(a)', () => {
        expect([0, 1, 2, 3, 4].minus([3, 4])).toStrictEqual([0, 1, 2])
        expect(langs.minus([langs[0]])).toStrictEqual([langs[1]])
    })
})

describe('Date', () => {
    test('Date.toFormattedDate(f, s)', () => {
        const date = new Date('06/10/2021')

        expect(date.toFormattedDate()).toBe('10/06/2021')
        expect(date.toFormattedDate({ day: 'numeric', month: 'short', year: 'numeric' }, '-')).toBe('10-Jun-2021')
        expect(date.toFormattedDate(null, '.')).toBe('10.06.2021')
        expect(date.toFormattedDate(null, null)).toBe('10/06/2021')
    })
})