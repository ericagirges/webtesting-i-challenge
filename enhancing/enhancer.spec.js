const { test, expect, describe } = require('@jest/globals');
const { success, fail, repair, get } = require('./enhancer.js');
// test away!

describe("enhancer.js", () => {
    // testing item repair functionality
    describe("repair()", () => {
        test("should restore item durability to 100", () => {
            const blueIronShield = {
                name: "Blue Iron Shield",
                enhancement: 18,
                durability: 78    
            }
            expect(repair(blueIronShield).durability).toBe(100);
        })
    })
    // testing item success functionality
    describe("success()", () => {
        test("should increase enhancement by 1", () => {
            const cardBoardSword = {
                name: "Cardboard Sword",
                enhancement: 17,
                durability: 32    
            }
            expect(success(cardBoardSword).enhancement).toBe(18);

            const sturdyBow = {
                name: "Sturdy Bow",
                enhancement: 19,
                durability: 80    
            }
            expect(success(sturdyBow).enhancement).toBe(20);
        })

        test("should not increase enhancement past 20", () => {
            const silverMace = {
                name: "Silver Mace",
                enhancement: 20,
                durability: 98    
            }
            expect(success(silverMace).enhancement).toBe(20);

            const beggarsSword = {
                name: "Beggar's Sword",
                enhancement: 20,
                durability: 80    
            }
            expect(success(beggarsSword).enhancement).toBe(20);
        })
    })

     // testing item fail functionality
    describe("fail()", () =>  {
        test("should decrease durability by 5", () => {
            const bronzeArmor = {
                name: "Bronze Armor",
                enhancement: 14,
                durability: 50    
            }
            expect(fail(bronzeArmor).durability).toBe(45);

            const silverMace = {
                name: "Silver Mace",
                enhancement: 12,
                durability: 98    
            }
            expect(fail(silverMace).durability).toBe(93);
        })

        test("should decrease durability by 10", () => {
            const beggarsSword = {
                name: "Beggar's Sword",
                enhancement: 17,
                durability: 80    
            }
            expect(fail(beggarsSword).durability).toBe(70);
        })

        test("should decrease enhancement by 1", () => {
            const sturdyBow = {
                name: "Sturdy Bow",
                enhancement: 17,
                durability: 80    
            }
            expect(fail(sturdyBow).enhancement).toBe(16);

            const beggarsSword = {
                name: "Beggar's Sword",
                enhancement: 19,
                durability: 80    
            }
            expect(fail(beggarsSword).enhancement).toBe(18);
        })

    })
});

