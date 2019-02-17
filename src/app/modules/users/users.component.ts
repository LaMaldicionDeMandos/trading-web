import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../users.service";
import {User} from "../../model/user";
import {AuthService} from "../../auth.service";
import {Role} from "../../model/role";
import _ from "lodash";
import swal from "sweetalert2";

@Component({
    selector: 'lazuly-users',
  styleUrls: ['./users.component.scss'],
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

    users:User[];
    roles:Role[];

    // New USer form
    newUser:User = new User();
    selectedRole:Role;

    constructor(private userService:UsersService, private authService:AuthService) {

    }

    ngOnInit() {
      this.authService.getRolesBo().subscribe((roles) => {
        this.roles = roles;
        this.userService.getUsers()
          .map((users:User[]) => users.filter((user:User) => _.some(roles, (role) => this.hasRole(user, role))))
          .subscribe((users) => this.users = users);
      });
    }

    private hasRole(user, role):boolean {
      return _.some(user.roles, (r) => r.code == role.code);
    }

    private removeRoleFrom(user, role) {
      _.remove(user.roles, (r) => r.code === role.code);
    }

    removeUser(user:User) {
      console.log(`Removing user ${user.email}`);
      swal({
        text: "Estás por elininar un usuario, realmente queres eliminarlo?",
        confirmButtonText: 'si, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-secondary',
        showCancelButton: true,
        buttonsStyling: false,
        type: 'warning'
      }).then((result) => {
       return null;
      });
    }

    removeRole(role:Role, user:User) {
      this.removeRoleFrom(user, role);
      this.userService.changeUser(user).subscribe(() => console.log('success'), () =>
        swal({
          html: "<span style='color:#ffffff'>Ops, parece que no pudimos eliminar el rol de este usuario, por favor intenta mas tarde.</span>",
          background: '#ff6b68',
          position: 'top',
          toast: true,
          timer: 2500,
          showConfirmButton: false
        }));
    }

    addRole(role:Role, user:User) {
      user.roles.push(role);
      this.userService.changeUser(user).subscribe(() => console.log('success'), () =>
        swal({
          html: "<span style='color:#ffffff'>Ops, parece que no pudimos agregar el rol de este usuario, por favor intenta mas tarde.</span>",
          background: '#ff6b68',
          position: 'top',
          toast: true,
          timer: 2500,
          showConfirmButton: false
        }));
    }

    addUser(modal) {
      modal.hide();
      console.log(`New User ${JSON.stringify(this.newUser)} con su role ${JSON.stringify(this.selectedRole)}`);
      this.newUser.roles = [this.selectedRole];
      this.userService.addUser(this.newUser).subscribe(
        (user) => {
          this.users.push(this.newUser);
          this.newUser = new User();
        },
        (err) => swal({
          html: "<span style='color:#ffffff'>Ops, parece que no pudimos agregar este usuario, por favor intenta mas tarde.</span>",
          background: '#ff6b68',
          position: 'top',
          toast: true,
          timer: 2500,
          showConfirmButton: false
        }));
    }

}
