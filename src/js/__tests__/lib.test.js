import {sumBonus} from "../lib.js";

test ("Should calculate sum bonus", ()=>{
   const sales = [12000, 8000, 10000, 15000, 2000];
   const expected = 1350;

   const result = sumBonus(sales);

    expect(result).toBe(expected);
});