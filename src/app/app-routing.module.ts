import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ListProviderComponent} from './provider/list-provider/list-provider.component';
import {DetailsUserComponent} from './users/details-user/details-user.component';
import {ListUserComponent} from './users/list-user/list-user.component';

const routes: Routes = [
    {
        path: 'userList',
        component: ListUserComponent
    },
    {
        path: 'providerList',
        component: ListProviderComponent
    },
    {
        path: 'userDetails/:id',
        component: DetailsUserComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }, {
        path: '',
        redirectTo: '/userList',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
