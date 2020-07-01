PennController.ResetPrefix(null);

PennController.Sequence( "instructions1", "info1", "practice", "instructions_3", randomize("items"),"send", "end" );

PennController( "instructions1" ,
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("consent button", "weiter")
        .print()
        .wait()
);
PennController( "info1" ,
    newHtml("info", "info2.html")
       .settings.log()
        .print()
    ,
    newButton("info button", "weiter")
        .print()
        .wait( getHtml("info").test.complete())
    ,
    newHtml("consentInfo", "consentInfo.html")
        .settings.log()
        .print()
    ,
    newButton("button2", "weiter")
        .print()
        .wait(getHtml("consentInfo").test.complete()
            .failure( getHtml("consentInfo").warn() ) // wait and display warning message if not all the obligatory fields in the html document are filled
          )
    ,
    getHtml("consentInfo")
        .remove()
    ,
    getButton("button2")
        .remove()

);
PennController("practice",

    
        newText("sentence_p","Eine eint&ouml;nige Situation, die scheinbar ausweglos ist.")
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,

               newText("scale_title_p", "Wie oft hast du das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word_p", "Gef&auml;ngnis")
               .settings.css("font-size", "40px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2_p", "in dieser bestimmten metaphorischen Bedeutung schon mal geh&ouml;rt oder gelesen?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
       newScale("rating_p", 100)
      .settings.slider()
      .settings.center()
                     .settings.size(500)
      .settings.css("padding-top", "30px")
      .settings.before( newText("left", "noch nie") )
      .settings.after( newText("right", " sehr oft") )
      .print()
      .wait()
   ,
        newButton("finish_p", "senden")
            .settings.center()
            .print()
           .wait()

       ,
        getButton("finish_p")
           .remove()
       ,
        getScale("rating_p")
           .remove()
    ,
        getText("scale_title_p")
           .remove()
      ,
           getText("sentence_p")
           .remove()
     ,

               getText("scale_title2_p")
               .remove()
         ,

             getText("word_p")
               .remove()

      ,
        newText("pleasewait2_p", "Warte kurz...")
          .print()
    ,
        newTimer("wait", 1000)
            .start()
            .wait()
   ,
        getText("pleasewait2_p")
           .remove()
 ,

        getScale("rating_p").settings.log("last"),
)
                                          .log( "item" , "practice" )

PennController("instructions_3",
    newText("<p>Das war die &Uuml;bung! Jetzt geht es los mit dem Experiment. </p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newText("<p>als Erinnerung: deine Aufgabe ist es zu einzusch&auml;tzen, wie oft du das fettgedruckte metaphorische Wort in der angegebenen Interpretation schon mal geh&ouml;rt oder gelesen hast.</p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newText("<p>Verstanden? Dann kann es jetzt losgehen! Viel Spa&szlig;!</p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
)


PennController.Template( PennController.GetTable("conventionality2_metob.csv"),
                 variable => PennController("items",
        
        newText("sentence",variable.meaning)
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,
               newText("scale_title", "Wie oft hast du das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word", variable.word)
               .settings.css("font-size", "40px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2", "in dieser bestimmten metaphorischen Bedeutung schon mal geh&ouml;rt oder gelesen?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()

              //.settings.css("padding-left", "100pt")
               .print()
           ,
       newScale("rating", 100)
      .settings.slider()
      .settings.center()
                         .settings.size(500)
      .settings.css("padding-top", "30px")
      .settings.before( newText("left", "noch nie") )
      .settings.after( newText("right", " sehr oft") )
      .print()
      .wait()
   ,
        newButton("finish", "senden")
            .settings.center()
            .print()
           .wait()

       ,
        getButton("finish")
           .remove()
       ,
        getScale("rating")
           .remove()
    ,
        getText("scale_title")
           .remove()
      ,
           getText("sentence")
           .remove()
     ,
          getText("scale_title2")
          .remove()
    ,

        getText("word")
          .remove()
      ,
        newText("pleasewait2", "Warte kurz...")
          .print()
    ,
        newTimer("wait", 1000)
            .start()
            .wait()
   ,
        getText("pleasewait2")
           .remove()
 ,

        getScale("rating").settings.log("last"),
)
                                          .log( "item" , variable.item )



    );
PennController.SendResults( "send" );

    PennController("end",
    newText("Danke f&uuml;r die Teilnahme!")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "200pt")
        .print()
    ,
    newText("Dein Clickworker code ist: 6794")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "180pt")
        .print()
    ,
    newButton("void")
        .wait()
);
