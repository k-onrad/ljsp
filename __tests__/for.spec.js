import { ljsp, e } from './setup'

test('evaluate for expression', () => {
  expect(ljsp.evaluate(e`
    (for (var x 0)  
         (< x 10)
         (++ x)
         x)
  `)).toEqual(10)
})

test('evaluate for expression w/ dec', () => {
  expect(ljsp.evaluate(e`
    (for (var x 10)  
         (> x 0)
         (-- x)
         x)
  `)).toEqual(0)
})
