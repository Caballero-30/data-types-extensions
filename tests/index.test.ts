import '../src'

describe('String', () => {
    test('String.toNumber()', () => {
        expect('10.6'.toNumber()).toBe(10.6)
        expect('10'.toNumber()).toBe(10)
    })

    test('String.toBoolean()', () => {
        expect('true'.toBoolean()).toBe(true)
        expect('false'.toBoolean()).toBe(false)
        expect('Value'.toBoolean()).toBe(false)
    })

    test('String.toBooleanStrict()', () => {
        expect('true'.toBooleanStrict()).toBe(true)
        expect('false'.toBooleanStrict()).toBe(false)
        expect(() => 'Value'.toBooleanStrict()).toThrow("The string doesn't represent a boolean value")
    })

    test('String.toBooleanStrictOrNull()', () => {
        expect('true'.toBooleanStrictOrNull()).toBe(true)
        expect('false'.toBooleanStrictOrNull()).toBe(false)
        expect('Value'.toBooleanStrictOrNull()).toBeNull()
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

    test('String.isBlank()', () => {
        expect(''.isBlank()).toBe(true)
        expect(' '.isBlank()).toBe(true)
        expect('\n'.isBlank()).toBe(true)
        expect('\t'.isBlank()).toBe(true)

        expect('Not blank'.isBlank()).toBe(false)
    })

    test('String.isNotEmpty()', () => {
        expect('Filled'.isNotEmpty()).toBe(true)
        expect(''.isNotEmpty()).toBe(false)
    })

    test('String.isNotBlank()', () => {
        expect('Not blank'.isNotBlank()).toBe(true)

        expect(''.isNotBlank()).toBe(false)
        expect(' '.isNotBlank()).toBe(false)
        expect('\n'.isNotBlank()).toBe(false)
        expect('\t'.isNotBlank()).toBe(false)
    })
})

describe('Number', () => {
    test('Number.isDecimal()', () => {
        expect(10.6.isDecimal()).toBe(true)
        expect((10).isDecimal()).toBe(false)
    })

    test('Number.toInt()', () => {
        expect(10.6.toInt()).toBe(10)
    })

    test('Number.pow(x)', () => {
        expect((7).pow(3)).toBe(343)
        expect((4).pow(0.5)).toBe(2)
        expect((-4).pow(-2)).toBe(0.0625)
        expect((-7).pow(0.5)).toBeNaN()
    })
})

describe('Array', () => {
    const langs = [
        { language: 'TypeScript', creator: 'Microsoft' },
        { language: 'Go', creator: 'Google' }
    ]
    const moreLangs = [...langs, { language: 'Kotlin', creator: 'JetBrains' }]
    const numbers = [6, 42, 10, 4]

    test('Array.plus(a)', () => {
        expect([0, 1, 2].plus([3, 4])).toStrictEqual([0, 1, 2, 3, 4])
        expect(langs.plus([{ language: 'Kotlin', creator: 'JetBrains' }])).toStrictEqual(moreLangs)
    })

    test('Array.minus(a)', () => {
        expect([0, 1, 2, 3, 4].minus([3, 4])).toStrictEqual([0, 1, 2])
        expect(langs.minus([langs[0]])).toStrictEqual([langs[1]])
    })

    test('Array.isEmpty()', () => {
        expect([].isEmpty()).toBe(true)
        expect([0, 2, 4].isEmpty()).toBe(false)
    })

    test('Array.contains(e)', () => {
        expect(langs.contains(langs[0])).toBe(true)
        expect(langs.contains({ language: 'Java', creator: 'Oracle' })).toBe(false)
    })

    test('Array.minOrNull()', () => {
        expect(numbers.minOrNull()).toBe(4)
        expect([].minOrNull()).toBeNull()
    })

    test('Array.maxOrNull()', () => {
        expect(numbers.maxOrNull()).toBe(42)
        expect([].maxOrNull()).toBeNull()
    })

    test('Array.average()', () => {
        expect(numbers.average()).toBe(15.5)
    })

    test('Array.sum()', () => {
        expect(numbers.sum()).toBe(62)
    })

    test('Array.count()', () => {
        expect(numbers.count()).toBe(4)
    })

    test('Array.isNotEmpty()', () => {
        expect([0, 2, 4].isNotEmpty()).toBe(true)
        expect([].isNotEmpty()).toBe(false)
    })

    test('Array.clear()', () => {
        langs.clear()
        expect(langs).toHaveLength(0)
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