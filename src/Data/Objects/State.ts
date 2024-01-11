import { IUser } from "../Interfaces/User";

export enum Pages {
  LOGIN = "LOGIN",
  HOME = "HOME", 
}

export class State {  
  constructor() {
    this.User = new UserState();
    this.Navigation = new NavigationState();
  }
  User: UserState;
  Navigation: NavigationState;
}

export class UserState {
  token: string | undefined;
  currentUser: IUser | undefined;
}

export class NavigationState {
  currentPage: Pages | undefined;
}