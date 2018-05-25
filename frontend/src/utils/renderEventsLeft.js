export default (eventLeft) => {

    let timeslots = [];

    for(let i=0; i < 600; i++){
        timeslots[i] = [];
    }

    for(let j = 0; j < eventLeft.length; j++){

        for(let i=eventLeft[j].start; i < eventLeft[j].start + eventLeft[j].duration; i++ ){
            timeslots[i].push(eventLeft[j]);
        }

    }


    for(let t = 0; t < 600; t++){
        let countTimes = timeslots[t].length;

        if (countTimes > 0) {

            for(let n=0; n < countTimes; n++){


                if(countTimes > 1){
                    timeslots[t][n].width = countTimes;
                    if(n === countTimes - 1){
                        timeslots[t][n].left = 50;
                    }

                }

            }

        }

    }

    return eventLeft;

};