import { describe, it, expect } from 'vitest'

const add = (a, b) => a + b

describe('add', () => {
    it('adds two numbers', () => {
        expect(add(2, 3)).toBe(5)
    })
})