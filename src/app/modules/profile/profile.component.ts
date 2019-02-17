import {Component, OnInit} from '@angular/core';
import {Profile} from "../../model/profile";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'lazuly-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    private profile:Profile;

    private form:Profile;

    private editSummary:boolean;
    private editBasic:boolean;
    private editContact:boolean;

    constructor(private service:ProfileService) {}

    ngOnInit() {
      this.form = new Profile();
      this.service.get().subscribe((profile) => {
        this.profile = profile;
        this.copyProfile(this.profile, this.form);
      });
    }

    private copyProfile(origin:Profile, target:Profile):void {
      target.last_name = origin.last_name;
      target.first_name = origin.first_name;
      target.job_title = origin.job_title;
      target.image = origin.image;
      target.summary = origin.summary;
      target.bird_date = origin.bird_date;
      target.phone = origin.phone;
      target.contact_email = origin.contact_email;
      target.facebook = origin.facebook;
      target.skype = origin.skype;
      target.twitter = origin.twitter;
      target.address = origin.address;
    }

    private copySummary(origin:Profile, target:Profile):void {
      target.summary = origin.summary;
    }

    private copyBasic(origin:Profile, target:Profile):void {
      target.last_name = origin.last_name;
      target.first_name = origin.first_name;
      target.job_title = origin.job_title;
      target.bird_date = origin.bird_date;
    }

    private copyContact(origin:Profile, target:Profile):void {
      target.phone = origin.phone;
      target.contact_email = origin.contact_email;
      target.facebook = origin.facebook;
      target.skype = origin.skype;
      target.twitter = origin.twitter;
      target.address = origin.address;
    }

    change(target:string):void {
      console.log(`Change ${target}`);
      this[`copy${target}`](this.form, this.profile);
      this[`edit${target}`] = false;
      this.service.change(this.profile).subscribe((profile) => {
        this.profile = profile;
        this.copyProfile(this.profile, this.form);
      })
    }

    cancel(target:string):void {
      console.log(`Cancel ${target}`);
      this[`copy${target}`](this.profile, this.form);
      this[`edit${target}`] = false;
    }

}
