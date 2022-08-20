import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { httpOptionsWithAuthToken } from './http-options-with-auth-token';
import { Group, Request } from './types';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private auth: AngularFireAuth) {}

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('/api/groups');
  }

  getGroupsForUser(): Observable<Group[]> {
    return new Observable<Group[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .get<Group[]>(
                `/api/users/${user.uid}/groups`,
                httpOptionsWithAuthToken(token)
              )
              .subscribe((groups) => observer.next(groups));
          }
        });
      });
    });
  }

  requestToJoinGroup(groupId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .post(
                `/api/groups/${groupId}/groups`,
                {},
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          }
        });
      });
    });
  }

  createGroup(name: string): Observable<string> {
    return new Observable<string>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .post<string>(
                '/api/groups',
                { name },
                httpOptionsWithAuthToken(token)
              )
              .subscribe((newGroupId) => observer.next(newGroupId));
          }
        });
      });
    });
  }

  getGroupById(groupId: string): Observable<Group | null> {
    return new Observable<Group | null>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .get<Group | null>(
                `/api/groups/${groupId}`,
                httpOptionsWithAuthToken(token)
              )
              .subscribe((group) => observer.next(group));
          }
        });
      });
    });
  }

  addMessage(text: string, groupId: string): Observable<Group> {
    return new Observable<Group>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .post<Group>(
                `/api/groups/${groupId}/messages/`,
                { text },
                httpOptionsWithAuthToken(token)
              )
              .subscribe((updatedGroup) => observer.next(updatedGroup));
          }
        });
      });
    });
  }

  rejectRequest(requestId: string): Observable<Request[]> {
    return new Observable<Request[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .post<Request[]>(
                `/api/requests/${requestId}/reject`,
                {},
                httpOptionsWithAuthToken(token)
              )
              .subscribe((updatedRequest) => observer.next(updatedRequest));
          }
        });
      });
    });
  }

  acceptRequest(requestId: string): Observable<Request[]> {
    return new Observable<Request[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user?.getIdToken().then((token) => {
          if (token) {
            this.http
              .post<Request[]>(
                `/api/requests/${requestId}/accept`,
                {},
                httpOptionsWithAuthToken(token)
              )
              .subscribe((updatedRequest) => observer.next(updatedRequest));
          }
        });
      });
    });
  }
}
