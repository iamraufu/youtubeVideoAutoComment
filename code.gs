function myFunction(video, youtubechannelid, comments) {
    resource = {
     snippet: {
       channelId: youtubechannelid,
       videoId: video,
       topLevelComment: {
         snippet: {
           textOriginal: comments
         }
       }
     }
   };
   YouTube.CommentThreads.insert(resource,"snippet");
 }
 
 myFunction("bal9_NF-V0Y","UCa8ZsyZCvPH2Heut7ccP6Sw","Appscripts auto comments test")
 