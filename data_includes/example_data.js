PennController.ResetPrefix(null);
PennController.DebugOff()
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
        newText("context_p","Paula arbeitet als Verk&auml;uferin in einem Einkaufszentrum. Seit Anfang Dezember muss sie wegen der Weihnachtszeit viele &Uuml;berstunden machen. Sie hat das Gef&uuml;hl, nur noch f&uuml;r ihren Job zu leben und wird langsam frustriert. Sie vermisst ihren fr&uuml;heren Alltag.")
            .settings.css("font-size", "30px")
            .settings.center()
            .print()

   ,
        newKey(" ")
           .wait()
    ,
        newText("sentence_p","Paula verbringt ihre Tage in einem Gef&auml;ngnis und f&uuml;rchtet, dass ihr Job sie in den Wahnsinn treibt.")
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,

               newText("scale_title_p", "Was bedeutet das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word_p", "Gef&auml;ngnis")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2_p", "in diesem Kontext?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
         ,
                   newTextInput("answer_p")
                  .settings.center()
                  .print()
                  .settings.log()

        ,
        newButton("finish_p", "senden")
            .settings.center()
            .print()
        .wait(getTextInput("answer_p").testNot.text(" ") )

       ,
        getButton("finish_p")
           .remove()
           ,
                 getTextInput("answer_p")
                    .remove()
           ,

        getText("scale_title_p")
           .remove()
      ,
           getText("sentence_p")
           .remove()
     ,
           getText("context_p")
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

)
                                          .log( "item" , "practice" )

PennController("instructions_3",
    newText("<p>Das war die &Uuml;bung! Hier w&auml;re die richtige Antwort in etwa 'Ort, der die Freiheit einschr&auml;nkt' gewesen (oder &Auml;hnliches). Jetzt geht es los mit dem Experiment. </p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newText("<p>als Erinnerung: deine Aufgabe ist es anzugeben, in so wenigen W&ouml;rtern wie m&ouml;glich, was das fettgedruckte Wort in dem jeweiligen Kontext bedeutet.</p>")
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


PennController.Template( PennController.GetTable("items_metob_conven.csv"),
                 variable => PennController("items",
        newText("context",variable.context)
            .settings.css("font-size", "30px")
            .settings.center()
            .print()

   ,
        newKey(" ")
           .wait()
    ,
        newText("sentence",variable.sentence)
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,
               newText("scale_title", "Was bedeutet das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word", variable.word)
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2", "in diesem Kontext?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
       ,
           newTextInput("answer")
          .settings.center()
          .print()
          .settings.log()


      ,
        newButton("finish", "senden")
            .settings.center()
            .print()
        .wait(getTextInput("answer").testNot.text(" ") )

       ,
        getButton("finish")
           .remove()
       ,
             getTextInput("answer")
                .remove()
       ,
        getText("scale_title")
           .remove()
      ,
           getText("sentence")
           .remove()
     ,
           getText("context")
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
