        let correctieArray = [];
        // werkt goed met fps.js. scale=1; 

               function maakCorrectieArray() {
            correctieArray = [
                { x: 2.5, y: 0, z: 3 }, /* 0    +x is naar rechts.*/
                { x: 0, y: 0, z: 5 },
                { x: - 0, y: 0, z: 0 },
                { x: - 0, y: 3, z: 1 },
                { x: 0, y: 0, z: 3 },
                { x: 0, y: -4, z: 5 }, /* 5 */
                { x: - 0, y: 0, z: 1.6 },
                { x: - 0, y: 0, z: 7 },
                { x: 0, y: 4, z: 3 },
                { x: 0, y: 0, z: 2 },
                { x: - 0, y: 0, z: 0 }, /* 10 */
                { x: - 0, y: 0, z: 7 },
                { x: 0, y: 3, z: - 0 },
                { x: 2, y: 0, z: 3 },
                { x: - 0, y: 0, z: 0 },
                { x: - 0, y: 0, z: - 0 }, /* 15 */
                { x: 0, y: 0, z: - 0 },
                { x: 0, y: 2, z: 0 },
                { x: - 0, y: 0, z: 4 },
                { x: - 0, y: 0, z: 7 },
                { x: 0, y: 5, z: - 0 },  /* 20 */
                { x: 0, y: 3, z: 7 },
                { x: 12, y: 0, z: 3 },
                { x: 10, y: 7, z: 5 },  // y =  7
            ];
        }
        
        export {maakCorrectieArray , correctieArray} ;  