function insertMoodData(u_id,e_value,h_value,c_value,
                          s_value,str_value,f_value){
  var data_id;
  var d = new Date();
  var n = d.toISOString();
  data_id = mood_data.insert({
    user_id: u_id,
    input_time: ISODate(n),
    excited_value: e_value,
    happy_value: h_value,
    content_value: c_value,
    sad_value: s_value,
    stressed_value: str_value,
    frustrated_value: f_value
  })
}

function getMoodDataTotal(starttime,endtime){
  var tot_results = mood_data.aggregate([
    {
      $match:{
        input_time: {
          $gte: ISODate(starttime),
          $lt: ISO(endtime)
        }
      }
    },
    {
      $project:{
        excited_sum: {$sum: "$excited_value"},
        happy_sum: {$sum: "$happy_value"},
        content_sum: {$sum: "$content_value"},
        sad_sum: {$sum: "$sad_value"},
        stressed_sum: {$sum: "$stressed_value"},
        frustrated_sum: {$sum: "$frustrated_value"}
      }
    }
    ]);
  return tot_results;
  }

function getPersonalMoodDataTotal(user_id,starttime,endtime){
  var tot_results = mood_data.aggregate([
    {
      $match:{
        user_id: user_id,
        input_time: {
          $gte: ISODate(starttime),
          $lt: ISO(endtime)
        }
      }
    },
    {
      $project:{
        excited_sum: {$sum: "$excited_value"},
        happy_sum: {$sum: "$happy_value"},
        content_sum: {$sum: "$content_value"},
        sad_sum: {$sum: "$sad_value"},
        stressed_sum: {$sum: "$stressed_value"},
        frustrated_sum: {$sum: "$frustrated_value"}
      }
    }
    ]);
  return tot_results;
}

function getLabels(){
  return ["excited","happy","content","sad","stressed","frustrated"];
}

function getMoodValues(starttime,endtime){
  data = getMoodDataTotal(starttime,endtime);
  return [data.excited_sum, data.happy_sum, data.content_sum, data.sad_sum, data.stressed_sum, data.frustrated_sum];
}