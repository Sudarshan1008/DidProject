
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title,Meta} from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_7m05kjr', 'template_5lorb6k', e.target as HTMLFormElement, 'xEV9kZP0GR3PJOFrU')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  }
  title = 'Contact For D!D Interior Design';
  constructor( 
    public router: Router,
    private titleService: Title,
    private meta: Meta
    ) {}
  ngOnInit(){
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'this.page.meta_keyworda'});
    this.meta.addTag({name: 'description', content: ' Gyanika Interior Design on  www.gyanikainfra.co.in '});
    this.meta.addTag({name: 'author', content: 'rsgitech'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }
}

