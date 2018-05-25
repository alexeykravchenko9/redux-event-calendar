export default (allEvents) => {


            // 1080 Summary time of eventtable
            let timeslots = [];

            for(let i=0; i < 1080; i++){
                timeslots[i] = [];
            }

            for(let j = 0; j < allEvents.length; j++){

                for(let i=allEvents[j].start; i < allEvents[j].start + allEvents[j].duration; i++ ){
                    timeslots[i].push(allEvents[j]);
                }

            }


            for(let t = 0; t < 1080; t++){
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

    return allEvents;

};