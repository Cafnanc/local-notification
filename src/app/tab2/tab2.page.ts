import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private speechRecognition: SpeechRecognition) { }

  ngOnInit() {
    console.log("ng")
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))
    this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: Array<string>) => console.log(languages),
        (error) => console.log(error)
      )
  }

  onStartClick() {
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => console.log(matches),
        (onerror: Error) => console.log('error:', onerror)
      )
  }
  onStopClick() {
    this.speechRecognition.stopListening()
  }
}
