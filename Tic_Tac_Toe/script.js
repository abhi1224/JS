        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],  
            [2, 4, 6],
        ];
        const resetBtn = document.querySelector(".btn")
        const boxes = document.querySelectorAll('.box')
        const winnerText = document.querySelector('.winner')
        let turn0 = true

        boxes.forEach((box) => {
            box.addEventListener('click' ,() => {
                if(turn0){
                    box.innerText = '0'
                    turn0 = false
                }
                else{
                    box.innerText = 'X'
                    turn0 = true
                }
                box.disabled = true
                checkWinner();
            });
            
        });
        
        const checkWinner = () => {
            for(let pattern of winningPattern){  
                // console.log(pattern[0], pattern[1], pattern[2]);
                // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
                              
                let posVal1 = boxes[pattern[0]].innerText;
                let posVal2 = boxes[pattern[1]].innerText;
                let posVal3 = boxes[pattern[2]].innerText;

                if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
                    if(posVal1 === posVal2 && posVal2 === posVal3){
                        winnerText.innerText = 'Winner is :' + posVal1
                        for(box of boxes){
                            box.disabled = true
                        }
                    }                   
                }
            }
        };

        resetBtn.addEventListener('click',() => {
            console.log("key pressed");
            for(box of boxes){
                box.innerText = ''
                winnerText.innerText = ''
                box.disabled = false
            }
        })
